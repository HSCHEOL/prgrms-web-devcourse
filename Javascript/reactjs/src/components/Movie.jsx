import React from "react";

const Movie = (props) => {
  const { name, date, Image } = props;

  return (
    <div
      style={{
        backgroundColor: "gray",
        color: "white",
        width: "200px",
        margin: "auto",
        height: "250px",
        marginBottom: "1vw",
        borderRadius: "1vw",
        textAlign: "center",
      }}
    >
      제목:{name} <br />
      개봉:{date}
      <img style={{ width: "10vw" }} src={Image} alt="영화 이미지" />
    </div>
  );
};

export default Movie;
