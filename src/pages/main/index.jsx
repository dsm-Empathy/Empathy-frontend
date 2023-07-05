import React, { useEffect, useRef, useState } from "react";
import * as _ from './style';
import { Button } from "../../components/Button";
import { AnnouncementData, PRData } from '../../Data'
import { useNavigate } from "react-router-dom";
import Ad from "../../components/ad";

const Main = () => {
    const [Index, setIndex] = useState(0);
    const [closeState, setClose] = useState(false);
    const Timer = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        Timer.current = setInterval(() => {
            setIndex(i => (i + 1) % PRData.length);
        }, 5000)

        return () => clearInterval(Timer.current)
    })

    return (
        <_.Container>
            {
                AnnouncementData.map((v, i) => 
                    <Ad number={i} close={closeState} Fclose={setClose}/>
                )
            }
            <_.ContentBox>
                <_.Triangle
                    rotate={-90}
                    onClick={() => setIndex((Index - 1 + PRData.length) % PRData.length)}
                />
                <_.CenterBox>
                    <_.CarouselOutBox>
                        <_.Carousel style={{transform: `translateX(${-1216 * Index}px)`}}>
                            {
                                PRData.map((v) => 
                                    <_.CarouselInBox key={v.title}>
                                        <_.FlexBox>
                                            <_.subTitle dangerouslySetInnerHTML={{__html: v.subTitle}} />
                                            <_.Title>{v.title}</_.Title>
                                            <_.Explain dangerouslySetInnerHTML={{__html: v.explain}} />
                                            <div>
                                                <Button color onClick={() => navigate(`/detail/${Index}`)}>Explore</Button>
                                            </div>
                                        </_.FlexBox>
                                        <_.Img src={v.img} />
                                    </_.CarouselInBox>
                                )
                            }
                        </_.Carousel>
                    </_.CarouselOutBox>
                    <_.CircleBox>
                        {
                            Array.from({length: PRData.length}).map((v, i) =>
                                <_.Circle
                                    bool={i === Index}
                                    onClick={() => setIndex(i)}
                                />
                            )
                        }
                    </_.CircleBox>
                </_.CenterBox>
                <_.Triangle
                    rotate={90}
                    onClick={() => setIndex((Index + 1) % PRData.length)}
                />
            </_.ContentBox>
            <_.Footer>
                <_.FooterText>강태양</_.FooterText>
                <_.FooterText>임다영</_.FooterText>
                <_.FooterText>임태곤</_.FooterText>
                <_.FooterText>조민준</_.FooterText>
                <_.FooterText>김순호</_.FooterText>
            </_.Footer>
        </_.Container>
    )
}

export default Main;