import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './index.css';
import Homepage from './pages/Homepage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import SearchPage from './pages/SearchPage';
import DormPage from './pages/DormPage';
import ListingPage from './pages/ListingPage';
import MyDormPage from './pages/MyDormPage';

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
        postIdHash:"",
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
        imageList:[
          {
            imagePath:""
          },
          {
            imagePath:""
          },
          {
            imagePath:""
          }
        ],
        windowCount : null,
        isToiletAttached : true,
        isKitchenAvailable : true,
        dimension:{
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

  function IncreasePostCount(){
    setData(
      prevdata => {
        return {
          ...prevdata,
          personPostCount: prevdata.personPostCount + 1,
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
        showCross = {false} 
      />}/>
      <Route path="/login" element={<LoginPage
        {...data}
        Login = {Login}
        Search = {Search}
        SelectDorm = {SelectDorm}
        showCross = {false} 
      />}/>
      <Route path="/signup" element={<SignupPage
        {...data}
        Login = {Login}
        Search = {Search}
        SelectDorm = {SelectDorm}
        showCross = {false} 
      />}/>
      <Route path="/search" element={<SearchPage
        {...data}
        Login = {Login}
        Search = {Search}
        SelectDorm = {SelectDorm} 
        showCross = {false}   
      />}/>
      <Route path="/dorm" element={<DormPage
        {...data}
        Login = {Login}
        Search = {Search}
        SelectDorm = {SelectDorm}
        showCross = {false}    
      />}/>
      <Route path="/listing" element={<ListingPage
        {...data}
        Login = {Login}
        Search = {Search}
        SelectDorm = {SelectDorm}
        IncreasePostCount = {IncreasePostCount}
        showCross = {false}   
      />}/>
      <Route path="/dormlist" element={<MyDormPage
        {...data}
        Login = {Login}
        Search = {Search}
        SelectDorm = {SelectDorm}
        showCross = {true}  
      />}/>
      
    </Routes>
  );
}

export default App;
