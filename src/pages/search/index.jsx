import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as _ from './style'
import axios from "axios";
import hospital from '../../assets/img/hospital.png'
import chair from '../../assets/img/chair.png'

const Search = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const query = Object.fromEntries(decodeURI(location.search).replace('?', '').split('&').map((v) => v.split('=')));
    const [Data, setData] = useState([]);

    const getData = () => {
        axios({
            method: 'get',
            url: `${process.env.REACT_APP_URL}/board/search`,
            params: {
                title: query.q
            }
        })
        .then((res) => {
            setData(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        if (query.q === undefined || query.q === '') {
            navigate(-1);
        }
        else {
            getData()
        }
    }, [query.q])

    return (
        <_.Container>
            <_.ContnetBox>
                {
                    Data.map((v, i) => {
                        const date = new Date();
                        const [StartTime, EndTime] = v.operateTime.split(/-|~/).map((v) => v.split(':').map((v) => +v));
                        const FBool = StartTime[0] > date.getHours() || (StartTime[0] === date.getHours() && StartTime[1] >= date.getMinutes())
                        const EBool = EndTime[0] < date.getHours() || (EndTime[0] === date.getHours() && EndTime[1] <= date.getMinutes())

                        return (
                            <_.Content key={i}>
                                <_.BetweenBox>
                                    <_.Title>{v.title}</_.Title>
                                    <_.RightBox>
                                        <_.Img src={v.place === 'HOSPITAL' ? hospital : chair}/>
                                        {FBool && EBool ? <_.Circle /> : <_.Triangle />}
                                    </_.RightBox>
                                </_.BetweenBox>
                                <_.BetweenBox>
                                    <_.Address>{v.adress}</_.Address>
                                    <_.LinkText onClick={() => window.open(v.pageUrl)}>homepage</_.LinkText>
                                </_.BetweenBox>
                            </_.Content>
                    )})
                }
            </_.ContnetBox>
        </_.Container>
    )
}

export default Search;