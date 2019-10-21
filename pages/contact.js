import React, { Component } from 'react'
import Layout from "../components/Layout";
import "../public/css/contact.css";

class contact extends Component {
  constructor(props) {
    super(props)

    this.state = {
      q1: true,
      q2: false,
      q3:false,
      q4:false,
      q5:false,
      q6:false,
      q7:false,
      q8:false,
      q9:false,
      q10:false,
    }

    this.doClick = this.doClick.bind(this);
  }

  doClick(e) {
    const newState = this.state;
    Object.keys(newState).forEach(key => {
      newState[key] = false
    });
    console.log(e.target.getAttribute('name'));
    
    newState[e.target.getAttribute('name')] = true;
    
    this.setState(newState);
  }

  render() {
    return (
      <Layout>
        <div className="contact">
          <div style={{ background: "white" }}>
            <h1 className="section__headline">FAQs</h1>
            <h2 className="c-faqs__headline">About the TEDxKasetsartU </h2>
            <ul className="c-faqs">
              <li className={this.state.q1 ? "c-faq--active": "c-faq"} onClick={this.doClick}>
                <span className="c-faq__title" name="q1">K</span>
                <div className="c-faq__answer">K</div>
              </li>
              <li className={this.state.q2 ? "c-faq--active": "c-faq"} onClick={this.doClick}>
                <span className="c-faq__title" name="q2">F</span>
                <div className="c-faq__answer">F</div>
              </li>
              <li className={this.state.q3 ? "c-faq--active": "c-faq"} onClick={this.doClick}>
                <span className="c-faq__title" name="q3">S</span>
                <div className="c-faq__answer">S</div>
              </li>
            </ul>
            <h2 className="c-faqs__headline">About the Events</h2>
            <ul className="c-faqs">
              <li className={this.state.q4 ? "c-faq--active": "c-faq"} onClick={this.doClick}>
                <span className="c-faq__title" name="q4">When is the conference?</span>
                <div className="c-faq__answer">
                  The conference will occur on December 1st, 2019.
              </div>
              </li>
              <li className={this.state.q5 ? "c-faq--active": "c-faq"} onClick={this.doClick}>
                <span className="c-faq__title" name="q5">Where is the conference?</span>
                <div className="c-faq__answer">
                  The conference will take place at Office of Agricultural Museum
                  and Culture within Kasetsart University in Bangkok, Thailand.
              </div>
              </li>
              <li className={this.state.q6 ? "c-faq--active": "c-faq"} onClick={this.doClick}>
                <span className="c-faq__title" name="q6">
                  Do I have to a buy ticket to attend the conference?
              </span>
                <div className="c-faq__answer">
                  Yes, a ticket is necessary to attend the conference. There is a
                  limited number of seats, and tickets typically sell out within a
                  few days.
              </div>
              </li>
              <li className={this.state.q7 ? "c-faq--active": "c-faq"} onClick={this.doClick}>
                <span className="c-faq__title" name="q7">Where is the ticket seller?</span>
                <div className="c-faq__answer">
                  You can redirect to the seller by
                <a href="#" style={{ color: "red" }}>
                    CLICK HERE
                </a>
                </div>
              </li>
              <li className={this.state.q8 ? "c-faq--active": "c-faq"} onClick={this.doClick}>
                <span className="c-faq__title" name="q8">NO</span>
                <div className="c-faq__answer">NO</div>
              </li>
            </ul>
            <h2 className="c-faqs__headline">Contact Us !</h2>
            <ul className="c-faqs">
              <li className={this.state.q9 ? "c-faq--active": "c-faq"} onClick={this.doClick}>
                <span className="c-faq__title" name="q9">FACEBOOK</span>
                <div className="c-faq__answer">FACEBOOK</div>
              </li>
              <li className={this.state.q10 ? "c-faq--active": "c-faq"} onClick={this.doClick}>
                <span className="c-faq__title" name="q10">SPONSOR</span>
                <div className="c-faq__answer">SPONSOR</div>
              </li>
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}

export default contact;
