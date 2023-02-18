import store from "redux/store"



export default function scrollToCurrentMonth(){
    //console.log('index', window.innerHeight)
    //console.log('index2',document.body.scrollHeight/2)
    const appHeight = store.getState().socialFun.appHeight
    const adjustToScreenHeight = (window.innerHeight-358)/2
    //console.log('przesuniecie o ', xx)
    //window.scroll(null, appHeight/2+179-adjustToScreenHeight)
    window.scroll(null, 3596-30)
    //window.scroll(null, 3677+179-adjustToScreenHeight)
}