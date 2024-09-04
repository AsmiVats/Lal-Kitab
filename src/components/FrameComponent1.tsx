import { FunctionComponent } from "react";
import Main from "./Main";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <header
      className={`flex flex-row items-start justify-start py-0 px-10 box-border max-w-full ${className}`}
    >
      <div className="w-[1623px] flex flex-row items-start justify-between gap-5 max-w-full mq900:w-[1152px]">
        <img
          className="h-[42px] w-[79px] relative object-cover"
          loading="lazy"
          alt=""
          src="/whatsapp-image-20240813-at-183210removebgpreview-1@2x.png"
        />
        <Main />
      </div>
    </header>
  );
};

export default FrameComponent1;
