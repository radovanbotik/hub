"use client";

import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

const steps2 = [
  {
    id: 1,
    action: "To connect your family member’s Apple Watch with cellular, follow these steps.Proceed with your iPhone.",
    note: "Note: Before starting, set up Family Sharing.",
    imageUrl: "/watch_familymember_setup/homescreen.webp",
  },
  {
    id: 2,
    action: "Go to the Home screen. Scroll to the right.",
    imageUrl: "/watch_familymember_setup/homescreen.webp",
  },
  {
    id: 3,
    action: "Choose Watch App.",
    imageUrl: "/watch_familymember_setup/watchapp.webp",
  },
  {
    id: 4,
    action: "Choose Start Pairing.",
    imageUrl: "/watch_familymember_setup/start_pairing.webp",
  },
  {
    id: 5,
    action: "Choose Set Up for a Family Member.",
    imageUrl: "/watch_familymember_setup/setup_family_member.webp",
  },
  {
    id: 6,
    action: "Choose Continue.",
    imageUrl: "/watch_familymember_setup/family_continue.webp",
  },
  {
    id: 7,
    action: "Choose Continue.",
    imageUrl: "/watch_familymember_setup/data_privacy_continue.webp",
  },
  {
    id: 8,
    action: "Choose Continue.",
    imageUrl: "/watch_familymember_setup/how_familysetup_works.webp",
    imageUrl: "/watch_familymember_setup/viewfinder.webp",
  },
  {
    id: 9,
    action: "Hold the Apple Watch Series 9 up to the camera and align it with the viewfinder below.",
    imageUrl: "/watch_familymember_setup/viewfinder.webp",
  },
  {
    id: 10,
    action: "Choose Set Up Apple Watch.",
    imageUrl: "/watch_familymember_setup/setup_apple_watch.webp",
  },
  {
    id: 11,
    action: "Check an option and choose Continue.",
    imageUrl: "/watch_familymember_setup/wrist_preference.webp",
  },
  {
    id: 12,
    action:
      "If this screen appears, check an option, in this case, Top. If this screen does not appear, skip the next step.",
    imageUrl: "/watch_familymember_setup/crown_orientation.webp",
  },
  {
    id: 13,
    action: "Choose Continue.",
    imageUrl: "/watch_familymember_setup/crown_orientation_selected.webp",
  },
  {
    id: 14,
    action: "Read the terms and conditions and choose Agree.",
    imageUrl: "/watch_familymember_setup/terms_and_conditions.webp",
  },
  {
    id: 15,
    action: "Choose Set Up Later in the Apple Watch App.",
    imageUrl: "/watch_familymember_setup/text.webp",
  },
  {
    id: 16,
    action: "Choose Create a Passcode.",
    imageUrl: "/watch_familymember_setup/watch_passcode.webp",
  },
  {
    id: 17,
    action: "Go to your Apple Watch Series 9. Enter a screen lock code.",
    imageUrl: "/watch_familymember_setup/watch_passcode_setup.webp",
  },
  {
    id: 18,
    action:
      "If this screen appears, choose an option, in this case, Use Code. If this screen does not appear, go to the next step.",
    imageUrl: "/watch_familymember_setup/watch_passcode_setup_continue.webp",
  },
  {
    id: 19,
    action: "Re-enter the screen lock code.",
    imageUrl: "/watch_familymember_setup/watch_passcode_reenter.webp",
  },
  {
    id: 20,
    action: "Choose a family member.",
    imageUrl: "/watch_familymember_setup/choose_family_member.webp",
  },
  {
    id: 21,
    action: "Choose Password and enter the password of your family member’s Apple ID.",
    imageUrl: "/watch_familymember_setup/enter_family_member_password.webp",
  },
  {
    id: 22,
    action: "Choose Continue.",
    imageUrl: "/watch_familymember_setup/family_member_continue.webp",
  },
  {
    id: 23,
    action: "Choose an option, in this case, Set Up Later.",
    imageUrl: "/watch_familymember_setup/find_my_continue.webp",
  },
  {
    id: 24,
    action: "Choose an option, in this case, Set Up as New Apple Watch.",
    imageUrl: "/watch_familymember_setup/setup_as_new.webp",
  },
  {
    id: 25,
    action: "Choose Set Up Cellular.",
    imageUrl: "/watch_familymember_setup/setup_cellular.webp",
  },
  {
    id: 26,
    action: "To continue setting up your family member’s cellular plan:",
    note: "Follow here.",
    imageUrl: "/watch_familymember_setup/setup_cellular.webp",
  },
];

const Product = () => {
  const [steps, setSteps] = useState(steps2);
  const [currentStep, setCurrentStep] = useState(0);
  const pseudoMarker = `before:w-2 before:h-full before:bg-blue-400 before:absolute before:left-0 before:top-0`;
  const orderList = useRef();

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else return;
  };
  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    } else return;
  };

  return (
    <>
      <div className="max-w-6xl w-full mx-auto px-8 pt-8 2xl:px-0 ">
        <h2 className="text-3xl mb-5">Setup Watch {">"} How to connect a watch for a family member</h2>
        <hr className="h-[2px] w-full bg-black my-10" />
        <div className="grid grid-cols-2 grid-rows-2 gap-8 items-center">
          {/* SLIDER */}
          <Swiper
            slidesPerView={2}
            direction={"vertical"}
            navigation={{ prevEl: ".prev", nextEl: ".next" }}
            modules={[Navigation]}
            className="w-full mySwiper h-40 flex flex-col col-start-1 row-start-1"
            ref={orderList}
          >
            {steps2.map(step => {
              return (
                <SwiperSlide
                  key={step.id}
                  className={` p-6 flex flex-row items-center space-x-2 
                  ${step.id === currentStep + 1 && pseudoMarker}
                  cursor-pointer ${currentStep + 1 === step.id ? "opacity-100" : "opacity-20"}`}
                  // onClick={e => setCurrentStep(prev => step.id)}
                >
                  <span>{step.id}.</span>
                  <span>{step.action}</span>
                  {/* {step.note && <p>{step.note}</p>} */}
                </SwiperSlide>
              );
            })}
          </Swiper>
          {/* BUTTONS + SLIDER*/}
          <div className=" col-start-1 row-start-2 flex flex-col space-y-4">
            {/* BUTTONS */}
            <div className="flex gap-2 ">
              <button className="prev w-32 px-3 py-5 capitalize font-bold  bg-blue-300" onClick={prevStep}>
                prev
              </button>
              <button className="next w-32 px-3 py-5 capitalize font-bold  bg-blue-300" onClick={nextStep}>
                next
              </button>
            </div>
            {/* SLIDER */}
            <input
              type="range"
              className="h-4 w-full "
              min={0}
              max={steps.length - 2}
              step={1}
              value={currentStep}
            ></input>
          </div>
          {/* IMAGES */}
          <div className="w-48 h-96 row-span-2 col-start-[2/3] justify-self-center">
            <img src={steps2[currentStep].imageUrl} alt="" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
