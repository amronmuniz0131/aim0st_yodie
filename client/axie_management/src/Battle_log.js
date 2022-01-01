// const {Resizable} = require('react-resizable');
import React, { useState, useEffect } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Reactpip from 'react-picture-in-picture'
import ReactPlayer from 'react-player/lazy'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Draggable from 'react-draggable';
import { Resizable, ResizableBox } from 'react-resizable';
import { faGift } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
function useWindowSize(){
  const [size, setSize] = useState([window.innerHeight, window.innerWidth]);
  useEffect(() => {
    const handleResize = () =>{
      setSize([window.innerHeight, window.innerWidth])
    }
    window.addEventListener("resize", handleResize)
  },[])
  return size;
}

function onDragStartHandler(ev) {
  var rect = ev.target.getBoundingClientRect();
  console.log(rect.top, rect.right, rect.bottom, rect.left);
}

function Battle_log({varPosX, varPosY}) {
  // const[active, setActive] = useState(true)
  // const [height, width] = useWindowSize();
  // let x=width;
  // if(x > 820 & active===false){
  //   setActive(true);
  //   console.log(active);
  // }
  // else if(x<=820 & active === true){
  //   setActive(true);
  //   console.log(active);
  // }
  // const abcd = [
  //   "abcd", "efgh", "hijk", "lmno","abcd1", "efgh2", "hijk3", "lmno4"
  // ]
  // const [posts, setPosts] = useState ([]);
  // const [loading, setLoading] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage, setPostsPerPage] = useState(2);
  

  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = abcd.slice(indexOfFirstPost, indexOfLastPost)
  // const varHeight = {height: {posX}}
  console.log(varPosX)

  const [dim, setDim] = useState ({
    width: 300,
    height: 300,
  });
  console.log(dim)
  const onResize = (event, {element, size, handle}) => {
    setDim({width: size.width, height: size.height});
  };

  const onResetClick = () => {
    setDim({ width: 200, height: 200});
  };
  return (
      <>
{/* <ResizableBox className="box" height={dim.height} width={dim.width} onResize={onResize} resizeHandles={['sw', 'se', 'nw', 'ne', 'w', 'e', 'n', 's']}>
            <div style={{width: dim.width + 'px', height: dim.height + 'px'}}>
              <span className="text">{"Raw use of <Resizable> element. 200x200, all Resize Handles."}</span>
              <button onClick={onResetClick} style={{'marginTop': '10px'}}>Reset this element's width/height</button>
            </div>
          </ResizableBox> */}
        <Draggable disabled={false} handle=".handle">
        {/* <div>
          <FontAwesomeIcon icon={faGift} />
          <Carousel>
            {abcd.slice(0, 3).map((x, index) => { return(
            currentPage > 2
            ?<div key={(index)}>
            {currentPosts.map((a, index) => { return (
            index > 4
              ? console.log(index)
              : <div key={index}><h1>{a}</h1><button>{a}</button></div>)
      })}
      , 
        
        
        
      </div>
      : setCurrentPage(currentPage+1) & setPosts(currentPosts) & console.log(currentPosts)
    )
    })}
    </Carousel>
    
          {active? <Reactpip isActive= {active} style={{display: "none"}}>
          <source src="https://cdn.arnellebalane.com/videos/original-video.mp4"/><button>abcd</button>
          </Reactpip>:<Reactpip isActive= {active} style={{display: "flex" , width: "400px", height:"400px"}}>
          <source src="https://cdn.arnellebalane.com/videos/original-video.mp4"/>
          </Reactpip>}
    height: {height}, width: {width}
        

    
        <button onClick = {() => setActive(!active)}>Toggle Picture in Picture</button> 


        </div> */}
        <div>
        <div style={{width: "40px", height: "30px", background: "green"}} className="handle">asdf</div>
          <div id='mydiv' style={{transform: `translate(${varPosX}, ${varPosY})` , width: "30px", background: "black"}}>
            <button>ABCD</button>
          </div>
          </div>
        </Draggable>
        </>
    )

}

export default Battle_log
