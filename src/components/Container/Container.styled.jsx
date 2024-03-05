import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const ShopsContainer = styled.div`
  display: flex;
  width: 30%;
  height: calc(100vh - 120px);
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 12px;
  overflow-y: scroll;
`;

export const FormContainer = styled.div`
  display: flex;
  width: 50%;
  height: calc(100vh - 220px);
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 12px;
  overflow-y: scroll;

  label {
    display: flex;
    flex-direction: column;

    input {
      display: flex;
      width: 500px;
      justify-content: center;
      align-items: center;
      padding: 18px 12px;
      border: 3px solid #94bbe9;
      border-radius: 12px;
    }
  }
`;

export const ShopsTitle = styled.h2`
  font-size: 22px;
  font-weight: 600;
  line-height: 1.5;
`;

export const MedicinesContainer = styled.div`
  display: flex;
  flex: 1;
  height: calc(100vh - 120px);
  flex-direction: column;
  align-items: start;
  padding: 10px;
  border: 1px solid black;
  border-radius: 12px;
  overflow-y: scroll;
`;

export const CartContainer = styled.div`
  display: flex;
  width: 50%;
  height: calc(100vh - 220px);
  flex-direction: column;
  align-items: start;
  padding: 10px;
  border: 1px solid black;
  border-radius: 12px;
  overflow-y: scroll;
`;

export const TotalContainers = styled.h2`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 10px;
  gap: 60px;

  button {
    display: flex;
    border-radius: 12px;
    justify-content: center;
    align-items: center;
    padding: 18px 28px;
    background-color: transparent;
    border: 3px solid #94bbe9;
    border-radius: 12px;
    font-size: 20px;
    font-weight: 800;

    &:hover,
    &:focus {
      color: white;
      background-color: #94bbe9;
      border: 3px solid #94bbe9;
    }
  }
`;
