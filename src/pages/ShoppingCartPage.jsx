import { useDispatch, useSelector } from "react-redux";
import { selectCartMedicines } from "../redux/selectors";
import { MedicinesList } from "../components/MedicineList/MedicineList.styled";
import axios from "axios";
import MedicineCartItem from "../components/MedicineCartItem/MedicineCartItem";
import {
  CartContainer,
  FormContainer,
  PageContainer,
  TotalContainers,
} from "../components/Container/Container.styled";
import { useState } from "react";
import { clearCart } from "../redux/cart/cartSlice";

function ShoppingCartPage() {
  const cartMedicines = useSelector(selectCartMedicines);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const dispatch = useDispatch();

  const totalPrice = cartMedicines.reduce((total, medicine) => {
    return total + Number(medicine.price);
  }, 0);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      medicines: cartMedicines.map((medicine) => ({
        _id: medicine._id,
        title: medicine.title,
        owner: medicine.owner,
      })),
    };

    try {
      const response = await axios.post(
        "https://medicine-delivery-app-backend-o7a6.onrender.com/api/orders",
        data
      );
      alert(`Замовлення №${response.data.data.result._id} створено!`);
      dispatch(clearCart());
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PageContainer>
        <FormContainer>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Email:
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Phone:
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </label>
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </label>
        </FormContainer>

        <CartContainer>
          {cartMedicines && (
            <MedicinesList>
              {cartMedicines.map((medicine) => {
                return (
                  <MedicineCartItem key={medicine._id} medicine={medicine} />
                );
              })}
            </MedicinesList>
          )}
        </CartContainer>
      </PageContainer>
      <TotalContainers>
        <p>{`Total price: ${totalPrice}`}</p>
        <button type="submit">Submit</button>
      </TotalContainers>
    </form>
  );
}

export default ShoppingCartPage;
