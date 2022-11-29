import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Customer from './Customer';
import Events from './Events';

import Login from './Login';

export default function Dashboard() {
  return <>
    &nbsp;
    <Tabs
    defaultActiveKey="home"
    transition={false}
    id="noanim-tab-example"
    className="mb-3"
    >
      
      <Tab eventKey="home" title="Events">
        <Events/>
      </Tab>
      <Tab eventKey="Customer" title="Clients" >
        <Customer/>
      </Tab>
     
    
    </Tabs>
    </>
}

