import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from "./components/home/home";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Results from "./components/results/results";



const App = () => (
<Router>
  <Navbar />
    <Switch>
    <Route path='' component={Home}/>
      <Route path='/home' component={Home}/>
      <Route path='/results' component={Results}/>
    </Switch>
    <Footer />
</Router>
  );

export default App;