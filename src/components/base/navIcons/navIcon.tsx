import home from "../../../assets/home.svg";
import message from "../../../assets/message.svg";
import profile from "../../../assets/profile.svg";
import explore from "../../../assets/explore.svg";

export const NavIcon = () => {
    let icons : any = [home,explore,message, profile];
    return (
      <>
        <div className="flex justify-between">
          {icons.map((icon: any, index: number) => (
            <img
              src={icon}
              key={index}
              alt="navigation Icon"
              className="w-[30px] h-[30px] align-bottom"
            />
          ))}
        </div>
      </>
    );
};