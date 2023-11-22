# DormBuddy: Dormitory and Hostel Finding/Listing Platform

Welcome to DormBuddy, a comprehensive platform for finding and listing dormitories and hostels. This Spring Boot application aims to simplify the process of discovering and showcasing available accommodations for students and travelers alike.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [API Documentation](#api-documentation)
    - [Add Room Post](#add-room-post)
    - [Get All Room Posts](#get-all-room-posts)
    - [Delete Room Post](#delete-room-post)
    - [Search](#search)
    - [User Login](#user-login)
    - [User Signup](#user-signup)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User-friendly Interface:** DormBuddy provides an intuitive and user-friendly interface for both dormitory/hostel seekers and listers.
- **Comprehensive Listings:** Users can browse through a wide range of dormitory and hostel listings, each with detailed information.
- **Powerful Search:** Find the perfect accommodation by using DormBuddy's powerful search functionality.
- **Easy Listing Management:** Dorm owners can easily list their dormitories or hostels, managing details and availability.

## Getting Started

### Prerequisites

Make sure you have the following prerequisites installed:

- [Java](https://www.java.com/) (version 8 or higher)
- [Maven](https://maven.apache.org/)

### API Documentation

#### Add Room Post

- Endpoint: `{{baseUrl}}/api/v1/roomPost/add`
- Method: `POST`
- Example: 
  ```bash
  curl -X POST -H "Content-Type: application/json" -d '{"property": "Example Property", "description": "A cozy place to stay", "price": 50.0}' {{baseUrl}}/api/v1/roomPost/add
#### Get All Room Posts
- Endpoint: {{baseUrl}}/api/v1/roomPost/getAll
- Method: GET
- Example:
  ```bash
  curl {{baseUrl}}/api/v1/roomPost/getAll
#### Delete Room Post
- Endpoint: {{baseUrl}}/api/v1/roomPost/delete?postIdHash=images/ittehad@gmail.com599defaa-ac3d-42da-a5e4-b00cbc8e9766
- Method: DELETE
- Example:
  ```bash
  curl -X DELETE {{baseUrl}}/api/v1/roomPost/delete?postIdHash=images/ittehad@gmail.com599defaa-ac3d-42da-a5e4-b00cbc8e9766
#### Search
- Endpoint: {{baseUrl}}/api/v1/search
- Method: GET
Example:
  ```bash
   curl {{baseUrl}}/api/v1/search
#### User Login
- Endpoint: {{baseUrl}}/api/v1/auth/user/login
- Method: POST
Example:
  ``` bash
  curl -X POST -H "Content-Type: application/json" -d '{"username": "exampleUser", "password": "examplePassword"}' {{baseUrl}}/api/v1/auth/user/login
