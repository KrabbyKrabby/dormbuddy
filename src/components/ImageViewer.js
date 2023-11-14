import './CSS/ImageViewer.css'
import React from 'react'
import LeftArrow from '../images/BackArrow.png'
import RightArrow from '../images/RightArrow.png'

export default function ImageViewer(props) {

    const [selectedImage, setSelectedImage] = React.useState(1)

    function handleLeftArrowClick(){
        if(selectedImage === 1){
            setSelectedImage(3)
        }
        else{
            setSelectedImage(selectedImage - 1)
        }
    }

    function handleRightArrowClick(){
        if(selectedImage === 3){
            setSelectedImage(1)
        }
        else{
            setSelectedImage(selectedImage + 1)
        }
    }

    return(
        <div className='imageViewerContainer'>
            <div className='upperImageContainer'>
                <img src = {LeftArrow} alt = 'DummyImage' className='leftArrowImage' onClick={handleLeftArrowClick}/>
                <img src = { selectedImage === 1 ? props.currentDorm.imageList[0].imagePath : selectedImage === 2 ? props.currentDorm.imageList[1].imagePath:props.currentDorm.imageList[2].imagePath} alt = 'DummyImage' className='upperImage'/>
                <img src = {RightArrow} alt = 'DummyImage' className='rightArrowImage' onClick={handleRightArrowClick}/>
            </div>
            <div className='lowerImageContainer'>
                <img src = {props.currentDorm.imageList[0].imagePath} alt = 'DummyImage' className='lowerImage1' style={ selectedImage === 1 ? {'border':'solid'} : {} }/>
                <img src = {props.currentDorm.imageList[1].imagePath} alt = 'DummyImage' className='lowerImage2' style={ selectedImage === 2 ? {'border':'solid'} : {} }/>
                <img src = {props.currentDorm.imageList[2].imagePath} alt = 'DummyImage' className='lowerImage3' style={ selectedImage === 3 ? {'border':'solid'} : {} }/>
            </div>
        </div>
    );
}