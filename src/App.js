import './Style/App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import Landing from './Pages/Landing.js';
import Login from './Pages/User/Login.js';
import Register from './Pages/User/Register.js';
import AppHome from './Pages/App/Home.js';
import AppTimetable from './Pages/App/Timetable.js';
import AppCalendar from './Pages/App/Calendar.js';
import AppSetting from './Pages/App/Setting.js';
import MypageHome from './Pages/Mypage/Home.js';
import MypageProfile from './Pages/Mypage/Profile.js';
import MypageAlert from './Pages/Mypage/Alert.js';
import SupportHome from './Pages/Support/Home.js';
import SupportNotice from './Pages/Support/Notice.js';
import SupportNoticeView from './Pages/Support/NoticeView.js';
import SupportFaq from './Pages/Support/Faq.js';
import SupportQna from './Pages/Support/Qna.js';
import SupportQnaWrite from './Pages/Support/QnaWrite.js';
import SupportQnaView from './Pages/Support/QnaView.js';

function App() {
  return (
    <div className="app">
      <Route path="/" exact={true} component={Landing} />
      <Route path="/login" exact={true} component={Login} />
      <Route path="/register" exact={true} component={Register} />
      <Route path="/app" exact={true} component={AppHome} />
      <Route path="/app/timetable" exact={true} component={AppTimetable} />
      <Route path="/app/calendar" exact={true} component={AppCalendar} />
      <Route path="/app/setting" exact={true} component={AppSetting} />
      <Route path="/mypage" exact={true} component={MypageHome} />
      <Route path="/mypage/profile" exact={true} component={MypageProfile} />
      <Route path="/mypage/alert" exact={true} component={MypageAlert} />
      <Route path="/support" exact={true} component={SupportHome} />
      <Route path="/support/notice" exact={true} component={SupportNotice} />
      <Route path="/support/notice/:article" exact={true} component={SupportNoticeView} />
      <Route path="/support/faq" exact={true} component={SupportFaq} />
      <Route path="/support/qna" exact={true} component={SupportQna} />
      <Route path="/support/qna/write" exact={true} component={SupportQnaWrite} />
      <Route path="/support/qna/:qid" exact={true} component={SupportQnaView} />
    </div>
  );
}

export default App;
