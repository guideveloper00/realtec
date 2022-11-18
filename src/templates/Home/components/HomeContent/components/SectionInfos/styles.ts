import styled from "styled-components";
import { BiTimeFive } from "react-icons/bi";
import { MdOutlineLocalLibrary } from "react-icons/md";
import { MdWork } from "react-icons/md";

export const CardDegree = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 150px;
  color: white;
  &:last-child {
    margin-right: 0;
  }
`;

export const CardDegreePosition = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.5rem;
  font-size: 1.2rem;
`;

export const PDegree = styled.p`
  color: white;
  margin-bottom: 10px;
`;

export const SubtitleDegree = styled.h2`
  color: #fff;
  font-weight: 500;
  font-size: 2rem;
  line-height: 50px;
  margin-bottom: 20px;
  position: relative;
`;

export const SubtitleInfos = styled.h2`
  color: #fff;
  font-weight: 500;
  font-size: 2rem;
  line-height: 50px;
  margin-bottom: 50px;
  position: relative;
`;

export const ListItemInfo = styled.li`
  color: white;
`;

export const TextPosition = styled.div`
  width: 1120px;

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
  animation: AnimatedBG 15s ease infinite, animatedTopToPlace 2s ease;
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
`;

export const TimeIcon = styled(BiTimeFive)`
  font-size: 3rem;
  fill: #fff;
  margin-bottom: 10px;
`;

export const WorkIcon = styled(MdWork)`
  font-size: 3rem;
  fill: #fff;
  margin-bottom: 10px;
`;

export const PlaceIcon = styled(MdOutlineLocalLibrary)`
  font-size: 3rem;
  fill: #fff;
  margin-bottom: 10px;
`;
