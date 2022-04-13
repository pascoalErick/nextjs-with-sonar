import { Button } from "components/Button";
import { Input } from "components/Input";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Teste SonarCloud </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Input label="Digite aqui" />
      <Button>Pesquisar</Button>
    </div>
  );
};

export default Home;
