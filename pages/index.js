import Layout from '../components/Layout'
import '../public/css/index.css';


const index = () => (
    <Layout>
        <div>
            <section className="black"></section>
            <section className="white"></section>
                <div className="container">
                    <span className="text1">TEDx คืออะไร ?</span>
                    <div className="row" >
                        <div className="col-6" ></div>
                        <div className="col-6" id="whatistedx">
                            <p>     TEDx เกิดขึ้นมาเพื่อสืบทอดเจตนารมณ์ "Ideas Worth Spreading" ของ TED ที่ต้องการส่งต่อรูปแบบการเผยแพร่ความคิดด้วยพลัง 
                                "Powerful Talk" ไปยังที่ต่างๆทั่วโลก TED จึงเปิดโอกาสให้ 'แต่ละภูมิภาค หรือ แต่ละชุมชน' สามารถติดต่อขออนุญาต 'TED Conferences LCC ประเทศสหรัฐอเมริกา'
                                เพื่อทำให้ TEDx เกิดขึ้นได้ในชุมชนของตนเองโดยไม่ต้องเสียค่าลิขสิทธิ์ (ต้องผ่านการพิจารณาตามขั้นตอน) เพื่อให้คนในชุมชนนั้นๆได้เข้าถึงพื้นที่ที่มีคุณค่า
                                และได้สัมผัสถึงศักยภาพของคนในชุมชนที่เขาอยู่ ยิ่งไปกว่านั้นการอยู่ท่ามกลางพลังบวกที่เกิดขึ้นจาก TEDx ในพื้นที่ของตัวเอง จะสามารถทำให้ผู้ฟังเชื่อมั่นใน
                                ศักยภาพของตนเองและคนรอบตัวพวกเขาได้มากยิ่งขึ้น
                            </p>
                        </div>

                    </div>
                    </div>
            <section className="white"></section>
        </div>
    </Layout>
);

export default index;
