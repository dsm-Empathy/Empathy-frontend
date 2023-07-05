import React, { useState } from "react";
import axios from "axios";

function LoginPage() {
  const [Id, setId] = useState("");
  const [Password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onIdHandler = (event) => {
    setId(event.target.value);
    setError("");
  };

  const onPasswordHandler = (event) => {
    setPassword(event.target.value);
    setError("");
  };

  const LoginUser = () => {
    axios
      .post("http://192.168.0.33:8080/user/login", {
          username: Id,
          password: Password,
  })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        setError("로그인에 실패하였습니다");
      });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (Id === "" || Password === "") {
      setError("아이디와 비밀번호를 입력해주세요");
      return;
    }
    LoginUser();
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
            Login <div style={line}></div>
          </h3>
        </div>

        <label>ID</label>
        <input type="text" value={Id} onChange={onIdHandler} style={Styles} />
        <label>PASSWORD</label>
        <input
          type="password"
          value={Password}
          onChange={onPasswordHandler}
          style={Styles}
        />
        {error && (
          <div style={{ color: "red", fontSize: "10px" }}> {error} </div>
        )}
        <button onClick={onSubmitHandler} type="submit" style={SubmitBtn}>
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
