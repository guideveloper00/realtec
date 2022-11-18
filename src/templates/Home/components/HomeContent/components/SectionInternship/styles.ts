import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding-top: 6rem;
  padding-bottom: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-size: 300% 300%;
  background-image: linear-gradient(
    -45deg,
    #96d063 0%,
    #00bfb2 25%,
    #16d093 51%,
    #00bfb2 75%,
    #96d063 100%
  );
  animation: AnimatedBG 15s ease infinite, animatedTopToPlace 2s ease;
  position: relative;
`;

export const SectionContent = styled.section`
  width: 1120px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1220px) {
    max-width: 840px;
  }
  @media screen and (max-width: 960px) {
    max-width: 680px;
  }
  @media screen and (max-width: 800px) {
    max-width: 480px;
  }
  @media screen and (max-width: 600px) {
    max-width: 360px;
  }
  @media screen and (max-width: 400px) {
    max-width: 320px;
  }
`;

export const Title = styled.h1`
  color: #fff;
  font-weight: 500;
  font-size: 2.2rem;
  line-height: 50px;
  margin-bottom: 20px;
  @media screen and (max-width: 400px) {
    font-size: 1.8rem;
  }
`;

export const P = styled.p`
  color: #fff;
`;
