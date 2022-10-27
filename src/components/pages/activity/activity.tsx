import { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Chart } from "react-chartjs-2";

import { Bar } from "react-chartjs-2";
import Carousel from "react-multi-carousel";
import Modal from "react-modal";
import "react-multi-carousel/lib/styles.css";

import { NavIcon } from "../../base/navIcons/navIcon";
import { ModalComponent } from "components/base/modal/modal";
import { ActivityCard } from "../../base/activityCard/activityCard";
import { card } from "../../../hooks/types";
import { options, data } from "../../../hooks/utility/utility";

import watch from "../../../assets/watch.svg";
import fire from "../../../assets/fire.svg";
import footsteps from "../../../assets/footsteps.svg";
import avatar from "../../../assets/avatar.svg";
import play from "../../../assets/play.svg";
import bicycle from "../../../assets/bicycle.svg";
import plus from "../../../assets/plus.svg";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

Modal.setAppElement("#root");

export const Activity = function (): JSX.Element {
  let subtitle: any = { style: "" };
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const cardElements: card[] = [
    {
      text: "Left today",
      progress: "80%",
      number: 27,
      numText: "mins",
      logo: watch,
    },
    { text: "Calories burn", progress: "50%", number: 866, logo: fire },
    { text: "Steps", progress: "80%", number: 759, logo: footsteps },
  ];

  return (
    <>
      <div style={{ paddingTop: "10px", marginTop: "20px" }}>
        <div className="bg-white w-[30rem] h-240 rounded-2xl mx-auto p-5 ">
          <div className="flex justify-between">
            <p className=" font-sans font-medium  text-2xl">My Activity</p>
            <img src={avatar} alt="avatar of user" className="" />
          </div>

          {/* <div className="flex justify-center"> */}
          <Carousel
            responsive={responsive}
            itemClass="carousel-item-margin-auto-mx"
            autoPlay={true}
          >
            {cardElements.map((value: card, index: number) => (
              <ActivityCard {...value} key={index} />
            ))}
          </Carousel>
          {/* </div> */}

          <div className="flex justify-between items-center">
            <p className=" font-sans font-medium  text-lg">Goal for the week</p>
            <p className=" text-sm text-slate-400"> 42 of 54</p>
          </div>
          {/* graph */}
          <Bar
            data={data}
            options={options}
            style={{
              backgroundColor: "#6F38CA",
              borderRadius: ".5rem",
              marginTop: "10px",
            }}
          />
          <div className="flex justify-between items-center mt-2">
            <p className=" font-sans font-medium  text-lg">Trending workout</p>
            <p className=" text-sm text-slate-400 underline">see all</p>
          </div>

          <div className="bg-white shadow-md rounded-md flex justify-between px-2 w-full h-[4rem] items-center mb-2">
            <div className="flex justify-between items-center gap-2">
              <img
                src={bicycle}
                alt="bicycle"
                className="w-[30px] h-[30px] align-bottom"
              />
              <p>Muscle builder</p>
            </div>
            <img
              src={play}
              alt="play something"
              className="w-[30px] h-[30px] align-bottom"
            />
          </div>
          <img
            src={plus}
            alt="pop up modal"
            className="relative left-[40%] bottom-[20px]"
            onClick={() => setIsOpen(!modalIsOpen)}
          />
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            // className = "w-[50%]"
            contentLabel="Example Modal"
          >
            <ModalComponent/>
          </Modal>
          <NavIcon />
        </div>
      </div>
    </>
  );
};
