import React, { useEffect } from "react";
import * as _ from './style'
import { AnnouncementData } from '../../Data'
import { useLocation, useNavigate } from "react-router-dom";

const ACDetail = () => {
    const location = useLocation().pathname.split('/')
    const number = +location[location.length - 1];
    const navigate = useNavigate();

    useEffect(() => {
        if(number < 0 || AnnouncementData.length <= number) {
            navigate(-1);
        }
    }, [number])

    return (
        <_.Container>
            <_.ContentBox>
                <_.Title>공지사항</_.Title>
                <_.subTitle>{AnnouncementData[number].title}</_.subTitle>
                <_.Line />
                <_.Content>
                    <img src={AnnouncementData[number].image[0]} />
                </_.Content>
                {
                    number > 0 && 
                    <>
                        <_.Line />
                        <_.MoveText onClick={() => navigate(`/announcement/detail/${number - 1}`)}>이전 | {AnnouncementData[number - 1].title}</_.MoveText>
                    </>
                }
                {
                    AnnouncementData.length - 1 > number && 
                    <>
                        <_.Line />
                        <_.MoveText onClick={() => navigate(`/announcement/detail/${number + 1}`)}>다음글 | {AnnouncementData[number + 1].title}</_.MoveText>
                    </>
                }
            </_.ContentBox>
        </_.Container>
    )
}

export default ACDetail;