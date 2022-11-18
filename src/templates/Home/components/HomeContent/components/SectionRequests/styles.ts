import styled from "styled-components";
import Image from "next/image";

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  position: relative;
`;

export const SectionContent = styled.section`
  width: 1120px;
  display: flex;
  min-height: 350px;
  align-items: flex-start;
  justify-content: center;
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

export const Subtitle = styled.h2`
  color: #444444;
  font-weight: 500;
  font-size: 2rem;
  line-height: 50px;
  margin-bottom: 20px;
  position: relative;
`;

export const TextPosition = styled.div`
  width: 1120px;
  animation: animatedLeftToPlace 2s ease;
  position: relative;
`;

export const CardsRequestsPosition = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 2fr;
  gap: 20px;
`;

export const CardRequests = styled.div`
  position: relative;
  justify-content: center;
  background-color: #276583;
  color: #fff;
  min-height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 25px;
  transform: scale(0.95);
  transition: 1s all ease;
  &:hover {
    transform: scale(1);
  }
`;

export const ImagePng = styled(Image)`
  position: absolute;
  width: 3.2rem;
  height: 3.2rem;
  left: -15px;
  top: -15px;
  border-radius: 50%;
`;

export const ImageBackground = styled(Image)`
  animation: animatedRightToPlace 2s ease;
  width: 20rem;
  height: 20rem;
  position: relative;
  align-self: end;
  @media screen and (max-width: 1080px) {
    display: none;
  }
`;
