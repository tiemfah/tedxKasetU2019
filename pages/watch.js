import Layout from '../components/Layout'
import React, { Component } from 'react'
import '../public/css/watch.css'

class watch extends Component {
    constructor(props) {
        super(props);

        this.vdoId = {
            id1: "XJomMljKX9o",
            id2: "J66ua-ELj8I",
            id3: "V9q9zAAJXQo",
            id4: "WJF9eVSn8ZI",
            id5: "yRUm1voMUV0",
            id6: "JS87t0lPVNo",
            id7: "23BA9X6Pphk",
            id8: "_Pp8q-g0JGk",
            id9: "p0CSG7rxW_s",
            id10: "JVSTp23IGQY",
            id11: "aPjbzctE9jc",
            id12: "2UoGnz3jtR0",
            id13: "56794S-nfGM",
            id14: "mfk4dmZ2TUo",
            id15: "j6jb4-wX6Tc",
            id16: "qYbV5EY1yxU",
            id17: "k8vGjREtXIs",
            id18: "kmBMMtMTNrE",
            id19: "gwY8Q-jgaLU",
            id20: "HLmEC-3QXKw",
        }

        this.state = {
            yr17id1: '',
            yr17id2: '',
            yr17id3: '',
            yr17id4: '',
            yr17id5: '',
            yr17id6: '',
            yr17id7: '',
            yr17id8: '',
            yr17id9: '',
            yr17id10: '',
            yr18id1: '',
            yr18id2: '',
            yr18id3: '',
            yr18id4: '',
            yr18id5: '',
            yr18id6: '',
            yr18id7: '',
            yr18id8: '',
            yr18id9: '',
            yr18id10: '',
        }

        this.playVdo = this.playVdo.bind(this)
    }

    playVdo(year, id) {
        const yearRef = [this.refs.yr17id1, this.refs.yr17id2, this.refs.yr17id3, this.refs.yr17id4, this.refs.yr17id5, this.refs.yr17id6, this.refs.yr17id7, this.refs.yr17id8, this.refs.yr17id9, this.refs.yr17id10, this.refs.yr18id1, this.refs.yr18id2, this.refs.yr18id3, this.refs.yr18id4, this.refs.yr18id5, this.refs.yr18id6, this.refs.yr18id7, this.refs.yr18id8, this.refs.yr18id9, this.refs.yr18id10];
        let index = 0
        let i = 0;
        index = Object.values(this.vdoId).indexOf(year);
        yearRef[index].removeChild(yearRef[index].childNodes[0]);
        yearRef[index].removeChild(yearRef[index].childNodes[0]);
        let link = `https://www.youtube.com/embed/${year}?rel=0&amp;showinfo=0&amp;autoplay=1`
        let vdoLink = React.createElement(
            'iframe',
            { width: 320, height: 196, src: link, frameborder: 0 },
            ''
        )
        const newState = this.state;
        Object.keys(newState).forEach(key => {
            if (i == index) {
                newState[key] = vdoLink;
            }
            i++;
        });
        this.setState(newState);
    }

    render() {
        return (
            <div className="watch">
                <Layout isWhiteNav={false}>
                    <div className="spacing"></div>

                    {/* Page title */}
                    <h1 className="sec-Title">PAST SPEAKERS</h1>
                    <hr className="separator separator--line" />

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
                                    <div className="yt-thumbnail" ref="yr18id1">
                                        <img src="https://img.youtube.com/vi/aPjbzctE9jc/maxresdefault.jpg" alt=""></img>
                                        <div className="play-btn" onClick={this.playVdo.bind('yr18', this.vdoId.id11)}></div>
                                        {this.state.yr18id1}
                                    </div>
                                    <p className="speakerTopic">ความรัก หรือ ความฝัน</p>
                                    <p className="speakerName">รัณนภันต์ ยั่งยืนพูนชัย</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4 mx-auto ytbuild">
                                <div className="vdo-border text-center mb-4 p-3">
                                    <div className="yt-thumbnail" ref="yr18id2">
                                        <img src="https://img.youtube.com/vi/2UoGnz3jtR0/maxresdefault.jpg" alt=""></img>
                                        <div className="play-btn" onClick={this.playVdo.bind('yr18', this.vdoId.id12)}></div>
                                        {this.state.yr18id2}
                                    </div>
                                    <p className="speakerTopic">let me glow</p>
                                    <p className="speakerName">ณัฏฐนันท์ สนุ่นรัตน์</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4 mx-auto ytbuild">
                                <div className="vdo-border text-center mb-4 p-3">
                                    <div className="yt-thumbnail" ref="yr18id3">
                                        <img src="https://img.youtube.com/vi/56794S-nfGM/maxresdefault.jpg" alt=""></img>
                                        <div className="play-btn" onClick={this.playVdo.bind('yr18', this.vdoId.id13)}></div>
                                        {this.state.yr18id3}
                                    </div>
                                    <p className="speakerTopic">Limitless</p>
                                    <p className="speakerName">ตรีชฎา เพชรรัตน์</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4 mx-auto ytbuild">
                                <div className="vdo-border text-center mb-4 p-3">
                                    <div className="yt-thumbnail" ref="yr18id4">
                                        <img src="https://img.youtube.com/vi/mfk4dmZ2TUo/maxresdefault.jpg" alt=""></img>
                                        <div className="play-btn" onClick={this.playVdo.bind('yr18', this.vdoId.id14)}></div>
                                        {this.state.yr18id4}
                                    </div>
                                    <p className="speakerTopic">who am I?</p>
                                    <p className="speakerName">ณัฐวุฒิ พึงเจริญพงศ์</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4 mx-auto ytbuild">
                                <div className="vdo-border text-center mb-4 p-3">
                                    <div className="yt-thumbnail" ref="yr18id5">
                                        <img src="https://img.youtube.com/vi/j6jb4-wX6Tc/maxresdefault.jpg" alt=""></img>
                                        <div className="play-btn" onClick={this.playVdo.bind('yr18', this.vdoId.id15)}></div>
                                        {this.state.yr18id5}
                                    </div>
                                    <p className="speakerTopic">defeat your limit</p>
                                    <p className="speakerName">อริสรา ธนาปกิจ</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4 mx-auto ytbuild">
                                <div className="vdo-border text-center mb-4 p-3">
                                    <div className="yt-thumbnail" ref="yr18id6">
                                        <img src="https://img.youtube.com/vi/qYbV5EY1yxU/maxresdefault.jpg" alt=""></img>
                                        <div className="play-btn" onClick={this.playVdo.bind('yr18', this.vdoId.id16)}></div>
                                        {this.state.yr18id6}
                                    </div>
                                    <p className="speakerTopic">Head hand heart</p>
                                    <p className="speakerName">ปรารี กิตติดำเกิง</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4 mx-auto ytbuild">
                                <div className="vdo-border text-center mb-4 p-3">
                                    <div className="yt-thumbnail" ref="yr18id7">
                                        <img src="https://img.youtube.com/vi/k8vGjREtXIs/maxresdefault.jpg" alt=""></img>
                                        <div className="play-btn" onClick={this.playVdo.bind('yr18', this.vdoId.id17)}></div>
                                        {this.state.yr18id7}
                                    </div>
                                    <p className="speakerTopic">drift for alive</p>
                                    <p className="speakerName">คริสตี้หลุยส์ นามวงศ์</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4 mx-auto ytbuild">
                                <div className="vdo-border text-center mb-4 p-3">
                                    <div className="yt-thumbnail" ref="yr18id8">
                                        <img src="https://img.youtube.com/vi/kmBMMtMTNrE/maxresdefault.jpg" alt=""></img>
                                        <div className="play-btn" onClick={this.playVdo.bind('yr18', this.vdoId.id18)}></div>
                                        {this.state.yr18id8}
                                    </div>
                                    <p className="speakerTopic">Can u hear your monster?</p>
                                    <p className="speakerName">ชานนท์ ยอดหงษ์</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4 mx-auto ytbuild">
                                <div className="vdo-border text-center mb-4 p-3">
                                    <div className="yt-thumbnail" ref="yr18id9">
                                        <img src="https://img.youtube.com/vi/gwY8Q-jgaLU/maxresdefault.jpg" alt=""></img>
                                        <div className="play-btn" onClick={this.playVdo.bind('yr18', this.vdoId.id19)}></div>
                                        {this.state.yr18id9}
                                    </div>
                                    <p className="speakerTopic">Beyond lie the solutions.</p>
                                    <p className="speakerName">จิตร์ทัศน์ ฝักเจริญผล</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4 mx-auto ytbuild">
                                <div className="vdo-border text-center mb-4 p-3">
                                    <div className="yt-thumbnail" ref="yr18id10">
                                        <img src="https://img.youtube.com/vi/HLmEC-3QXKw/maxresdefault.jpg" alt=""></img>
                                        <div className="play-btn" onClick={this.playVdo.bind('yr18', this.vdoId.id20)}></div>
                                        {this.state.yr18id10}
                                    </div>
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

                    <section id="yr17">
                        <div className="row mx-auto">
                            <div className="col-md-6 col-lg-4 mx-auto ytbuild">
                                <div className="vdo-border text-center mb-4 p-3">
                                    <div className="yt-thumbnail" ref="yr17id1">
                                        <img src="https://img.youtube.com/vi/XJomMljKX9o/maxresdefault.jpg" alt=""></img>
                                        <div className="play-btn" onClick={this.playVdo.bind('yr17', this.vdoId.id1)}></div>
                                        {this.state.yr17id1}
                                    </div>
                                    <p className="speakerTopic">ฝันเด็กไทย ใครกำหนด</p>
                                    <p className="speakerName">อรพิมพ์ เหลืองอ่อน</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4 mx-auto ytbuild">
                                <div className="vdo-border text-center mb-4 p-3">
                                    <div className="yt-thumbnail" ref="yr17id2">
                                        <img src="https://img.youtube.com/vi/J66ua-ELj8I/maxresdefault.jpg" alt=""></img>
                                        <div className="play-btn" onClick={this.playVdo.bind('yr17', this.vdoId.id2)}></div>
                                        {this.state.yr17id2}
                                    </div>
                                    <p className="speakerTopic">สมองกลสอนคน</p>
                                    <p className="speakerName">ดร.กาญจนพันธุ์ สุขวิชชัย</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4 mx-auto ytbuild">
                                <div className="vdo-border text-center mb-4 p-3">
                                    <div className="yt-thumbnail" ref="yr17id3">
                                        <img src="https://img.youtube.com/vi/V9q9zAAJXQo/maxresdefault.jpg" alt=""></img>
                                        <div className="play-btn" onClick={this.playVdo.bind('yr17', this.vdoId.id3)}></div>
                                        {this.state.yr17id3}
                                    </div>
                                    <p className="speakerTopic">สื่อการเรียน...เปลี่ยนอนาคต</p>
                                    <p className="speakerName">ฐิติวุฒิ นันทิภาคย์หิรัญ</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4 mx-auto ytbuild">
                                <div className="vdo-border text-center mb-4 p-3">
                                    <div className="yt-thumbnail" ref="yr17id4">
                                        <img src="https://img.youtube.com/vi/WJF9eVSn8ZI/maxresdefault.jpg" alt=""></img>
                                        <div className="play-btn" onClick={this.playVdo.bind('yr17', this.vdoId.id4)}></div>
                                        {this.state.yr17id4}
                                    </div>
                                    <p className="speakerTopic">หยุดตีตรา เพื่อเดินต่อ</p>
                                    <p className="speakerName">กิตติภณ ดิษฐบรรจง</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4 mx-auto ytbuild">
                                <div className="vdo-border text-center mb-4 p-3">
                                    <div className="yt-thumbnail" ref="yr17id5">
                                        <img src="https://img.youtube.com/vi/yRUm1voMUV0/maxresdefault.jpg" alt=""></img>
                                        <div className="play-btn" onClick={this.playVdo.bind('yr17', this.vdoId.id5)}></div>
                                        {this.state.yr17id5}
                                    </div>
                                    <p className="speakerTopic">เริ่มเมื่อยังไม่พร้อม</p>
                                    <p className="speakerName">พงศธร ธนบดีภัทร</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4 mx-auto ytbuild">
                                <div className="vdo-border text-center mb-4 p-3">
                                    <div className="yt-thumbnail" ref="yr17id6">
                                        <img src="https://img.youtube.com/vi/JS87t0lPVNo/maxresdefault.jpg" alt=""></img>
                                        <div className="play-btn" onClick={this.playVdo.bind('yr17', this.vdoId.id6)}></div>
                                        {this.state.yr17id6}
                                    </div>
                                    <p className="speakerTopic">พลิกชีวิตเกษตรกรไทย ด้วยไฟในใจคุณ</p>
                                    <p className="speakerName">พงษ์ลดา พะเนียงเวทย์</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4 mx-auto ytbuild">
                                <div className="vdo-border text-center mb-4 p-3">
                                    <div className="yt-thumbnail" ref="yr17id7">
                                        <img src="https://img.youtube.com/vi/23BA9X6Pphk/maxresdefault.jpg" alt=""></img>
                                        <div className="play-btn" onClick={this.playVdo.bind('yr17', this.vdoId.id7)}></div>
                                        {this.state.yr17id7}
                                    </div>
                                    <p className="speakerTopic">เกลียดวันจันทร์?</p>
                                    <p className="speakerName">รวิศ หาญอุตสาหะ</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4 mx-auto ytbuild">
                                <div className="vdo-border text-center mb-4 p-3">
                                    <div className="yt-thumbnail" ref="yr17id8">
                                        <img src="https://img.youtube.com/vi/_Pp8q-g0JGk/maxresdefault.jpg" alt=""></img>
                                        <div className="play-btn" onClick={this.playVdo.bind('yr17', this.vdoId.id8)}></div>
                                        {this.state.yr17id8}
                                    </div>
                                    <p className="speakerTopic">ปลูกบ้านจากต้นหญ้า</p>
                                    <p className="speakerName">ธนพัฒน์ บุญสนาน</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4 mx-auto ytbuild">
                                <div className="vdo-border text-center mb-4 p-3">
                                    <div className="yt-thumbnail" ref="yr17id9">
                                        <img src="https://img.youtube.com/vi/p0CSG7rxW_s/maxresdefault.jpg" alt=""></img>
                                        <div className="play-btn" onClick={this.playVdo.bind('yr17', this.vdoId.id9)}></div>
                                        {this.state.yr17id9}
                                    </div>
                                    <p className="speakerTopic">Secrets to discovering your true passion and happiness in life.</p>
                                    <p className="speakerName">ดาริน สุทธพงศ์</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4 mx-auto ytbuild">
                                <div className="vdo-border text-center mb-4 p-3">
                                    <div className="yt-thumbnail" ref="yr17id10">
                                        <img src="https://img.youtube.com/vi/JVSTp23IGQY/maxresdefault.jpg" alt=""></img>
                                        <div className="play-btn" onClick={this.playVdo.bind('yr17', this.vdoId.id10)}></div>
                                        {this.state.yr17id10}
                                    </div>
                                    <p className="speakerTopic">เปลี่ยนกาย เปลี่ยนเสียง เปลี่ยนใจ เพื่อนิสัยใหม่ที่คุณต้องการ</p>
                                    <p className="speakerName">รสสุคนธ์ กองเกตุ</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </Layout>
            </div>
        )
    }
}

export default watch;
