import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />

      <div className="App__Shorten">
        <div className="App__Shorten-Input">
          <h1>This is the Url Shortener Input Form</h1>
        </div>
        <div className="App__Shorten-Results">
          <h1>This is the Url Shortener Results</h1>
        </div>
      </div>

      <div className="App__Stats">
        <h1>This is the Stats Section</h1>
      </div>

      <div className="App__CTA">
        <h1>This is the App CTA</h1>
      </div>

      <Footer />
    </div>
  );
}

export default App;
