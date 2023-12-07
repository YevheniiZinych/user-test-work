const mainVars = {
  breakpoints: {
    mob: "360px",
    mobMax: "767px",
    tab: "768px",
    tabMax: "1023px",
    desk: "1024px",
  },
  fontWeights: {
    s: 400,
    m: 500,
    l: 600,
    xl: 700,
  },
  transitions: {
    main: "all 250ms cubic-bezier(0.4, 0, 0.2, 1)",
  },
};

export const mainTheme = {
  ...mainVars,
  color: {
    primary: "#F4E041",
    secondary: "#00BDD3",
    background: "#F8F8F8",
    button: {
      normal: "#FFE302",
      hover: "#FFE302",
      disable: "#B4B4B4",
    },
  },
};
