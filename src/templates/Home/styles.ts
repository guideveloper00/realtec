import Image from "next/image";
import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;

export const Banner = styled(Image)`
  width: 100vw;
  height: 25vw;
  margin-top: 115px;
  animation: animatedTopToPlace 2s ease;
  position: relative;
`;
