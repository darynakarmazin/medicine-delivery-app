import { useDispatch, useSelector } from "react-redux";
import {
  Favoritebutton,
  Img,
  MedicineCard,
  Wrapper,
} from "./MedicineItem.styled";
import { selectCartMedicines, selectFavorites } from "../../redux/selectors";
import { addToCart, removeFromCart } from "../../redux/cart/cartSlice";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../redux/favorite/favoriteSlice";
import iconAdd from "./../../img/heart-yes.svg";
import iconRemove from "./../../img/heart-no.svg";

function MedicineItem({ medicine }) {
  const dispatch = useDispatch();
  const cartMedicines = useSelector(selectCartMedicines);
  const favorites = useSelector(selectFavorites);

  const toggleToCart = () => {
    const isInCart = cartMedicines.some((item) => item._id === medicine._id);

    if (isInCart) {
      dispatch(removeFromCart(medicine));
    } else {
      dispatch(addToCart(medicine));
    }
  };

  const toggleFavorite = () => {
    const isFavorite = favorites.some(
      (favorite) => favorite._id === medicine._id
    );

    if (isFavorite) {
      dispatch(removeFromFavorites(medicine));
    } else {
      dispatch(addToFavorites(medicine));
    }
  };

  return (
    <MedicineCard>
      <Favoritebutton onClick={toggleFavorite}>
        {favorites.some((favorite) => favorite._id === medicine._id) ? (
          <img src={iconAdd} alt="icon add" />
        ) : (
          <img src={iconRemove} alt="icon remove" />
        )}
      </Favoritebutton>
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
