import React from "react";

function Home() {
  return (
    <div class="home">
      <div className="input">
        <h2>Shot Link Generate</h2>
        <form className="box">
          <input type="text" placeholder="Enter you link to make is short" />
          <button className="btn" type="submit">
            Generate
          </button>
        </form>
      </div>
    </div>
  );
}

export default Home;
