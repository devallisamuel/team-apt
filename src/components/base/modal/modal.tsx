import { useState, useEffect } from "react";
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
      name: "heart",
      text: "Add blood pressure",
    },
    {
      logo: sfolder,
      name: "folder",
      text: "Add weight measurement",
    },
    {
      logo: sbicycle,
      name: "bicycle",
      text: "Add activity",
    },
    {
      logo: swatch,
      name: "watch",
      text: "Track my workout",
    },
  ]);

  const [hashTable, setHashTable] = useState<{ [key: string]: boolean }>({
    watch: false,
    heart: false,
    bicycle: false,
    folder: false,
  });
  useEffect(() => {}, [hashTable]);
  const replacement = [rheart, rfolder, rbicycle, rwatch];
  const start = [sheart, sfolder, sbicycle, swatch];
  const navigate = useNavigate();

  const handleClick = (param: string) => {
    if (param === "Add weight measurement") navigate("/weight");
  };

  const handleMouseEnter = (param: string) => {
    let temp = { ...hashTable };
    temp[param] = true;
    setHashTable(temp);
  };

  const handleMouseLeave = (param: string) => {
    let temp = { ...hashTable };
    temp[param] = false;
    setHashTable(temp);
    console.log(hashTable);
  };

  return (
    <>
      <div className="rounded-md bg-white p-2 flex flex-col items-center justify-evenly">
        {modalDetails.map(({ logo, text, name }, index) => {
          return (
            <div
              className="text-sm font-sans shadow-md flex justify-center gap-4 hover:bg-blue-500 px-3 py-2 w-[20rem] hover:text-white cursor-pointer"
              onClick={() => handleClick(text)}
              key={index}
              onMouseEnter={() => handleMouseEnter(name)}
              onMouseLeave={() => handleMouseLeave(name)}
            >
              {hashTable[name] ? (
                <img src={replacement[index]} alt="select modal" />
              ) : (
                <img src={start[index]} alt="select modal" />
              )}

              <p className="">{text}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
