import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from '../components/pages/Home';
import Gallery from '../components/pages/Gallery';

export default function () {

   return (
    <Switch>
        <Route path='/' exact component={Home}/> 
        <Route path='/gallery' component={Gallery}/>
    </Switch>)
}