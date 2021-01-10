import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import GlobalStyle from './Components/GlobalStyles';
import Header from './Components/Header';
import Products from './Components/Products';
import Product from './Components/Product';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Products} />
          <Route path="/produto/:id" component={Product} />
          <Route path="/contato" component={Contact} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
