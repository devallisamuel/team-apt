import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import home from "../../../assets/home.svg";
import defHome from "../../../assets/defHome.svg";
import message from "../../../assets/message.svg";
import profile from "../../../assets/profile.svg";
import explore from "../../../assets/explore.svg";
import activeExplore from "../../../assets/activeExplore.svg";

export const NavIcon = () => {
    const navigate = useNavigate();
    const[icons,setIcon] = useState<any[]>([]);

    useEffect(() => {
      setIcon([
        {
          img: window.location.pathname === "/" ? home : defHome,
          name: "home",
        },
        {
          img:window.location.pathname === "/history" ? activeExplore : explore,
          message,
          name: "explore",
        },
        { img: message, name: "message" },
        { img: profile, name: "profile" },
      ]);
    },[])
    
    // let icons : any = [{img:window.location.pathname === "/" ? home:defHome,name:"home"}, {img:window.location.pathname === "/history" ? activeExplore:explore,message, name:"explore"}, {img:profile, name:"profile"}];

    const handleClick = (param:string) => {
      if(param === "home") {
        navigate("/");
      } else {
        navigate("/history");
      }
    }

    return (
      <>
        <div className="flex justify-between">
          {icons.map((icon: any, index: number) => (
            <img
              src={icon.img}
              key={index}
              alt="navigation Icon"
              className="w-[30px] h-[30px] align-bottom"
              onClick={() => handleClick(icon.name)}
            />
          ))}
        </div>
      </>
    );
};