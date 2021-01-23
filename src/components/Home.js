import React, { useState, useRef } from "react";

function Home() {
  const [link, setLink] = useState("");
  const [loadding, setLodding] = useState(false);
  const [status, setStatus] = useState(false);
  const [copySuccess, setCopySuccess] = useState("");
  const textAreaRef = useRef(null);

  const handelSbmit = (e) => {
    e.preventDefault();
    setLodding(true);
    fetch("https://api.shrtco.de/v2/shorten?url=" + link)
      .then((res) => res.json())
      .then((data) => {
        setLink(data.result.short_link);
        setLodding(false);
        setStatus(true);
      })
      .catch((err) => console.log(err));
  };

  const copyToClipboard = (e) => {
    e.preventDefault();
    textAreaRef.current.select();
    document.execCommand("copy");
    e.target.focus();
    setCopySuccess("Copied!");
    setTimeout(() => {
      setCopySuccess("");
    }, 2000);
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
            ref={textAreaRef}
          />

          {!status && !loadding && (
            <button className="btn" type="submit">
              Generate
            </button>
          )}

          {!status && loadding && (
            <button className="btn" type="submit">
              loadding..
            </button>
          )}

          {status && !loadding && !copySuccess && (
            <button className="btn" type="submit" onClick={copyToClipboard}>
              Copy
            </button>
          )}
          {copySuccess && (
            <button className="btn" type="submit" onClick={copyToClipboard}>
              Copied!
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default Home;
