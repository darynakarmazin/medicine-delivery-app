import styled from "styled-components";

export const MedicineCard = styled.li`
  display: flex;
  flex-basis: calc((100% - 4 * 12px) / 2);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //   padding: 24px;
  border: 1px solid black;
  border-radius: 12px;
`;

export const Img = styled.div`
  display: flex;
  height: 150px;
  width: 100%;
`;
