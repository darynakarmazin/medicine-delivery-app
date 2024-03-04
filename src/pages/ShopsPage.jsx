import { NavLink, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading, selectShops } from "../redux/selectors";
import { useEffect } from "react";
import { setShops } from "../redux/catalog/operations.js";
import {
  PageContainer,
  ShopsContainer,
} from "../components/Container/Container.styled.jsx";

function ShopsPage() {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const shops = useSelector(selectShops);

  useEffect(() => {
    dispatch(setShops());
  }, [dispatch]);

  return (
    <PageContainer>
      <ShopsContainer>
        <p>Shops:</p>
        {shops && (
          <ul>
            {shops.map((shop) => {
              return (
                <li key={`${shop._id}`}>
                  <NavLink to={`${shop._id}`}>{shop.name}</NavLink>
                </li>
              );
            })}
          </ul>
        )}
        {isLoading && <div> завантаженя...</div>}
      </ShopsContainer>
      <Outlet />
    </PageContainer>
  );
}

export default ShopsPage;
