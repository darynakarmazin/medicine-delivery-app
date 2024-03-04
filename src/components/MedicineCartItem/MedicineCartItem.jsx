import { useDispatch, useSelector } from "react-redux";
import { Counter, Img, MedicineCard, Wrapper } from "./MedicineCartItem.styled";
import { selectCartMedicines } from "../../redux/selectors";
import {
  addToCart,
  removeFromCart,
  updateQuantity,
} from "../../redux/cart/cartSlice";
import { useState } from "react";

function MedicineCartItem({ medicine }) {
  const [amount, setAmount] = useState(medicine.amount || 1);

  const dispatch = useDispatch();
  const cartMedicines = useSelector(selectCartMedicines);

  const toggleToCart = () => {
    const isInCart = cartMedicines.some((item) => item._id === medicine._id);

    if (isInCart) {
      dispatch(removeFromCart(medicine));
    } else {
      dispatch(addToCart(medicine));
    }
  };

  const handleAmountChange = (event) => {
    const newAmount = parseInt(event.target.value);
    setAmount(newAmount);
    dispatch(updateQuantity({ _id: medicine._id, quantity: newAmount }));
  };

  return (
    <MedicineCard>
      <Img style={{ backgroundImage: `url(${medicine.image})` }}></Img>
      <Wrapper>
        <h3>{medicine.title}</h3>
        <p>{medicine.description}</p>
        <div>
          <p>{medicine.price}</p>
          <Counter>
            <input
              type="number"
              name="amount"
              value={amount}
              onChange={handleAmountChange}
            />
            <button onClick={toggleToCart} type="button">
              {cartMedicines.some((item) => item._id === medicine._id) ? (
                <p>remove</p>
              ) : (
                <p>add to Card</p>
              )}
            </button>
          </Counter>
        </div>
      </Wrapper>
    </MedicineCard>
  );
}

export default MedicineCartItem;
