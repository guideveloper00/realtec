import * as S from "./styles";
import RequirementsImg from "../../../../../../../public/requests.png";
import bannerWoman from "../../../../../../../public/banner_woman.jpg";

export const SectionRequests = () => {
  return (
    <S.Section>
      <S.SectionContent>
        <S.TextPosition>
          <S.Subtitle>Pré-Requisitos:</S.Subtitle>
          <S.CardsRequestsPosition>
            <S.CardRequests>
              <S.ImagePng src={RequirementsImg} alt={"pre requisitos"} />
              Estamos em busca de pessoas que sejam protagonistas de suas
              carreiras, inconformadas e com atitude de dono.
            </S.CardRequests>
            <S.CardRequests>
              <S.ImagePng src={RequirementsImg} alt={"pre requisitos"} />
              Aqui você vai encontrar autonomia para fazer e um ambiente
              colaborativo para seu crescimento.
            </S.CardRequests>
          </S.CardsRequestsPosition>
        </S.TextPosition>
        <S.ImageBackground src={bannerWoman} alt={"pre requisitos"} />
      </S.SectionContent>
    </S.Section>
  );
};
