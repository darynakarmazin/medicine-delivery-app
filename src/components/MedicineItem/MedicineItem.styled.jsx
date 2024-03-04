import styled from "styled-components";

export const MedicineCard = styled.li`
  display: flex;
  flex-basis: calc((100% - 4 * 12px) / 2);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 12px;
  overflow: hidden;
`;

export const Img = styled.div`
  display: block;
  height: 200px;
  width: 100%;
  background-color: #545d6d;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Wrapper = styled.div`
  height: 120px;
  width: 100%;
  padding: 6px 12px;
  display: flex;
  flex-direction: column;

  div {
    margin-top: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 18px;
    }

    button {
      display: flex;
      border-radius: 12px;
      justify-content: center;
      align-items: center;
      padding: 8px;
      background-color: transparent;
      border: 2px solid #94bbe9;
      border-radius: 12px;
      font-size: 16px;
      font-weight: 600;

      &:hover,
      &:focus {
        color: white;
        background-color: #94bbe9;
        border: 2px solid #94bbe9;
      }
    }
  }

  p {
    font-size: 12px;
  }
`;
