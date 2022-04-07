import { Box } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React from 'react';
import Appbar from "./components/AppBar"
import TokenGrid from './components/TokenGrid';

const App = observer(() => {


  return <Box display="flex" height="100vh" flexDirection="column">
    <Appbar />
    <TokenGrid />
  </Box>
})

export default App;
