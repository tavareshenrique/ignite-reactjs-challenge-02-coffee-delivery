import styled from "styled-components";

export const Container = styled.div`
  padding-top: 80px;

  h1 {
    font-family: "Baloo 2", cursive;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;

    color: ${({ theme }) => theme["yellow-dark"]};
  }

  h2 {
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;

    color: ${({ theme }) => theme["base-subtitle"]};
  }

  @media only screen and (max-width: 768px) {
    padding: 50px;

    h1 {
      font-size: 1.5rem;
    }

    h2 {
      font-size: 1rem;
    }
  }
`;

export const Content = styled.main`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 2.5rem;

  @media only screen and (max-width: 768px) {
    flex-direction: column;

    margin-top: 2rem;
  }
`;

export const RightSide = styled.div`
  width: 80%;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const LeftSide = styled.div`
  @media only screen and (max-width: 768px) {
    margin-top: 2rem;

    img {
      width: 100%;
    }
  }
`;

export const DetailContent = styled.div`
  position: relative;
  padding: 40px;

  width: 80%;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border: 1px solid transparent;
    border-start-start-radius: 6px;
    border-end-end-radius: 6px;
    border-start-end-radius: 36px;
    border-end-start-radius: 36px;
    padding: 1px;
    background: linear-gradient(
      45deg,
      ${(props) => props.theme.yellow},
      ${(props) => props.theme.purple}
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }

  @media only screen and (max-width: 768px) {
    padding: 20px;

    width: 100%;
  }
`;

export const DetailValuesContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  margin-bottom: 32px;

  > div {
    margin-right: 12px;
  }
`;

export const InformationContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
