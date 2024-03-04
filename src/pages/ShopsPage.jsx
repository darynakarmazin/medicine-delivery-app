import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setShops } from "../redux/catalog/operations.js";
import {
  PageContainer,
  ShopsContainer,
  ShopsTitle,
} from "../components/Container/Container.styled.jsx";
import ShopsList from "../components/ShopsList/ShopsList.jsx";

function ShopsPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setShops());
  }, [dispatch]);

  return (
    <PageContainer>
      <ShopsContainer>
        <ShopsTitle>Shops:</ShopsTitle>
        <ShopsList />
      </ShopsContainer>
      <Outlet />
    </PageContainer>
  );
}

export default ShopsPage;
