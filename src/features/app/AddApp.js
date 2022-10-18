import {Form,Button, Row,Col} from 'react-bootstrap'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createApp } from './appSlice'

const AddApp = () =>{
  const [appName,setAppName] = useState('')
  const dispatch = useDispatch()
  const submitApp = () => {
    dispatch(createApp(appName));
    setAppName('');
  }
  return (
    <Form>
    <Row>
    <Form.Group as={Col} className="mb-3" md={2}>
      <Form.Control type="text" onChange={(event)=>setAppName(event.target.value)} value={appName}></Form.Control>
    </Form.Group>
    <Form.Group as={Col} className="mb-3" md={2}>
      <Button variant="primary" onClick={()=>{submitApp()}} >Add App</Button>
    </Form.Group>
    </Row>
    </Form>
  )
}

export default AddApp
