import React, { useEffect, useState } from "react";
import * as _ from './style'
import { Button } from "../Button";
import Logo from '../../assets/img/Logo.png'
import { useLocation, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const Header = () => {
    const [cookies,,] = useCookies(['accessToken']);
    const navigate = useNavigate();
    const location = useLocation()
    const query = Object.fromEntries(decodeURI(location.search).replace('?', '').split('&').map((v) => v.split('=')));
    const [bool, setBool] = useState(undefined)
    const [Data, setData] = useState('')

    const ChangeEvent = (e) => {
        setData(e.currentTarget.value);
    }

    useEffect(() => {
        if(location.pathname === '/search' && query.q !== undefined && query.q !== '') {
            setData(query.q);
        } else {
            setData('')
        }
    }, [location])

    return (
        <_.Container>
            <_.LeftBox onClick={() => navigate('/')}>
                <_.Img src={Logo}/>
                <_.Title>EMPATHY</_.Title>
            </_.LeftBox>
            <_.RightBox>
                <_.Text onClick={(e) => setBool(true)}>Search</_.Text>
                {   bool !== undefined &&
                    <_.SearchBox bool={bool} onBlur={() => setBool(false)}>
                        <_.Input
                            value={Data}
                            onChange={ChangeEvent}
                            onKeyDown={(e) => {
                                if(e.key === 'Enter') {
                                    if(Data === '') {
                                        navigate('/')
                                    } else {
                                        navigate(`/search?q=${Data}`)
                                    }
                                    setBool(undefined)
                                }
                            }}
                        />
                    </_.SearchBox>
                }
                <_.Text onClick={() => navigate('/Q&A')}>Q&A</_.Text>
                <_.Text onClick={() => navigate('/Announcement')}>Announcement</_.Text>
                {
                    cookies.accessToken ?
                    <_.UserCircle />
                    :
                    <Button onClick={() => navigate('/login')}>login</Button>
                }
            </_.RightBox>
        </_.Container>
    )
}

export default Header;