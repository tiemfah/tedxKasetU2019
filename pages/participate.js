import Layout from '../components/Layout';
import HandImage from '../public/img/hand.png';
import RaiseImage from '../public/img/raise-hand.png'
import '../public/css/participate.css'

// const participate = () => (
//     <Layout >
//         <div>
//             <div className="grid-container">
//                 <div className="box-flex">
//                     <div className="up box" onClick={this}>
//                         <h2 className="topic">BE OUR PARTNER</h2>
//                         <img src={HandImage} alt='partner' className="handshake"/>
//                         <p className="describe">TedxKasetsartU wouldn’t happen without these kind patron. Thank you for your generous sponsorship. We hope that we will live up to our achievements in previous years.However we promise to keep you updated on our progress. We always looking for a new patron please contact us via   
//                         <a href="https://www.facebook.com/TEDxKasetsartU/" className="facebook" id="link">Facebook</a>
//                         </p>
//                     </div>
//                     <div className="box">
//                         <h2 className="topic">BE OUR VOLUTEER</h2>
//                         <img src={RaiseImage} alt='volunteer' className="raise-hand"/>
//                         <p className="describe">We are unpaid volunteers from Kasetsart University, highly engaged, full of enthusiasm & initiative and with a serious love for TED Talks. If you are Kasetsart University students and share the same ambition, please contact use via : <a href="https://www.facebook.com/TEDxKasetsartU/" className="facebook">Facebook</a></p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </Layout>
// );

class participate extends React.Component {
    
    render() {
          return (
            <Layout >
                <div>
                <div className="grid-container">
                        <div className="box-flex">
                        <a href="https://www.facebook.com/TEDxKasetsartU/" className="linkdiv">
                            <div className="up box">
                            <h2 className="topic">BE OUR PARTNER</h2>
                                <img src={HandImage} alt='partner' className="handshake"/>
                                <p className="describe">TedxKasetsartU wouldn’t happen without these kind patron. Thank you for your generous sponsorship. We hope that we will live up to our achievements in previous years.However we promise to keep you updated on our progress. We always looking for a new patron please contact us via   
                                <a href="https://www.facebook.com/TEDxKasetsartU/" className="facebook" id="link">Facebook</a>
                                </p>
                            </div>
                            </a>
                            <a href="https://www.facebook.com/TEDxKasetsartU/" className="linkdiv">
                            <div className="box">
                                <h2 className="topic">BE OUR VOLUTEER</h2>
                                <img src={RaiseImage} alt='volunteer' className="raise-hand"/>
                                <p className="describe">We are unpaid volunteers from Kasetsart University, highly engaged, full of enthusiasm & initiative and with a serious love for TED Talks. If you are Kasetsart University students and share the same ambition, please contact use via : <a href="https://www.facebook.com/TEDxKasetsartU/" className="facebook">Facebook</a></p>
                            </div>
                            </a>
                        </div>
                    </div>
                </div>
            </Layout>
          );
        }
      }

export default participate;