import {useDispatch,useSelector} from "react-redux"
import DeleteAppModal from "./DeleteAppModal"
import { modalTypes } from "./modalSlice"

const ModalDisplay = () =>{
  const dispatch = useDispatch()
  const modalState = useSelector(state=>state.modal)
  return (
    <h2>Modal Display</h2>
    ({modalState[modalTypes.DELETE_APP_MODAL].show?(<DeleteAppModal></DeleteAppModal>):"")
  )
}
