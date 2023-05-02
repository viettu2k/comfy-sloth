import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Navbar, Sidebar, Footer, Loading } from './components';
import { PrivateRoute, AuthWrapper } from './pages';

const Home = lazy(() => import('./pages/HomePage'));
const SingleProduct = lazy(() => import('./pages/SingleProductPage'));
const Cart = lazy(() => import('./pages/CartPage'));
const Checkout = lazy(() => import('./pages/CheckoutPage'));
const Error = lazy(() => import('./pages/ErrorPage'));
const About = lazy(() => import('./pages/AboutPage'));
const Products = lazy(() => import('./pages/ProductsPage'));

const App = () => (
  <AuthWrapper>
    <Router>
      <Navbar />
      <Sidebar />
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/cart'>
            <Cart />
          </Route>
          <Route exact path='/products'>
            <Products />
          </Route>
          <Route exact path='/products/:id' children={<SingleProduct />} />
          <PrivateRoute exact path='/checkout'>
            <Checkout />
          </PrivateRoute>
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
      </Suspense>
      <Footer />
    </Router>
  </AuthWrapper>
);

export default App;
