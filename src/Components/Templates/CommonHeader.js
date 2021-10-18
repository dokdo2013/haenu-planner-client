import React from 'react';
import '../../Style/App.css';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import Badge from '@mui/material/Badge';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}
ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const CommonHeader = ({props, title, show}) => {
  return (
    <>
      <ElevationScroll {...props}>
        <AppBar color="inherit">
          <Toolbar className="appHeader">
            <h1 className="appTitle">{title}</h1>
            {
              (show.indexOf('alert') >= 0) &&
                <div className="appButtons">
                  <Badge badgeContent={1} color="primary">
                    <NotificationsOutlinedIcon />
                  </Badge>
                </div>  
            }
            </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </>
  );
};

export default CommonHeader;