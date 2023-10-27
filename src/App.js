import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './index.css';
import Homepage from './pages/Homepage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import SearchPage from './pages/SearchPage';
import DormPage from './pages/DormPage';

function App() {

  const [data, setData] = React.useState(
    {
      personEmail: "abc",
      navbarInfo: {
        location: '',
        rent: null,
        size: null,
        toilet: true,
        kitchen: true,
      },
      currentDorm: {
        postId:1,
        userEmail:"post1@gmail.com",
        userContact:"01712345678",
        title : "Dorm 1",
        rent : 1000,
        mapLink : "Location 1",
        address:{
            house: null,
            street:"Street 1",
            city:"City 1",
        },
        images :{
            imagePath1:"./publicImage/image1.jpg",
            imagePath2:"./publicImage/image2.jpg",
            imagePath3:"./publicImage/image3.jpg",
        },
        windowCount : 4,
        isToiletAttached : true,
        isKitchenAvailable : true,
        dimensions:{
            height:10,
            width:15,
        },
        vacancy : 1,
        capacity : 2,
        keyFeatures : "Good place",
        description : "IDK Dorm Good",
        prefGender : "male",
      }
    }
  );

  function Login(email){
    setData(
      prevdata => {
        return {
          ...prevdata,
          personEmail: email,
        }
      }
    )
  }

  function Search(searchData){
    setData(
      prevdata => {
        return {
          ...prevdata,
          navbarInfo: searchData,
        }
      }
    )
  }

  function SelectDorm(dormData){
    setData(
      prevdata => {
        return {
          ...prevdata,
          currentDorm: dormData,
        }
      }
    )
  }

  return (
    <Routes>
      <Route path="/" element={<Homepage
        {...data}
        Login = {Login}
        Search = {Search}
        SelectDorm = {SelectDorm}
      />}/>
      <Route path="/login" element={<LoginPage
        {...data}
        Login = {Login}
        Search = {Search}
        SelectDorm = {SelectDorm}
      />}/>
      <Route path="/signup" element={<SignupPage
        {...data}
        Login = {Login}
        Search = {Search}
        SelectDorm = {SelectDorm}
      />}/>
      <Route path="/search" element={<SearchPage
        {...data}
        Login = {Login}
        Search = {Search}
        SelectDorm = {SelectDorm}  
      />}/>
      <Route path="/dorm" element={<DormPage
        {...data}
        Login = {Login}
        Search = {Search}
        SelectDorm = {SelectDorm}  
      />}/>
    </Routes>
  );
}

export default App;
