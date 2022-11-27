import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux';
import { addCat } from 'redux/reducers/index';
import parse from 'html-react-parser';
import addCatsToState from 'functions/addCatsToState/addCatsToState';
import 'components/Cats/Cats.css';
import { v4 as uuidv4 } from 'uuid';
import InfiniteScroll from 'react-infinite-scroll-component'


const xxx = (type,image) => (
  <div className='post__wrapper' key={uuidv4()} >
    <div className='post__header'>
      <div className='post__header--userImage'>
        <img src='https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png' alt='avatar'/>
      </div>
      <div className='post__header--infoWrapper'>
        <div className='post__header--infoWrapper-userName'>
          System
        </div>
        <div className='post__header--infoWrapper-userLocation'>
          United States: Arizona
        </div>
      </div>
    </div>
    <div className='post__text'>
      Hi! I'm a cute {type}!
    </div>
    <div className='post__mainImage'>
      {image}
    </div>
    <div className='post__bottomBar'>
      <div className='post__bottomBar--like'>
        <img src='https://cdn-icons-png.flaticon.com/512/2107/2107956.png' alt='like'/>
        Polub
      </div>
      <div className='post__bottomBar--like'>
        <img src='https://icon-library.com/images/instagram-comment-icon/instagram-comment-icon-22.jpg' alt='comment'/>
        Komentarz
      </div>
      <div className='post__bottomBar--like'>
        <img src='https://iconvulture.com/wp-content/uploads/2017/12/share-option.png' alt='share'/>
        Udostępnij
      </div>
    </div>
  </div>
)

const Cats = ({koty}) => {


const [timeline, setTimeline] = useState([])

useEffect(()=>{
    setTimeline(koty.map ((x,y) => typeof x.img === 'string' ? xxx(x.type, parse(x.img)) : null ))
    console.log('tyle dodaje obrazkow', koty.length)
},[koty])
useEffect(()=>{
  console.log('zamontowalem sie')
})
  return (
    <InfiniteScroll
      dataLength={timeline.length} //This is important field to render the next data
      next={()=>addCatsToState()}
      hasMore={true}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>
  }
>
  {timeline}
</InfiniteScroll>
  )
}



const mapStateToProps = state => {
  return {
      koty: state.socialFun.cats,
  }
}
const mapDispatchToProps = dispatch =>({
  addPic: (cat) => dispatch(addCat(cat))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cats)