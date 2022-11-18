import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  z-index: 10;
  background-color: #fff;
  border-bottom: 2px solid #f1f1f1;
`;

export const Content = styled.div`
  height: 115px;
  width: 1120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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

export const Logo = styled(Image)`
  width: 200px;
  height: 80px;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 450px;
  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const Link = styled.li``;

export const Button = styled.button`
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
`;

export const DropDownButton = styled.div`
  cursor: pointer;
  display: block;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  color: #fff;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 5px;
  background-color: #7f7c80;
  transition: background ease 0.4s, color ease 0.4s;
  cursor: pointer;
`;

export const DropDownMenu = styled.div`
  position: relative;
  display: none;
  @media screen and (max-width: 960px) {
    display: flex;
  }
`;

export const DropDownMenuContent = styled.div`
  position: absolute;
  z-index: 1;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 15px;
  top: 78px;
  right: 0px;
  display: flex;
  flex-direction: column;
  height: fit-content;
  background-color: #fff;
  width: 150px;

  button {
    margin-top: 10px;
    &:first-child {
      margin-top: 0px;
    }
  }
`;
