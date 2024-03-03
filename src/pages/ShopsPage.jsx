import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import axios from "axios";

function ShopsPage() {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   navigate("/shop1");
  // }, []);

  const [shops, setShops] = useState([]);

  useEffect(() => {
    const fetchDataShops = async () => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "https://medicine-delivery-app-backend-o7a6.onrender.com/api/shops"
          );
          return response.data.data.result;
        } catch (error) {
          console.error("Помилка при виконанні запиту:", error);
        }
      };
      const result = await fetchData();
      setShops(result);
    };
    fetchDataShops();
  }, []);

  return (
    <div>
      ShopsPage
      <ul>
        {shops.map((shop) => {
          return (
            <li key={`${shop._id}`}>
              <NavLink to={`${shop._id}`}>{shop.name}</NavLink>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </div>
  );
}

export default ShopsPage;
