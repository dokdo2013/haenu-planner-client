import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import AppsIcon from '@mui/icons-material/Apps';
import DateRangeIcon from '@mui/icons-material/DateRange';
import SettingsIcon from '@mui/icons-material/Settings';

const BottomNav = () => {
  const pathName = window.location.pathname;
  const [value, setValue] = useState(pathName);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  return (
    <Box sx={{ width: 500 }}>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          // showLabels
          value={value}
          onChange={handleChange}
        >
          <BottomNavigationAction component={Link} to="/app" value="/app" label="홈" icon={<HomeIcon />} />
          <BottomNavigationAction component={Link} to="/app/timetable" value="/app/timetable" label="시간표" icon={<AppsIcon />} />
          <BottomNavigationAction component={Link} to="/app/calendar" value="/app/calendar" label="캘린더" icon={<DateRangeIcon />} />
          <BottomNavigationAction component={Link} to="/app/setting" value="/app/setting" label="설정" icon={<SettingsIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  )
}

export default BottomNav;