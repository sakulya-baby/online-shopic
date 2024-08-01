import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addProduct } from "../store/productSlice";

export const Product = () => {
  const { products } = useSelector((state) => state.fruits);
  const dispatch = useDispatch();
  const addProductHandler = (productId) => {
    dispatch(addProduct(productId));
  };

  return (
    <StyledContainer>
      {products.map((product) => (
        <StyledSection key={product.id}>
          <img src={product.img} alt={product.name} />
          <div>
            <h3>{product.name}</h3>
            <h4>{product.price}$ </h4>
            <button
              onClick={() => addProductHandler(product.id)}
              disabled={product.isBought}
            >
              buy
            </button>
          </div>
        </StyledSection>
      ))}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 50px;
`;
const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  border: 2px solid #333;
  padding: 20px;
  border-radius: 10px;

  & > img {
    width: 200px;
    height: 200px;
  }
  & > div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  & > div > button {
    width: 100%;
    background-color: #333;
    color: #fff;
    padding: 10px;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
    border-radius: 6px;
    &:hover {
      background-color: aquamarine;
      color: #333;
      transition: all 0.3ms ease-in;
    }
    &:disabled {
      background-color: gray;
      cursor: not-allowed;
    }
  }
`;
