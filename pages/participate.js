import Layout from '../components/Layout';
import HandImage from '../public/img/hand.png';
import RaiseImage from '../public/img/raise-hand.png'
import '../public/css/participate.css'

const participate = () => (
    <Layout>
        <div>
            <div className="grid-container">
                <div className="box-flex">
                    <div className="up box">
                        <h2 className="topic">BE OUR PARTNER</h2>
                        <img src={HandImage} alt='partner' className="handshake"/>
                        <p className="describe container">lorem</p>
                    </div>

                    <div className="box">
                        <h2 className="topic">BE OUR VOLUTEER</h2>
                        <img src={RaiseImage} alt='volunteer' className="raise-hand"/>
                        <p className="describe container">lorem</p>
                    </div>
                    
                </div>
            </div>
        </div>
    </Layout>

);

export default participate;