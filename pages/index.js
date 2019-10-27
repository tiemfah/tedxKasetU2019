import Layout from '../components/Layout'
import '../public/css/index.css';


const index = () => (
    <Layout>
        <div>
            <section className="black">
                <img className="back" src="img/back_cover.jpg"></img>
                <img className="front" src="img/shirtback_blended.png"></img>     
            </section>
            

            <section className="white">
                <div className="container">
                    <div data-aos="fade-down" data-aos-duration="1000">
                            <span className="text1">TEDx คืออะไร ?</span>
                    </div>
                    <div class="row" >
                        <div data-aos="zoom-in" data-aos-duration="500" id="whatistedx">
                            <p>     TEDx เกิดขึ้นมาเพื่อสืบทอดเจตนารมณ์ "Ideas Worth Spreading" ของ TED ที่ต้องการส่งต่อรูปแบบการเผยแพร่ความคิดด้วยพลัง 
                                "Powerful Talk" ไปยังที่ต่างๆทั่วโลก TED จึงเปิดโอกาสให้ 'แต่ละภูมิภาค หรือ แต่ละชุมชน' สามารถติดต่อขออนุญาต 'TED Conferences LCC ประเทศสหรัฐอเมริกา'
                                เพื่อทำให้ TEDx เกิดขึ้นได้ในชุมชนของตนเองโดยไม่ต้องเสียค่าลิขสิทธิ์ (ต้องผ่านการพิจารณาตามขั้นตอน) เพื่อให้คนในชุมชนนั้นๆได้เข้าถึงพื้นที่ที่มีคุณค่า
                                และได้สัมผัสถึงศักยภาพของคนในชุมชนที่เขาอยู่ ยิ่งไปกว่านั้นการอยู่ท่ามกลางพลังบวกที่เกิดขึ้นจาก TEDx ในพื้นที่ของตัวเอง จะสามารถทำให้ผู้ฟังเชื่อมั่นใน
                                ศักยภาพของตนเองและคนรอบตัวพวกเขาได้มากยิ่งขึ้น
                            </p>
                        </div>
                    </div>
                    <div data-aos="fade-down">
                        <span className="text2">TEDxKasetsart</span>
                    </div>
                    <div class="row">
                        <div data-aos="zoom-in" data-aos-duration="500" id="TEDxKU">
                                <p>     TEDx เกิดขึ้นมาเพื่อสืบทอดเจตนารมณ์ "Ideas Worth Spreading" ของ TED ที่ต้องการส่งต่อรูปแบบการเผยแพร่ความคิดด้วยพลัง 
                                    "Powerful Talk" ไปยังที่ต่างๆทั่วโลก TED จึงเปิดโอกาสให้ 'แต่ละภูมิภาค หรือ แต่ละชุมชน' สามารถติดต่อขออนุญาต 'TED Conferences LCC ประเทศสหรัฐอเมริกา'
                                    เพื่อทำให้ TEDx เกิดขึ้นได้ในชุมชนของตนเองโดยไม่ต้องเสียค่าลิขสิทธิ์ (ต้องผ่านการพิจารณาตามขั้นตอน) เพื่อให้คนในชุมชนนั้นๆได้เข้าถึงพื้นที่ที่มีคุณค่า
                                    และได้สัมผัสถึงศักยภาพของคนในชุมชนที่เขาอยู่ ยิ่งไปกว่านั้นการอยู่ท่ามกลางพลังบวกที่เกิดขึ้นจาก TEDx ในพื้นที่ของตัวเอง จะสามารถทำให้ผู้ฟังเชื่อมั่นใน
                                    ศักยภาพของตนเองและคนรอบตัวพวกเขาได้มากยิ่งขึ้น
                                </p>
                        </div>
                    </div>
                           
                </div>
            </section>
                
            <section className="white"></section> 
        </div>
        
    </Layout>
);

export default index;
