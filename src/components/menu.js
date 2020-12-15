import React from 'react';

import Dialog from '@material-ui/core/Dialog';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { exportAsJSON, importJSON } from '../helpers/helpers';

function Menu(props) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <List>
        <ListItem
          button
          onClick={() => {
            exportAsJSON('download')
            onClose()
          }}
        >
          <ListItemText primary='Export ideas as JSON' />
        </ListItem>

        <ListItem
          button
          onClick={() => {
            importJSON()
            onClose()
          }}
        >
          <ListItemText primary='Import ideas from JSON' />
        </ListItem>

      </List>
    </Dialog>
  );
}

export default Menu;
