import MenuSection from "./MenuSection";
import TitleSection from "../../shared/TitleSection";
import PaydaySection from "../Home/PaydaySection";
import UpdateSection from "../Home/UpdateSection";
import useTitle from "../../hooks/UseTitle";

const Menu = () => {
  useTitle("MENU");
  return (
    <div className="">
      <div className="my-32">
        <TitleSection
          title="MENU"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
"
        />
      </div>

      <MenuSection />
      <PaydaySection />
      <UpdateSection />
    </div>
  );
};

export default Menu;
