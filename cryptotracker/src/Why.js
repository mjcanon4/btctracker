import React from "react";
import { Card } from "semantic-ui-react";
import "./App.css";

function Why() {
  const description = [
    "I merely created this page to test Apex Charts, Semantic UI React and also to practice using APIs",
  ].join(" ");

  return (
    <div className="why">
      <Card>
        <Card.Content header="Why this page?" />
        <Card.Content description={description} />
      </Card>
    </div>
  );
}

export default Why;
