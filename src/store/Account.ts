import { makeAutoObservable } from 'mobx'

class Account {
	account: null | any

	constructor() {
		makeAutoObservable(this)
	}

	get isLoggedIn() {
		return this.account !== null
	}

	async connect() {
		if (typeof window.ethereum !== 'undefined') {
			try {
				const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
				console.log(accounts)
				this.account = accounts[0]
			} catch (e) {
				// notify error
				console.log(e)
			}
		}
	}
}

export default new Account()
