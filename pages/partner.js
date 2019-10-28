import Layout from '../components/Layout';
import AisImage from '../public/img/sponser/AIS.png'
import ElecImage from '../public/img/sponser/elec.png'
import EngImage from '../public/img/sponser/eng-ku.png'
import OldEngImage from '../public/img/sponser/old-eng.png'
import OsotImage from '../public/img/sponser/osot.png'

import '../public/css/partner.css';
import { Card, Accordion } from 'react-bootstrap';

const partner = () => (
    <div className="partner">
        <Layout isWhiteNav={true}>
            <div className="spacing"></div>

            {/* Page title */}
            <h1 className="secTitle">OUR PARTNERS</h1>
            <hr className="separate--line" />
            <div className="spacing"></div>

            <Accordion className="col-lg-10 mx-auto" defaultActiveKey="0">
                <Card className="border-0 text-center m-auto">
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="sponser-dd sponser-year">
                        <hr className="separate-card" />
                        SPONSERS 2019
                </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className="col-lg-9 mx-auto">
                            <a href="https://www.pea.co.th/" target="blank"><img src={ElecImage} alt='partner' className="sponser" /></a>
                            <a href="https://www.eng.ku.ac.th/" target="blank"><img src={EngImage} alt='partner' className="sponser" /></a>
                            <a href="http://dongtanengineer.com/" target="blank"><img src={OldEngImage} alt='partner' className="sponser" /></a>
                            <a href="http://www.ais.co.th/" target="blank"><img src={AisImage} alt='partner' className="sponser" /></a>
                            <a href="https://www.osotspa.com/new/th/home/" target="blank"><img src={OsotImage} alt='partner' className="sponser" /></a>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card className="border-0 text-center m-auto">
                    <Accordion.Toggle as={Card.Header} eventKey="1" className="sponser-dd sponser-year">
                        <hr className="separate-card" />
                        SPONSERS 2018
                        {/* <hr className="separate-card" /> */}
                </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body className="col-lg-9 mx-auto">
                            <a href="https://www.pea.co.th/" target="blank"><img src={ElecImage} alt='partner' className="sponser" /></a>
                            <a href="https://www.eng.ku.ac.th/" target="blank"><img src={EngImage} alt='partner' className="sponser" /></a>
                            <a href="http://dongtanengineer.com/" target="blank"><img src={OldEngImage} alt='partner' className="sponser" /></a>
                            <a href="http://www.ais.co.th/" target="blank"><img src={AisImage} alt='partner' className="sponser" /></a>
                            <a href="https://www.osotspa.com/new/th/home/" target="blank"><img src={OsotImage} alt='partner' className="sponser" /></a>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card className="border-0 text-center m-auto">
                    <Accordion.Toggle as={Card.Header} eventKey="2" className="sponser-dd sponser-year">
                        <hr className="separate-card" />
                        SPONSERS 2017
                </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body className="col-lg-9 mx-auto">
                            <a href="https://www.eng.ku.ac.th/" target="blank"><img src={EngImage} alt='partner' className="sponser" /></a>
                            <a href="http://dongtanengineer.com/" target="blank"><img src={OldEngImage} alt='partner' className="sponser" /></a>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <hr className="separate-card" />
            </Accordion>

            <div className="spacing"></div>
        </Layout >
    </div>
);

export default partner;