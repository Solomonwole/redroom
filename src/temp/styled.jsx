import styled from "styled-components";

export const PricingStyle = styled.div`
  background: #d9d9d9;
  padding: 20px;
  border-radius: 10px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    box-shadow: 0px 0px 19px 4px rgba(0, 0, 0, 0.36);
    -webkit-box-shadow: 0px 0px 19px 4px rgba(0, 0, 0, 0.36);
    -moz-box-shadow: 0px 0px 19px 4px rgba(0, 0, 0, 0.36);
  }

  span {
    font-weight: 700;
  }
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    li {
      list-style: none;
      margin: 5px;
    }
  }

  a {
    text-decoration: none;
    background: #5800ed;
    padding: 10px 40px;
    border-radius: 10px;
    color: #fff;
  }
`;
