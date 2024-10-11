import React from 'react'
import './PhotoGallery.css'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';



function PhotoGallery() {
    return (
        <div className='photogallery-container'>
            <h1 className='photogallery-title'>Photo Gallery</h1>
            <div className="photogallery-images">
            <img
            className="popular-book"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS34iIDoKVXOhKhdwsiGSLc9RJmtq_lSQDig&usqp=CAU"
            alt=""
          ></img>
          <img
            className="popular-book"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfRHNwRyPkTxnMOzOvv5dOK4OS_lq4-2Yugg&usqp=CAU"
            alt=""
          ></img>
          <img
            className="popular-book"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ElcNy_v2Ri1H3VhYjYP1MzR6zBUwFQWbOirCkaqcfOqJnbrK5ZvdZNUwEfrlmJwn7pA&usqp=CAU"
            alt=""
          ></img>
          <img
            className="popular-book"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS34iIDoKVXOhKhdwsiGSLc9RJmtq_lSQDig&usqp=CAU"
            alt=""
          ></img>
          <img
            className="popular-book"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfRHNwRyPkTxnMOzOvv5dOK4OS_lq4-2Yugg&usqp=CAU"
            alt=""
          ></img>
          <img
            className="popular-book"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ElcNy_v2Ri1H3VhYjYP1MzR6zBUwFQWbOirCkaqcfOqJnbrK5ZvdZNUwEfrlmJwn7pA&usqp=CAU"
            alt=""
          ></img> 
          <img
            className="popular-book"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS34iIDoKVXOhKhdwsiGSLc9RJmtq_lSQDig&usqp=CAU"
            alt=""
          ></img>
          <img
            className="popular-book"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfRHNwRyPkTxnMOzOvv5dOK4OS_lq4-2Yugg&usqp=CAU"
            alt=""
          ></img>
          <img
            className="popular-book"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ElcNy_v2Ri1H3VhYjYP1MzR6zBUwFQWbOirCkaqcfOqJnbrK5ZvdZNUwEfrlmJwn7pA&usqp=CAU"
            alt=""
          ></img>
          <img
            className="popular-book"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS34iIDoKVXOhKhdwsiGSLc9RJmtq_lSQDig&usqp=CAU"
            alt=""
          ></img>
          <img className='recent-book' src='https://19en282jw7pc3zpwj22pg8v0-wpengine.netdna-ssl.com/wp-content/uploads/2021/01/Good-to-Great-Jim-Collins.jpg' alt=''></img>

            <img
            className="popular-book"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ElcNy_v2Ri1H3VhYjYP1MzR6zBUwFQWbOirCkaqcfOqJnbrK5ZvdZNUwEfrlmJwn7pA&usqp=CAU"
            alt=""
          ></img>
        </div>
            <button>VIEW MORE<ArrowForwardIosIcon style={{fontSize:20}}/></button>
        </div>
    )
}

export default PhotoGallery