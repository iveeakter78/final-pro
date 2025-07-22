import React, { useContext } from 'react'
import Container from './Container'
import item from "../assets/it-1.png"
import climg from "../assets/cl.png"
import { FaArrowLeft, FaHeart, FaLongArrowAltLeft, FaLongArrowAltRight, FaShoppingCart } from 'react-icons/fa'
import { CiRedo } from 'react-icons/ci'
import { IoGitCompare } from 'react-icons/io5'
import { ApiData } from './ContextApi'
import Slider from 'react-slick'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="nextButton"
      style={{ ...style, display: "block",}}
      onClick={onClick}
     ><FaLongArrowAltLeft /></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="prevButton"
      style={{ ...style, display: "block", }}
      onClick={onClick}
   ><FaLongArrowAltRight /></div>
  );
}

const Arrive = () => {
    let data = useContext(ApiData);
    // console.log(data);
    let newarrival = {
    infinite: true,
    speed:500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
     responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      }
    ]
    };
  return (
    <>
    <section className='pt-[128px]'>
        <Container>
            <h3 className='text-[#262626] font-dm font-bold text-[39px] ms-[10px] lg:ms-0'>New Arrivals</h3>
            <div id='arrive' className='mt-[48px] mx-2 lg:mx-0'>
              <Slider {...newarrival}>
                    {data.map((item) =>(
                       <div className='!w-[95%]'>
                    <div className='relative group bg-[#D8D8D8]'>
                       <a className='text-[#FFFFFF] font-dm font-bold 
                        absolute top-[10px] left-[10px] text-[14px] py-2 px-6 bg-black' href="#">{item.rating}</a>
                         <div className=''>
                         <img src={item.thumbnail} alt="" />
                     </div>
                             <div className='bg-[#FFFFFF] absolute bottom-0 right-0 w-full opacity-0 group-hover:opacity-100 duration-300 ease-in-out'>
                      <ul className='py-3'>
                          <li className='flex items-center justify-end pr-[20px]'><span className='text-[#262626] hover:text-[#767676] duration-300 
                          ease-in-out font-dm font-normal text-[16px]'>Add to Wish List</span>
                                 <div className='ms-[10px]'>
                                <FaHeart />
                            </div>
                          </li>
                        <li className='flex items-center py-2 justify-end pr-[20px]'><span className='text-[#262626] hover:text-[#767676] duration-300 
                          ease-in-out font-dm font-normal text-[16px]'>Compare</span>
                            <div className='ms-[10px]'>
                                <IoGitCompare />
                            </div>
                        </li>     
                       <li className='flex items-center justify-end pr-[20px]'><span className='text-[#262626] hover:text-[#767676] duration-300 
                          ease-in-out font-dm font-normal text-[16px]'>Add to Cart</span>
                       <div className='ms-[10px]'>
                                 <FaShoppingCart />
                            </div>
                       </li>
                            
                      </ul>
                </div>
                    </div>
                 <div className='flex justify-between mt-[24px]'>
                        <div>
                          <h3 className='text-[#262626] font-dm font-bold text-[20px]'>{item.title}</h3>
                           <h4 className='text-[#767676] font-dm font-normal text-[16px]'>{item.brand}</h4>
                        </div>
                        <div className=''>
                          <p className='text-[#767676] font-dm font-bold text-[16px]'>{item.price}</p>
                        </div>
                     </div>
                </div>
                    ))}
              </Slider>
            </div>
            <div className='mt-[130px] mx-2 lg:mx-0'>
              <div className='w-full'>
                <img className='w-full' src={climg} alt="" />
              </div>
            </div>
        </Container>
    </section>
    </>
  )
}

export default Arrive