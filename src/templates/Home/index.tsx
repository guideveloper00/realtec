import Head from "next/head";
import * as S from "./styles";
import { Header } from "../../components/Header";
import EstagioBanner from "../../../public/banner-estagio.png";
import { HomeContent } from "./components/HomeContent";
import { ContactUs } from "./components/ContactUs";
import { Footer } from "../../components/Footer";
import { IServerSideProps } from "./types";

export default function Home({
  internshipInfo,
  companyInfo,
}: IServerSideProps) {
  return (
    <>
      <Head>
        <title>Realtec</title>
        <meta name="Realtec" />
        <link
          rel="shortcut icon"
          href="http://realtec.com.br/wp-content/uploads/2018/03/favicon.png"
        />
      </Head>
      <Header />
      <S.Container>
        <S.Banner src={EstagioBanner} alt={"Realtec"} />
        <HomeContent
          internshipInfo={internshipInfo}
          companyInfo={companyInfo}
        />
        <ContactUs />
      </S.Container>
      <Footer />
    </>
  );
}
