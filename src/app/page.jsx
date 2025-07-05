import MainBlock from "../components/pages/index/MainBlock/MainBlock";
import AboutUs from "../components/pages/index/AboutUs/AboutUs";
import LatestNews from "../components/pages/index/LatestNews/LatestNews";
import IsFeedback from "../components/pages/index/IsFeedback/IsFeedback";
import PaymentDetails from "../components/pages/index/PaymentDetails/PaymentDetails";

export default function Home() {
  return (
    <>
      <main>
        <MainBlock />
        <AboutUs />
        <LatestNews />
        <PaymentDetails />
        <IsFeedback />
      </main>
    </>
  );
}
