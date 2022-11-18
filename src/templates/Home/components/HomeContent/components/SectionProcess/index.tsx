import * as S from "./styles";

export const SectionProcess = () => {
  return (
    <S.Section>
      <S.SectionContent>
        <S.TextPosition>
          <S.Subtitle>Etapas:</S.Subtitle>
          <S.CardPosition>
            <S.Card delay={"0.2s"}>
              <S.ProcessOrder>1</S.ProcessOrder>
              Inscrições: 14/11 a 14/12
              <S.ArrowRightPosition>
                <S.ArrowLeftIcon />
              </S.ArrowRightPosition>
              <S.ArrowDownPosition>
                <S.ArrowDownIcon />
              </S.ArrowDownPosition>
            </S.Card>
            <S.Card delay={"0.8s"}>
              <S.ProcessOrder>2</S.ProcessOrder>
              Teste Perfil Comportamental: Novembro/Dezembro
              <S.ArrowRightPosition>
                <S.ArrowLeftIcon />
              </S.ArrowRightPosition>
              <S.ArrowDownPosition>
                <S.ArrowDownIcon />
              </S.ArrowDownPosition>
            </S.Card>
            <S.Card delay={"1.4s"}>
              <S.ProcessOrder>3</S.ProcessOrder>
              Entrevista online com RH e Gestor: Dezembro
              <S.ArrowRightPosition>
                <S.ArrowLeftIcon />
              </S.ArrowRightPosition>
              <S.ArrowDownPosition>
                <S.ArrowDownIcon />
              </S.ArrowDownPosition>
            </S.Card>
            <S.Card delay={"2s"}>
              <S.ProcessOrder>4</S.ProcessOrder>
              Devolutiva de Aprovação: Janeiro
              <S.ArrowRightPosition>
                <S.ArrowLeftIcon />
              </S.ArrowRightPosition>
              <S.ArrowDownPosition>
                <S.ArrowDownIcon />
              </S.ArrowDownPosition>
            </S.Card>
            <S.Card delay={"2.6s"}>
              <S.ProcessOrder>5</S.ProcessOrder>
              Inicio: Janeiro
              <S.ArrowRightPosition>
                <S.ArrowLeftIcon />
              </S.ArrowRightPosition>
              <S.ArrowDownPosition>
                <S.ArrowDownIcon />
              </S.ArrowDownPosition>
            </S.Card>
          </S.CardPosition>
          <S.Button>Inscreva-se</S.Button>
        </S.TextPosition>
      </S.SectionContent>
    </S.Section>
  );
};
