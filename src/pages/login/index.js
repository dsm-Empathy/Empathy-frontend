import React, { useEffect, useState } from "react";
import axios from "axios";
import { Colors } from "../../styles/theme/color";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useCookies } from "react-cookie";

function LoginPage() {
  const [cookies, setCookie,] = useCookies();
  const [Id, setId] = useState("");
  const [Password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate()

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
      .post(`${process.env.REACT_APP_URL}/user/login`, {
          username: Id,
          password: Password,
  })
      .then((response) => {
        console.log(response.data);
        setCookie('accessToken', response.data.accessToken);
        toast.success('성공적으로 로그인했습니다!');
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
        toast.error('로그인에 실패하였습니다.')
        setError("로그인에 실패하였습니다");
      });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (Id === "" || Password === "") {
      setError("아이디와 비밀번호를 입력해주세요");
      toast.error('아이디 또는 비밀번호를 입력하지 않았습니다.')
      return;
    }
    LoginUser();
  };

  const Container = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "calc(100vh - 72px)",
  };

  const Contents = {
    display: "flex",
    flexDirection: "column",
    width: "20vw",
    fontFamily: 'Inder',
    fontStyle: 'normal',
    color: Colors.Black,
  };

  const Title = {
    display: "flex",
    margin: "50px 0px",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    fontSize: "32px",
    fontWeight: "400",
  };

  const line = {
    width: "30px",
    height: "2px",
    margin: "10px",
    backgroundColor: Colors.Neutral10,
  };

  const LabelStyle = {
    fontSize: '20px',
    fontWeight: 400,
    lineHeight: '50px',
    marginLeft: '10px'
  }

  const SubmitBtn = {
    height: "4.5vh",
    margin: "35px 0px",
    color: Colors.Neutral0,
    backgroundColor: Colors.Neutral10,
    borderRadius: "7px",
    borderStyle: "none",
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    fontSize: '20px',
    fontWeight: 400,
    lineHeight: '50px',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const Styles = {
    height: "46px",
    margin: "3px 0px 10px",
    borderRadius: '7px',
    border: `1px solid ${Colors.Gray}`,
    backdropFilter: 'blur(2px)',
    padding: '0 10px',
    fontSize: '14px',
    fontWeight: 400,
  };

  const ChangeBtn = {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '50px',
    border: 'none',
    outline: 'none',
    background: 'transparent',
    cursor: 'pointer'
  }

  useEffect(() => {
    if(cookies.accessToken) {
      navigate(-1);
    }
  })

  return (
    <div style={Container}>
      <div style={Contents}>
        <div>
          <h3 style={Title}>
            Log In <div style={line}></div>
          </h3>
        </div>

        <label style={LabelStyle}>ID</label>
        <input type="text" value={Id} onChange={onIdHandler} style={Styles} />
        <label style={LabelStyle}>PASSWORD</label>
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
          submit
        </button>
        <button onClick={() => navigate('/signup')} style={ChangeBtn}>
          SIGN UP 
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
