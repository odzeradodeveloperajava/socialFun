import React, {useEffect, useState} from 'react'
import fillArrayWithCats from '../../functions/fillArrayWithCats/fillArrayWithCats'
import { connect } from 'react-redux';
import { addCat } from './../../redux/reducers/index';
import parse from 'html-react-parser';



const Cats = ({koty, addPic}) => {


  const dupa = async ()=>{
    const p = await fillArrayWithCats();
    const x = () =>addPic(p)
    x()
  }

  return (
    <div>x:
      {koty.map (x => <div key={Date.now()}>{parse(x)}</div>)}
    </div>
  )
}


const mapStateToProps = state => {
  return {
      koty: state.socialFun.cats
  }
}
const mapDispatchToProps = dispatch =>({
  addPic: (cat) => dispatch(addCat(cat))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cats)