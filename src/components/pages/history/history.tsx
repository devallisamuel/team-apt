import {
  Chart as ChartJS,
  CategoryScale,
  LineElement,
  PointElement,
  LinearScale,
  ArcElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// import { Chart } from "react-chartjs-2";

import { Bar, Line } from "react-chartjs-2";

import { NavIcon } from "components/base/navIcons/navIcon";
import {
  secondData,
  secondOptions,
  config,
  thirdData,
} from "hooks/utility/utility";

import plus from "../../../assets/plus.svg";
import recycle from "../../../assets/recycle.svg";
import caret from "../../../assets/caret.svg";
import lemon from "../../../assets/lemonBall.svg";
import blue from "../../../assets/blueBall.svg";
import purple from "../../../assets/purpleBall.svg";

ChartJS.register(
  CategoryScale,
  LineElement,
  LinearScale,
  PointElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export const History = () => {
  const progress = (val: number) => {
    return (
      <div className=" mt-2 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="bg-green-400 h-2.5 rounded-full"
          style={{ width: `${val}` }}
        ></div>
      </div>
    );
  };
  return (
    <>
      <div style={{ paddingTop: "10px", marginTop: "20px" }}>
        <div className="bg-white w-[30rem] h-240 rounded-2xl mx-auto p-5 ">
          <div className="flex justify-between">
            <p className=" font-sans font-medium  text-2xl">History</p>
            <img
              src={recycle}
              alt="avatar of user"
              className="w-[20px] h-[20px]"
            />
          </div>

          <div>
            <p className=" font-sans font-medium  text-xl">Monday, 11 July</p>
          </div>

          <div className="shadow-md rounded-md px-2 py-2 flex justify-between items-center h-[8rem] w-[100%] mb-4">
            <div className="flex flex-col items-start gap-3 justify-between">
              <p className="font-sans font-medium">Weight</p>
              <p className="text-slate-400 text-sm font-sans">
                <span className="text-xl font-semibold text-black">52,3</span>kg
              </p>
            </div>
            <div
              style={{
                position: "relative",
                height: "6rem",
                width: "10rem",
                verticalAlign: "bottom",
              }}
            >
              <Line options={config} data={thirdData} />
            </div>
          </div>

          <div className="shadow-md rounded-md px-2 py-2 flex flex-col h-[8rem] w-[100%] mb-4">
            <div className="flex justify-between">
              <p className=" font-sans font-medium  text-sm">BMI</p>
              <div className="flex">
                <p className=" font-sans font-medium  text-sm">17.3</p>
                <img src={caret} className = "w-[15px] h-[20px]" style={{verticalAlign:"bottom"}} alt="arrow" />
              </div>
            </div>

            {/* progress bar */}
            <div className="flex justify-between gap-3">
              {[90, 0, 0].map(progress)}
            </div>

            <div className="flex gap-32">
              {["", 18.5, 25].map((val, index) => (
                <p key={index}>{val}</p>
              ))}
            </div>

            <div className="flex gap-3 w-[100%]">
              {[
                { name: "Low", color: lemon },
                { name: "Normal", color: purple },
                { name: "High", color: blue },
              ].map((val, index) => (
                <div key={index} style = {{display:"flex", gap:"3px"}}>
                  {/* <div
                    className={`w-[10px] h-[10px] rounded-full bg-${val.color}-400`}
                  ></div> */}
                  <img src={val.color} alt="key" />
                  <span className="text-sm font-light">{val.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="shadow-md rounded-md px-2 py-2 flex justify-between items-center h-[8rem] w-[100%] mb-4">
            <div className="flex flex-col items-start gap-3 justify-between">
              <p className="font-sans font-medium">Sleep</p>
              <p className="text-slate-400 text-sm font-sans">
                <span className="text-xl text-black font-semibold">6</span>h
                <span className="text-xl text-black font-semibold">20</span>s
              </p>
            </div>

            <div
              style={{
                position: "relative",
                height: "7rem",
                width: "10rem",
                verticalAlign: "bottom",
              }}
            >
              <Bar data={secondData} options={secondOptions} />
            </div>
          </div>

          <img
            src={plus}
            alt="pop up modal"
            className="relative left-[40%] bottom-[10px]"
          />

          <NavIcon />
        </div>
      </div>
    </>
  );
};
