const HomeCarousel = () => {
  let imglist = [
    "/images/banner1.jpeg",
    "/images/banner2.jpeg",
    "/images/banner3.jpeg",
    "/images/banner4.jpg",
  ];

  let imgno = 1;
  setInterval(() => {
    if (document.getElementById("crousalimg") !== null) {
      document.getElementById("crousalimg").src = imglist[imgno];
      imgno++;

      if (imgno >= imglist.length - 1) {
        imgno = 0;
      }
    }
  }, 4000);
  return (
    <div>
      <div>
        {/* <Slider {...settings}>
          <div>
            <img src='/images/banner1.jpg' alt='' />
          </div>
          <div>
            <img src='/images/banner2.jpg' alt='' />
          </div>
          <div>
            <img src='/images/banner3.jpg' alt='' />
          </div>
          <div>
            <img src='/images/banner4.jpg' alt='' />
          </div>
        </Slider> */}

        <img id="crousalimg" src="/images/banner1.jpeg" alt="" />
      </div>
    </div>
  );
};

export default HomeCarousel;
