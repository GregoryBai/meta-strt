import { Card, CardMedia, CardContent, Typography, Box, Chip, CardActions, Link } from '@mui/material'
import { getShortAddress } from '../helpers'

type TokenCardProps = {
	nft: DisplayedNFT
}

const TokenCard: React.FC<TokenCardProps> = ({ nft }) => {
	return (
		<Card sx={{ height: '100%' }}>
			<CardMedia
				component='img'
				height='200'
				image={nft.image || '/fallback.png'}
				alt={nft.description}
				onError={(e: any) => (e.target.src = '/fallback.png')}
			/>

			<CardContent>
				<Typography textAlign='center' gutterBottom variant='h5' component='div'>
					{nft.name}
				</Typography>
				<Box display='flex' alignItems='center' justifyContent='center'>
					<Chip label={nft.token_id} />
				</Box>
			</CardContent>

			<CardActions>
				<Link
					width='100%'
					textAlign='center'
					color='secondary'
					underline='none'
					target='_blank'
					href={`https://etherscan.io/address/${nft.contract_address}`}>
					{getShortAddress(nft.contract_address)}
				</Link>
			</CardActions>
		</Card>
	)
}

export default TokenCard
