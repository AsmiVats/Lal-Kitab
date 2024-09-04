import { FunctionComponent } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import Testimonial from "../components/Testimonial";
import FormFieldSharp from "../components/FormFieldSharp";
import Buttondefault from "../components/Buttondefault";
import FrameComponent from "../components/FrameComponent";
import LinkList from "../components/LinkList";
import FrameComponent3 from "../components/FrameComponent3";
import Footer from "../components/Footer";

const LandingPage: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-ppp-white overflow-hidden flex flex-col items-end justify-start pt-14 pb-[125px] pl-[63px] pr-16 box-border gap-11 leading-[normal] tracking-[normal] mq900:gap-[22px] mq1300:pl-[31px] mq1300:pr-8 mq1300:box-border">
      <section className="flex flex-row items-start justify-end py-0 px-9 box-border max-w-full text-left text-5xl text-gray-200 font-outfit">
        <div className="w-[1712px] flex flex-col items-start justify-start gap-[33px] max-w-full mq900:gap-4">
          <FrameComponent1 />
          <div className="self-stretch flex flex-row items-start justify-start gap-[73px] max-w-full mq900:gap-9 mq450:gap-[18px] mq1650:flex-wrap">
            <Testimonial />
            <div className="flex-1 flex flex-col items-start justify-start gap-[42px] min-w-[590px] max-w-full mq900:min-w-full mq450:gap-[21px]">
              <div className="self-stretch h-[895px] relative max-w-full mq900:h-auto mq900:min-h-[895]">
                <div className="absolute top-[107px] left-[139px] w-[645px] overflow-hidden flex flex-row items-start justify-center pt-7 pb-[27px] pl-[21px] pr-5 box-border bg-[url('/public/wheel1-2@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full z-[1]">
                  <div className="w-[400px] rounded-[20px] bg-ppp-white border-ppp-grey border-[1px] border-solid box-border flex flex-col items-start justify-start py-[38px] px-[39px] gap-4 max-w-full">
                    <div className="relative font-semibold mq450:text-lgi">
                      Register For Demo Class
                    </div>
                    <div className="self-stretch h-px relative border-ppp-grey border-t-[1px] border-solid box-border" />
                    <div className="self-stretch rounded-2xl flex flex-col items-center justify-start gap-2 text-3xs text-black-80">
                      <div className="self-stretch flex flex-col items-start justify-start">
                        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[15px] gap-1">
                          <div className="relative">Name</div>
                          <input
                            className="w-full [border:none] [outline:none] bg-ppp-white self-stretch h-10 shadow-[0px_-1px_0px_#484747_inset] flex flex-row items-start justify-start py-[11px] px-2 box-border font-outfit font-medium text-sm text-gray-200 min-w-[192px]"
                            placeholder="Jack Sullivan"
                            type="text"
                          />
                          <div className="w-[65px] relative font-light text-gantt-ui-design hidden">
                            error message
                          </div>
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
                          <div className="w-[65px] relative font-light text-gantt-ui-design hidden">
                            error message
                          </div>
                        </div>
                      </div>
                      <FormFieldSharp
                        labelText="Phone No."
                        fieldText="9876543210"
                        iconOutlinedDirectionsChev1="/icon--outlined--action--main--calendar.svg"
                        fieldRowWrapper
                        iconOutlinedDirections={false}
                        propMinWidth="unset"
                        propAlignSelf="unset"
                        propWidth="unset"
                        propBoxShadow="0px -1px 0px #484747 inset"
                        propFlex="unset"
                        propFontWeight="500"
                        propColor="#1e1e1e"
                        propDisplay="unset"
                        propMinWidth1="unset"
                        propMinWidth2="179px"
                      />
                      <FormFieldSharp
                        labelText="State"
                        fieldText="Goa"
                        iconOutlinedDirectionsChev1="/icon--outlined--directions--chevron--down1.svg"
                        fieldRowWrapper={false}
                        iconOutlinedDirections
                        propMinWidth="unset"
                        propAlignSelf="stretch"
                        propWidth="40px"
                        propBoxShadow="0px -1px 0px #d7dedd inset"
                        propFlex="1"
                        propFontWeight="300"
                        propColor="#9a9a9a"
                        propDisplay="unset"
                        propMinWidth1="unset"
                        propMinWidth2="unset"
                      />
                      <FormFieldSharp
                        labelText="Pincode"
                        fieldText="403001"
                        iconOutlinedDirectionsChev1="/icon--outlined--directions--chevron--down.svg"
                        fieldRowWrapper={false}
                        iconOutlinedDirections
                      />
                    </div>
                    <Buttondefault />
                  </div>
                </div>
                <div className="absolute top-[0px] left-[0px] w-full h-full">
                  <div className="absolute h-full top-[0px] bottom-[0px] left-[12px] [filter:blur(400px)] rounded-[50%] bg-firebrick w-[895px]" />
                  <img
                    className="absolute top-[24px] left-[64px] w-[29px] h-[29px] z-[1]"
                    loading="lazy"
                    alt=""
                    src="/star-1.svg"
                  />
                  <img
                    className="absolute top-[194px] left-[79px] w-3.5 h-3.5 z-[1]"
                    alt=""
                    src="/star-2.svg"
                  />
                  <img
                    className="absolute top-[94px] left-[212px] w-[11px] h-[11px] z-[1]"
                    alt=""
                    src="/star-3.svg"
                  />
                  <img
                    className="absolute top-[431px] left-[0px] w-[58px] h-[58px] z-[1]"
                    loading="lazy"
                    alt=""
                    src="/star-4.svg"
                  />
                  <img
                    className="absolute top-[814px] left-[261px] w-[33px] h-[33px] z-[1]"
                    loading="lazy"
                    alt=""
                    src="/star-5.svg"
                  />
                  <img
                    className="absolute top-[703px] left-[104px] w-[25px] h-[25px] z-[1]"
                    loading="lazy"
                    alt=""
                    src="/star-8.svg"
                  />
                  <img
                    className="absolute top-[867px] left-[553px] w-3 h-3 z-[1]"
                    alt=""
                    src="/star-6.svg"
                  />
                  <img
                    className="absolute top-[635px] left-[788px] w-[25px] h-[25px] z-[1]"
                    loading="lazy"
                    alt=""
                    src="/star-8.svg"
                  />
                  <img
                    className="absolute top-[382px] left-[866px] w-6 h-6 z-[1]"
                    loading="lazy"
                    alt=""
                    src="/star-11.svg"
                  />
                  <img
                    className="absolute top-[157px] left-[837px] w-[13px] h-[13px] z-[1]"
                    alt=""
                    src="/star-12.svg"
                  />
                  <img
                    className="absolute top-[47px] left-[543px] w-4 h-4 z-[1]"
                    alt=""
                    src="/star-13.svg"
                  />
                  <img
                    className="absolute top-[53px] left-[732px] w-5 h-5 z-[1]"
                    loading="lazy"
                    alt=""
                    src="/star-14.svg"
                  />
                  <img
                    className="absolute top-[838px] left-[795px] w-[22px] h-[22px] z-[1]"
                    loading="lazy"
                    alt=""
                    src="/star-10.svg"
                  />
                </div>
              </div>
              <FrameComponent />
            </div>
          </div>
        </div>
      </section>
      <LinkList />
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-24 box-border max-w-full text-center text-[140px] text-color font-alegreya mq900:pb-[62px] mq900:box-border">
        <h1 className="m-0 h-[382px] flex-1 relative text-inherit font-bold font-[inherit] inline-block max-w-full mq900:text-[56px] mq450:text-[35px]">
          <span>WHAT</span>
          <span className="text-black">
            {" "}
            OUR HAPPY CLIENT SAY ABOUT LAL KITAB
          </span>
        </h1>
      </section>
      <FrameComponent3 />
      <footer className="self-stretch flex flex-row items-start justify-center py-0 pl-px pr-0 box-border max-w-full">
        <Footer />
      </footer>
    </div>
  );
};

export default LandingPage;
