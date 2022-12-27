import { AppBar, Toolbar } from "@material-ui/core";
import React from 'react';
import SlopesTable from "./SlopesTable";

const Header = () => {
  
  return (
    <header className="App-header">
      <AppBar>
        <Toolbar> Conditions On The Hill </Toolbar> 
      </AppBar>
      <div style={{marginTop: "75px"}}>
        <SlopesTable /> 
      </div>
    </header>
  );
}

export default Header;