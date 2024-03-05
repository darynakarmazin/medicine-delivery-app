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
import { useEffect, useState } from "react";
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
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newTotalPrice = cartMedicines.reduce((total, medicine) => {
      return total + Number(medicine.price) * (medicine.amount || 1);
    }, 0);
    setTotalPrice(newTotalPrice);
  }, [cartMedicines]);

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
        amount: medicine.amount || 1,
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
      alert("Error:", error);
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
              required
              title="Name should contain only letters and be at least 2 characters long"
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Phone:
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              title="Phone number should consist only numbers"
            />
          </label>
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
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
        <p>{`Total price: ${Math.round(totalPrice * 100) / 100}`}</p>
        <button type="submit">Submit</button>
      </TotalContainers>
    </form>
  );
}

export default ShoppingCartPage;
