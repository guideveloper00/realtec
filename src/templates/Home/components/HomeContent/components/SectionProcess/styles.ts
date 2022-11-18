import styled from "styled-components";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundDown } from "react-icons/io";

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
  justify-content: space-between;
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

export const CardPosition = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 50px;
  margin-bottom: 25px;
  position: relative;
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
  @media screen and (min-width: 800px) {
    div:nth-child(3n) {
      div {
        display: none;
      }
    }
  }
  @media screen and (max-width: 800px) {
    div:nth-child(2n) {
      div {
        display: none;
      }
    }
  }
  div {
    &:last-child {
      div {
        display: none;
      }
      span {
        &:last-child {
          display: none;
        }
      }
    }
  }
  div + div {
    &:last-child {
      border-right: 1px solid #276583;
      border-bottom: 1px solid #276583;
    }
  }
`;

export const ProcessOrder = styled.span`
  position: absolute;
  top: -30px;
  left: calc(50% - 25px);
  color: #fff;
  z-index: 1;
  background-color: #276583;
  border-radius: 50%;
  width: 50px;
  font-size: 1.9rem;
  height: 32%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

type ICardProps = {
  delay: string;
};

export const Card = styled.div<ICardProps>`
  border: 1px solid;
  border-color: #276583;
  height: 150px;
  padding: 25px;
  align-items: center;
  justify-content: center;
  position: relative;
  animation: ${(props) => `animatedTopToPlace ${props.delay} ease`};
  display: flex;
  border-right: none;
  @media screen and (max-width: 600px) {
    border-right: 1px solid #276583;
    border-bottom: none;
  }
`;

export const TextPosition = styled.div`
  width: 1120px;
`;

export const Button = styled.button`
  background-color: #276583;
  color: #ffffff;
  cursor: pointer;
  padding: 15px;
  font-size: 1.3rem;
  border: 0;
  border-radius: 5px;
  align-self: flex-start;
  margin-top: 10px;
`;

export const Subtitle = styled.h2`
  color: #444444;
  font-weight: 500;
  font-size: 2rem;
  line-height: 50px;
  margin-bottom: 50px;
  position: relative;
`;

export const ArrowLeftIcon = styled(IoIosArrowRoundForward)`
  font-size: 6rem;
  fill: #276583;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const ArrowDownIcon = styled(IoIosArrowRoundDown)`
  font-size: 6rem;
  fill: #276583;
  @media screen and (min-width: 600px) {
    display: none;
  }
`;

export const ArrowDownPosition = styled.span`
  position: absolute;
  bottom: -10px;
`;

export const ArrowRightPosition = styled.div`
  position: absolute;
  right: -45px;
  z-index: 1;
`;
