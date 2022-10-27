import { useNavigate } from "react-router-dom";
import { GenderCard } from "components/base/genderCard/genderCard";
import { MassCard } from "components/base/massCard/massCard";
import { details } from "hooks/types";

import "components/pages/addWeight/addWeight.css";

import back from "../../../assets/back.svg";
import settings from "../../../assets/settings.svg";
import menu from "../../../assets/menu.svg";
import speedometer from "../../../assets/speedometer.svg";

export const AddWeight = () => {

    const navigate = useNavigate();

    const genders: string[] = ["Male", "Female"];
    const masses: details[]  = [
        {
            number:4,
            text:"Age",
            logo:settings
        },
        {
            number:173,
            text:"Height",
            logo:settings
        },
    ];


    return (
      <>
        <div style={{ paddingTop: "10px" }}>

          <div className="bg-white w-[30rem] h-240 rounded-2xl mx-auto p-5 ">
            <div className="flex justify-between items-center">
                <div className="flex justify-between gap-3 items-center">
                    <img src={back} alt="back" onClick={() => navigate("/")} />                
                    <p className=" font-sans font-medium  text-2xl">Add Weight </p>
                </div>

              <img src={menu} alt="menu" />
            </div>

            {/* trapezium */}
            <div className="trapezium flex justify-center items-center mx-auto">
                <p className="text-white font-sans font-bold text-2xl">53</p>
            </div>

            <img src={speedometer} className = "mx-auto" alt="speedometer" />

            <div className="flex justify-between items-center mt-3">
                {genders.map((gender, index) => <GenderCard text = {gender} key = {index}/>)}
            </div>
            
            <div className="flex justify-between mt-3">
                {
                    masses.map((mass,index) => <MassCard {...mass} key = {index}/>)
                }
            </div>

            <div className="flex justify-center items-center mt-4">
              <button
                type="submit"
                className="bg-blue-500 px-3 py-3 rounded-md w-[10rem] text-sm text-white font-medium"
                onClick={() => navigate("/")}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </>
    );
};