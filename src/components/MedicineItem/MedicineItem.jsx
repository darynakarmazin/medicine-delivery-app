import { Img, MedicineCard } from "./MedicineItem.styled";

function MedicineItem({ medicine }) {
  return (
    <MedicineCard>
      <Img style={{ backgroundImage: `url(${medicine.image})` }}></Img>
      {/* <img width={100} src={medicine.image} alt="medicine img" /> */}
      <div>
        <h3>{medicine.title}</h3>
        <p>{medicine.description}</p>
        <p>{medicine.price}</p>
        <button>add to Card</button>
      </div>
    </MedicineCard>
  );
}

export default MedicineItem;
