import React, { useState } from "react";
import Ad from "../../components/ad";
import * as _ from './style';
import { Button } from "../../components/Button";
import walk from '../../assets/img/walk.png'

const Main = () => {
    const [Index, setIndex] = useState(0);

    return (
        <_.Container>
            <_.ContentBox>
                <_.Triangle rotate={-90}/>
                <_.CenterBox>
                    <_.CarouselOutBox>
                        <_.Carousel>
                            <_.CarouselInBox>
                                <_.FlexBox>
                                    <_.subTitle>의료급여법에 의한 의료급여2종 수급권자인 등록장애인</_.subTitle>
                                    <_.Title>의료비 지원</_.Title>
                                    <_.Explain>
                                        의료기관 이용시 발생하는 급여항목 본인부담금의 일부 또는 전액 지원 (비급여 제외)<br/>
                                        2차, 3차 의료급여기관 진료
                                    </_.Explain>
                                    <div>
                                        <Button color>Explore</Button>
                                    </div>
                                </_.FlexBox>
                                <_.Img width={564} height={420} src={walk}></_.Img>
                            </_.CarouselInBox>
                        </_.Carousel>
                    </_.CarouselOutBox>
                    <_.CircleBox>
                        <_.Circle />
                    </_.CircleBox>
                </_.CenterBox>
                <_.Triangle rotate={90}/>
            </_.ContentBox>
            <_.Footer>
                <_.FooterText>강태양</_.FooterText>
                <_.FooterText>임다영</_.FooterText>
                <_.FooterText>조민준</_.FooterText>
                <_.FooterText>임태곤</_.FooterText>
                <_.FooterText>김순호</_.FooterText>
            </_.Footer>
        </_.Container>
    )
}

export default Main;