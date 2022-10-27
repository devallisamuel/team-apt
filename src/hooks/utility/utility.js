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
      data: [90, 10, 70, 50, 30, 60, 40],
      backgroundColor: [
        "rgb(168 85 247)",
        "rgba(53, 162, 235, 0.5)",
        "rgb(168 85 247)",
        "rgba(53, 162, 235, 0.5)",
        "rgb(168 85 247)",
        "rgba(53, 162, 235, 0.5)",
        "rgb(168 85 247)",
      ],
      color: "#fff",
      borderSkipped: false,
      borderRadius: 20,
    },
  ],
};
export const secondOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: {
        display: false,
        color: "rgba(0, 0, 0, 0)",
      },
      ticks: {
        color: "#656565",
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
  },
  options: {
    scales: {
      x: {
        stacked: true,
      },
    },
  },
};


export const secondData = {
  labels,
  datasets: [
    {
      label: "Data 1",
      data: [90, 10, 70, 50, 30, 60, 40],
      backgroundColor: [
        "#2888E1",
        "#A1C6DB",
        "#2888E1",
        "#A1C6DB",
        "#2888E1",
        "#A1C6DB",
        "#2888E1",
      ],
      color: "#fff",
      borderSkipped: false,
      borderRadius: 20,
    },
  ],
};


// line chart 
export const thirdData = {
  label: ["M", "T", "W", "T", "F", "S", "S"],
  datasets: [
    {
      // label: "Rainfall",
      // fill: false,
      // lineTension: 0.5,
      backgroundColor: "rgba(75,192,192,1)",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [65, 59, 80, 81, 56,44,30],
    },
  ],
};

export const config = {
  responsive: true,
  data,
  plugins: {
    // legend: {
    //   position: 'top',
    // },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};
