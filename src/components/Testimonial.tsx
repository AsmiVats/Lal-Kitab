import { FunctionComponent } from "react";

export type TestimonialType = {
  className?: string;
};

const Testimonial: FunctionComponent<TestimonialType> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[732px] flex flex-col items-start justify-start pt-[107px] px-0 pb-0 box-border min-w-[732px] max-w-full text-left text-111xl text-black font-alegreya mq900:pt-[70px] mq900:box-border mq1300:min-w-full mq450:pt-[45px] mq450:box-border mq1650:flex-1 ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[55px] max-w-full mq900:gap-[27px]">
        <h1 className="m-0 self-stretch h-[480px] relative text-inherit leading-[160px] font-bold font-[inherit] inline-block mq900:text-33xl mq900:leading-[96px] mq450:text-13xl mq450:leading-[64px]">
          <span>{`YOUR `}</span>
          <span className="text-color">ASTROLOGY</span>
          <span> UNLEASED</span>
        </h1>
        <div className="w-[626px] relative text-lg inline-block max-w-full">
          Lorem ipsum dolor sit amet consectetur. Pellentesque nascetur sed
          tellus ut vehicula eu consectetur elit at. Nulla erat nunc nisl dui
          sed cras semper ullamcorper.
        </div>
      <a
        href="https://whatsapp.com/channel/0029VaCvtuLK0IBclhbqYi2Z">
        <button className="cursor-pointer [border:none] py-[15px] px-5 bg-color w-[300px] flex flex-row items-start justify-center box-border whitespace-nowrap hover:bg-crimson">
          <b className="h-[33px] relative text-5xl inline-block font-alegreya text-ppp-white text-left">
            Get Started
          </b>
        </button>
        </a>
      </div>
    </div>
  );
};

export default Testimonial;
