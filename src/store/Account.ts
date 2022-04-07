import { makeAutoObservable, runInAction } from 'mobx'
import { getShortAddress } from '../helpers'

class Account {
	address: null | string = null
	tokens: Token[] = []
	isLoading = false

	constructor() {
		makeAutoObservable(this)

		if (this._isWalletInjected) {
			this.listenToAccountChange()
			this.connectAccounts()
		}
	}

	get _isWalletInjected() {
		return typeof window.ethereum !== 'undefined'
	}

	get isLoggedIn() {
		return this.address !== null
	}

	get shortAddress() {
		return getShortAddress(this.address)
	}

	get NFTs() {
		const result: DisplayedNFT[] = []

		this.tokens
			.filter(token => token.type === 'nft')
			.forEach(token => {
				const { contract_address, nft_data } = token

				;(nft_data || []).forEach(nft => {
					const { token_id = '', external_data: { name = '', description = '', image = '' } = {} } = nft

					result.push({
						contract_address,
						token_id: token_id || 'failed_to_get_token_id',
						name: name || 'failed_to_get_name',
						description,
						image,
					})
				})
			})

		return result
	}

	listenToAccountChange = () => window.ethereum.on('accountsChanged', this.loadFirstAccount)

	loadFirstAccount = (addresss: string[]) => {
		runInAction(() => (this.address = addresss[0] || null))
		this.getTokens()
	}

	connectAccounts = async (): Promise<string[]> =>
		this._isWalletInjected &&
		window.ethereum
			.request({ method: 'eth_requestAccounts' })
			.then(this.loadFirstAccount)
			.catch((e: Error) => console.log(e))

	getTokens = () => {
		if (this.isLoggedIn) {
			runInAction(() => (this.isLoading = true))

			fetch(`https://api.covalenthq.com/v1/1/address/${this.address}/balances_v2/?key=ckey_23fadff2a1b04277afa6968c581`)
				.then(resp => resp.json())
				.then(json => runInAction(() => (this.tokens = json.data.items)))
				.catch(console.log)
				.finally(() => {
					runInAction(() => (this.isLoading = false))
				})
		}
	}
}

export default new Account()
