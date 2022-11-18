import * as S from "./styles";
import logo from "../../../public/logorealtec.png";
import { useState } from "react";

export const Header = () => {
  const [isDropDownMenuOpen, setIsDropDownMenuOpen] = useState(false);

  const handleIsDropDownMenuOpen = () => {
    setIsDropDownMenuOpen((prev) => !prev);
  };

  return (
    <S.Container>
      <S.Content>
        <S.Logo src={logo} alt="logo" />
        <S.Nav>
          <S.Button
            onClick={() => {
              window.scroll(0, 0);
            }}
          >
            <S.Link>Home</S.Link>
          </S.Button>
          <S.Button
            onClick={() => {
              window.scroll(0, 500);
            }}
          >
            <S.Link>Trabalhe conosco</S.Link>
          </S.Button>
          <S.Button
            onClick={() => {
              window.scroll(0, document.body.scrollHeight - 1275);
            }}
          >
            <S.Link>Contato</S.Link>
          </S.Button>
          <S.Button
            onClick={() => {
              window.scroll(0, document.body.scrollHeight);
            }}
          >
            <S.Link>Informações</S.Link>
          </S.Button>
        </S.Nav>
        <S.DropDownMenu>
          <S.DropDownButton onClick={handleIsDropDownMenuOpen}>
            Menu
          </S.DropDownButton>
          {isDropDownMenuOpen && (
            <S.DropDownMenuContent>
              <S.Button
                onClick={() => {
                  window.scroll(0, 0);
                }}
              >
                <S.Link>Home</S.Link>
              </S.Button>
              <S.Button
                onClick={() => {
                  window.scroll(0, 500);
                }}
              >
                <S.Link>Trabalhe conosco</S.Link>
              </S.Button>
              <S.Button
                onClick={() => {
                  window.scroll(0, document.body.scrollHeight - 1275);
                }}
              >
                <S.Link>Contato</S.Link>
              </S.Button>
              <S.Button
                onClick={() => {
                  window.scroll(0, document.body.scrollHeight);
                }}
              >
                <S.Link>Informações</S.Link>
              </S.Button>
            </S.DropDownMenuContent>
          )}
        </S.DropDownMenu>
      </S.Content>
    </S.Container>
  );
};
