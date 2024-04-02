// import "./App.css";

import { createElement, useEffect, useState } from "react";

let pizzaData = [
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

// name, ingredient, photoName, price
interface IPizza {
  name: string;
  ingredients: string;
  photoName: string;
  price: number;
  soldOut: boolean;
}

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
  // console.log(hour);
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
  // console.log(isOpen);

  const open = (
    <p style={{ color: "green" }}>
      We are currently open until {closeHour}:00. <br /> Come and visit us or
      order online!
    </p>
  );

  const closed = (
    <p style={{ color: "red" }}>
      We apologize, but we are currently closed. <br /> We would be delighted to
      welcome you between {openHour}:00 and {closeHour}:00.
    </p>
  );

  return (
    <header className="header">
      <h1>Fast Delicious Pizza Co.</h1>
      <h2>
        {time}
        {/* With ternary Operator: */}
        {isOpen ? open : closed}
        {/* Or with AND => && operator in REACT: => Both ternary and && Operator acts the same!*/}
        {/* {isOpen && open}
        {!isOpen && closed} */}
      </h2>
    </header>
  );
};

// Parent => sends the props to the child => Pizza as Child
// we can add several pizza and this is the reusability feature of React which is a very important feature of that!
export const Menu = () => {
  // pizzaData = []; This is a truthy value, that's why we have to use length feature equal to zero to get the right answer!
  // pizzaData = [];

  return (
    <>
      <main className="menu">
        <h2>Our menu</h2>
        {/* Instead of doing && Operator, we do both section using ternary operator */}
        {pizzaData.length > 0 ? (
          <ul className="pizzas">
            {pizzaData.map((p) => {
              return <Pizza pizzaObj={p} key={p.name} />;
            })}
          </ul>
        ) : (
          <h2 style={{ color: "blue" }}>
            We are currently preparing our pizzas, and as soon as they are
            ready, they will be available online. You can then place your order!
          </h2>
        )}
      </main>
    </>
  );
};

// NOTE: two important rules in React, when we write Components as function:
// 1) The name of function must start with Uppercase letter!
// 2) The function has to return some markup for example in form of JSX or even nothing => return null

// Child => receives the props from parent => Menu as Parent
export const Pizza = ({ pizzaObj }: { pizzaObj: IPizza }) => {
  const { name, ingredients, photoName, price } = pizzaObj;
  return (
    <>
      <li className="pizza">
        <img src={photoName} alt={name} />
        <div>
          <h3>{name}</h3>
          <p>{ingredients}</p>
          <span>${Number(price)}</span>
        </div>
      </li>
    </>
  );
};

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="order">
        <button className="btn">Order</button>
      </div>
    </footer>
  );
};
