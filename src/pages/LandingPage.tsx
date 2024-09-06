import { FunctionComponent } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import Testimonial from "../components/Testimonial";
import FormFieldSharp from "../components/FormFieldSharp";
import Buttondefault from "../components/Buttondefault";
import FrameComponent from "../components/FrameComponent";
import LinkList from "../components/LinkList";
import FrameComponent3 from "../components/FrameComponent3";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";

const LandingPage: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-ppp-white overflow-hidden flex flex-col items-end justify-start pt-14 pb-[125px] px-[63px] box-border gap-11 leading-[normal] tracking-[normal] xl:px-[48px] lg:px-[31px] md:px-8 md:gap-[22px]">
      <section className="flex flex-row items-start justify-end py-0 px-9 box-border max-w-full text-left text-5xl text-gray-200 font-outfit lg:px-6 md:px-4">
        <div className="w-full flex flex-col items-start justify-start gap-[33px] max-w-full xl:gap-[26px] lg:gap-[22px]">
          <FrameComponent1 />
          <div className="self-stretch flex flex-row items-start justify-start gap-[73px] max-w-full flex-wrap xl:gap-[58px] lg:gap-9 md:gap-[18px]">
            <Testimonial />
            <div className="flex-1 flex flex-col items-start justify-start gap-[42px] min-w-[300px] max-w-full xl:min-w-[500px] lg:min-w-[450px] md:min-w-full md:gap-[21px]">
              <div className="self-stretch relative max-w-full lg:min-h-[700px] xl:min-h-[800px]">
                {/* Adjusted Container */}
                <div
                  className="absolute top-[107px] left-[139px] w-[645px] max-w-full overflow-hidden flex flex-row items-start justify-center pt-7 pb-[27px] pl-[21px] pr-5 box-border bg-cover bg-no-repeat bg-[top] z-[1] xl:left-[80px] lg:left-[50px] md:left-0 md:w-full"
                  style={{
                    backgroundImage: "url('/public/wheel1-2@3x.png')",
                    backgroundSize: "cover",
                    minHeight: "100%",
                    height: "auto",
                  }}
                >
                  <div className="w-full max-w-[400px] rounded-[20px] bg-ppp-white border-ppp-grey border-[1px] border-solid box-border flex flex-col items-start justify-start py-[38px] px-[39px] gap-4 xl:px-6 lg:px-5 md:px-3 md:py-[30px]">
                    <div className="relative font-semibold md:text-lg xl:text-xl">
                      Register For Demo Class
                    </div>
                    <div className="self-stretch h-px relative border-ppp-grey border-t-[1px] border-solid box-border" />
                    <div className="self-stretch rounded-2xl flex flex-col items-center justify-start gap-2 text-3xs text-black-80">
                      {/* Form fields */}
                      <div className="self-stretch flex flex-col items-start justify-start">
                        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[15px] gap-1">
                          <div className="relative">Name</div>
                          <input
                            className="w-full [border:none] [outline:none] bg-ppp-white self-stretch h-10 shadow-[0px_-1px_0px_#484747_inset] flex flex-row items-start justify-start py-[11px] px-2 box-border font-outfit font-medium text-sm text-gray-200"
                            placeholder="Jack Sullivan"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start">
                        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[15px] gap-1">
                          <div className="relative">Email</div>
                          <input
                            className="w-full [border:none] [outline:none] bg-ppp-white self-stretch h-10 shadow-[0px_-1px_0px_#484747_inset] flex flex-row items-start justify-start py-[11px] px-2 box-border font-outfit font-medium text-sm text-gray-200"
                            placeholder="jack.s@email.com"
                            type="text"
                          />
                        </div>
                      </div>
                      <FormFieldSharp
                        labelText="Phone No."
                        fieldText="9876543210"
                      />
                    </div>
                    {/* Wrap the Buttondefault component with an anchor link */}
                    <a
                      href="https://whatsapp.com/channel/0029VaCvtuLK0IBclhbqYi2Z"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Buttondefault />
                    </a>
                  </div>
                </div>
                {/* Adjust other sections */}
                <div className="absolute top-0 left-0 w-full h-full">
                  <div className="absolute h-full top-0 bottom-0 left-[12px] [filter:blur(400px)] rounded-[50%] bg-firebrick w-[895px]" />
                  {/* Additional stars */}
                  <img
                    className="absolute top-[24px] left-[64px] w-[29px] h-[29px] z-[1] md:w-[20px] md:h-[20px]"
                    loading="lazy"
                    alt=""
                    src="/star-1.svg"
                  />
                  <img
                    className="absolute top-[194px] left-[79px] w-3.5 h-3.5 z-[1] md:w-2.5 md:h-2.5"
                    alt=""
                    src="/star-2.svg"
                  />
                  <img
                    className="absolute top-[431px] left-0 w-[58px] h-[58px] z-[1] md:w-[40px] md:h-[40px]"
                    loading="lazy"
                    alt=""
                    src="/star-4.svg"
                  />
                  {/* ... */}
                </div>
              </div>
              <FrameComponent />
            </div>
          </div>
        </div>
      </section>
      {/* Other components */}
      <LinkList />
      <FrameComponent3 />
      <Gallery />
      <Footer />
    </div>
  );
};

export default LandingPage;
