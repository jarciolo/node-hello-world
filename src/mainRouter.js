import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Footer from './components/Common/Footer'
import DashBoard from './components/DashBoard'
import SideNav from './components/SideNav'
import Table from './components/Table'

const MainRouter = () => (
    <>
        <SideNav/>
        <Switch>
            <Route exact path="/" component={DashBoard}></Route>
            <Route exact path="/dashBoard" component={Table}></Route>
            <Route exact path="/table" component={Table}></Route>
        </Switch>
        <Footer/>
    </>
)

export default MainRouter