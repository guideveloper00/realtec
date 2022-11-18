import styled from "styled-components";
import Image from "next/image";

export const SectionOurCompany = styled.section`
  width: 1120px;
  display: flex;
  margin-bottom: 100px;
  flex-direction: column;
  align-items: center;
  animation: animatedTopToPlace 2s ease;
  position: relative;
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
  div {
    display: flex;
    justify-content: space-between;
  }
`;

export const P = styled.p`
  width: 75%;
`;

export const Subtitle = styled.h2`
  color: #444444;
  font-weight: 500;
  margin-top: 6rem;
  font-size: 2rem;
  line-height: 50px;
  margin-bottom: 20px;
  position: relative;
`;

export const Logo = styled(Image)`
  width: 100vw;
  height: 35vw;
  position: absolute;
  z-index: -1;
`;
