import { useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./banner.css";
import img1 from '../../../../assets/allProducts/flowers/flower1.jpg';
import img2 from '../../../../assets/allProducts/flowers/flower3.jpg';
import img3 from '../../../../assets/allProducts/setThami/thami2.jpg'
import img4 from '../../../../assets/allProducts/handBag/bag1.jpg';
import img5 from '../../../../assets/allProducts/pussyCat/cat1.jpg';

const bannerData = [
    {
        id: 1,
        image: img1,
        heading:"This is heading 1"
    },
    {
        id: 2,
        image: img2,
        heading:"This is heading 2"
    },
    {
        id: 3,
        image: img3,
        heading:"This is heading 3"
    },
    {
        id: 4,
        image: img4,
        heading:"This is heading 4"
    },
    {
        id: 5,
        image: img5,
        heading:"This is heading 5"
    },
]
const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [autoScroll, setAutoScroll] = useState(true);

    const slideLength = bannerData.length;
    let slideInterval;

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
        console.log("prev");
    };

    function auto() {
        slideInterval = setInterval(nextSlide, 6000);
    }

    useEffect(() => {
        setCurrentSlide(0);
    }, []);

    useEffect(() => {
        if (autoScroll) {
            auto();
        }
        return () => clearInterval(slideInterval);
    }, [currentSlide]);

    return (
        <div className="slider">
            <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
            <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />
            {autoScroll ? (
                <FaPauseCircle
                    className="fa-icon"
                    onClick={() => setAutoScroll(!autoScroll)}
                />
            ) : (
                <FaPlayCircle
                    className="fa-icon"
                    onClick={() => setAutoScroll(!autoScroll)}
                />
            )}
            {bannerData.map((slide, index) => {
                return (
                    <div
                        className={index === currentSlide ? "slide current" : "slide"}
                        key={index}
                    >
                        {index === currentSlide && (
                            <div>
                                <img src={slide.image} alt="slide" className="image" />
                                <div className="content">
                                    <h2 className="underline underline-offset-8 decoration-solid decoration-rose-600">
                                        {slide.heading}
                                    </h2>
                                    <p>{slide.desc}</p>
                                    <hr />
                                    <Link className="btn outline-none border-none bg-gradient-to-r from-green-400 to-blue-500 text-white cursor-pointer">
                                        Explore Now
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default Banner;