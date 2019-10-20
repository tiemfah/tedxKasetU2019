import Layout from '../components/Layout';
import AisImage from '../public/img/sponser/AIS.png'
import ElecImage from '../public/img/sponser/elec.png'
import EngImage from '../public/img/sponser/eng-ku.png'
import OldEngImage from '../public/img/sponser/old-eng.png'
import OsotImage from '../public/img/sponser/osot.png'

import '../public/css/partner.css';

const partner = () => (
    <Layout>
        <div className="block-sponser">
            <img src={AisImage} alt='partner' className="sponser"/>
            <img src={ElecImage} alt='partner' className="sponser"/>
            <img src={EngImage} alt='partner' className="sponser"/>
            <img src={OldEngImage} alt='partner' className="sponser"/>
            <img src={OsotImage} alt='partner' className="sponser"/>
        </div>
    </Layout>
);

export default partner;