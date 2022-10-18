import { ListGroup, Button, Card, Form, Row, Col } from 'react-bootstrap'
import AppsAdminView from './features/app/AppAdminView'
import list from './resources/list'

import { FaAngleRight } from "react-icons/fa"
import AddApp from './features/app/AddApp'
import ModalDisplay from './features/app/ModalDisplay'

function App() {

  list.forEach((item, i) => {
    item.expand = false
  });

  const listItems = list.map(item=><ListGroup.Item as="li" > <FaAngleRight />   {item.name}</ListGroup.Item>)
  return (
    <div style={{padding:'25px'}}>
    <AddApp></AddApp>
    <Card style={{ width: '100%' }}>
      <AppsAdminView></AppsAdminView>
    </Card>
    <ModalDisplay></ModalDisplay>

    </div>
  );
}

export default App;
