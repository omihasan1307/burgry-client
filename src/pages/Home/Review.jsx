import TitleSection from "../../shared/TitleSection";
import Slider from "react-slick";

const settings = {
  previewArrow: false,
  infinite: true,
  arrows: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1366,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const Review = () => {
  const review = [
    {
      id: 1,
      name: "John Smith",
      designation: "Food Blogger",
      pic: "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm328-366-tong-08_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=6a37204762fdd64612ec2ca289977b5eg",
      review:
        "The burger here is absolutely fantastic! It's juicy, flavorful, and cooked to perfection. I love the combination of toppings and the soft.",
    },
    {
      id: 2,
      name: "Emily Johnson",
      designation: "Food Critic",
      pic: "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?b=1&s=170667a&w=0&k=20&c=YQ_j83pg9fB-HWOd1Qur3_kBmG_ot_hZty8pvoFkr6A=",
      review:
        "I've had my fair share of burgers, but this one stands out. The patty is made with high-quality beef, and you can taste the difference. ",
    },
    {
      id: 3,
      name: "Michael Williams",
      designation: "Restaurant Owner",
      pic: "https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg",
      review:
        "As a restaurant owner, I'm always on the lookout for the best burgers in town. This one is hands down one of the best. ",
    },
    {
      id: 4,
      name: "Sophia Lee",
      designation: "Foodie",
      pic: "https://image.shutterstock.com/image-photo/image-happy-young-business-woman-260nw-1215373642.jpg",
      review:
        "This burger blew my mind! The flavors are bold and mouthwatering. I couldn't get enough of it.This one is hands down one of the best. ",
    },
    {
      id: 5,
      name: "David Martin",
      designation: "Burger Enthusiast",
      pic: "https://media.istockphoto.com/id/471947590/photo/its-time-to-get-serious.jpg?s=170667a&w=0&k=20&c=tMH2jGGvhgC42UgApE7-R7cGl83GIt8ylHXQh7PRnWQ=",
      review:
        "I consider myself a burger connoisseur, and this burger exceeded my expectations. It's evident that they put thought .",
    },
  ];

  return (
    <div className=" px-2 py-32 bg-[#171717]">
      <TitleSection
        title="CUSTOMER REVIEW"
        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa.
"
      />
      <div className="max-w-screen-xl mx-auto">
        <Slider {...settings}>
          {review.map((e) => (
            <div key={e.id} className=" mt-12">
              <div className="bg-black w-10/12 rounded-lg mx-auto overflow-hidden py-6">
                <div className="py-3">
                  <div className="content px-8 space-y-4 ">
                    <p className="text-sm mb-8">{e.review}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center justify-between gap-2">
                        <img
                          src={e.pic}
                          alt=""
                          className="h-12 w-12 rounded-full object-cover"
                        />
                        <div>
                          <h2 className="text-xl text-yellow-500">{e.name}</h2>
                          <p className="text-sm">{e.designation}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Review;
