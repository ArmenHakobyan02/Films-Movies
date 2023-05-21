import "./Header.css"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {BsFillPlayFill} from "react-icons/bs"

import {DomName, PostRequire} from "../../utils"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Header.css";
// import required modules
import { Keyboard, Pagination, Navigation } from "swiper";

export const Header = () => {

    const state = useSelector(state => state.FilmsReducer.data)
    const NewYear = new Date().getUTCFullYear()

    return (
        <header className='Header-App'>
            <Swiper
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                slidesPerView={1}
                keyboard={{
                    enabled: true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Keyboard, Pagination, Navigation]}
                className="mySwiper"
            // breakpoints={{
            //     // when window width is >= 640px
            //     280: {
            //         width: 350,
            //         slidesPerView: 1,
            //     },
            //     350: {
            //         width: 400,
            //         slidesPerView: 1,
            //     },
            //     450: {
            //         width: 530,
            //         slidesPerView: 1,
            //     },
            //     550: {
            //         width: 750,
            //         slidesPerView: 1,
            //     },
            //     700: {
            //         width: 800,
            //         slidesPerView: 1,
            //     },
            //     // when window width is >= 768px
            //     770: {
            //         width: 850,
            //         slidesPerView: 2,
            //     },
            //     1024: {
            //         width: 1000,
            //         slidesPerView: 2,
            //     },
            //     1100: {
            //         width: 1300,
            //         slidesPerView: 2,
            //     }

            // }}
            >
                {
                    state.filter(({ year, BigImg }) => BigImg ? year === NewYear : null)
                        .map((item) => {
                            return (
                                <SwiperSlide key={item.id}>
                                    <Link to={DomName(item)} onClick={()=> PostRequire(item)}>
                                        <img className="Images-Name" src={item.NameImg} />
                                        <img src={item.BigImg} alt={item.Name}  />
                                        <div className="Header_rating"> {item.age} </div>
                                        <div>
                                            <button className="Header_Click">
                                                <BsFillPlayFill />
                                                Դիտել Ֆիլմը
                                            </button>
                                        </div>
                                    </Link> 
                                </SwiperSlide> 
                            ) 
                        })
                }
            </Swiper>
        </header>
    )
}


