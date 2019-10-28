import React from "react";
import ResponsiveContainer from "./ResponsiveContainer";
import HomepageContents from "./HomepageContents";
import { Container, Header } from "semantic-ui-react";

const Homepage: React.FC = () => {
  return (
    <ResponsiveContainer>
      <HomepageContents />
    </ResponsiveContainer>
  );
};

export default Homepage;
