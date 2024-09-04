import React from "react";

const UserOutput = ({ result, handleDelete }) => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                backgroundColor: "lightcoral",
                color: "white",
                padding: "10px",
                borderBottom: "2px solid #ddd",
              }}
            >
              이름
            </th>
            <th
              style={{
                backgroundColor: "lightcoral",
                color: "white",
                padding: "10px",
                borderBottom: "2px solid #ddd",
              }}
            >
              나이
            </th>
            <th
              style={{
                backgroundColor: "lightcoral",
                color: "white",
                padding: "10px",
                borderBottom: "2px solid #ddd",
              }}
            >
              지역
            </th>
            <th
              style={{
                backgroundColor: "lightcoral",
                color: "white",
                padding: "10px",

                borderBottom: "2px solid #ddd",
              }}
            >
              삭제
            </th>
          </tr>
        </thead>
        <tbody>
          {result.map((user, index) => (
            <tr
              key={index}
              style={{
                backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#cac5c5",
              }}
            >
              <td
                style={{
                  padding: "10px",

                  borderBottom: "1px solid #ddd",
                }}
              >
                {user.name}
              </td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                {user.age}
              </td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                {user.region}
              </td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                <button
                  onClick={() => handleDelete(index)}
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    padding: "5px 10px",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  삭제
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserOutput;
