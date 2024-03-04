import { NavLink, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading, selectShops } from "../redux/selectors";
import { useEffect } from "react";
import { setShops } from "../redux/catalog/operations.js";

function ShopsPage() {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const shops = useSelector(selectShops);

  useEffect(() => {
    dispatch(setShops());
  }, [dispatch]);

  return (
    <div>
      <p> Shops:</p>
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
      <Outlet />
    </div>
  );
}

export default ShopsPage;
