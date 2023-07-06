import React, { useEffect, useRef, useState } from "react";
import * as _ from './style'
import { useCookies } from "react-cookie";
import { AnnouncementData } from "../../Data";
import { useNavigate } from "react-router-dom";

const Ad = ({number = 0, close = false, Fclose}) => {
    const [cookies, setCookie,] = useCookies();
    const [CloseState, setClose] = useState(false)
    const state = useRef(false);
    const [XY, setXY] = useState([0, 0])
    const cursor = useRef([0, 0])
    const navigate = useNavigate();

    const moveEvent = (e) => {
        if(state.current) {
            let x = e.clientX - cursor.current[0]
            let y = e.clientY - cursor.current[1]

            if(x <= 0) {
                x = 0
            }
            if(y <= 0) {
                y = 0
            }
            if(x + cursor.current[2] > document.body.clientWidth) {
                x = document.body.clientWidth - cursor.current[2]
            }
            if(y + cursor.current[3]> document.body.clientHeight) {
                y = document.body.clientHeight - cursor.current[3]
            }
            setXY([x, y])
        }
    }

    const upEvent = () => {
        window.removeEventListener('mousemove', moveEvent)
        window.removeEventListener('mouseup', upEvent)
        state.current = false
    }

    useEffect(() => {
        if(cookies[`popClose${number}`] === 'hidden' || close) {
            setClose(true)
        } 
    }, [close, cookies])

    return (
        <_.Container
            onMouseDown={e => {
                const width = e.currentTarget.getBoundingClientRect().width;
                const height = e.currentTarget.getBoundingClientRect().height;
                const x = e.clientX - (window.screenX + e.currentTarget.getBoundingClientRect().left)
                const y = e.clientY - (window.screenY + e.currentTarget.getBoundingClientRect().top)
                cursor.current = [x, y, width, height];
                state.current = true
                window.addEventListener('mousemove', moveEvent)
                window.addEventListener('mouseup', upEvent)
            }}
            bool={CloseState}
            style={{top: XY[1], left: XY[0]}}
        >
            <_.Img
                onMouseDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                }}
                onClick={() => navigate(`/announcement/detail/${number}`)}
                src={AnnouncementData[number].image}
            />
            <_.BetweenBox>
                <_.CloseAllBtn onClick={() => Fclose(true)}>모두닫기</_.CloseAllBtn>
                <_.RightBox>
                    <_.CloseBtn onClick={() => setCookie(`popClose${number}`, 'hidden')}/>
                    <div>
                        <_.Text>하루동안 열지 않음</_.Text>
                        <_.TextBtn onClick={() => setClose(true)}>[닫기]</_.TextBtn>
                    </div>
                </_.RightBox>
            </_.BetweenBox>
        </_.Container>
    )
}

export default Ad;