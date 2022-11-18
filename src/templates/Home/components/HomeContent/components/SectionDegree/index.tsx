import * as S from "./styles";

export const SectionDegree = () => {
  return (
    <S.Section>
      <S.SectionContent>
        <S.TextPosition>
          <S.SubtitleDegree>Cursos:</S.SubtitleDegree>
          <S.PDegree>Bacharelando a partir do 3ª periodo em:</S.PDegree>
          <S.CardDegreePosition>
            <S.CardDegree>
              <S.AdmIcon />
              Administração
            </S.CardDegree>
            <S.CardDegree>
              <S.AccountIcon />
              Ciências Contábeis
            </S.CardDegree>
            <S.CardDegree>
              <S.ItIcon />
              Sistemas de Informação
            </S.CardDegree>
            <S.CardDegree>
              <S.EnginnerIcon />
              Engenharia de Produção
            </S.CardDegree>
            <S.CardDegree>
              <S.AgroIcon />
              Agronomia
            </S.CardDegree>
            <S.CardDegree>
              <S.LawIcon />
              Direito
            </S.CardDegree>
          </S.CardDegreePosition>
        </S.TextPosition>
      </S.SectionContent>
    </S.Section>
  );
};
