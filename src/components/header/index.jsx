import React from "react";
import * as _ from './style'
import { Button } from "../Button";
import Logo from '../../assets/img/Logo.png'
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate()

    return (
        <_.Container>
            <_.LeftBox onClick={() => navigate('/')}>
                <_.Img src={Logo}/>
                <_.Title>EMPATHY</_.Title>
            </_.LeftBox>
            <_.RightBox>
                <_.Text>Search</_.Text>
                <_.Text onClick={() => navigate('/Q&A')}>Q&A</_.Text>
                <_.Text onClick={() => navigate('/Announcement')}>Announcement</_.Text>
                <Button onClick={() => navigate('/login')}>login</Button>
            </_.RightBox>
        </_.Container>
    )
}

export default Header;