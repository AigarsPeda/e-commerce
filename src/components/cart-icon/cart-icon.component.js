import React from "react";
import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import "./cart-icon.styles.scss";

const CartIcon = state => (
  <div className="cart-icon" onClick={state.toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = state => ({
  toggleCartHidden: () => state(toggleCartHidden())
});

export default connect(
  null,
  mapDispatchToProps
)(CartIcon);
