import { AppBar, Toolbar, Typography, Button, Avatar, Chip, Box } from '@mui/material'
import { observer } from 'mobx-react-lite'
import account from '../store/Account'

const Appbar: React.FC = observer(() => {
	return (
		<AppBar position='static'>
			<Toolbar>
				<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
					NFTs
				</Typography>
				{account.isLoggedIn ? (
					<Box display={'flex'} gap={2} alignItems='center'>
						<Chip variant='filled' label={account.shortAddress} color='info' />
						<Avatar alt='avatar' />
					</Box>
				) : (
					<Button color='inherit' onClick={account.connectAccounts}>
						Login
					</Button>
				)}
			</Toolbar>
		</AppBar>
	)
})

export default Appbar
