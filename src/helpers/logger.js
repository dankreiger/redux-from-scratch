export default (data, text, color) => {
  if (process.env.NODE_ENV !== "test") {
    console.log(
      `%c${text}:`,
      `color: ${color}; border-bottom: 1px solid; font-weight: bold;`,
      data
    );
  }
};
