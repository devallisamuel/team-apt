import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { modalDet } from "hooks/types";

import swatch from "../../../assets/swatch.svg";
import rwatch from "../../../assets/rwatch.svg";
import sbicycle from "../../../assets/sbicycle.svg";
import rbicycle from "../../../assets/rbicycle.svg";
import sfolder from "../../../assets/sfolder.svg";
import rfolder from "../../../assets/rfolder.svg";
import sheart from "../../../assets/sheart.svg";
import rheart from "../../../assets/rheart.svg";

export const ModalComponent = () => {
  const [modalDetails, setModalDetail] = useState<modalDet[]>([
    {
      logo: sheart,
      text: "Add blood pressure",
    },
    {
      logo: sfolder,
      text: "Add weight measurement",
    },
    {
      logo: sbicycle,
      text: "Add activity",
    },
    {
      logo: swatch,
      text: "Track my workout",
    },
  ]);

  const replacement = [rheart, rfolder, rbicycle, rwatch];
  const start = [sheart, sfolder, sbicycle,swatch];
  const navigate = useNavigate();

  const handleClick = (param: string) => {
    if (param === "Add weight measurement") navigate("/weight");
  };

  const handleMouseEnter = (param: number) => {
    const detail = [...modalDetails];
    detail[param] = {
      text: modalDetails[param].text,
      logo: replacement[param],
    };
    setModalDetail(detail);
  };

  const handleMouseLeave = (param: number) => {
    const detail = [...modalDetails];
    detail[param] = {
      text: modalDetails[param].text,
      logo: start[param],
    };
    setModalDetail(detail);
  };

  return (
    <>
      <div className="rounded-md bg-white p-2 flex flex-col items-center justify-evenly">
        {modalDetails.map(({ logo, text }, index) => {
          return (
            <div
              className="text-sm font-sans shadow-md flex justify-center gap-4 hover:bg-blue-500 px-3 py-2 w-[20rem] hover:text-white"
              onClick={() => handleClick(text)}
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <img
                src={logo}
                alt="select modal"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              />
              <p className="">{text}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
