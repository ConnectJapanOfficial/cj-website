declare module "react-slick" {
  import { Component } from "react";

  export interface Settings {
    accessibility?: boolean;
    adaptiveHeight?: boolean;
    afterChange?: (currentSlide: number) => void;
    appendDots?: (dots: React.ReactNode) => React.ReactNode;
    arrows?: boolean;
    asNavFor?: Slider;
    autoplay?: boolean;
    autoplaySpeed?: number;
    beforeChange?: (currentSlide: number, nextSlide: number) => void;
    centerMode?: boolean;
    centerPadding?: string;
    className?: string;
    cssEase?: string;
    customPaging?: (index: number) => React.ReactNode;
    dots?: boolean;
    dotsClass?: string;
    draggable?: boolean;
    easing?: string;
    edgeFriction?: number;
    fade?: boolean;
    focusOnSelect?: boolean;
    infinite?: boolean;
    initialSlide?: number;
    lazyLoad?: "ondemand" | "progressive";
    nextArrow?: React.ReactNode;
    onEdge?: (direction: string) => void;
    onInit?: () => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onLazyLoadError?: (error: any) => void;
    onReInit?: () => void;
    onSwipe?: (direction: string) => void;
    pauseOnDotsHover?: boolean;
    pauseOnFocus?: boolean;
    pauseOnHover?: boolean;
    prevArrow?: React.ReactNode;
    responsive?: Array<{
      breakpoint: number;
      settings: Partial<Settings>;
    }>;
    rows?: number;
    rtl?: boolean;
    slide?: string;
    slidesPerRow?: number;
    slidesToScroll?: number;
    slidesToShow?: number;
    speed?: number;
    swipe?: boolean;
    swipeEvent?: (direction: string) => void;
    swipeToSlide?: boolean;
    touchMove?: boolean;
    touchThreshold?: number;
    useCSS?: boolean;
    useTransform?: boolean;
    variableWidth?: boolean;
    vertical?: boolean;
    waitForAnimate?: boolean;
  }

  interface SliderProps extends Settings {
    children?: React.ReactNode;
  }

  export default class Slider extends Component<SliderProps> {
    slickNext(): void;
    slickPrev(): void;
    slickGoTo(slide: number, dontAnimate?: boolean): void;
    slickPause(): void;
    slickPlay(): void;
  }
}
