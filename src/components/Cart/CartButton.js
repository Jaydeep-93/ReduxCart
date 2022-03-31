import classes from './CartButton.module.css';
import { uiActions } from './../../store/ui-slice';
import { useDispatch, useSelector } from 'react-redux'

const CartButton = (props) => {
  const dispatch = useDispatch()

  const toggleCartHandler= () => {
    dispatch(uiActions.toggle())  
  }

  const itemCount = useSelector(state => state.cart.totalQuantity)

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{itemCount}</span>
    </button>
  );
};

export default CartButton;
