import { FunctionComponent } from "react";

export type LinkListType = {
  className?: string;
};

const LinkList: FunctionComponent<LinkListType> = ({ className = "" }) => {
  return (
    <section
      className={`flex flex-col items-center justify-start pt-0 px-9 pb-[148.9px] box-border max-w-full text-center text-45xl text-color font-alegreya mq900:pb-[63px] mq1300:pb-[97px] ${className}`}
    >
      <div className="w-full flex flex-col items-center justify-start gap-[18px] max-w-full">
        {/* Heading Section */}
        <div className="self-stretch flex flex-col items-center justify-start gap-0.5 text-center">
          <h1 className="m-0 text-[inherit] uppercase font-bold text-45xl sm:text-32xl sm:text-center">
            Courses
          </h1>
          <h1 className="m-2 w-1/2 text-[inherit] uppercase font-bold text-black text-33xl sm:text-23xl sm:leading-tight">
            Get Latest Forecast and Analysis for Success
          </h1>
        </div>

        {/* Images Section */}
        <div className="flex flex-row items-start justify-between w-full  flex-wrap">
          <img
            className="w-2/5 object-cover "
            loading="lazy"
            alt="Course Image 1"
            src="/photo20240818163614-2@2x.png"
          />
          <img
            className="w-2/5 object-cover "
            loading="lazy"
            alt="Course Image 2"
            src="/photo20240818163614-2@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default LinkList;
