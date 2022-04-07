import { observer } from 'mobx-react-lite';
import React from 'react';
import Appbar from "./components/AppBar"
import TokenGrid from './components/TokenGrid';

const App = observer(() => {


  return <>
    <Appbar />
    <TokenGrid />
  </>
})

export default App;
