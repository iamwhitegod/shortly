import React from "react";
import Button from "../Button";

function HeaderContent() {
  return (
    <div className="header__content">
      <h1 className="heading heading--primary">More than just shorter links</h1>
      <p className="desc desc--primary">
        Build your brand's recognition and get details insight on how your links
        are preforming.
      </p>
      <Button classname="btn--active">Get started</Button>
    </div>
  );
}

export default HeaderContent;
