import React, { useState } from "react";

const Home = () => {
  const [name, setName] = useState("Mario");
  const [age, setAge] = useState(21);

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>
        {name} is {age} years old
      </p>
      <button
        onClick={() => {
          setName("John");
          setAge(40)
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default Home;
