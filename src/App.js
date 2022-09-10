import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Carousel from './components/Carousel/Carousel';

function App() {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">            
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/auth" exact component={Auth} /> */}
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
