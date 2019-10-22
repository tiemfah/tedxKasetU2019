import React, { Component } from "react";
import Layout from "../components/Layout";
import "../public/css/contact.css";

class contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      q1: true,
      q2: false,
      q3: false,
      q4: false,
      q5: false,
      q6: false,
      q7: false,
      q8: false,
      q9: false,
      q10: false
    };

    this.doClick = this.doClick.bind(this);
  }

  doClick(e) {
    const newState = this.state;
    Object.keys(newState).forEach(key => {
      newState[key] = false;
    });
    console.log(e.target.getAttribute("name"));

    newState[e.target.getAttribute("name")] = true;

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
              <li
                className={this.state.q1 ? "c-faq--active" : "c-faq"}
                onClick={this.doClick}
              >
                <span className="c-faq__title" name="q1">
                  TED คืออะไร?
                </span>
                <div className="c-faq__answer">
                  TED เกิดขึ้นครั้งแรกเมื่อปี 1984 นิยามตัวเองเป็น ‘nonprofit,
                  nonpartisan foundation’ คือองค์กรที่เป็นกลางและไม่แสวงหากำไร
                  มีจุดเริ่มต้นจากงานสัมมนาที่พูดคุยกันเกี่ยวกับเรื่อง
                  Technology, Entertainment และ Design (ที่มาของคำว่า TED)
                  และมีการจัดงานมาอย่างต่อเนื่องจนเกิดเป็นรูปแบบของเวทีทอล์คที่มีจุดประสงค์เพื่อสร้างพื้นที่สำหรับเผยแพร่ไอเดียที่มีพลัง
                  จากเหล่า Speaker ที่มีเวลาพูดไม่เกิน 18 นาที ส่วน Speaker
                  นั้นมาจากการคัดเลือกของกรรมการและทีมงานของ TED
                </div>
              </li>
              <li
                className={this.state.q2 ? "c-faq--active" : "c-faq"}
                onClick={this.doClick}
              >
                <span className="c-faq__title" name="q2">
                  TEDx คืออะไร?
                </span>
                <div className="c-faq__answer">
                  {" "}
                  TEDx เป็นโครงการที่ถูกริเริ่มขึ้นเพื่อสานต่อเจตนารมย์ของ TED
                  ที่เชื่อว่าความคิดดีๆ ควรถูกเผยแพร่ออกไปในวงกว้าง งาน TEDx
                  จะถูกจัดขึ้นอย่างอิสระโดยอาสาสมัครในชุมชนหรือเมืองนั้น ๆ
                  เพื่อให้ผู้คนในชุมชนได้มีโอกาสรับประสบการณ์ที่ใกล้เคียงกับงาน
                  TED ให้มากที่สุด งานที่จัดขึ้นที่กรุงเทพฯ
                  ครั้งนี้ถูกจัดภายใต้ชื่อ TEDxBangkok โดย x หมายถึงงาน TED
                  ที่ถูกจัดขึ้นอย่างอิสระ ในงาน TEDxBangkok จะมีทั้งการฉายวีดีโอ
                  TEDTalks
                  และการพูดโดยผู้พูดที่จะจุดชนวนให้เกิดความสัมพันธ์และการพูดคุยสนทนาที่ลึกซึ้ง
                  งาน TEDx ทั้งหมดจัดขึ้นโดยคนในท้องที่ โดยมี TED Conferences
                  เป็นผู้กำหนดแนวทางในการจัดงาน{" "}
                </div>
              </li>
              <li
                className={this.state.q3 ? "c-faq--active" : "c-faq"}
                onClick={this.doClick}
              >
                <span className="c-faq__title" name="q3">
                  อะไรคือเป้าหมายของ TEDxKasetsartU ?
                </span>
                <div className="c-faq__answer">
                  TEDxKasetsartU
                  มีเป้าหมายในการส่งต่อและเผยแพร่ไอเดียเพื่อการพัฒนาสังคมโดยใช้ศาสตร์และเทคโนโลยี
                  เพื่อเป็นส่วนหนึ่งของการพัฒนาประเทศอย่างยั่งยืนตามหลัก
                  ปณิธานของ มหาวิทยาลัยเกษตรศาสตร์
                  ที่เป็นสถาบันที่มีปณิธานมุ่งมั่นในการสั่งสม
                  เสาะแสวงหาและพัฒนาความรู้ให้เกิดความเจริญงอกงามทางภูมิปัญญา
                  ที่เพียบพร้อมด้วยวิชาการ จริยธรรมและคุณธรรม
                  ตลอดจนเป็นผู้ชี้นำทิศทาง สืบทอดเจตนารมณ์ที่ดีของสังคม
                  เพื่อความคงอยู่ ความเจริญ และความเป็นอารยะของชาติ
                </div>
              </li>
            </ul>
            <h2 className="c-faqs__headline">About the Events</h2>
            <ul className="c-faqs">
              <li
                className={this.state.q4 ? "c-faq--active" : "c-faq"}
                onClick={this.doClick}
              >
                <span className="c-faq__title" name="q4">
                  TEDxKasetsartU จัดเมื่อไหร่ ?
                </span>
                <div className="c-faq__answer">
                  TEDxKasetsartU จัดวันที่ 1 ธันวาคม 2563
                </div>
              </li>
              <li
                className={this.state.q5 ? "c-faq--active" : "c-faq"}
                onClick={this.doClick}
              >
                <span className="c-faq__title" name="q5">
                  TEDxKasetsartU จัดขึ้นที่ไหน ?
                </span>
                <div className="c-faq__answer">
                  TEDxKasetsartU จัดขึ้นที่{" "}
                  <a
                    href="https://www.egov.go.th/th/e-government-service/227//"
                    style={{ color: "red" }}
                  >
                    {" "}
                    สำนักพิพิธภัณฑ์และวัฒนธรรมการเกษตร, มหาวิทยาลัยเกษตรศาสตร์
                    วิทยาเขตบางเขน
                  </a>
                  .
                </div>
              </li>
              <li
                className={this.state.q6 ? "c-faq--active" : "c-faq"}
                onClick={this.doClick}
              >
                <span className="c-faq__title" name="q6">
                  จำเป็นหรือไม่ที่จะต้องซื้อบัตร TEDxKasetsartU ?
                </span>
                <div className="c-faq__answer">
                  บัตรเข้างานจำเป็นที่จะต้องใช้เพื่อเข้าชมงาน TEDxKasetsartU
                  อย่าลืมที่จะซื้อบัตรที่{" "}
                  <a href="#" style={{ color: "red" }}>
                    {" "}
                    CLICK HERE
                  </a>
                </div>
              </li>
              <li
                className={this.state.q7 ? "c-faq--active" : "c-faq"}
                onClick={this.doClick}
              >
                <span className="c-faq__title" name="q7">
                  ซื้อบัตร TEDxKasetsartU ได้ที่ไหน ?
                </span>
                <div className="c-faq__answer">
                  สามารถซื้อบัตรเข้างานได้ที่นี่
                  <a href="#" style={{ color: "red" }}>
                    {" "}
                    CLICK HERE
                  </a>
                </div>
              </li>
              <li
                className={this.state.q8 ? "c-faq--active" : "c-faq"}
                onClick={this.doClick}
              >
                <span className="c-faq__title" name="q8">
                  ระยะเวลาที่บัตรจำหน่ายเร็วหรือไม่ ?
                </span>
                <div className="c-faq__answer">เร็วโคตร</div>
              </li>
            </ul>
            <h1 className="section__headline">Contact Us</h1>
            <h2 className="c-faqs__headline">
              Get in touch with TEDxKasetsartU
            </h2>
            <ul className="c-faqs">
              <li
                className={this.state.q9 ? "c-faq--active" : "c-faq"}
                onClick={this.doClick}
              >
                <span className="c-faq__title" name="q9">
                  มีข้อสงสัยเพิ่มเติม
                </span>
                <div className="c-faq__answer">
                  ติดต่อเราด้วยช่องทางที่เร็วที่สุด
                  <a
                    href="https://www.facebook.com/TEDxKasetsartU/"
                    style={{ color: "red" }}
                  >
                    {" "}
                    CLICK HERE
                  </a>
                </div>
              </li>
              <li
                className={this.state.q10 ? "c-faq--active" : "c-faq"}
                onClick={this.doClick}
              >
                <span className="c-faq__title" name="q10">
                  สนใจสนับสนุน TEDxKasetsartU
                </span>
                <div className="c-faq__answer">
                  ติดต่อเราโดยตรงผ่าน email ที่ tedxkasetsart@gmail.com
                  หรือส่งข้อความหาเราผ่าน
                  <a
                    href="https://www.facebook.com/TEDxKasetsartU/"
                    style={{ color: "red" }}
                  >
                    {" "}
                    FACEBOOK
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Layout>
    );
  }
}

export default contact;
