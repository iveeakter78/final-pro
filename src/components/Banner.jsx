import React from 'react'
import banimg from "../assets/banner.png"
import "slick-carousel/slick/slick.css";
import Slider from 'react-slick'
const Banner = () => {
    let settings = {
    dots:true,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div
        style={{
           position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          left: "10%",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div className='one'
        style={{
         width:"28px",
          color:"transparent",
           padding: "5px 0",
          borderRight:"2px solid white",
        }}
      >
        0{i + 1}
      </div>
    )
  };
  return (
    <>
   <section id='banner' className=''>
     <Slider {...settings}>
         <div>
        <img src={banimg} alt="" />
     </div>
       <div>
        <img src={banimg} alt="" />
     </div>
       <div>
        <img src={banimg} alt="" />
     </div>
       <div>
        <img src={banimg} alt="" />
     </div>
    </Slider>
   </section>
    
    </>
  )
}

export default Banner