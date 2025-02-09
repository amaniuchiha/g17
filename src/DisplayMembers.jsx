import React from "react";
const members = ["Lorem", "Ipsum", "Dolor", "Sit", "Amet"];

function DisplayMembers() {
  return (
    <>
      {members.map((member, i) => (
      
          <p key={i}>{member}</p>
        
      ))}
    </>
  );
}

export default DisplayMembers;
