import React, { useRef, useState } from "react";
import Button from "../Button";

function ShortenUrl() {
  const [input, setInput] = useState();
  const inputRef = useRef();

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
  };

  return (
    <section className="shorten-url">
      <form action="" className="shorten-url__form" onSubmit={onFormSubmit}>
        <div className="shorten-url__form-group">
          <input
            ref={inputRef}
            type="text"
            placeholder="Shorten a link here"
            name="shorten-url"
            id="shorten-url"
            onChange={onInputChange}
            value={input}
          />
          <small className="shorten-url__message">Please add a link</small>
          <Button type="submit" classname="btn--radius">
            Shorten it!
          </Button>
        </div>
      </form>

      <div className="shorten-url__result">
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
          <Button classname="btn--dark">Copied!</Button>
        </div>
      </div>
    </section>
  );
}

export default ShortenUrl;
