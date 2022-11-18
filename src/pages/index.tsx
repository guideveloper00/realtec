import { GetStaticProps } from "next";
import Home from "../templates/Home";
import { IServerSideProps } from "../templates/Home/types";

export default function Index({
  internshipInfo,
  companyInfo,
}: IServerSideProps) {
  return <Home internshipInfo={internshipInfo} companyInfo={companyInfo} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const internshipInfo =
    "O programa de Estágio Realtec 2023 está com inscrições abertas e você não pode ficar de fora.A Realtec tem como propósito impactar os negócios de seus clientes com suas soluções de gestão.Gestão humanizada, Protagonismo e Evolução através do Aprendizado faz parte do nosso jeito de ser.Se você acredita em nosso propósito e fit cultural vem fazer parte do nosso time.";
  const companyInfo =
    "Fundada em 2001, a Realtec é uma empresa oferece solução ERP para empresas do varejo e agronegócio. Atuamos nos estados de MG, SP, GO, PR E BA para os maiores produtores do Brasil. Atualmente, a empresa possui um time diverso com 75 colaboradores.";

  return {
    props: { internshipInfo, companyInfo },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
