import { useSelector } from "react-redux";
import { selectCartMedicines } from "../redux/selectors";
import { MedicinesList } from "../components/MedicineList/MedicineList.styled";
import MedicineItem from "../components/MedicineItem/MedicineItem";

function ShoppingCartPage() {
  const cartMedicines = useSelector(selectCartMedicines);

  return (
    <div>
      <form action="">
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </form>
      {cartMedicines && (
        <MedicinesList>
          {cartMedicines.map((medicine) => {
            return <MedicineItem key={medicine._id} medicine={medicine} />;
          })}
        </MedicinesList>
      )}
    </div>
  );
}

export default ShoppingCartPage;
