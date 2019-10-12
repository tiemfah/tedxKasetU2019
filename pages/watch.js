import Layout from '../components/Layout'
import '../public/css/watch.css'
import '../public/js/watch.js'

const watch = () => (
    <Layout>
        <div className="spacing"></div>

        {/* Page title */}
        <div className="secTitle">
            <h1 style={{ fontWeight: '300' }}>PAST SPEAKERS</h1>
            <hr className="separator separator--line" />
        </div>

        {/* year 2018 */}
        <div className="lazy thisyear" id="year18">
            <h1 className="yrTitle">Out of Norm</h1>
            <div className="lazy slider-wrapper">
                <h4>201</h4>
                <h4>
                    <span>
                        9 <br />
                        8 <br />
                    </span>
                </h4>
            </div>
        </div>

        <section id="yr18">
            <div className="row mx-auto">
                <div className="col-md-6 col-lg-4 mx-auto ytbuild">
                    <div className="vdo-border text-center mb-4 p-3">
                        <div className="yt-thumbnail" id="1">
                            <img src="https://img.youtube.com/vi/aPjbzctE9jc/mqdefault.jpg" alt=""></img>
                            <div class="play-btn" onclick={() => playVDO('yr18',1)}></div>
                        </div>
                        <p className="speakerTopic">ความรัก หรือ ความฝัน</p>
                        <p className="speakerName">รัณนภันต์ ยั่งยืนพูนชัย</p>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4 mx-auto ytbuild">
                    <div className="vdo-border text-center mb-4 p-3">
                        <div className="yt-thumbnail" id="2"></div>
                        <p className="speakerTopic">let me glow</p>
                        <p className="speakerName">ณัฏฐนันท์ สนุ่นรัตน์</p>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4 mx-auto ytbuild">
                    <div className="vdo-border text-center mb-4 p-3">
                        <div className="yt-thumbnail" id="3"></div>
                        <p className="speakerTopic">Limitless</p>
                        <p className="speakerName">ตรีชฎา เพชรรัตน์</p>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4 mx-auto ytbuild">
                    <div className="vdo-border text-center mb-4 p-3">
                        <div className="yt-thumbnail" id="4"></div>
                        <p className="speakerTopic">who am I?</p>
                        <p className="speakerName">ณัฐวุฒิ พึงเจริญพงศ์</p>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4 mx-auto ytbuild">
                    <div className="vdo-border text-center mb-4 p-3">
                        <div className="yt-thumbnail" id="5"></div>
                        <p className="speakerTopic">defeat your limit</p>
                        <p className="speakerName">อริสรา ธนาปกิจ</p>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4 mx-auto ytbuild">
                    <div className="vdo-border text-center mb-4 p-3">
                        <div className="yt-thumbnail" id="6"></div>
                        <p className="speakerTopic">Head hand heart</p>
                        <p className="speakerName">ปรารี กิตติดำเกิง</p>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4 mx-auto ytbuild">
                    <div className="vdo-border text-center mb-4 p-3">
                        <div className="yt-thumbnail" id="7"></div>
                        <p className="speakerTopic">drift for alive</p>
                        <p className="speakerName">คริสตี้หลุยส์ นามวงศ์</p>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4 mx-auto ytbuild">
                    <div className="vdo-border text-center mb-4 p-3">
                        <div className="yt-thumbnail" id="8"></div>
                        <p className="speakerTopic">Can u hear your monster?</p>
                        <p className="speakerName">ชานนท์ ยอดหงษ์</p>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4 mx-auto ytbuild">
                    <div className="vdo-border text-center mb-4 p-3">
                        <div className="yt-thumbnail" id="9"></div>
                        <p className="speakerTopic">Beyond lie the solutions.</p>
                        <p className="speakerName">จิตร์ทัศน์ ฝักเจริญผล</p>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4 mx-auto ytbuild">
                    <div className="vdo-border text-center mb-4 p-3">
                        <div className="yt-thumbnail" id="10"></div>
                        <p className="speakerTopic">write your own happy ending</p>
                        <p className="speakerName">ภาณุมาศ ทองธนากุล</p>
                    </div>
                </div>
            </div>

            <hr className="separator separator--line" />
        </section>

        {/* year 2017 */}
        <div className="lazy thisyear" id="year17">
            <h1 className="yrTitle">Take a change, Make a chance</h1>
            <div className="lazy slider-wrapper">
                <h4>201</h4>
                <h4>
                    <span>
                        9 <br />
                        8 <br />
                        7 <br />
                    </span>
                </h4>
            </div>
        </div>

        <section id="yr17" ref="yr17">
            <div className="row mx-auto">
                <div className="col-md-6 col-lg-4 mx-auto ytbuild">
                    <div className="vdo-border text-center mb-4 p-3">
                        <div className="yt-thumbnail" id="1"></div>
                        <p className="speakerTopic">ฝันเด็กไทย ใครกำหนด</p>
                        <p className="speakerName">อรพิมพ์ เหลืองอ่อน</p>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4 mx-auto ytbuild">
                    <div className="vdo-border text-center mb-4 p-3">
                        <div className="yt-thumbnail" id="2"></div>
                        <p className="speakerTopic">สมองกลสอนคน</p>
                        <p className="speakerName">ดร.กาญจนพันธุ์ สุขวิชชัย</p>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4 mx-auto ytbuild">
                    <div className="vdo-border text-center mb-4 p-3">
                        <div className="yt-thumbnail" id="3"></div>
                        <p className="speakerTopic">สื่อการเรียน...เปลี่ยนอนาคต</p>
                        <p className="speakerName">ฐิติวุฒิ นันทิภาคย์หิรัญ</p>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4 mx-auto ytbuild">
                    <div className="vdo-border text-center mb-4 p-3">
                        <div className="yt-thumbnail" id="4"></div>
                        <p className="speakerTopic">หยุดตีตรา เพื่อเดินต่อ</p>
                        <p className="speakerName">กิตติภณ ดิษฐบรรจง</p>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4 mx-auto ytbuild">
                    <div className="vdo-border text-center mb-4 p-3">
                        <div className="yt-thumbnail" id="5"></div>
                        <p className="speakerTopic">เริ่มเมื่อยังไม่พร้อม</p>
                        <p className="speakerName">พงศธร ธนบดีภัทร</p>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4 mx-auto ytbuild">
                    <div className="vdo-border text-center mb-4 p-3">
                        <div className="yt-thumbnail" id="6"></div>
                        <p className="speakerTopic">พลิกชีวิตเกษตรกรไทย ด้วยไฟในใจคุณ</p>
                        <p className="speakerName">พงษ์ลดา พะเนียงเวทย์</p>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4 mx-auto ytbuild">
                    <div className="vdo-border text-center mb-4 p-3">
                        <div className="yt-thumbnail" id="7"></div>
                        <p className="speakerTopic">เกลียดวันจันทร์?</p>
                        <p className="speakerName">รวิศ หาญอุตสาหะ</p>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4 mx-auto ytbuild">
                    <div className="vdo-border text-center mb-4 p-3">
                        <div className="yt-thumbnail" id="8"></div>
                        <p className="speakerTopic">ปลูกบ้านจากต้นหญ้า</p>
                        <p className="speakerName">ธนพัฒน์ บุญสนาน</p>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4 mx-auto ytbuild">
                    <div className="vdo-border text-center mb-4 p-3">
                        <div className="yt-thumbnail" id="9"></div>
                        <p className="speakerTopic">Secrets to discovering your true passion and happiness in life.</p>
                        <p className="speakerName">ดาริน สุทธพงศ์</p>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4 mx-auto ytbuild">
                    <div className="vdo-border text-center mb-4 p-3">
                        <div className="yt-thumbnail" id="10"></div>
                        <p className="speakerTopic">เปลี่ยนกาย เปลี่ยนเสียง เปลี่ยนใจ เพื่อนิสัยใหม่ที่คุณต้องการ</p>
                        <p className="speakerName">รสสุคนธ์ กองเกตุ</p>
                    </div>
                </div>
            </div>
        </section>

        {/* jquery js
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        bootstrap js
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
        watch page js
        <script src="js/watch.js"></script> */}
    </Layout>
);

export default watch;
