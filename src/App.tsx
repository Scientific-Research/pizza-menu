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
      We are currently open until {closeHour}:00. Come and visit us or order
      online!
    </p>
  );

  const closed = (
    <p style={{ color: "red" }}>
      Sorry, we are currently closed, and our working hours start at {openHour}
      :00!
    </p>
  );

  return (
    <header className="header">
      <h1>Fast Delicious Pizza Co.</h1>
      <h2>
        {time}
        {/* With ternary Operator: */}
        {/* {isOpen ? open : closed} */}
        {/* Or with AND => && operator in REACT: => Both ternary and && Operator acts the same!*/}
        {isOpen && open}
        {!isOpen && closed}
      </h2>
    </header>
  );
};

// Parent => sends the props to the child => Pizza as Child
// we can add several pizza and this is the reusability feature of React which is a very important feature of that!
export const Menu = () => {
  return (
    <>
      <main className="menu">
        <h2>Our menu</h2>

        <ul className="pizzas">
          {pizzaData.map((p) => {
            return (
              // First METHOD:
              // <Pizza
              //   name={p.name}
              //   ingredients={p.ingredients}
              //   photoName={`/${p.photoName}`}
              //   price={p.price}
              // />
              // Second METHOD: we send the pizza content from map function as child to the Menu as parent via Props but with a difficult to understanding TypeScript!
              <Pizza pizzaObj={p} key={p.name} />
            );
          })}
        </ul>
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
  return <footer className="footer"></footer>;
};
