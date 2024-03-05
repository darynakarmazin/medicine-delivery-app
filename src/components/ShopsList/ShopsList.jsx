import { useSelector } from "react-redux";
import { selectIsLoading, selectShops } from "../../redux/selectors";
import { ShopList } from "./ShopsList.styled";
import ShopItem from "../ShopItem/ShopItem";

function ShopsList() {
  const isLoading = useSelector(selectIsLoading);
  const shops = useSelector(selectShops);
  return (
    <>
      {shops && (
        <ShopList>
          {shops.map((shop) => {
            return <ShopItem key={`${shop._id}`} shop={shop} />;
          })}
        </ShopList>
      )}
      {isLoading && <div>завантаженя...</div>}
    </>
  );
}

export default ShopsList;
