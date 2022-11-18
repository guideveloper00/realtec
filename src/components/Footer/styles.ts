import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #65666c;
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    color: lightgreen;
  }
`;

export const FooterInfos = styled.div`
  height: 310px;
  width: 1120px;
  display: flex;
  justify-content: flex-start;
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

export const SocialMedias = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-right: 25%;
`;

export const CompanyInfos = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h1`
  color: white;
  margin-bottom: 40px;
`;

export const P = styled.p`
  color: white;
`;

export const FooterCopyrightPosition = styled.div`
  border-top: 1px solid white;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const FooterCopyright = styled.div`
  color: white;
  height: 84px;
  display: flex;
  align-items: center;
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
