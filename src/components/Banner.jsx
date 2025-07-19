import React from 'react'
import banimg from "../assets/banner.png"
import "slick-carousel/slick/slick.css";
import Slider from 'react-slick'
const Banner = () => {
    let settings = {
    dots:true,
    infinite: true,
    arrows: false,
    speed: 500,
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
      <div
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
   <section className=''>
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