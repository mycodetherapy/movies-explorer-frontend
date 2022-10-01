import "./App.css";

import Main from "./Main/Main";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { CurrentUserContext } from "../contecsts/CurrentUserContext";
import Header from "./Header/Header";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Profile from "./Profile/Profile";
import MoviesCard from "./MoviesCard/MoviesCard";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header />
      <div className="page">
        <Routes>
          <Route exact path="/" element={<Main />}></Route>
          <Route path="/signin" element={<Login />}></Route>
          <Route path="/signup" element={<Register />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/movies" element={<MoviesCardList />}></Route>
          {/* <Route
            path="/movies"
            element={<ProtectedRoute component={MoviesCard} />}
          ></Route> */}
          {/* <ProtectedRoute path="/movies" component={MoviesCard} /> */}
          {/* <ProtectedRoute path="/saved-movies" />
          <ProtectedRoute path="/profile" /> */}
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
