import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as _ from './style'

const Search = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const query = Object.fromEntries(decodeURI(location.search).replace('?', '').split('&').map((v) => v.split('=')));
    
    useEffect(() => {
        if (query.q === undefined || query.q === '') {
            navigate(-1);
        }
    }, [])

    return (
        <_.Container>
            <_.ContnetBox>
                <_.Content>
                    <_.BetweenBox>
                        <_.Title>대덕구장애인종합복지관</_.Title>
                        <_.Circle />
                    </_.BetweenBox>
                    <_.BetweenBox>
                        <_.Address>대전광역시 대덕구 연축동 307-4</_.Address>
                        <_.LinkText>homepage</_.LinkText>
                    </_.BetweenBox>
                </_.Content>
                <_.Content>
                    <_.BetweenBox>
                        <_.Title>한국장애인고용공단 대전지사</_.Title>
                        <_.Triangle />
                    </_.BetweenBox>
                    <_.BetweenBox>
                        <_.Address>대전 서구 청사로 136 대전무역회관 13층</_.Address>
                        <_.LinkText>homepage</_.LinkText>
                    </_.BetweenBox>
                </_.Content>
                <_.Content>
                    <_.BetweenBox>
                        <_.Title>대덕구장애인종합복지관</_.Title>
                        <_.Circle />
                    </_.BetweenBox>
                    <_.BetweenBox>
                        <_.Address>대전광역시 대덕구 연축동 307-4</_.Address>
                        <_.LinkText>homepage</_.LinkText>
                    </_.BetweenBox>
                </_.Content>
                <_.Content>
                    <_.BetweenBox>
                        <_.Title>한국장애인고용공단 대전지사</_.Title>
                        <_.Triangle />
                    </_.BetweenBox>
                    <_.BetweenBox>
                        <_.Address>대전 서구 청사로 136 대전무역회관 13층</_.Address>
                        <_.LinkText>homepage</_.LinkText>
                    </_.BetweenBox>
                </_.Content>
            </_.ContnetBox>
        </_.Container>
    )
}

export default Search;