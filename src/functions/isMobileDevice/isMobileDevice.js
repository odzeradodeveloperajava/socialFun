export default function isMobileDevice(){
    //console.log('aaaa',"ontouchstart" in document)
  if("ontouchstart" in document && document.body.clientWidth <700){
    return false
  }
  else return true
}