const logToConsole = (text, color, data) => {
  console.log(
    `%c${text}:`,
    `color: ${color}; border-bottom: 1px solid; font-weight: bold;`,
    data
  );
};

export default (previousState, action, nextState) => {
  if (process.env.NODE_ENV !== "test") {
    logToConsole("previous state", "orange", previousState);
    logToConsole("action", "blue", action);
    logToConsole("next state", "green", nextState);
  }
};
