import React, { useContext } from "react";
import { CarouselProps } from "react-multi-carousel";
import { AppContext } from "../contexts/AppContext";

export interface CustomButtonGroupProps extends CarouselProps {
    next: () => void;
    previous: () => void;
}

const CustomButtonGroup: React.FC<CustomButtonGroupProps> = ({
    next,
    previous,
    ...rest
}) => {
    const { isOnPlaceHolder } = useContext(AppContext);

    return (
        isOnPlaceHolder && (
            <div className="absolute right-[77px] top-[0px]">
                <button onClick={previous}>
                    <i className="fa fa-angle-left text-[52px] text-white mr-[11px]"></i>
                </button>
                <button onClick={next}>
                    <i className="fa fa-angle-right text-[52px] text-white"></i>
                </button>
            </div>
        )
    );
};

export default CustomButtonGroup;
