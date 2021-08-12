import React from "react";
import ShortenUrl from "../ShortenUrl";
import StatCaption from "../StatsCaption";
import StatCard from "../StatsCard";
import iconBr from "../../assets/icon-brand-recognition.svg";
import iconDr from "../../assets/icon-detailed-records.svg";
import iconFc from "../../assets/icon-fully-customizable.svg";
import StatSection from "../StatSection";

function Main() {
  return (
    <main className="main">
      <ShortenUrl />

      <StatSection>
        <StatCaption
          heading="Advanced Statistics"
          description="Track how your link are performing across the web with our advanced
        statistics board"
        />
        <StatCard
          icon={iconBr}
          heading="Brand Recognition"
          description="Boost your brand recognition with each click. Generic link don't mean a
        thing. Branded link helps instill confidence in your content."
        />
        <StatCard
          classname="stat__card--2"
          icon={iconDr}
          heading="Detailed Records"
          description="Gain insights into who is clicking your clicks. Know when and where people engage with your content helps inform better desicion."
        />
        <StatCard
          classname="stat__card--3"
          icon={iconFc}
          heading="Fully Customizable"
          description="Improve your brand awareness and content discoverability through customizable links, supercharging audience engagement."
        />

        <div className="stat__bar"></div>
      </StatSection>
    </main>
  );
}

export default Main;
