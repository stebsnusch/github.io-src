import React, { useState } from 'react';
import { AppBar, Toolbar, Drawer, IconButton, List, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { renderMenu } from './renderMenu';
import { MENU_ITEMS } from './constants';

export const NavigationBar = () => {

  const [open, setOpen] = useState(false);

  const toggleDrawer = () => setOpen(!open);

  return (
    <AppBar color="transparent" elevation={0}>
      <Toolbar>
        <IconButton
          onClick={toggleDrawer}
          edge="start"
          aria-label="menu"
          color="primary"
        >
          <MenuIcon />
        </IconButton>
        <Drawer open={open} onClose={toggleDrawer}>
          <List>
            {MENU_ITEMS.map(renderMenu)}
          </List>
        </Drawer>
        <Typography variant="h6" color="primary">
          Menu
        </Typography>
      </Toolbar>
    </AppBar>
  )
};

