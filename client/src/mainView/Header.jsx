import { AppBar, Toolbar } from "@material-ui/core";
import React from 'react';
import SlopesTable from "./SlopesTable";

const Header = () => {
  
  return (
    <header className="App-header">
      <AppBar>
        <Toolbar> Powder Snobs </Toolbar> 
      </AppBar>
      <div style={{marginTop: "75px"}}>
        <SlopesTable /> 
      </div>
    </header>
  );
}

export default Header;