import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import Switch from '@mui/material/Switch';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import Header from '../../Components/Templates/CommonHeader.js';
import Nav from '../../Components/Templates/BottomNav.js';

const Home = () => {

  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  return (
    <>
      <Header title="설정" show={[]} />
      <div className="appWrapper">

        <Link className="linkNoStyle" to="/app/setting/info">
          <Card sx={{display: 'flex', padding: '20px 10px', alignItems: 'center'}}>
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
              <Avatar src="https://via.placeholder.com/120" alt="sample" />
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', lineHeight: '12px', paddingLeft: '20px'}}>
              <div style={{display: 'flex', flexDirection: 'column'}}>
                <span style={{fontSize: '18px', fontWeight: 700}}>Name</span><br />
                <span style={{fontSize: '12px', fontWeight: 100}}>내 소개를 등록해주세요.</span>
              </div>
              <div>
                <KeyboardArrowRightOutlinedIcon />
              </div>
            </Box>
          </Card>
        </Link>

        <div className="appInnerWrapper">
          <p className="smallTitle">알림 설정</p>
          <Card className="settingPickerWrapper">
            <CardContent className="settingPicker">
              <div>전체 알림</div>
              <Switch {...label} defaultChecked />
            </CardContent>
            <CardContent className="settingPicker">
              <div>설정 2</div>
              <Switch {...label} />
            </CardContent>
            <CardContent className="settingPicker">
              <div>설정 3</div>
              <Switch {...label} defaultChecked />
            </CardContent>
          </Card>
        </div>

        <div className="appInnerWrapper">
          <p className="smallTitle">알림 설정</p>
          <Card className="settingPickerWrapper">
            <CardContent className="settingPicker">
              <div>전체 알림</div>
              <Switch {...label} defaultChecked />
            </CardContent>
            <CardContent className="settingPicker">
              <div>설정 2</div>
              <Switch {...label} />
            </CardContent>
            <CardContent className="settingPicker">
              <div>설정 3</div>
              <Switch {...label} defaultChecked />
            </CardContent>
          </Card>
        </div>

        <div className="appInnerWrapper">
          <p className="smallTitle">알림 설정</p>
          <Card className="settingPickerWrapper">
            <CardContent className="settingPicker">
              <div>전체 알림</div>
              <Switch {...label} defaultChecked />
            </CardContent>
            <CardContent className="settingPicker">
              <div>설정 2</div>
              <Switch {...label} />
            </CardContent>
            <CardContent className="settingPicker">
              <div>설정 3</div>
              <Switch {...label} defaultChecked />
            </CardContent>
          </Card>
        </div>

        
      </div>
      <Nav />
    </>
  )
};

export default Home;