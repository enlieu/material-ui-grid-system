import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';

export default function Header(props) {
  return (
    <AppBar position='static'>
      <ToolBar>AppBar</ToolBar>
    </AppBar>
  );
}
