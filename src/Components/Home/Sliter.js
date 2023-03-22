import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";


const items = [
  {
    src:
      "https://i.pinimg.com/originals/0e/b8/81/0eb88182393e864552ff0b3f4fff03ff.jpg",
    altText: "Grab the offer",
    caption: "Offer 1",
    key: 1,
  },
  {
    src:
      "https://motionarray-portfolio.imgix.net/preview-557284-SizU7ni3rw-high_0016.jpg",
    altText: "BOGO",
    caption: "Offer 2",
    key: 2,
  },
  {
    src:
    "https://www.dominos.co.in/great-deals/online-pizza-coupons/images/story_images/evd/evd-199.jpg",
    altText: "Flash sale",
    caption: "Offer 3",
    key: 3,
  },
];

function Sliter(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default Sliter