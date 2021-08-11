import React from "react";
import Button from "../Button";

function ShortenUrl() {
  return (
    <section className="shorten-url">
      <form action="" className="shorten-url__form">
        <div className="shorten-url__form-group">
          <input
            type="text"
            placeholder="Shorten a link here"
            name="shorten-url"
            id="shorten-url"
          />
          <Button type="submit" classname="btn--radius">
            Shorten it!
          </Button>
        </div>
        {/* <small className="shorten-url__message shorten-url__message--error">
          Please add a link
        </small> */}
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
