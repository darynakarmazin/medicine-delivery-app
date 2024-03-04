import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const ShopsContainer = styled.div`
  display: flex;
  border-radius: 12px;
  width: 30%;
  height: calc(100vh - 100px);
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 12px;
`;

export const MedicinesContainer = styled.div`
  display: flex;
  border-radius: 12px;
  flex: 1;
  height: calc(100vh - 100px);
  flex-direction: column;
  align-items: start;
  padding: 10px;
  border: 1px solid black;
  border-radius: 12px;
`;
