
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Background from "../components/Background";
import Boxes from "../components/Boxes";
import Slider from '../components/Slider';
import CardWrapper from '../components/CardWrapper';
import Appstores from '../components/Appstores';
import Social from "../components/Social";

const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>E-Devlet Ticaret Platformu</title>
        <meta
          name="description"
          content=""
        />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Header mode='home'/>
      <Background />
      <Boxes />
      <Slider />
      <CardWrapper />
      <Appstores />
      <Social />
    </div>
  );
};

export default Home;
