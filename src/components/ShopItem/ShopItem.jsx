import { ShopCard } from "./ShopItem.styled";

function ShopItem({ shop }) {
  return (
    <li>
      <ShopCard to={`${shop._id}`}>{shop.name}</ShopCard>
    </li>
  );
}

export default ShopItem;
