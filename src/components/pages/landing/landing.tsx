import { Outlet } from "react-router-dom";

export const Landing = () => {
    return (
      <div className="w-[100vw]  h-[100%] bg-purple-500">
        <div>
            <Outlet></Outlet>
        </div>
      </div>
    );
}