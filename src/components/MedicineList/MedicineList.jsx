import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading, selectMedicines } from "../../redux/selectors";
import { setMedicines } from "../../redux/catalog/operations";
import { MedicinesContainer } from "../Container/Container.styled";

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
      )}
      {isLoading && <div> завантаженя...</div>}
    </MedicinesContainer>
  );
}

export default MedicineList;
