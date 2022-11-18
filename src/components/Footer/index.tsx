import Link from "next/link";
import * as S from "./styles";

export const Footer = () => {
  return (
    <S.Container>
      <S.FooterInfos>
        <S.SocialMedias>
          <S.Title>Redes Sociais</S.Title>
          <Link href={"https://www.facebook.com/realtecsistemas/"}>
            Facebook
          </Link>
        </S.SocialMedias>
        <S.CompanyInfos>
          <S.Title>Informações</S.Title>
          <div>
            <S.P>Av. José Bernardes Filho, 1205</S.P>
            <S.P>Santa Teresinha – São Gotardo – MG</S.P>
            <S.P>Cep 38800-000</S.P>
            <S.P>Fone: (34) 3671-2394</S.P>
          </div>
        </S.CompanyInfos>
      </S.FooterInfos>
      <S.FooterCopyrightPosition>
        <S.FooterCopyright>
          Todos os Direitos Reservados Realtec 2018. Desenvolvido por:&nbsp;
          <Link href={"github.com/guideveloper00?tab=repositories"}>
            Guilherme Gonçalves
          </Link>
        </S.FooterCopyright>
      </S.FooterCopyrightPosition>
    </S.Container>
  );
};
