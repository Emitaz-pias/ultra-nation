import React from "react";
const style = {  width:"50px" };

const Country = (props) => {
  const { name, flag, population } = props.country;
  return (
    <div>
      <h2>{name}</h2>
      <p>{population}</p>
      <img style={style} src={flag} alt="" />
    </div>
  );
};

export default Country;
