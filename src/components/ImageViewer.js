import './CSS/ImageViewer.css'
import React from 'react'
import DummyImage1 from '../images/image1.jpg'
import DummyImage2 from '../images/image2.jpg'
import DummyImage3 from '../images/image3.jpg'
import LeftArrow from '../images/BackArrow.png'
import RightArrow from '../images/RightArrow.png'

export default function ImageViewer() {

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
                <img src = { selectedImage === 1 ? DummyImage1 : selectedImage === 2 ? DummyImage2:DummyImage3 } alt = 'DummyImage' className='upperImage'/>
                <img src = {RightArrow} alt = 'DummyImage' className='rightArrowImage' onClick={handleRightArrowClick}/>
            </div>
            <div className='lowerImageContainer'>
                <img src = {DummyImage1} alt = 'DummyImage' className='lowerImage1' style={ selectedImage === 1 ? {'border':'solid'} : {} }/>
                <img src = {DummyImage2} alt = 'DummyImage' className='lowerImage2' style={ selectedImage === 2 ? {'border':'solid'} : {} }/>
                <img src = {DummyImage3} alt = 'DummyImage' className='lowerImage3' style={ selectedImage === 3 ? {'border':'solid'} : {} }/>
            </div>
        </div>
    );
}