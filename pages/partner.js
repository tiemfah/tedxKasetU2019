import Layout from '../components/Layout';
import AisImage from '../public/img/sponser/AIS.png'
import ElecImage from '../public/img/sponser/elec.png'
import EngImage from '../public/img/sponser/eng-ku.png'
import OldEngImage from '../public/img/sponser/old-eng.png'
import OsotImage from '../public/img/sponser/osot.png'

import '../public/css/partner.css';
import { Card, Accordion } from 'react-bootstrap';

const partner = () => (
    <Layout isWhiteNav={true}>
        <div className="spacing"></div>

        {/* Page title */}
        <div className="secTitle">
            <h1 style={{ fontWeight: '300' }}>PARTNERS</h1>
            <hr className="separate separate--line" />
        </div>

        <Accordion className="col-lg-10 mx-auto">
            <Card className="sponser-dd text-center mx-auto">
                <Accordion.Toggle as={Card.Header} eventKey="0">
                    <h5 className="sponser-year">2019 SPONSERS</h5>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body className="col-lg-8 mx-auto">
                        <a href="https://www.pea.co.th/" target="blank"><img src={ElecImage} alt='partner' className="sponser" /></a>
                        <a href="https://www.eng.ku.ac.th/" target="blank"><img src={EngImage} alt='partner' className="sponser" /></a>
                        <a href="http://dongtanengineer.com/" target="blank"><img src={OldEngImage} alt='partner' className="sponser" /></a>
                        <a href="http://www.ais.co.th/" target="blank"><img src={AisImage} alt='partner' className="sponser" /></a>
                        <a href="https://www.osotspa.com/new/th/home/" target="blank"><img src={OsotImage} alt='partner' className="sponser" /></a>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card className="sponser-dd text-center mx-auto">
                <Accordion.Toggle as={Card.Header} eventKey="1">
                    <h5 className="sponser-year">2018 SPONSERS</h5>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                    <Card.Body className="col-lg-8 mx-auto">
                        <a href="https://www.pea.co.th/" target="blank"><img src={ElecImage} alt='partner' className="sponser" /></a>
                        <a href="https://www.eng.ku.ac.th/" target="blank"><img src={EngImage} alt='partner' className="sponser" /></a>
                        <a href="http://dongtanengineer.com/" target="blank"><img src={OldEngImage} alt='partner' className="sponser" /></a>
                        <a href="http://www.ais.co.th/" target="blank"><img src={AisImage} alt='partner' className="sponser" /></a>
                        <a href="https://www.osotspa.com/new/th/home/" target="blank"><img src={OsotImage} alt='partner' className="sponser" /></a>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>

            <Card className="sponser-dd text-center mx-auto">
                <Accordion.Toggle as={Card.Header} eventKey="2">
                    <h5 className="sponser-year">2017 SPONSERS</h5>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                    <Card.Body className="col-lg-8 mx-auto">
                        <a href="https://www.eng.ku.ac.th/" target="blank"><img src={EngImage} alt='partner' className="sponser" /></a>
                        <a href="http://dongtanengineer.com/" target="blank"><img src={OldEngImage} alt='partner' className="sponser" /></a>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>

        <div className="spacing"></div>
    </Layout >
);

export default partner;