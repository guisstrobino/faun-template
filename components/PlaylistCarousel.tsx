import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomButtonGroup from "./CustomButtonGroup";

interface Item {
    images: { url: string }[];
    name: string;
}

interface PlaylistCarouselProps {
    items: Item[];
}

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
    },
    tablet: {
        breakpoint: { max: 1024, min: 640 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 640, min: 0 },
        items: 1,
    },
};

const PlaylistCarousel: React.FC<PlaylistCarouselProps> = ({ items }) => {
    return (
        <>
            <Carousel
                arrows={false}
                responsive={responsive}
                infinite={true}
                keyBoardControl={false}
                autoPlay={true}
                autoPlaySpeed={3000}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                renderButtonGroupOutside={true}
                customButtonGroup={
                    <CustomButtonGroup
                        next={() => {}}
                        previous={() => {}}
                        responsive={responsive}
                        children
                    />
                }
            >
                {items.map((item, index) => (
                    <div key={index} className="flex h-[321px] relative">
                        <div className="w-[480px] h-[100%] overflow-hidden shadow-lg">
                            <img
                                src={item.images[0].url}
                                alt={item.name}
                                className="w-full h-full"
                            />
                            <div className="px-6 py-4 flex justify-center">
                                <div className="absolute top-[144px] font-bebas-neue font-[700] text-[52px] text-[#ED1F34]">
                                    {item.name}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </>
    );
};

export default PlaylistCarousel;
