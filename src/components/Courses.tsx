import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Link from "./Link";
import Link2 from "./Link2";
import Link1 from "./Link1";

export type CoursesType = {
  className?: string;
};

const Courses: FunctionComponent<CoursesType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onLinkContainerClick = useCallback(() => {
    navigate("/course-detail-page");
  }, [navigate]);

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[127.1px] pl-5 pr-[30px] box-border max-w-full text-center text-lg text-ppp-white font-alegreya-sans-sc lg:pb-[83px] lg:box-border mq450:pb-[35px] mq450:box-border mq1050:pb-[54px] mq1050:box-border ${className}`}
    >
      <div className="w-[1224px] flex flex-col items-start justify-start gap-[65px] max-w-full mq450:gap-4 mq750:gap-8">
        <div className="bg-color flex flex-row items-start justify-start pt-[7px] px-3 pb-[9px]">
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <div className="relative leading-[20px] whitespace-nowrap">{`Category `}</div>
          </div>
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            alt=""
            src="/icon.svg"
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[61px] max-w-full text-left text-base text-darkslategray-200 mq450:gap-[15px] mq750:gap-[30px]">
          <div className="self-stretch grid flex-row items-start justify-start gap-4 grid-cols-[repeat(4,_minmax(220px,_1fr))] mq450:grid-cols-[minmax(220px,_1fr)] mq1050:justify-center mq1050:grid-cols-[repeat(2,_minmax(220px,_382px))]">
            <Link
              imageBlur="/imageblur@2x.png"
              dcaddebccdffScaledCov="/63dcad5de4b097c786c53dff-scaled-coverjpg@2x.png"
              basicJyotishCourseForBeginners="Basic Jyotish Course for Beginners"
              prop="₹5,999"
              onLinkContainerClick={onLinkContainerClick}
            />
            <Link
              imageBlur="/imageblur-1@2x.png"
              dcaddebccdffScaledCov="/60a013ad0cf2c1a003ee3885-scaled-coverjpg@2x.png"
              basicJyotishCourseForBeginners="LAL KITAB Nishaniyan, Lal Kitab Ba"
              prop="₹41,300"
            />
            <Link
              imageBlur="/imageblur-2@2x.png"
              dcaddebccdffScaledCov="/66bf85a0bd3f3d0ad1e72384-scaled-coverjpg@2x.png"
              basicJyotishCourseForBeginners="REMEDIAL WORKSHOP : AUGUST "
              prop="₹15,000"
            />
            <Link2
              imageBlur="/imageblur-3@2x.png"
              ccabefbcScaledCov="/668cc9a654b15e6249fb86c8-scaled-coverjpg@2x.png"
              ramalAstrologyAdvancedCourse="Ramal Astrology Advanced Course"
              prop=" ₹29,500"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-x-[60.9px] gap-y-[15.3px] min-h-[633px]">
            <div className="w-[294px] border-whitesmoke-200 border-[1px] border-solid box-border overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[5px] gap-4">
              <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-0 px-[9px] relative">
                <img
                  className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/imageblur-4@2x.png"
                />
                <img
                  className="h-[182px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/664f8d7b1053b2647a7fb4dd-scaled-coverjpg@2x.png"
                />
              </div>
              <div className="flex flex-row items-start justify-start py-0 px-4">
                <div className="flex flex-col items-start justify-start gap-[21.9px]">
                  <div className="relative leading-[20px]">
                    Nakshatra Foundation Course
                  </div>
                  <div className="w-[174.3px] flex flex-col items-start justify-start gap-1 text-lightsteelblue">
                    <div className="self-stretch relative leading-[20px] whitespace-nowrap">
                      Lal Kitab Kunwar Ji
                    </div>
                    <div className="h-[17px] relative leading-[24px] font-outfit text-orangered flex items-center shrink-0">
                      <span className="[line-break:anywhere]">
                        <span className="[text-decoration:line-through]">
                          ₹12,999
                        </span>
                         ₹5,999
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[294px] border-whitesmoke-200 border-[1px] border-solid box-border overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[5px] gap-4">
              <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-0 px-[9px] relative">
                <img
                  className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/imageblur-5@2x.png"
                />
                <img
                  className="h-[182px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/6597e7cbe4b02a39e0cadf83-scaled-coverjpg@2x.png"
                />
              </div>
              <div className="w-[281.6px] flex flex-row items-start justify-start py-0 px-4 box-border">
                <div className="flex-1 flex flex-col items-start justify-start gap-[21.9px]">
                  <div className="self-stretch relative leading-[20px]">{`Numerology Professional Course - `}</div>
                  <div className="w-[174.3px] flex flex-col items-start justify-start gap-1 text-lightsteelblue">
                    <div className="self-stretch relative leading-[20px]">
                      Lal Kitab Kunwar Ji
                    </div>
                    <div className="h-[17px] relative text-base-6 leading-[24px] font-outfit text-orangered flex items-center shrink-0">
                      <span className="[line-break:anywhere]">
                        <span className="[text-decoration:line-through]">
                          ₹71,980
                        </span>
                         ₹51,000
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link2
              imageBlur="/imageblur-6@2x.png"
              ccabefbcScaledCov="/655f1d3be4b0a5379f5507b3-scaled-coverjpg@2x.png"
              ramalAstrologyAdvancedCourse="Predictive Astrology : Nadi Nakshat"
              prop=" ₹48,380"
              propWidth="294px"
              propWidth1="unset"
              propFlex="unset"
              propAlignSelf="unset"
            />
            <div className="w-[294px] border-whitesmoke-200 border-[1px] border-solid box-border overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[5px] gap-4">
              <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-0 px-[9px] relative">
                <img
                  className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/imageblur-7@2x.png"
                />
                <img
                  className="h-[182px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/651386cce4b0f99bec6ec8a3-scaled-coverjpg@2x.png"
                />
              </div>
              <div className="flex flex-row items-start justify-start py-0 px-4">
                <div className="flex flex-col items-start justify-start gap-[21.9px]">
                  <div className="relative leading-[20px]">
                    Lal Kitab Professional Course
                  </div>
                  <div className="w-[174.3px] flex flex-col items-start justify-start gap-1 text-lightsteelblue">
                    <div className="self-stretch relative leading-[20px]">
                      Lal Kitab Kunwar Ji
                    </div>
                    <div className="h-[17px] relative leading-[24px] font-outfit text-orangered flex items-center shrink-0 whitespace-nowrap">
                       ₹60,180
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link1
              imageBlur="/imageblur-8@2x.png"
              e4b013b307d4d7f3ScaledCov="/64705895e4b013b307d4d7f3-scaled-coverjpg@2x.png"
              vastuShastraOnlineClasses="Vastu Shastra Online Classes"
            />
            <Link2
              imageBlur="/imageblur-9@2x.png"
              ccabefbcScaledCov="/63f3de47e4b044bebc02d7f2-scaled-coverjpg@2x.png"
              ramalAstrologyAdvancedCourse="Tarot Card Reading Course"
              prop=" ₹48,380"
              propWidth="294px"
              propWidth1="unset"
              propFlex="unset"
              propAlignSelf="unset"
            />
            <div className="w-[294px] border-whitesmoke-200 border-[1px] border-solid box-border overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-1 gap-4">
              <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-0 px-[9px] relative">
                <img
                  className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/imageblur-10@2x.png"
                />
                <img
                  className="h-[182px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/6307d57ae4b0a163f869aebc-scaled-coverjpg@2x.png"
                />
              </div>
              <div className="flex flex-row items-start justify-start py-0 px-4">
                <div className="flex flex-col items-start justify-start gap-[22px]">
                  <div className="relative leading-[20px]">
                    Vedic Parashari Jyotish Course
                  </div>
                  <div className="w-[174.3px] flex flex-col items-start justify-start gap-1 text-lightsteelblue">
                    <div className="self-stretch relative leading-[20px]">
                      Lal Kitab Kunwar Ji
                    </div>
                    <div className="h-[17px] relative text-mini-9 leading-[24px] font-outfit text-orangered flex items-center shrink-0">
                      <span className="[line-break:anywhere]">
                        <span className="[text-decoration:line-through]">
                          ₹106,200
                        </span>
                         ₹69,000
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link1
              imageBlur="/imageblur-11@2x.png"
              e4b013b307d4d7f3ScaledCov="/6277b68e0cf27999e58afc8e-scaled-coverjpg@2x.png"
              vastuShastraOnlineClasses="Learn all about Marriage in Astrolo"
            />
          </div>
          <div className="w-[914px] grid flex-row items-start justify-start gap-4 max-w-full grid-cols-[repeat(3,_minmax(220px,_1fr))] mq450:grid-cols-[minmax(220px,_1fr)] mq750:justify-center mq750:grid-cols-[repeat(2,_minmax(220px,_382px))]">
            <div className="border-whitesmoke-200 border-[1px] border-solid overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-1 gap-4">
              <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-0 px-[9px] relative">
                <img
                  className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/imageblur-12@2x.png"
                />
                <img
                  className="h-[182px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/61e63c700cf21a4b7111d9c6-scaled-coverjpg@2x.png"
                />
              </div>
              <div className="w-[206.5px] flex flex-row items-start justify-start py-0 px-4 box-border">
                <div className="flex-1 flex flex-col items-start justify-start gap-[22px]">
                  <div className="self-stretch relative leading-[20px]">
                    Lal Kitab Combo Course
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-1 text-lightsteelblue">
                    <div className="self-stretch relative leading-[20px] whitespace-nowrap">
                      Lal Kitab Kunwar Ji
                    </div>
                    <div className="h-[17px] relative text-base-9 leading-[24px] font-outfit text-orangered flex items-center shrink-0">
                      <span className="[line-break:anywhere]">
                        <span className="[text-decoration:line-through]">
                          ₹138,060
                        </span>
                         ₹71,980
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link
              imageBlur="/imageblur-13@2x.png"
              dcaddebccdffScaledCov="/619285e60cf210b744a2a012-scaled-coverjpg@2x.png"
              basicJyotishCourseForBeginners={`Vedic & Modern Numerology Cour`}
              prop="₹41,300"
            />
            <div className="border-whitesmoke-200 border-[1px] border-solid overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-1 gap-4">
              <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-0 px-[9px] relative">
                <img
                  className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/imageblur-14@2x.png"
                />
                <img
                  className="h-[182px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/619284a50cf2ebf56fb3f40d-scaled-coverjpg@2x.png"
                />
              </div>
              <div className="w-[247.6px] flex flex-row items-start justify-start py-0 px-4 box-border">
                <div className="flex-1 flex flex-col items-start justify-start gap-[22px]">
                  <div className="self-stretch relative leading-[20px]">
                    Chaldean Numerology Course
                  </div>
                  <div className="w-[174.3px] flex flex-col items-start justify-start gap-1 text-lightsteelblue">
                    <div className="self-stretch relative leading-[20px]">
                      Lal Kitab Kunwar Ji
                    </div>
                    <div className="h-[17px] relative text-mini leading-[24px] font-outfit text-orangered flex items-center shrink-0">
                      <span className="[line-break:anywhere]">
                        <span className="[text-decoration:line-through]">
                          ₹36,580
                        </span>
                         ₹29,500
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
