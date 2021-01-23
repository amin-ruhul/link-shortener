import React, { useState } from "react";

function Home() {
  const [link, setLink] = useState("");

  const handelSbmit = (e) => {
    e.preventDefault();
    console.log(link);
  };
  return (
    <div className="home">
      <div className="input">
        <h2>Shot Link Generate</h2>
        <form className="box" onSubmit={handelSbmit}>
          <input
            type="text"
            placeholder="Enter you link to make it short"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <button className="btn" type="submit">
            Generate
          </button>
        </form>
      </div>
    </div>
  );
}

export default Home;
