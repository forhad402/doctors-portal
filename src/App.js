import React from 'react';
import logo from './logo.svg';
import './App.css';
import Appointment from './components/Appoinment/Appointment';
import Dashboard from './components/Dashboard/Dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AppointmentsFilter from './components/AppointmentsFilter/AppointmentsFilter';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';



function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route exact path="/">
          <Header></Header>
          <Banner></Banner>
        </Route>
        <Route path="/dashboard">
        <Header></Header>
        <Dashboard></Dashboard>
        </Route>
      <Route path="/getAppointment">
        <Header></Header>
      <Appointment></Appointment>
      </Route>
      <Route path="/appointmentsFilter">
      <Header></Header>
        <AppointmentsFilter></AppointmentsFilter>
      </Route>
    
      </Switch>
      </Router>
      
    </div>
  );
}

export default App;
