import TitleSection from "../../shared/TitleSection";
import article1 from "../../assets/artcile1.jpg";
import article2 from "../../assets/artcile2.jpg";
import article3 from "../../assets/artcle3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Zoom } from "react-awesome-reveal";
const Article = () => {
  const article = [
    {
      id: 1,
      img: article1,
      title: "LOOK HOW WE MAKE BEEF MEAT TASTY WITH THIS TECHNIQUE",
      details:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
    },
    {
      id: 2,
      img: article2,
      title: "GET A 20% DISCOUNT AT OUR BIRTHDAY EVENT FOR $20 SPEND",
      details:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
    },
    {
      id: 3,
      img: article3,
      title: "STRAWBERRY SMOOTHIE IS THE BEST BEVERAGE FOR YOUR HOT DAY",
      details:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto my-32">
      <TitleSection
        title="OUR NEWS & ARTICLE"
        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
"
      />
      <div className="grid lg:grid-cols-3 gap-10 mt-20 p-2">
        {article.map((e) => (
          <Zoom key={e?.id} triggerOnce={true}>
            <div>
              <img className="rounded" src={e.img} alt="" />
              <h2 className="my-5 font-bold text-2xl text-white">{e.title}</h2>
              <p className="">{e.details}</p>
              <div className="flex items-center text-yellow-500">
                <button className="my-3 me-2 text-yellow-500">Read more</button>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
          </Zoom>
        ))}
      </div>
    </div>
  );
};

export default Article;
