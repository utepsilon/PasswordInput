import { useEffect, useState } from "react";
import styled from "styled-components";

const Form = styled.div`
  position: relative;
  height: 200px;
  width: 60%;
  border: 1px solid black;
  left: 20%;
  padding: 1rem;
  margin-top: 1rem;
`;

const Button = styled.button`
  margin: 1rem;
  height: 2rem;
  widht: 3rem;
  border-radius: 5px;
  border: none;
  box-shadow: 5px 3px 10px black;
  background: crimson;
`;
function Password() {
  const [buttonLabel, setButtonLabel] = useState("Show");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [strength, setStrength] = useState("");
  const [color, setColor] = useState("");
  const handleChange = (event) => {
    setPassword(event.target.value);
  };
  const handleClick = () => {
    type === "text" ? setType("password") : setType("text");
    buttonLabel === "Show" ? setButtonLabel("Hide") : setButtonLabel("Show");
  };
  useEffect(() => {
    console.log("effect callled");
    if (
      password.match(
        "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!&])[a-zA-Z0-9@$!&]{8,}"
      )
    ) {
      setStrength("Strong");
      setColor("green");
    } else if (
      password.match(
        "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!&])[a-zA-Z0-9@$!&]{5,}"
      )
    ) {
      setStrength("Moderate");
      setColor("orange");
    } else if (
      password.match("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{5,}")
    ) {
      setStrength("Moderate");
      setColor("orange");
    } else {
      if (password.length > 0) {
        setStrength("Weak");
        setColor("red");
      }
    }
    console.log(strength);
  }, [password, strength]);
  return (
    <div className="main">
      <Form className="form">
        <label>Password :</label>{" "}
        <input
          type={type}
          onChange={(e) => handleChange(e)}
          placeholder="Enter your password here"
          value={password}
        ></input>
        <div>
          <Button onClick={handleClick}> {buttonLabel} </Button>
        </div>
        <p style={{ background: `${color}` }}> Password Strength:{strength} </p>
      </Form>
    </div>
  );
}

export default Password;
