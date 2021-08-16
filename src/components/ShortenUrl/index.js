import React, { useEffect, useRef, useState } from "react";
import Button from "../Button";

function ShortenUrl() {
  const [urls, setUrls] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Please add a link");
  const [processing, setProcessing] = useState(false);

  const inputRef = useRef();

  const displayErrors = (state, msg = "Please add a link") => {
    setError(state);
    setErrorMessage(msg);
    console.error(msg);
  };

  const handleCopyToClipboard = (e) => {
    const currentEl = e.target;

    currentEl.className = "btn btn--dark";
    currentEl.textContent = "Copied!";

    navigator.clipboard.writeText(currentEl.previousSibling.textContent);

    setTimeout(() => {
      currentEl.className = "btn btn--radius";
      currentEl.textContent = "Copy";
    }, 2000);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return displayErrors(true);
    setError(false);
    setProcessing(true);

    fetch(`https://api.shrtco.de/v2/shorten?url=${inputRef.current.value}`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        // Checks if data.ok is true or false
        if (!data.ok) throw new Error(data.error);

        setUrls((urls) => [data, ...urls]);
        setInput("");
        setError(false);
        setProcessing(false);

        console.log(urls);
      })
      .catch((err) => {
        displayErrors(true, err.message.split(",")[0]);
        setProcessing(false);
      });
  };

  return (
    <section className="shorten-url">
      <form action="" className="shorten-url__form" onSubmit={onFormSubmit}>
        <div className="shorten-url__form-group">
          <input
            className={error ? "error" : null}
            ref={inputRef}
            type="text"
            placeholder="Shorten a link here"
            name="shorten-url"
            id="shorten-url"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          {error ? (
            <small className="shorten-url__message shorten-url__message--error">
              {errorMessage}
            </small>
          ) : null}
          <Button type="submit" classname="btn--radius">
            {!processing ? (
              "Shorten it"
            ) : (
              <span className="btn--icon btn--loading"></span>
            )}
          </Button>
        </div>
      </form>

      {urls.map((el) => {
        return (
          <div key={el.result?.code} className="shorten-url__result">
            <p className="desc desc--secondary uti-mb-0">
              {el.result?.original_link}
            </p>

            <div className="shorten-url__result--short">
              <p className="desc desc--secondary uti-mb-0">
                {el.result?.short_link}
              </p>
              <Button onClick={handleCopyToClipboard} classname="btn--radius">
                Copy
              </Button>
            </div>
          </div>
        );
      })}

      {/* <div className="shorten-url__result">
        <p className="desc desc--secondary uti-mb-0">
          https://frontendmentor.io
        </p>

        <div className="shorten-url__result--short">
          <p className="desc desc--secondary uti-mb-0">
            https://rel.inl/Kudljs
          </p>
          <Button classname="btn--radius">Copy</Button>
        </div>
      </div>

      <div className="shorten-url__result">
        <p className="desc desc--secondary uti-mb-0">
          https://frontendmentor.io
        </p>

        <div className="shorten-url__result--short">
          <p className="desc desc--secondary uti-mb-0">
            https://rel.inl/Kudljs
          </p>
          <Button
            onClick={handleCopyToClipboard}
            classname={!toggleCopyBtn ? "btn--radius" : "btn--dark"}
          >
            {!toggleCopyBtn ? "Copy" : " Copied!"}
          </Button>
        </div>
      </div> */}
    </section>
  );
}

export default ShortenUrl;
