import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { observer } from 'mobx-react-lite'
import account from '../store/Account';

const Appbar: React.FC = observer(() => {
	return (
		<AppBar position='static'>
			<Toolbar>
				<IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }}>
					<MenuIcon />
				</IconButton>
				<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
					Tokens
				</Typography>
				<Button color='inherit' onClick={account.connect}>Login</Button>
			</Toolbar>
		</AppBar>
	)
})

export default Appbar
