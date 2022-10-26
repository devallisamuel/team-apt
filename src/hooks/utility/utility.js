import { faker } from "@faker-js/faker";


export const options = {
  responsive: true,
  scales: {
    x: {
      grid: {
        display: false,
        color: "rgba(0, 0, 0, 0)",
      },
      ticks: {
        color: "white",
      },
    },
    y: {
      grid: {
        display: false,
        color: "rgba(0, 0, 0, 0)",
      },
      ticks: {
        color: "white",
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    // title: {
    //   display: true,
    //   text: "File Archival",
    // },
  },
  options: {
    scales: {
      x: {
        stacked: true,
      },
    },
  },
};


const labels = ["M", "T", "W", "T", "F", "S", "S"];
export const data = {
  labels,
  datasets: [
    {
      label: "Data 1",
      data: [0, 10, 0, 50, 0, 60, 0],
      //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgb(168 85 247)",
      color: "#fff",
      borderSkipped: false,
      borderRadius: 20,
    },
    {
      label: "Data 2",
      //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      data: [90, 0, 10, 0, 80, 0, 30],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      color: "white",
      borderSkipped: false,
      borderRadius: 20,
    },
  ],
};
