import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';
import { MENU_ITEM_STYLES } from './constants';

const preventDefault = (event) => event.preventDefault();

export const renderMenu = (item, index) => (
  <ListItem
    key={index}
    href={item.url}
    onClick={preventDefault}
    button
  >
    <ListItemText primary={item.title} inset primaryTypographyProps={MENU_ITEM_STYLES} />
  </ListItem>
);
