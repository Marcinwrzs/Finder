import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  @media (max-width: 960px) {
    width: 95%;
  }
`;

export const Header = styled.div`
  margin-bottom: 25px;

  h2 {
    font-size: 32px;
    color: #18304b;
  }

  p {
    font-size: 20px;
    color: #6c7881;
  }

  @media (max-width: 960px) {
    h2 {
      font-size: 24px;
    }

    p {
      font-size: 18px;
    }
  }
`;

export const Compoments = styled.div`
  justify-content: space-between;
  justify-items: space-between;
  flex-wrap: wrap;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  grid-template-columns: repeat(6, 16%);

  @media (max-width: 960px) {
    display: flex;
  }

  @media (max-width: 600px) {
    display: flex;
    justify-content: space-around;
  }
`;

export const Link = styled.a`
  width: 170px;
  height: 105px;
  border: 1px solid rgb(227, 229, 232);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-decoration: none;
  border-radius: 16px;
  margin-bottom: 24px;

  svg {
    color: #0271e1;
    font-size: 40px;
    font-weight: 500;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 30%;

    h3 {
      text-align: center;
      color: #0271e1;
      font-weight: 500;
      font-size: 16px;
    }
  }

  &:hover {
    border: 1px solid rgb(2, 113, 225);
  }

  @media (max-width: 1280px) {
    width: 147px;
  }

  @media (max-width: 960px) {
    width: 22%;
    font-size: 18px;
  }

  @media (max-width: 600px) {
    width: 48%;

    svg {
      font-size: 35px;
    }
    div h3 {
      font-size: 14px;
    }
  }
`;

export const Button = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  font-weight: bold;
  margin: 0 auto;
  display: block;

  svg {
    color: #0271e1;
    font-size: 10px;
    height: 10px;
    width: 10px;
    margin-left: 5px;
  }

  span {
    font-size: 16px;
    color: #0271e1;
  }
`;
