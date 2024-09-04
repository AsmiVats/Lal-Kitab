import { FunctionComponent } from "react";

export type LinkListType = {
  className?: string;
};

const LinkList: FunctionComponent<LinkListType> = ({ className = "" }) => {
  return (
    <section
      className={`flex flex-row items-start justify-end pt-0 px-9 pb-[148.9px] box-border max-w-full text-center text-45xl text-color font-alegreya mq900:pb-[63px] mq900:box-border mq1300:pb-[97px] mq1300:box-border ${className}`}
    >
      <div className="w-[1712px] flex flex-col items-start justify-start gap-[18px] max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-0.5">
          <h1 className="m-0 self-stretch h-[87px] relative text-inherit uppercase font-bold font-[inherit] inline-block mq900:text-32xl mq450:text-19xl">
            Courses
          </h1>
          <h1 className="m-0 self-stretch h-[228px] relative text-65xl uppercase font-bold font-[inherit] text-black whitespace-pre-wrap inline-block mq900:text-23xl mq450:text-6xl">
            Get Latest Forecast and Analysis for Success
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-11 pr-[45px] box-border max-w-full mq1300:pl-[22px] mq1300:pr-[22px] mq1300:box-border">
          <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq1650:flex-wrap">
            <img
              className="self-stretch w-[677px] relative max-h-full object-cover min-h-[873px] max-w-full"
              loading="lazy"
              alt=""
              src="/photo20240818163614-2@2x.png"
            />
            <img
              className="self-stretch w-[677px] relative max-h-full object-cover min-h-[873px] max-w-full"
              loading="lazy"
              alt=""
              src="/photo20240818163614-2@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinkList;
