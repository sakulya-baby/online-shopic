import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { openAndCloseCart } from "../store/productSlice";

export const Header = () => {
  const dispatch = useDispatch();

  const openCartHandler = () => {
    dispatch(openAndCloseCart());
  };
  return (
    <StyledHeader>
      <h1>Online shop</h1>
      <button onClick={openCartHandler}>cart🛒</button>
    </StyledHeader>
  );
};
const StyledHeader = styled.header`
  width: 100%;
  height: 50px;
  padding: 5px 40px;
  background-color: blueviolet;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 35px;
  h1 {
    color: black;
  }
  button {
    width: 250px;
    height: 45px;
    border: 1px solid blue;
    cursor: pointer;
    font-size: 18px;
    font-weight: 900;
    background-color: #7ee6c3;
    &:hover {
      background-color: yellow;
    }
  }
`;
