import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FaTrash,FaAngleRight,FaAngleDown,FaPlus,FaRegEdit } from 'react-icons/fa'
import { ListGroup, Form } from 'react-bootstrap'
import { useEffect } from 'react'
import { fetchApps,deleteApp,editApp } from './appSlice'
import { show, hide, modalTypes } from '../modal/modalSlice'

import  store from '../../app/store'

const AppsAdminView = () => {
  const app = useSelector((state)=> state.app)
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(fetchApps())
  },[])
  return (
    <div>
    { app.loading && <div>Loading...</div> }
    {!app.loading && app.error ? <div>Error: {app.error} </div>: null}
    {!app.loading && app.apps.length ? ( <ListGroup>
      {
        app.apps.map(a=>(<ListGroup.Item eventKey={a._id}>
            {a.expand?<FaAngleDown/>:<FaAngleRight/>}
            <span> {a.Name} </span>
            <span className="float-end" onClick={()=>show(modalTypes.DELETE_APP_MODAL,a)}><FaTrash /></span>
            </ListGroup.Item>))
      }
      </ListGroup>
    ) :null
    }
    </div>
  )
}

export default AppsAdminView
