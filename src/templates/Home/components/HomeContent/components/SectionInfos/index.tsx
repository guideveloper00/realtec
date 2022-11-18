import * as S from "./styles";

export const SectionInfos = () => {
  return (
    <S.Section>
      <S.SectionContent>
        <S.TextPosition>
          <S.SubtitleInfos>Informações:</S.SubtitleInfos>
          <S.CardDegreePosition>
            <S.CardDegree>
              <S.TimeIcon />
              Duração: 06 meses (Prorrogável até 24 meses);
            </S.CardDegree>
            <S.CardDegree>
              <S.WorkIcon />
              Carga horaria: 20 até 30 horas semanais (De acordo com a
              disponibilidade de horário do estudante);
            </S.CardDegree>
            <S.CardDegree>
              <S.PlaceIcon />
              Local das Vagas: São Gotardo/MG;
            </S.CardDegree>
          </S.CardDegreePosition>
        </S.TextPosition>
      </S.SectionContent>
    </S.Section>
  );
};
