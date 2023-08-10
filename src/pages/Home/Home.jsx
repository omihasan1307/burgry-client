import Banner from "./Banner";
import ItemSection from "./ItemSection";
import PaydaySection from "./PaydaySection";
import AboutHome from "./AboutHome";
import UpdateSection from "./UpdateSection";
import Review from "./Review";
import Reservation from "./REservation";
import Article from "./Article";
import MenuHome from "./MenuHome";
import useTitle from "../../hooks/UseTitle";

const Home = () => {
  useTitle("HOME");
  return (
    <div>
      <Banner />
      <ItemSection />
      <PaydaySection />
      <AboutHome />
      <MenuHome />
      <Review />
      <Reservation />
      <Article />
      <UpdateSection />
    </div>
  );
};

export default Home;
