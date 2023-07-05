import React, { useEffect } from "react";
import * as _ from './style'
import picture from '../../assets/img/picture.png'
import { useLocation, useNavigate } from "react-router-dom";
import { PRDetailData } from "../../Data";

const MainDetail = () => {
    const location = useLocation().pathname.split('/')
    const number = +location[location.length - 1];
    const navigate = useNavigate();

    useEffect(() => {
        if(number < 0 || PRDetailData.length <= number) {
            navigate(-1);
        }
    }, [number])

    return (
        <_.Container>
            <_.ContentBox>
                <_.Img src={PRDetailData[number].img}/>
                <_.RightBox>
                    <_.subTitle dangerouslySetInnerHTML={{__html: PRDetailData[number].subTitle}} />
                    <_.Title>{PRDetailData[number].title}</_.Title>
                    <_.Explain>
                        {
                            PRDetailData[number].list.map((v) => {
                                if(typeof v === 'object') {
                                    return (
                                        <_.Explain>
                                            { v.map((value) => <li>{value}</li>) }
                                        </_.Explain>
                                    )
                                }
                                else {
                                    return <li>{v}</li>
                                }
                            })
                        }
                    </_.Explain>
                </_.RightBox>
            </_.ContentBox>
        </_.Container>
    )
}

export default MainDetail;