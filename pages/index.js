import Layout from '../components/Layout'
import '../public/css/index.css';


const index = () => (
    <Layout isWhiteNav={true}>
        <div>
            <section className="banner">
                <img className="front"  src="img/alive3.png"></img>
                <video autoPlay loop preload="auto" muted=" "  className="back"  >
                    <source src="img/rainbow.mp4" type="video/mp4" />
                </video>
            </section>
            <section className="content">
                <div className="container">
                    <div className="alive" id ="alive" >
                            <p>ประสบการณ์ต่างๆที่เราได้ผ่านมาในชีวิต ไม่ว่าจะเป็นเรื่องดีหรือร้าย ล้วนแต่ทำให้เราได้เรียนรู้ และประสบการณ์เหล่านั้น ก็เหมือนกับ สี 
                            หลากหลายสีที่เข้ามาเติมแต่งทุกๆคนขณะที่เรื่องราวของชีวิตได้ดำเนินไป ทุกคนจึงมีสีสันเป็นของตัวเอง สีต่างๆเหล่านั้นจึงสวยงามในช่วงเวลาช่วงหนึ่ง 
                            และทุกคนล้วนค้นพบสิ่งใหม่ๆระหว่างทางที่ทำให้ชีวิตมีเรื่องราวที่มีความหมายเสมอ "ALIVE" ของพวกเราเป็นตัวแทนของสีสัน และเรื่องราวของทุกคน
                            เรื่องราวของคนคนหนึ่งสามารถถ่ายทอดไปสู่คนอีกคน สู่ชุมชน สู่สังคม เพื่อสร้างแรงบันดาลใจและเพิ่มพลังชีวิตให้กับใครอีกหลายคน
                            มาร่วม "สร้างสีสร้างสรรค์สร้างชีวิต" ไปกับ #TEDxKasetsartU2019 ปลายปีนี้ คอยติดตามพวกเรานะคะ
                            #ALIVE  #LivinginyourCOLOR
                            </p>

                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <span className="text1">TEDx คืออะไร ?</span>
                            </div>
                            <div className="flip-card-back" id="whatistedx">
                                <p >     TEDx เกิดขึ้นมาเพื่อสืบทอดเจตนารมณ์ "Ideas Worth Spreading" ของ TED ที่ต้องการส่งต่อรูปแบบการเผยแพร่ความคิดด้วยพลัง 
                                    "Powerful Talk" ไปยังที่ต่างๆทั่วโลก TED จึงเปิดโอกาสให้ 'แต่ละภูมิภาค หรือ แต่ละชุมชน' สามารถติดต่อขออนุญาต 'TED Conferences LCC ประเทศสหรัฐอเมริกา'
                                    เพื่อทำให้ TEDx เกิดขึ้นได้ในชุมชนของตนเองโดยไม่ต้องเสียค่าลิขสิทธิ์ (ต้องผ่านการพิจารณาตามขั้นตอน) เพื่อให้คนในชุมชนนั้นๆได้เข้าถึงพื้นที่ที่มีคุณค่า
                                    และได้สัมผัสถึงศักยภาพของคนในชุมชนที่เขาอยู่ ยิ่งไปกว่านั้นการอยู่ท่ามกลางพลังบวกที่เกิดขึ้นจาก TEDx ในพื้นที่ของตัวเอง จะสามารถทำให้ผู้ฟังเชื่อมั่นใน
                                    ศักยภาพของตนเองและคนรอบตัวพวกเขาได้มากยิ่งขึ้น
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <span className="text1">TEDxKasetsart</span>
                            </div>
                            <div className="flip-card-back" id="TEDxKU">
                                <p>เป็นกิจกรรมที่จัดขึ้นโดยนิสิตและอาจารย์มหาวิทยาลัยเกษตรศาสตร์เพื่อส่งต่อไอเดียและแลกเปลี่ยนความคิดระหว่างกันในปีนี้ TEDx ได้ร่วมกับมหาวิทยาลัย
                                    เกษตรศาสตร์เป็นปีที่ 3 และมีความคาดหวังว่าจะทำให้เพื่อนๆทุกคนรู้จักและเข้าร่วมทำงานกับ TEDx ทีม
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
        </div>
        
    </Layout>
);

export default index;
