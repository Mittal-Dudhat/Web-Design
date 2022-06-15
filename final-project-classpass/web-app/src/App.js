import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import { HomePage } from './HomePage/HomePage';
import team from './HomePage/team'
import Login from './Login/Login'
import AboutUs from './pages/AboutUs'
import Faq from './pages/FAQ'
import signup from './Signup/Signup'
import askQuery from './HomePage/AskQuery'
import dashboard from './Dashboard/dashboard'
import AuthComp from './containers/AuthComp'
import RegisterClass from './Dashboard/registerClass'
import Dashfooter from './Dashboard/Dashfooter';
import  Feedback from './pages/Feedback';
import Error from "./pages/Error";
import { NewsContextProvider } from './News-api/NewsContext';

class App extends React.Component{
  render(){
    return (

      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/Login" component={Login}></Route>
            <Route exact path="/team" component={team}></Route>
            <Route exact path="/AboutUs" component={AboutUs}></Route>
            <Route exact path="/Faq" component={Faq}></Route>
            <Route exact path="/signup" component={signup}></Route>
            <Route exact path="/askQuery" component={askQuery}></Route>
            <Route exact path="/newsArticle" component={NewsContextProvider}></Route>
            <Route exact path="/registerClass" component={RegisterClass}></Route>
            <Route exact path="/Feedback" component={Feedback}></Route>
            {/* <Route exact path="" component={Error}></Route> */}
            <AuthComp>
              <Route exact path="/dashboard" component={dashboard}></Route>
            </AuthComp>
          </Switch>
      </BrowserRouter>
   );
  }
}

export default App;
