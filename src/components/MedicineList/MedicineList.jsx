import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading, selectMedicines } from "../../redux/selectors";
import { setMedicines } from "../../redux/catalog/operations";
import { MedicinesContainer } from "../Container/Container.styled";
import { MedicinesList } from "./MedicineList.styled";
import MedicineItem from "../MedicineItem/MedicineItem";
import SearchBar from "../SearchBar/SearchBar";

function MedicineList() {
  const { shopId } = useParams();
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [filteredMedicine, setFilteredMedicine] = useState([]);

  const isLoading = useSelector(selectIsLoading);
  const medicines = useSelector(selectMedicines);

  useEffect(() => {
    dispatch(setMedicines(shopId));
  }, [dispatch, shopId]);

  useEffect(() => {
    if (medicines && medicines.length > 0) {
      const filteredArray = medicines.filter((medicine) =>
        medicine.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredMedicine(filteredArray);
    }
  }, [search, medicines]);

  const handleSearchChange = (e) => {
    setSearch(e.currentTarget.value);
  };

  const handleSortByPrice = (direction) => {
    const sortedMedicine = [...filteredMedicine].sort((a, b) => {
      if (direction === "up") {
        return a.price - b.price;
      } else if (direction === "down") {
        return b.price - a.price;
      }
      return 0;
    });
    setFilteredMedicine(sortedMedicine);
  };

  return (
    <MedicinesContainer>
      <SearchBar
        value={search}
        onChange={handleSearchChange}
        sortByPrice={handleSortByPrice}
      />
      {filteredMedicine.length > 0 && (
        <MedicinesList>
          {filteredMedicine.map((medicine) => (
            <MedicineItem key={medicine._id} medicine={medicine} />
          ))}
        </MedicinesList>
      )}
      {isLoading && <div>Завантаження...</div>}
    </MedicinesContainer>
  );
}

export default MedicineList;
