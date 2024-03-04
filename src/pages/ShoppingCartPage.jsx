import { useSelector } from "react-redux";
import { selectCartMedicines } from "../redux/selectors";
import { MedicinesList } from "../components/MedicineList/MedicineList.styled";
import MedicineItem from "../components/MedicineItem/MedicineItem";
import axios from "axios";

function ShoppingCartPage() {
  const cartMedicines = useSelector(selectCartMedicines);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      name: "Daryna",
      email: "daryna.karmazin@gmail.com",
      phone: "+380636677888",
      address: "Kyiv, street 6",
      medicines: cartMedicines.map((medicine) => ({
        _id: medicine._id,
        title: medicine.title,
      })),
    };

    try {
      const response = await axios.post(
        "https://medicine-delivery-app-backend-o7a6.onrender.com/api/orders",
        data
      );
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />

        {cartMedicines && (
          <MedicinesList>
            {cartMedicines.map((medicine) => {
              return <MedicineItem key={medicine._id} medicine={medicine} />;
            })}
          </MedicinesList>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ShoppingCartPage;
