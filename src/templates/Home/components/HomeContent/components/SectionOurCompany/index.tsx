import * as S from "./styles";
import Company from "../../../../../../../public/banner_company.jpg";

type ISectionOurCompanyProps = {
  companyInfo: string;
};

export const SectionOurCompany = ({ companyInfo }: ISectionOurCompanyProps) => {
  return (
    <S.SectionOurCompany>
      <S.Subtitle>Quem somos</S.Subtitle>
      <S.P>{companyInfo}</S.P>
      <S.Logo src={Company} alt="logo"></S.Logo>
    </S.SectionOurCompany>
  );
};
