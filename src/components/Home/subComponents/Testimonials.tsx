// Dependencies
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Settings } from "react-slick";

const reviews = [
  {
    name: "Sarah Thompson",
    designation: "Small Business Owner",
    rating: "⭐⭐⭐⭐⭐",
    comment:
      "❝ I had a good experience. They came out quickly, on time and took care of my issue for a fair price. The tech was knowledgeable and polite. He didn’t try to push me into anything I didn’t need. Gave me options for my specific Drain. I will definitely be calling them back if I need another plumber. ❞",
  },
  {
    name: "Alex Martin",
    designation: "Teacher",
    rating: "⭐⭐⭐⭐⭐⭐",
    comment:
      "❝ I had a good experience. They came out quickly, on time and took care of my issue for a fair price. The tech was knowledgeable and polite. He didn’t try to push me into anything I didn’t need. Gave me options for my specific Drain. I will definitely be calling them back if I need another plumber. ❞",
  },
  {
    name: " Emily Rodriguez",
    designation: "Retail Owner",
    rating: "⭐⭐⭐⭐",
    comment:
      "❝ I had a good experience. They came out quickly, on time and took care of my issue for a fair price. The tech was knowledgeable and polite. He didn’t try to push me into anything I didn’t need. Gave me options for my specific Drain. I will definitely be calling them back if I need another plumber. ❞",
  },
];

const Testimonials = () => {
  let arrows = true;

  if (window.innerWidth <= 645) {
    arrows = false;
  }

  var settings: Settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    className: "max-w-[65rem] mx-auto",
    focusOnSelect: true,
    arrows: arrows,
  };

  return (
    <div className="px-[1rem] sm:px-[3rem] py-[5rem]">
      <h1 className="font-sans font-bold text-[3rem] text-center mx-auto mb-[2rem]">What Clients Say About Us?</h1>

      <Slider {...settings}>
        {reviews.map((data, index) => (
          <div className="px-[1rem]">
            <div className="rounded-3xl p-[2rem] flex gap-[2rem]">
              <div className="w-[0.4rem] bg-[#191f22] rounded shrink-0"></div>
              <div className="flex flex-col gap-[1rem]">
                <div>
                  <h1 className="text-xl font-bold">{data.name}</h1>
                  <p className="text-default-500 text-sm">{data.designation}</p>
                </div>
                <p>{data.rating}</p>
                <p className="italic">{data.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
