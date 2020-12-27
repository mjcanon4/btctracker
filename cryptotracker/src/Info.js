import React, { Component } from "react";
import { Accordion, Icon, Segment } from "semantic-ui-react";
import "./App.css";

export default class Info extends Component {
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;

    return (
      <div className="acc-info">
        <h1>Frequently Asked Questions</h1>
        <Segment className="info">
          <Accordion>
            <Accordion.Title
              active={activeIndex === 0}
              index={0}
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />
              What is a Bitcoin?
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 0}>
              <p>
                A Bitcoin is basically a computer file which is stored in a
                'digital wallet' app on a smartphone or computer. People can
                send Bitcoins (or part of one) to your digital wallet, and you
                can send Bitcoins to other people. Every single transaction is
                recorded in a public list called the blockchain.
              </p>
            </Accordion.Content>
            <Accordion.Title
              active={activeIndex === 1}
              index={1}
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />
              Who created Bitcoin?
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 1}>
              <p>
                Bitcoin is the first implementation of a concept called
                "cryptocurrency", which was first described in 1998 by Wei Dai.
                The first Bitcoin specification and proof of concept was
                published in 2009 in a cryptography mailing list by Satoshi
                Nakamoto. As such, the identity of Bitcoin's inventor is
                probably as relevant today as the identity of the person who
                invented paper.
              </p>
            </Accordion.Content>
            <Accordion.Title
              active={activeIndex === 2}
              index={2}
              onClick={this.handleClick}
            >
              <Icon name="dropdown" />
              How do I make money from Bitcoin?
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 2}>
              <p>
                There are several ways to make money via Bitcoin. Notably by
                mining, trading and buying and holding (much like a stock in the
                stock market). Each has their own risk and reward!
              </p>
            </Accordion.Content>
          </Accordion>
        </Segment>
      </div>
    );
  }
}
