// import "./App.css";

import { createElement, useEffect, useState } from "react";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

export default function App() {
  return (
    <>
      <div className="container">
        {/* <h1>Hello REACT!</h1> */}
        {/* <p>JS</p> */}
      </div>
    </>
  );
}

export const Header = () => {
  const hour = new Date().getHours();
  console.log(hour);
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // Update the time every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000); // Update every 1000 milliseconds (1 second)

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this effect runs only once

  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // hour >= openHour && hour <= closeHour;
  //   ? alert("We're currently open!")
  //   : alert("Sorry, we're close!");

  // return createElement("header", null, `Current time: ${time}`);
  // const style = {
  //   color: "red",
  //   fontSize: "32px",
  //   textTransform: "uppercase" as "uppercase",
  //   // Explicitly cast to the correct type
  // };
  const style = {};

  return (
    <header className="header">
      <h1 style={style}>Fast Delicious Pizza Co.</h1>
      <h2 style={{ color: "green" }}>
        {time}
        {isOpen
          ? " We are currently open!"
          : " Sorry, we are currently closed!"}
      </h2>
    </header>
  );
};

export const Menu = () => {
  return (
    <>
      <main className="menu">
        <h2>Our menu</h2>
        <Pizza />
        {/* To reuse the component, it is just enough to copy and paste the compnent Pizza several times! */}
        <Pizza />
        <Pizza />
      </main>
    </>
  );
};

export const Footer = () => {
  const hour = new Date().getHours();
  console.log(hour);
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // Update the time every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000); // Update every 1000 milliseconds (1 second)

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this effect runs only once

  // return createElement("header", null, `Current time: ${time}`);

  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // hour >= openHour && hour <= closeHour
  //   ? alert("We're currently open!")
  //   : alert("Sorry, we're close!");

  return (
    <footer className="footer">
      {/* {new Date().toLocaleTimeString()} We 're currently open! */}
      {time} We are currently open!
    </footer>
  );
};

// NOTE: two important rules in React, when we write Components as function:
// 1) The name of function must start with Uppercase letter!
// 2) The function has to return some markup for example in form of JSX or even nothing => return null
export const Pizza = () => {
  return (
    <>
      <img src="/pizzas/spinaci.jpg" alt="Pizza Spinaci" />
      <h2>Pizza Spinaci</h2>
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
    </>
  );
};
