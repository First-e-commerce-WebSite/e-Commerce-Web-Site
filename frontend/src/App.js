import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import Badge from 'react-bootstrap/Badge'
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen ';
import Container from 'react-bootstrap/Container'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Store } from './Store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shippingAddress');

  };

  return (
    <BrowserRouter>
      <div className='d-flex flex-column site-container'>
      <ToastContainer position="bottom-center" limit={1} />
        <header >
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>a_s_Store</Navbar.Brand>
              </LinkContainer>
              <Nav className="me-auto">
                <Link to="/cart" className="nav-link">Cart
                  {
                    cart.cartItems.length > 0 && (
                      <Badge pill bg="danger">
                        {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                      </Badge>
                    )}
                </Link>
                {userInfo ? (
                  <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                    <LinkContainer to="/profile">
                      <NavDropdown.Item>User Profile</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/orderhistory">
                      <NavDropdown.Item>Order History</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Divider />
                    <Link
                      className="dropdown-item"
                      to="#signout"
                      onClick={signoutHandler}
                    >
                      Sign Out
                    </Link>
                  </NavDropdown>
                ) : (
                  <Link className="nav-link" to="/signin">
                    Sign In
                  </Link>
                )}
              </Nav>

            </Container>
          </Navbar>

          {/* <Link to="/">a_s_Store.tn</Link> */}

        </header>
        <main>
          <Container className='mt-3'>
            <Routes>
              <Route path='/product/:slug' element={<ProductScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/signin" element={<SigninScreen />} />
              <Route
                path="/shipping"
                element={<ShippingAddressScreen />}
              ></Route>
              <Route path='/' element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className='text-center'>All Right Reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
