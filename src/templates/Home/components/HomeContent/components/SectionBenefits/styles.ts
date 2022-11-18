import styled from "styled-components";
import { RiCoinsFill } from "react-icons/ri";
import { HiCalendar } from "react-icons/hi";
import { FaCarSide } from "react-icons/fa";
import { GiTrail } from "react-icons/gi";
import { SiGoogleclassroom } from "react-icons/si";
import { GiClothes } from "react-icons/gi";

export const CardBenefits = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  transform: scale(0.95);
  transition: 1s all ease;
  &:hover {
    transform: scale(1);
  }
  &:last-child {
    margin-right: 0;
  }
`;

export const CardBenefitsPosition = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr;
  gap: 1rem;
  width: 100%;
  justify-content: space-between;
`;

export const TextPosition = styled.div`
  width: 1120px;
  position: relative;
  animation: animatedTopToPlace 2s ease;
  position: relative;
`;

export const Section = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  position: relative;
`;

export const SectionContent = styled.section`
  width: 1120px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  align-items: center;
  padding-top: 6rem;
  padding-bottom: 6rem;

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
  margin-bottom: 40px;
  position: relative;
`;

export const BenefitsIcon = styled(RiCoinsFill)`
  font-size: 3.6rem;
  fill: #276583;
  border: 1px solid #276583;
  border-radius: 50%;
  padding: 10px;
  margin-bottom: 15px;
`;

export const DaysIcon = styled(HiCalendar)`
  font-size: 3.6rem;
  fill: #276583;
  border: 1px solid #276583;
  border-radius: 50%;
  padding: 10px;
  margin-bottom: 15px;
`;

export const MobilityIcon = styled(FaCarSide)`
  font-size: 3.6rem;
  fill: #276583;
  border: 1px solid #276583;
  border-radius: 50%;
  padding: 10px;
  margin-bottom: 15px;
`;

export const CoursesIcon = styled(GiTrail)`
  font-size: 3.6rem;
  fill: #276583;
  border: 1px solid #276583;
  border-radius: 50%;
  padding: 10px;
  margin-bottom: 15px;
`;

export const ClassIcon = styled(SiGoogleclassroom)`
  font-size: 3.6rem;
  fill: #276583;
  border: 1px solid #276583;
  border-radius: 50%;
  padding: 10px;
  margin-bottom: 15px;
`;

export const CodeDressIcon = styled(GiClothes)`
  font-size: 3.6rem;
  fill: #276583;
  border: 1px solid #276583;
  border-radius: 50%;
  padding: 10px;
  margin-bottom: 15px;
`;
