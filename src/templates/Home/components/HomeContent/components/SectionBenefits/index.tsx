import * as S from "./styles";

export const SectionBenefits = () => {
  return (
    <S.Section>
      <S.SectionContent>
        <S.TextPosition>
          <S.Subtitle>Beneficios:</S.Subtitle>
          <S.CardBenefitsPosition>
            <S.CardBenefits>
              <S.BenefitsIcon />
              Bolsa de estudo: R$700,00 a R$1.000,00
            </S.CardBenefits>
            <S.CardBenefits>
              <S.DaysIcon />
              Dias Flexíveis de trabalho;
            </S.CardBenefits>
            <S.CardBenefits>
              <S.MobilityIcon />
              Transporte Rio Paranaíba e Matutina;
            </S.CardBenefits>
            <S.CardBenefits>
              <S.CoursesIcon />
              Acesso a treinamentos técnicos através da nossa plataforma EAD
              RealtecCapacita;
            </S.CardBenefits>
            <S.CardBenefits>
              <S.ClassIcon />
              Mentoria e Tutoria de especialistas na área de atuação;
            </S.CardBenefits>
            <S.CardBenefits>
              <S.CodeDressIcon />
              Code Dress Flexivel e um ambiente de muita diversidade.
            </S.CardBenefits>
          </S.CardBenefitsPosition>
        </S.TextPosition>
      </S.SectionContent>
    </S.Section>
  );
};
