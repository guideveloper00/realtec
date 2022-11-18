import styled from "styled-components";
import { GiPlantRoots } from "react-icons/gi";
import { RiComputerLine } from "react-icons/ri";
import { MdAccountBalance } from "react-icons/md";
import { MdEngineering } from "react-icons/md";
import { GoLaw } from "react-icons/go";
import { GiSuitcase } from "react-icons/gi";

export const Section = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: 300% 300%;
  background-image: linear-gradient(
    -45deg,
    #96d063 0%,
    #00bfb2 25%,
    #16d093 51%,
    #00bfb2 75%,
    #96d063 100%
  );
  animation: AnimatedBG 15s ease infinite;
  position: relative;
  padding-top: 6rem;
  padding-bottom: 6rem;
`;

export const SectionContent = styled.section`
  width: 1120px;
  display: flex;
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

export const SubtitleDegree = styled.h2`
  color: #fff;
  font-weight: 500;
  font-size: 2rem;
  line-height: 50px;
  position: relative;
`;

export const CardDegree = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.8rem;
  &:last-child {
    margin-right: 0;
  }
`;

export const CardDegreePosition = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  @media screen and (max-width: 960px) {
    grid-template-columns: 2fr 2fr 2fr;
  }
  gap: 1.5rem;
  width: 100%;
`;

export const PDegree = styled.p`
  color: white;
  margin-bottom: 45px;
`;

export const TextPosition = styled.div`
  width: 1120px;
  animation: animatedTopToPlace 2s ease;
  position: relative;
`;

export const AgroIcon = styled(GiPlantRoots)`
  font-size: 3.6rem;
  fill: #fff;
`;

export const AdmIcon = styled(GiSuitcase)`
  font-size: 3.6rem;
  fill: #fff;
`;

export const LawIcon = styled(GoLaw)`
  font-size: 3.6rem;
  fill: #fff;
`;

export const AccountIcon = styled(MdAccountBalance)`
  font-size: 3.6rem;
  fill: #fff;
`;

export const ItIcon = styled(RiComputerLine)`
  font-size: 3.6rem;
  fill: #fff;
`;

export const EnginnerIcon = styled(MdEngineering)`
  font-size: 3.6rem;
  fill: #fff;
`;
