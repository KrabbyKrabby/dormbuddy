import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './index.css';
import Homepage from './pages/Homepage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import SearchPage from './pages/SearchPage';
import DormPage from './pages/DormPage';
import ListingPage from './pages/ListingPage';

function App() {

  const [data, setData] = React.useState(
    {
      personEmail: "",
      navbarInfo: {
        location: '',
        rent: null,
        size: null,
        toilet: true,
        kitchen: true,
      },
      currentDorm: {
        postId:null,
        userEmail:"",
        userContact:"",
        title : "",
        rent : null,
        mapLink : "",
        address:{
            house: "",
            street:"",
            city:"",
        },
        images :{
            imagePath1:"",
            imagePath2:"",
            imagePath3:"",
        },
        windowCount : null,
        isToiletAttached : true,
        isKitchenAvailable : true,
        dimensions:{
            length:null,
            width:null,
        },
        vacancy : null,
        capacity : null,
        keyFeatures : "",
        description : "",
        prefGender : "",
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
      <Route path="/listing" element={<ListingPage
        {...data}
        Login = {Login}
        Search = {Search}
        SelectDorm = {SelectDorm}  
      />}/>
    </Routes>
  );
}

export default App;
