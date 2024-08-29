import logo from "../logo.svg";

const ReactImage = ({ width, height }) => {
  return (
    <>
      <img
        src={logo}
        className="App-logo"
        alt="logo"
        style={{ width: width, height: height }}
      />
    </>
  );
};

export default ReactImage;
