import React from "react";

const UserCard = ({ name, email, age, bgColor = "#f0f0f0" }) => {
  return (
    <div
      style={{
        backgroundColor:bgColor,
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
        maxWidth: "250px",
        textAlign: "left",
      }}
    >
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default UserCard;