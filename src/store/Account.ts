import { action, makeAutoObservable, runInAction } from 'mobx'

// ! use arrow functions to lock the context, binding won't cut

class Account {
	address: null | any = null

	constructor() {
		makeAutoObservable(this)

		if (this.isWalletInjected()) {
			this.listenToAccountChange()
			this.connect()
		}
	}

	get isLoggedIn() {
		return this.address !== null
	}

	get shortAddress() {
		return `${this.address.slice(0, 5)}...${this.address.slice(-4)}`
	}

	isWalletInjected = () => typeof window.ethereum !== 'undefined'

	setToFirstAccount = (addresss: string[]) => runInAction(() => (this.address = addresss[0] || null))

	listenToAccountChange = () => window.ethereum.on('addresssChanged', this.setToFirstAccount)

	connect = () =>
		this.isWalletInjected() &&
		window.ethereum
			.request({ method: 'eth_requestAccounts' })
			.then(this.setToFirstAccount)
			.catch((e: Error) => console.log(e))
}

const singleton = new Account()

export default singleton
