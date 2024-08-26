import propType from "prop-types";

const Paragraph = ({ children, size }) => {
  return <p style={{ fontSize: size }}>{children}</p>;
};

Paragraph.propType = {
  children: propType.node.isRequired,
};

export default Paragraph;
