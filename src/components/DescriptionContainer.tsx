import { FunctionComponent } from "react";
import Footer from "./Footer";

export type DescriptionContainerType = {
  className?: string;
};

const DescriptionContainer: FunctionComponent<DescriptionContainerType> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[1596px] flex flex-col items-start justify-start gap-[100.4px] max-w-full text-left text-sm text-gray-100 font-open-sans mq800:gap-[50px] mq450:gap-[25px] ${className}`}
    >
      <div className="flex flex-row items-start justify-start pt-0 px-[68px] pb-[9.2px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="flex flex-col items-start justify-start gap-4">
          <i className="relative leading-[28px] inline-block font-light min-w-[106.1px]">
            Why this course?
          </i>
          <div className="flex flex-col items-start justify-start gap-[31.4px] text-17xl text-black">
            <h1 className="m-0 relative text-inherit leading-[51px] font-light font-[inherit] mq800:text-10xl mq800:leading-[40px] mq450:text-3xl mq450:leading-[30px]">
              Description
            </h1>
            <div className="w-[60px] h-px relative" />
          </div>
        </div>
      </div>
      <div className="w-[944.4px] flex flex-row items-start justify-start py-0 px-[68px] box-border max-w-full text-5xl text-black mq1125:pl-[34px] mq1125:pr-[34px] mq1125:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[19px] max-w-full">
          <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[6.4px] box-border gap-[18.2px] max-w-full text-13xl">
            <div className="flex flex-col items-start justify-start">
              <h2 className="m-0 relative text-inherit leading-[45px] font-semibold font-[inherit] mq800:text-7xl mq800:leading-[36px] mq450:text-lgi mq450:leading-[27px]">
                Jyotish Basic Course
              </h2>
              <h2 className="m-0 relative text-inherit leading-[44.8px] font-semibold font-[inherit] z-[1] mt-[-0.2px] mq800:text-7xl mq800:leading-[36px] mq450:text-lgi mq450:leading-[27px]">
                Basic Astrology Course
              </h2>
            </div>
            <div className="relative text-15xl-6 leading-[49px] font-semibold mq800:text-9xl mq800:leading-[39px] mq450:text-2xl mq450:leading-[29px]">
              11 Classes
            </div>
          </div>
          <div className="relative text-2xl-4 leading-[43px] font-semibold inline-block max-w-full mq450:text-mid mq450:leading-[34px]">
            Video Lectures - Recorded Classes
          </div>
          <div className="w-[222px] relative leading-[43px] font-light flex items-center mq450:text-lgi mq450:leading-[34px]">
            Class -1 : 9 Planets
          </div>
          <div className="w-[233px] relative leading-[43px] font-light flex items-center mq450:text-lgi mq450:leading-[34px]">
            Class-2 : 12 Houses
          </div>
          <div className="w-[249px] relative leading-[43px] font-light flex items-center mq450:text-lgi mq450:leading-[34px]">
            Class-3 : 12 Rashiyan
          </div>
          <div className="w-[460px] relative leading-[43px] font-light flex items-center max-w-full mq450:text-lgi mq450:leading-[34px]">
            Class 4 : Rashiyan Descriptions Part - 1
          </div>
          <div className="w-[460px] relative leading-[43px] font-light flex items-center max-w-full mq450:text-lgi mq450:leading-[34px]">
            Class 5 : Rashiyan Descriptions Part - 1
          </div>
          <div className="w-[516px] relative leading-[43px] font-light flex items-center max-w-full mq450:text-lgi mq450:leading-[34px]">
            Class 6 - Drishti, Exalted Debilitated Planets
          </div>
          <div className="w-[385px] relative leading-[43px] font-light flex items-center max-w-full mq450:text-lgi mq450:leading-[34px]">
            Class 7 - Lagna "Aries to Cancer"
          </div>
          <div className="w-[388px] relative leading-[43px] font-light flex items-center max-w-full mq450:text-lgi mq450:leading-[34px]">
            Class 8 - Lagna "Singh to Dhanu"
          </div>
          <div className="w-96 relative leading-[43px] font-light flex items-center max-w-full mq450:text-lgi mq450:leading-[34px]">
            Class 9 - Lagna "Makar to Meen"
          </div>
          <div className="w-[549px] relative leading-[43px] font-light flex items-center max-w-full mq450:text-lgi mq450:leading-[34px]">{`Class - 10 Multrikon Rashi, Friends & Enemies.`}</div>
          <div className="w-[308px] relative leading-[43px] font-light flex items-center mq450:text-lgi mq450:leading-[34px]">
            Class - 11 Vedic Grammar
          </div>
          <div className="relative text-2xl-4 leading-[43px] font-semibold mq450:text-mid mq450:leading-[34px]">
            Validity - 4 Months
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-4 pr-0 box-border max-w-full text-2xl-4">
            <div className="flex-1 flex flex-col items-start justify-start gap-[13.8px] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[38px] pr-0 box-border max-w-full">
                <div className="flex-1 relative leading-[29px] font-semibold inline-block max-w-full mq450:text-mid mq450:leading-[23px]">
                  Be sure to watch the preview video before joining and also
                  check
                </div>
              </div>
              <div className="flex flex-col items-start justify-start max-w-full">
                <div className="w-[287px] relative leading-[43px] font-semibold flex items-center mq450:text-mid mq450:leading-[34px]">
                  the refund policy properly.  
                </div>
                <div className="relative leading-[43px] font-semibold z-[1] mt-[-0.2px] mq450:text-mid mq450:leading-[34px]">
                  https://www.gurukulastro.com/refundpolicy
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer
        footerWidth="unset"
        footerFlex="unset"
        footerAlignSelf="stretch"
        bOODOOMargin="unset"
        bOODOOFontWeight="unset"
        bOODOOHeight="unset"
        bOODOOMinWidth="113px"
        loremIpsumDolorHeight="unset"
        loremIpsumDolorDisplay="unset"
        sERVICESHeight="unset"
        sERVICESDisplay="unset"
        lINKHeight="unset"
        lINKDisplay="unset"
        termOfUseHeight="unset"
        termOfUseDisplay="unset"
        privacyPolicyDisplay="inline-block"
        privacyPolicyMinWidth="105px"
        cONTACTUSHeight="unset"
        cONTACTUSDisplay="unset"
        divHeight="unset"
        divMinWidth="99px"
      />
    </div>
  );
};

export default DescriptionContainer;
