import { useParams } from "react-router-dom";

function MedicineList() {
  const { shopId } = useParams();

  return <div>Це магазин {shopId} і список його медикаментів</div>;
}

export default MedicineList;
