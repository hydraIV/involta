import $ from "jquery";
import slick from "slick-carousel";

const slickInit = () => {
  // Mount slick-slider to 'container'
  const mountSlider = (container) => {
    $(container).slick({
      cssEase: 'linear',
      arrows: false,
      swipeToSlide: true,
      responsive: [{
          breakpoint: 10000,
          settings: 'unslick'
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            fade: false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            cssEase: 'linear',
          }
        },
      ]
    });
  };
  // Mount slider if window width smaller then 1024px and watch for resize event to remount slider
  if (window.innerWidth < 1024) {
    mountSlider('.news-section');
  }
  window.addEventListener('resize', () => {
    if (!$('.news-section').hasClass('slick-initialized')) {
      mountSlider('.news-section');
    }
  });
}

export default slickInit;