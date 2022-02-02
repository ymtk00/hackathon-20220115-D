import Commits from 'components/commits';
import Footer from 'components/footer';
import Header from 'components/header';
import Hero from 'components/hero';
import Strength from 'components/strength';

export default function Home(){
    return (
      <>
        <link rel="icon" sizes="16x16" href="/favicon.ico" />
        <Header></Header>      
        <Hero></Hero>
        <Strength></Strength>
        <Commits></Commits>
        <Footer></Footer>
      </>
    );
};

