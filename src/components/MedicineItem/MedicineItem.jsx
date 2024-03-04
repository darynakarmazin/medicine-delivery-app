import { Img, MedicineCard, Wrapper } from "./MedicineItem.styled";

function MedicineItem({ medicine }) {
  return (
    <MedicineCard>
      <Img style={{ backgroundImage: `url(${medicine.image})` }}></Img>
      <Wrapper>
        <h3>{medicine.title}</h3>
        <p>{medicine.description}</p>
        <div>
          <p>{medicine.price}</p>
          <button>add to Card</button>
        </div>
      </Wrapper>
    </MedicineCard>
  );
}

export default MedicineItem;
