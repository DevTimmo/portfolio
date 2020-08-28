import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navigation from './components/navigation/Navigation.jsx';


function App() {
  return (
    
    
      <Router>
        <Navigation />
        {/* <Switch>
          <Route exact path ="/" component={} />
          <Route path="/home" component={} /> 
          <Route path="/playerzone" component={HeaderImage} />
          <Route path="/sportspress" component={SportsPress} />
          <Route path="/media" component={Media} />
          <Route path="/registration" component={Registration} />
          <Route path="/contact" component={Contact} />
        </Switch> */}
      </Router>
    
  );
}

export default App;


//https://www.freecodecamp.org/news/a-guide-to-upgrading-to-react-router-4/
