import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function MedicineList() {
  const { shopId } = useParams();

  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    const fetchDataMedicines = async () => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `https://medicine-delivery-app-backend-o7a6.onrender.com/api/medicines/?_id=${shopId}`
          );
          return response.data.data.result;
        } catch (error) {
          console.error("Помилка при виконанні запиту:", error);
        }
      };
      const result = await fetchData();
      setMedicines(result);
    };
    fetchDataMedicines();
  }, [shopId]);

  return (
    <div>
      Це магазин {shopId} і список його медикаментів
      <ul>
        {medicines.map((medicine) => {
          return (
            <li key={medicine._id}>
              <p>{medicine.title}</p>
              <p>{medicine.price}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MedicineList;
