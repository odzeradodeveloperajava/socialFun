import axios from 'axios';
import { toggleServerUp } from 'redux/reducers';
import store from "redux/store";
//import { addCat } from "redux/reducers";

const isServerUp = () => {
    const checkServer = async () =>{
        await axios.get('https://socialback.bieda.it/isserverup').then((res)=>{
            if(res.data === 'up'){store.dispatch(toggleServerUp(true))}
        }).catch((err)=>{
            console.log('server not up', err.code)
        })
    }
    checkServer()
    return null
    //setTimeout(checkServer, 5000)
}

//const isServerUp = () =>{
//var oXHR = new XMLHttpRequest();
//
//oXHR.open("GET", "https://socialback.bieda.it/isserverup", true);
//
//oXHR.onreadystatechange = function (oEvent) {
//    if (oXHR.readyState === 4) {
//        if (oXHR.status === 200) {
//          //console.log(oXHR.responseText)
//        }
//        else if(oXHR.status >= 500){
//            //console.log('server down')
//        } 
//        else {
//           //console.log("Error", oXHR);
//           //console.log('x', oEvent)
//           //console.clear()
//        }
//    }
//};
//oXHR.onerror = (e) => e.preventDefault()
//
//oXHR.send(null);
//}

export default isServerUp