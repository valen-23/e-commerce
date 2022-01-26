import {
  Container,
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./style.css";

const NavBar = ({ cartItems, totalCost }) => {
  const location = useLocation();

  return (
    <>
      <AppBar position="fixed" className="custom-navbar">
        <Container>
          <Toolbar>
            <Typography
              component={Link}
              to="/"
              variant="h6"
              className="custom-title"
            >
              <img src={logo} alt="logo" className="logo" />
            </Typography>

            <nav>
              <Link to="/" className="nav_a">
                INICIO 🏠
              </Link>
              <Link to="/productos" className="nav_a">
                PRODUCTOS 🥼
              </Link>
              <Link to="/" className="nav_a">
                ENCONTRANOS 🚩
              </Link>
            </nav>

            {location.pathname === "/cart" ? (
              <div className="cart-wrapper">
                <h2>
                  Precio Total: <strong>{totalCost}</strong>
                </h2>
              </div>
            ) : (
              <div className="cart-wrapper">
                <IconButton
                  component={Link}
                  to="/cart"
                  aria-label="Show cart contents"
                  color="inherit"
                >
                  <Badge badgeContent={cartItems} color="error">
                    <ShoppingBagOutlinedIcon className="custom-cart" />
                  </Badge>
                </IconButton>
              </div>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default NavBar;
