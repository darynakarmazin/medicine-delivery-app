import { Routes, Route, Navigate } from "react-router-dom";
import ShopsPage from "../pages/ShopsPage";
import ShoppingCartPage from "../pages/ShoppingCartPage";
import MedicineList from "./MedicineList/MedicineList";
import Navigation from "./Navigation/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <main className="container">
        <Routes>
          <Route path="/shops" element={<ShopsPage />}>
            <Route path=":shopId" element={<MedicineList />} />
          </Route>
          <Route path="/shopping-cart" element={<ShoppingCartPage />} />
          <Route path="*" element={<Navigate to="/shops" replace />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
