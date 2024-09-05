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
    <div className="w-full relative bg-ppp-white overflow-hidden flex flex-col items-end justify-start pt-14 pb-[125px] pl-[63px] pr-16 box-border gap-11 leading-[normal] tracking-[normal] mq900:gap-[22px] mq1300:pl-[31px] mq1300:pr-8 mq1300:box-border">
      <section className="flex flex-row items-start justify-end py-0 px-9 box-border max-w-full text-left text-5xl text-gray-200 font-outfit">
        <div className="w-[1712px] flex flex-col items-start justify-start gap-[33px] max-w-full mq900:gap-4">
          <FrameComponent1 />
          <div className="self-stretch flex flex-row items-start justify-start gap-[73px] max-w-full mq900:gap-9 mq450:gap-[18px] mq1650:flex-wrap">
            <Testimonial />
            <div className="flex-1 flex flex-col items-start justify-start gap-[42px] min-w-[590px] max-w-full mq900:min-w-full mq450:gap-[21px]">
              <div className="self-stretch relative max-w-full mq900:min-h-[895]">
                {/* Adjusted Container */}
                <div className="absolute top-[107px] left-[139px] w-[645px] overflow-hidden flex flex-row items-start justify-center pt-7 pb-[27px] pl-[21px] pr-5 box-border bg-cover bg-no-repeat bg-[top] max-w-full z-[1]"
                     style={{
                       backgroundImage: "url('/public/wheel1-2@3x.png')",
                       backgroundSize: 'cover',
                       minHeight: '100%',  
                       height: 'auto',     
                     }}>
                  <div className="w-[400px] rounded-[20px] bg-ppp-white border-ppp-grey border-[1px] border-solid box-border flex flex-col items-start justify-start py-[38px] px-[39px] gap-4 max-w-full">
                    <div className="relative font-semibold mq450:text-lgi">
                      Register For Demo Class
                    </div>
                    <div className="self-stretch h-px relative border-ppp-grey border-t-[1px] border-solid box-border" />
                    <div className="self-stretch rounded-2xl flex flex-col items-center justify-start gap-2 text-3xs text-black-80">
                      {/* Form fields */}
                      <div className="self-stretch flex flex-col items-start justify-start">
                        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[15px] gap-1">
                          <div className="relative">Name</div>
                          <input
                            className="w-full [border:none] [outline:none] bg-ppp-white self-stretch h-10 shadow-[0px_-1px_0px_#484747_inset] flex flex-row items-start justify-start py-[11px] px-2 box-border font-outfit font-medium text-sm text-gray-200 min-w-[192px]"
                            placeholder="Jack Sullivan"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start">
                        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[15px] gap-1">
                          <div className="relative">Email</div>
                          <input
                            className="w-full [border:none] [outline:none] bg-ppp-white self-stretch h-10 shadow-[0px_-1px_0px_#484747_inset] flex flex-row items-start justify-start py-[11px] px-2 box-border font-outfit font-medium text-sm text-gray-200 min-w-[192px]"
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
                    <Buttondefault />
                  </div>
                </div>
                {/* Adjust other sections */}
                <div className="absolute top-[0px] left-[0px] w-full h-full">
                  <div className="absolute h-full top-[0px] bottom-[0px] left-[12px] [filter:blur(400px)] rounded-[50%] bg-firebrick w-[895px]" />
                  {/* Additional stars */}
                  <img className="absolute top-[24px] left-[64px] w-[29px] h-[29px] z-[1]" loading="lazy" alt="" src="/star-1.svg" />
                  <img className="absolute top-[194px] left-[79px] w-3.5 h-3.5 z-[1]" alt="" src="/star-2.svg" />
                  <img className="absolute top-[431px] left-[0px] w-[58px] h-[58px] z-[1]" loading="lazy" alt="" src="/star-4.svg" />
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
