import React from "react";
import logo from "./logo.svg";
import Homepage from "./Homepage";
import Helmet from "react-helmet";
import "./App.css";
import "semantic-ui-css/semantic.min.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>The Village Highschool</title>
        <link rel="canonical" href="http://thevillagehs.org" />
        <meta name="description" content="The Village HS Description" />
      </Helmet>
      <Homepage />
    </div>
  );
};

export default App;
