interface Window {
	ethereum?: any
}

type NFT = {
	token_id?: string
	external_data?: {
		name?: string
		description?: string
		image?: string
	}
}

type Token = {
	contract_decimals: string | number
	contract_name: string
	contract_ticker_symbol: string
	contract_address: string
	supports_erc?: string[]
	logo_url: string
	last_transferred_at: string
	type: string
	balance: string
	balance_24h: string
	quote_rate: string | number
	quote_rate_24h: string | number
	quote: string | number
	quote_24h: string | number
	nft_data?: NFT[]
}

type DisplayedNFT = {
	contract_address: string
	token_id: string
	name: string
	description: string
	image: string
}
