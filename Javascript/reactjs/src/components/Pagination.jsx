import React, { useState } from "react";

const Pagination = ({ defaultPage, limit, total, onChnage }) => {
  const [page, setPage] = useState(defaultPage);
  const totalPage = Math.ceil(total / limit);

  const handleChangePage = (newPage) => {
    onChnage(newPage);
    setPage(newPage);
  };

  return (
    <div>
      <button onClick={() => !(page === 0) && handleChangePage(page - 1)}>
        이전
      </button>
      {Array.from(new Array(totalPage), (_, i) => i).map((i) => (
        <button
          key={i}
          style={{ backgroundColor: page === i ? "red" : "" }}
          onClick={() => setPage(i)}
        >
          {i + 1}
        </button>
      ))}
      <button
        onClick={() => !(page === totalPage - 1) && handleChangePage(page + 1)}
      >
        다음
      </button>
    </div>
  );
};

export default Pagination;
