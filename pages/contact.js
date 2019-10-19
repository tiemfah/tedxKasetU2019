import Layout from "../components/Layout";
import "../public/css/contact.css";
import { Script } from "vm";
const contact = () => (
  <Layout>
    <div className="contact">
      <div style={{ background: "white" }}>
        <h1 className="section__headline">FAQs</h1>
        <h2 className="c-faqs__headline">About the TEDxKasetsartU </h2>
        <ul className="c-faqs">
          <li className="c-faq c-faq--active">
            <span className="c-faq__title">K</span>
            <div className="c-faq__answer">K</div>
          </li>
          <li className="c-faq">
            <span className="c-faq__title">F</span>
            <div className="c-faq__answer">F</div>
          </li>
          <li className="c-faq">
            <span className="c-faq__title">S</span>
            <div className="c-faq__answer">S</div>
          </li>
        </ul>
        <h2 className="c-faqs__headline">About the Events</h2>
        <ul className="c-faqs">
          <li className="c-faq">
            <span className="c-faq__title">When is the conference?</span>
            <div className="c-faq__answer">
              The conference will occur on December 1st, 2019.
            </div>
          </li>
          <li className="c-faq">
            <span className="c-faq__title">Where is the conference?</span>
            <div className="c-faq__answer">
              The conference will take place at Office of Agricultural Museum
              and Culture within Kasetsart University in Bangkok, Thailand.
            </div>
          </li>
          <li className="c-faq">
            <span className="c-faq__title">
              Do I have to a buy ticket to attend the conference?
            </span>
            <div className="c-faq__answer">
              Yes, a ticket is necessary to attend the conference. There is a
              limited number of seats, and tickets typically sell out within a
              few days.
            </div>
          </li>
          <li className="c-faq">
            <span className="c-faq__title">Where is the ticket seller?</span>
            <div className="c-faq__answer">
              You can redirect to the seller by
              <a href="#" style={{ color: "red" }}>
                CLICK HERE
              </a>
            </div>
          </li>
          <li className="c-faq c-faq">
            <span className="c-faq__title">NO</span>
            <div className="c-faq__answer">NO</div>
          </li>
        </ul>
        <h2 className="c-faqs__headline">Contact Us !</h2>
        <ul className="c-faqs">
          <li className="c-faq">
            <span className="c-faq__title">FACEBOOK</span>
            <div className="c-faq__answer">FACEBOOK</div>
          </li>
          <li className="c-faq">
            <span className="c-faq__title">SPONSOR</span>
            <div className="c-faq__answer">SPONSOR</div>
          </li>
        </ul>
      </div>
    </div>

    <script src="js/contact.js"></script>
  </Layout>
);

export default contact;
