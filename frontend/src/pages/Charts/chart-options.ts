export const pieOptions = {
    chart: {
      background: "transparent",
    },
    colors: ["#a8dadc", "#ed7947", "#00D4FF", "#ff8902"],
    legend: {
      show: false,
    },
    tooltip: {
      enabled: true,
    },
    dataLabels: {
      enabled: true,
      style: {
        colors: ["#a8dadc", "#ed7947", "#00D4FF", "#ffd6a5"],
        fontSize: "24px",
        fontFamily: "Play, sans-serif",
        fontWeight: 700,
      },
    },
    plotOptions: {
      pie: {
        customScale: 0.7,
        expandOnClick: true,
        dataLabels: {
          offset: 60,
        },
      },
    },
  };
  
  export const barOptions = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    colors: ["#ED7943"],
    grid: {
      show: false,
    },
    plotOptions: {
      bar: {
        horizontal: true,
        endingShape: "rounded",
        startingShape: "rounded",
        barHeight: "60px",
      },
    },
    dataLabels: {
      enabled: true,
    },
    tooltip: {
      enabled: false,
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: [
      {
        labels: {
          maxWidth: 200,
          style: {
            colors: "#00D4FF",
            fontSize: "14px",
            fontFamily: "Play, sans-serif",
            fontWeight: 700,
          },
        },
      },
    ],
  };