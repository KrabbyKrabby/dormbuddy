import './CSS/ImageViewer.css'
import DummyImage from '../images/HomepageImage.png'
import LeftArrow from '../images/BackArrow.png'
import RightArrow from '../images/RightArrow.png'

export default function ImageViewer() {
    return(
        <div className='imageViewerContainer'>
            <div className='upperImageContainer'>
                <img src = {LeftArrow} alt = 'DummyImage' className='leftArrowImage'/>
                <img src = {DummyImage} alt = 'DummyImage' className='upperImage'/>
                <img src = {RightArrow} alt = 'DummyImage' className='rightArrowImage'/>
            </div>
            <div className='lowerImageContainer'>
                <img src = {DummyImage} alt = 'DummyImage' className='lowerImage1'/>
                <img src = {DummyImage} alt = 'DummyImage' className='lowerImage2'/>
                <img src = {DummyImage} alt = 'DummyImage' className='lowerImage3'/>
            </div>
        </div>
    );
}