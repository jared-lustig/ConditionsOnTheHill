import { AppBar, Toolbar } from "@material-ui/core";
import React from 'react';
import ListSlopes from "./ListSlopes";

const Header = () => {
  
  return (
    <header className="App-header">
      <AppBar>
        <Toolbar> Conditions On The Hill </Toolbar> 
      </AppBar>
      <div style={{marginTop: "75px"}}>
        <ListSlopes /> 
      </div>
    </header>
  );
}

export default Header;