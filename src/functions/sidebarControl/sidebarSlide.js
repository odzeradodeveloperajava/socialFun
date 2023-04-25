import store from "redux/store"
import { setSidebarOpen } from "redux/reducers"
const sidebar = document.getElementsByClassName('sidebarWrapper')


export function sidebarSlide(){
    const sidebarOpenStatus = store.getState().socialFun.isSidebarOpen
    console.log('clicked')
    console.log('status sidebara', sidebarOpenStatus)
    if(sidebarOpenStatus === false){
        sidebar[0].style.left = '0';
        store.dispatch(setSidebarOpen(true));
    } else if (sidebarOpenStatus === true){
        sidebar[0].style.left = '-60%';
        store.dispatch(setSidebarOpen(false));
    }
    
}