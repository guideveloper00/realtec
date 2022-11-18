import * as S from "./styles";

type ISectionintershipProps = {
  internshipInfo: string;
};

export const SectionInternship = ({
  internshipInfo,
}: ISectionintershipProps) => {
  const internshipInfos = internshipInfo.split(".");
  return (
    <S.Section>
      <S.SectionContent>
        <S.Title>Programa de Estágio Realtec 2023</S.Title>
        {internshipInfos.map((internshipInfo, key) => (
          <S.P key={key}>{internshipInfo}</S.P>
        ))}
      </S.SectionContent>
    </S.Section>
  );
};
