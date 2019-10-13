import Layout from "../components/Layout";
import "../public/css/contact.css";
const contact = () => (
  <Layout>
    <div></div>
    <div style={{ background: "white" }}>
      <h1 class="section__headline">FAQs</h1>
      <h2 class="c-faqs__headline">About the TEDxKasetsartU </h2>
      <ul class="c-faqs">
        <li class="c-faq c-faq--active">
          <span class="c-faq__title">KUY</span>
          <div class="c-faq__answer">KUY</div>
        </li>
        <li class="c-faq">
          <span class="c-faq__title">FUCK</span>
          <div class="c-faq__answer">FUCK</div>
        </li>
        <li class="c-faq">
          <span class="c-faq__title">SHIT</span>
          <div class="c-faq__answer">SHIT</div>
        </li>
      </ul>
      <h2 class="c-faqs__headline">About the Events</h2>
      <ul class="c-faqs">
        <li class="c-faq">
          <span class="c-faq__title">When is the conference?</span>
          <div class="c-faq__answer">
            The conference will occur on December 1st, 2019.
          </div>
        </li>
        <li class="c-faq">
          <span class="c-faq__title">Where is the conference?</span>
          <div class="c-faq__answer">
            The conference will take place at Office of Agricultural Museum and
            Culture within Kasetsart University in Bangkok, Thailand.
          </div>
        </li>
        <li class="c-faq">
          <span class="c-faq__title">
            Do I have to a buy ticket to attend the conference?
          </span>
          <div class="c-faq__answer">
            Yes, a ticket is necessary to attend the conference. There is a
            limited number of seats, and tickets typically sell out within a few
            days.
          </div>
        </li>
        <li class="c-faq">
          <span class="c-faq__title">Where is the ticket seller?</span>
          <div class="c-faq__answer">
            You can redirect to the seller by
            <a href="#" style={{ color: "red" }}>
              CLICK HERE
            </a>
          </div>
        </li>
        <li class="c-faq c-faq">
          <span class="c-faq__title">NO</span>
          <div class="c-faq__answer">NO</div>
        </li>
      </ul>
      <h2 class="c-faqs__headline">Contact Us !</h2>
      <ul class="c-faqs">
        <li class="c-faq">
          <span class="c-faq__title">FACEBOOK</span>
          <div class="c-faq__answer">FACEBOOK</div>
        </li>
        <li class="c-faq">
          <span class="c-faq__title">SPONSOR</span>
          <div class="c-faq__answer">SPONSOR</div>
        </li>
      </ul>
    </div>
  </Layout>
);

export default contact;
