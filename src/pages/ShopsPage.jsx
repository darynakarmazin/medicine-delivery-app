// import { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";

function ShopsPage() {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   navigate("/shop1");
  // }, []);

  return (
    <div>
      ShopsPage
      <ul>
        {[`shop1`, `shop2`, `shop3`].map((shop) => {
          return (
            <li key={`${shop}`}>
              <NavLink to={`${shop}`}>{shop}</NavLink>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </div>
  );
}

export default ShopsPage;
