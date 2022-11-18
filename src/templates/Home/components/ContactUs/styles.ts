import styled from "styled-components";

export const Container = styled.div`
  width: 1120px;
  margin-bottom: 150px;
  animation: animatedTopToPlace 2s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 30px;
  color: #444444;
  font-weight: 500;
  font-size: 2.2rem;
  line-height: 50px;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  input {
    padding: 10px;
    background-color: #f5f5f5;
    outline-color: #e0e0e0;
    border: 1px solid #e0e0e0;
    border-radius: 0.3rem;
  }
  textarea {
    padding: 10px;
    background-color: #f5f5f5;
    outline-color: #e0e0e0;
    border: 1px solid #e0e0e0;
    border-radius: 0.3rem;
  }
`;

export const FormItemsPosition = styled.div`
  width: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ItemPosition = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FormTextAreaPosition = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const ErrorMessage = styled.div`
  font-size: 0.9rem;
  height: 20px;
`;

export const TextArea = styled.textarea`
  width: 600px;
  height: 200px;
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

export const Button = styled.button`
  background-color: #276583;
  color: #ffffff;
  cursor: pointer;
  padding: 15px;
  font-size: 1.5rem;
  border: 0;
  border-radius: 5px;
  align-self: flex-start;
`;

export const Captcha = styled.div`
  position: relative;
  left: 50%;
  top: 50%;
`;
