import MenuSection from "../Menu/MenuSection";
import TitleSection from "../../shared/TitleSection";
import { Bounce, Fade } from "react-awesome-reveal";

const MenuHome = () => {
  return (
    <div className="my-32">
      <Bounce triggerOnce={true}>
        <div className="my-10">
          <TitleSection
            title="Our Best MENU"
            description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
"
          />
        </div>
      </Bounce>

      <MenuSection limit={true} />
    </div>
  );
};

export default MenuHome;
