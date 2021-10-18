import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Components/Templates/CommonHeader.js';
import Nav from '../../Components/Templates/BottomNav.js';
import Calendar from '@toast-ui/react-calendar';
import 'tui-calendar/dist/tui-calendar.css';
// If you use the default popups, use this.
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';

const Home = () => {
  return (
    <>
      <Header title="캘린더" show={["alert"]} />
      {/* <div className="appWrapper"> */}
        <Calendar
          height="calc(100vh - 120px)"
          calendars={[
            {
              id: '0',
              name: 'Private',
              bgColor: '#9e5fff',
              borderColor: '#9e5fff'
            },
            {
              id: '1',
              name: 'Company',
              bgColor: '#00a9ff',
              borderColor: '#00a9ff'
            }
          ]}
          disableDblClick={true}
          disableClick={false}
          isReadOnly={false}
          month={{
            startDayOfWeek: 0
          }}
          scheduleView
          taskView
          timezones={[
            {
              timezoneOffset: 540,
              displayLabel: 'GMT+09:00',
              tooltip: 'Seoul'
            },
            {
              timezoneOffset: -420,
              displayLabel: 'GMT-08:00',
              tooltip: 'Los Angeles'
            }
          ]}
          useDetailPopup
          useCreationPopup
          view="month" // You can also set the `defaultView` option.
          week={{
            showTimezoneCollapseButton: true,
            timezonesCollapsed: true
          }}
        />
      {/* </div> */}
      <Nav />
    </>
  )
};

export default Home;