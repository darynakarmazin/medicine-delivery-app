import { useDispatch, useSelector } from "react-redux";
import { Img, MedicineCard, Wrapper } from "./MedicineItem.styled";
import { selectCartMedicines } from "../../redux/selectors";
import { addToCart, removeFromCart } from "../../redux/cart/cartSlice";

function MedicineItem({ medicine }) {
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

  return (
    <MedicineCard>
      <Img style={{ backgroundImage: `url(${medicine.image})` }}></Img>
      <Wrapper>
        <h3>{medicine.title}</h3>
        <p>{medicine.description}</p>
        <div>
          <p>{medicine.price}</p>
          <button onClick={toggleToCart} type="button">
            {cartMedicines.some((item) => item._id === medicine._id) ? (
              <p>remove</p>
            ) : (
              <p>add to Card</p>
            )}
          </button>
        </div>
      </Wrapper>
    </MedicineCard>
  );
}

export default MedicineItem;
