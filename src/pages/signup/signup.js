import React, { useState } from "react";
import axios from "axios";

function SignupPage() {
  const [Email, setEmail] = useState("");
  const [Id, setId] = useState("");
  const [Password, setPassword] = useState("");
  const [CheckPassword, setCheckPassword] = useState("");
  const [error, setError] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.target.value);
    setError("");
  };

  const onIdHandler = (event) => {
    setId(event.target.value);
    setError("");
  };

  const onPasswordHandler = (event) => {
    setPassword(event.target.value);
    setError("");
  };

  const onCheckPasswordHandler = (event) => {
    setCheckPassword(event.target.value);
    setError("");
  };

  const SignupUser = () => {
    axios
      .post("http://192.168.0.33:8080/user/signup", {
        email: Email,
        username: Id,
        password: Password,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        setError("회원가입에 실패하였습니다");
      });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(
      Password,
      Password.match(/(?=.\\d)(?=.[a-zA-Z])(?=.*\\W)(?=\\S+$).{8,20}/)
    );
    if (Id === "" || Password === "" || CheckPassword === "") {
      setError("아이디와 비밀번호를 입력해주세요");
      return;
    }
    if (!(Password === CheckPassword)) {
      setError("비밀번호가 일치하지 않습니다");
      return;
    }
    console.log(
      Password.match(/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/)
    );
    if (
      !Password.match(/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/)
    ) {
      setError("비밀번호는 특수기호 숫자 포함 8-20자여야 합니다");
      return;
    }
    SignupUser();
  };

  const Container = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  const Contents = {
    display: "flex",
    flexDirection: "column",
    width: "20vw",
  };

  const Title = {
    display: "flex",
    margin: "50px 0px",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    fontSize: "30px",
    fontWeight: "300",
  };

  const line = {
    width: "30px",
    height: "2px",
    margin: "10px",
    backgroundColor: "#486284",
  };

  const SubmitBtn = {
    height: "4.5vh",
    margin: "35px 0px",
    color: "white",
    backgroundColor: "#486284",
    borderRadius: "5px",
    borderStyle: "none",
  };

  const Styles = {
    height: "3vh",
    margin: "3px 0px 10px",
  };

  return (
    <div style={Container}>
      <div style={Contents}>
        <div>
          <h3 style={Title}>
            Sign Up <div style={line}></div>
          </h3>
        </div>

        <label>E-MAIL</label>
        <input
          type="email"
          value={Email}
          onChange={onEmailHandler}
          style={Styles}
        />
        <label>ID</label>
        <input type="text" value={Id} onChange={onIdHandler} style={Styles} />
        <label>PASSWORD</label>
        <input
          type="password"
          value={Password}
          onChange={onPasswordHandler}
          style={Styles}
        />
        <label>PASSWORD CHECK</label>
        <input
          type="password"
          value={CheckPassword}
          onChange={onCheckPasswordHandler}
          style={Styles}
        />

        {error && (
          <div style={{ color: "red", fontSize: "10px" }}> {error} </div>
        )}
        <button onClick={onSubmitHandler} type="submit" style={SubmitBtn}>
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default SignupPage;
