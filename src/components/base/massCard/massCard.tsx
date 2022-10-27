import { details } from "hooks/types";

export const MassCard = (props: details) => {
    const {logo,text,number} = props
    return (
    <>
        <div className="rounded-md shadow-md flex flex-col justify-center gap-2 px-3 py-1 bg-white w-[10rem] h-[6rem]">
            <div className="flex justify-between items-center">
                <p className="text-sm">{text}</p>
                <img src={logo} className = "w-[15px] h-[15px]" alt="card logo" />
            </div>
            <p className="text-bold text-center font-sans text-2xl">{number}</p>
        </div>
    </>
    );
};