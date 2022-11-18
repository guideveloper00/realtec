import * as S from "./styles";

import { IServerSideProps } from "../../types";
import { SectionInternship } from "./components/SectionInternship";
import { SectionRequests } from "./components/SectionRequests";
import { SectionDegree } from "./components/SectionDegree";
import { SectionBenefits } from "./components/SectionBenefits";
import { SectionProcess } from "./components/SectionProcess";
import { SectionInfos } from "./components/SectionInfos";
import { SectionOurCompany } from "./components/SectionOurCompany";

export const HomeContent = ({
  internshipInfo,
  companyInfo,
}: IServerSideProps) => {
  return (
    <S.Container>
      <SectionInternship internshipInfo={internshipInfo} />
      <SectionRequests />
      <SectionDegree />
      <SectionBenefits />
      <SectionInfos />
      <SectionProcess />
      <SectionOurCompany companyInfo={companyInfo} />
    </S.Container>
  );
};
