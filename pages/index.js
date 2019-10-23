import Layout from '../components/Layout'
import '../public/css/index.css';


const index = () => (
    <Layout>
        <div>
            <section className="black">
            <div class ="banner">
                <div class="row">
                    <img class="front" id="vid_back" src="img/alive2.png"></img>
                    <video autoplay loop preload="auto" muted=" "  class="back" id="vid_front"  >
                        <source src="img/back_cover.mp4" type="video/mp4" />
                    </video>
                </div> 
            </div>

                
            </section>
            <section className="white">
                <div class="container">
                    <div data-aos="fade-down">
                            <span class="text1">TEDx คืออะไร ?</span>
                    </div>
                    <div class="row" id="iws" >
                        {/* <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6" >
                            <div data-aos="flip-left" class="left_col">IDEA</div>
                            <div data-aos="flip-left" class="left_col">WORTH</div>
                            <div data-aos="flip-left" class="left_col">SPREADING</div>
                        </div>
                        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6" id="whatistedx"> */}
                            <div data-aos="fade-right" id="whatistedx">
                                <p> TEDx เกิดขึ้นมาเพื่อสืบทอดเจตนารมณ์ "Ideas Worth Spreading" ของ TED ที่ต้องการส่งต่อรูปแบบการเผยแพร่ความคิดด้วยพลัง 
                                    "Powerful Talk" ไปยังที่ต่างๆทั่วโลก TED จึงเปิดโอกาสให้ 'แต่ละภูมิภาค หรือ แต่ละชุมชน' สามารถติดต่อขออนุญาต 'TED Conferences LCC ประเทศสหรัฐอเมริกา'
                                    เพื่อทำให้ TEDx เกิดขึ้นได้ในชุมชนของตนเองโดยไม่ต้องเสียค่าลิขสิทธิ์ (ต้องผ่านการพิจารณาตามขั้นตอน) เพื่อให้คนในชุมชนนั้นๆได้เข้าถึงพื้นที่ที่มีคุณค่า
                                    และได้สัมผัสถึงศักยภาพของคนในชุมชนที่เขาอยู่ ยิ่งไปกว่านั้นการอยู่ท่ามกลางพลังบวกที่เกิดขึ้นจาก TEDx ในพื้นที่ของตัวเอง จะสามารถทำให้ผู้ฟังเชื่อมั่นใน
                                    ศักยภาพของตนเองและคนรอบตัวพวกเขาได้มากยิ่งขึ้น
                                </p>
                            </div>
                        {/* </div> */}
                    </div>
                    <div data-aos="fade-down">
                        <span class="text2">TEDxKasetsart</span>
                    </div>
                    <div class="row">
                        {/* <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6" id="TEDxKU" > */}
                            <div data-aos="fade-left" id="TEDxKU">
                                    <p>     TEDx เกิดขึ้นมาเพื่อสืบทอดเจตนารมณ์ "Ideas Worth Spreading" ของ TED ที่ต้องการส่งต่อรูปแบบการเผยแพร่ความคิดด้วยพลัง 
                                        "Powerful Talk" ไปยังที่ต่างๆทั่วโลก TED จึงเปิดโอกาสให้ 'แต่ละภูมิภาค หรือ แต่ละชุมชน' สามารถติดต่อขออนุญาต 'TED Conferences LCC ประเทศสหรัฐอเมริกา'
                                        เพื่อทำให้ TEDx เกิดขึ้นได้ในชุมชนของตนเองโดยไม่ต้องเสียค่าลิขสิทธิ์ (ต้องผ่านการพิจารณาตามขั้นตอน) เพื่อให้คนในชุมชนนั้นๆได้เข้าถึงพื้นที่ที่มีคุณค่า
                                        และได้สัมผัสถึงศักยภาพของคนในชุมชนที่เขาอยู่ ยิ่งไปกว่านั้นการอยู่ท่ามกลางพลังบวกที่เกิดขึ้นจาก TEDx ในพื้นที่ของตัวเอง จะสามารถทำให้ผู้ฟังเชื่อมั่นใน
                                        ศักยภาพของตนเองและคนรอบตัวพวกเขาได้มากยิ่งขึ้น
                                    </p>
                            </div>
                        {/* </div> */}
                        {/* <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6" id="right_col">
                            <div data-aos="flip-left" class="left_col">IDEA</div>
                            <div data-aos="flip-left" class="left_col">WORTH</div>
                            <div data-aos="flip-left" class="left_col">SPREADING</div>
                        </div>    */}
                </div>
            </div>
            </section>
                
            <section className="white"></section>
        </div>
    </Layout>
);

export default index;
