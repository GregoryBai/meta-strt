import CircularProgress from '@mui/material/CircularProgress'
import Grid from '@mui/material/Grid'
import { observer } from 'mobx-react-lite'
import account from '../store/Account'
import TokenCard from './TokenCard'

const TokenGrid: React.FC = observer(() => {
	return (
		<Grid container marginTop={2} gap={3} justifyContent='space-evenly' alignContent='stretch' flex='1'>
			{account.isLoading ? (
				<Grid item alignSelf='center'>
					<CircularProgress color='primary' />
				</Grid>
			) : (
				account.NFTs.map(nft => {
					return (
						<Grid item xs={2} key={nft.contract_address + nft.token_id}>
							<TokenCard nft={nft} />
						</Grid>
					)
				})
			)}
		</Grid>
	)
})

export default TokenGrid
