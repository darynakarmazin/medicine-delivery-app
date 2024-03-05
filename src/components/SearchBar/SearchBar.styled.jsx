import styled from "styled-components";

export const SortForm = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 8px;
`;

export const InputIcon = styled.img`
  position: absolute;
  top: 25%;
  left: 8px;
`;

export const InputEl = styled.input`
  width: 220px;
  padding: 8px 8px 8px 40px;
  background-color: #f0eded;
  border: none;
  border-radius: 8px;
`;

export const ContainerSortBtn = styled.div`
  display: flex;
  gap: 4px;
`;

export const SortBtn = styled.button`
  padding: 8px;
  border-radius: 8px;
  background-color: #f0eded;
  color: grey;
  &:hover,
  &:focus {
    background-color: lightgrey;
  }
`;
