import styled from "styled-components";

export const EmptyListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-family: "Baloo 2", cursive;
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 130%;
    color: ${({ theme }) => theme["base-text"]};
    text-align: center;
  }
`;
