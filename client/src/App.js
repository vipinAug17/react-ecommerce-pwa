import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Header from './components/header/header.component';
import MobileHeader from './components/mobile-header/mobile-header.component';
import MobileMenu from './components/mobile-menu/mobile-menu.component';
import MenuPopup from './components/menu-popup/menu-popup.component';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import './stylesheets/global.styles.scss';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const ProductPage = lazy(() => import('./pages/product/product.component'));
const SignInAndSignUpPage = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));
const Profile = lazy(() => import('./pages/profile/profile.component'));
const Wishlist = lazy(() => import('./pages/wishlist/wishlist.component'));
const SuccessOrder = lazy(() => import('./pages/success-order/success-order.component'));


const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <main className="app-container">

      {/*
      <MobileHeader />
      <Header />  
    */}
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/product/:productId' component={ProductPage} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route exact path='/wishlist' component={Wishlist} />
            <Route exact path='/SuccessOrder' component={SuccessOrder} />
            <Route exact path='/profile'
              render={() =>
                currentUser ?
                  <Profile /> : <Redirect to='/signin' />
              }
            />
            <Route
              exact
              path='/signin'
              render={() =>
                currentUser ?
                  <Redirect to='/' /> : <SignInAndSignUpPage />
              }
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
      {/*
        <MenuPopup />
        <MobileMenu />
      */}
    </main>
  );
}


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);