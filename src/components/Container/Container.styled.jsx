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
