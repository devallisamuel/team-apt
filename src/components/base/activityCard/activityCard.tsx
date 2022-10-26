import { card } from "../../../hooks/types";
// import CountUp from "react-countup/build/CountUp";
import CountUp from "react-countup";


export const ActivityCard = (props:card) => {
    const {logo, number, numText,text,progress} = props;
    return (
      <>
        <div className="bg-white mt-3 mb-2 px-2 w-[10rem] h-[6rem] rounded-sm flex justify-between shadow-md">
          <img src={logo} alt={text} className="w-[2rem] h-[2rem] my-auto" />
          <div className="my-auto">
            {/* <span className="font-sans font-medium  text-xl">{number}</span> */}
            <CountUp
              end={number}
              duration={2}
              style={{fontWeight:"bold"}}
            />
            {numText && (
              <span className="text-slate-300 text-sm">{numText}</span>
            )}
            <p className="text-slate-300 text-sm">{text}</p>
            <div className=" mt-2 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-green-400 h-2.5 rounded-full"
                style={{ width: `${progress}` }}
              ></div>
            </div>
          </div>
        </div>
      </>
    );
};