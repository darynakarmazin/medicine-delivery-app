import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading, selectMedicines } from "../../redux/selectors";
import { setMedicines } from "../../redux/catalog/operations";
import { MedicinesContainer } from "../Container/Container.styled";
import { MedicinesList } from "./MedicineList.styled";
import MedicineItem from "../MedicineItem/MedicineItem";

function MedicineList() {
  const { shopId } = useParams();
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const medicines = useSelector(selectMedicines);

  useEffect(() => {
    dispatch(setMedicines(shopId));
  }, [dispatch, shopId]);

  return (
    <MedicinesContainer>
      {medicines && (
        <MedicinesList>
          {medicines.map((medicine) => {
            return <MedicineItem key={medicine._id} medicine={medicine} />;
          })}
        </MedicinesList>
      )}
      {isLoading && <div> завантаженя...</div>}
    </MedicinesContainer>
  );
}

export default MedicineList;
