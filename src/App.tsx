// import "./App.css";

export default function App() {
  return (
    <>
      <h1>Hello REACT!</h1>
      <p>JS</p>
    </>
  );
}

// NOTE: two important rules in React, when we write Components as function:
// 1) The name of function must start with Uppercase letter!
// 2) The function has to return some markup for example in form of JSX or even nothing => return null
export const Pizza = () => {
  return <h2>Pizza</h2>;
};
