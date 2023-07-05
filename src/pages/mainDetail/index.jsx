import React from "react";
import * as _ from './style'
import picture from '../../assets/img/picture.png'

const MainDetail = () => {
    return (
        <_.Container>
            <_.ContentBox>
                <_.Img src={picture}/>
                <_.RightBox>
                    <_.subTitle>의료급여법에 의한 의료급여 2종 수급권자인 등록장애인</_.subTitle>
                    <_.Title>의료비 지원</_.Title>
                    <_.Explain>
                        <li>의료급여법에 의한 의료급여 2종 수급권자인 등록장애인</li>
                        <li>건강보험의 차상위 본인부담 경감 대상자인 등록장애인(만성질환 및 18세미만 장애인)</li>
                        <li>의료기관 이용시 발생하는 급여항목 본인부담금의 일부 또는 전액 지원(비급여 제외)</li>
                        <_.Explain>
                            <li>1차 의료긴관 왜래진료 본인부담금 750원 일괄지원</li>
                        </_.Explain>
                        <li>2차, 3차 의료급여기관 진료</li>
                        <_.Explain>
                            <li>의료(요양)급여수가적용본인부담진료비 15%(차상위 14%, 암환자 5%, 입원 10% 등) 전액을 지원하되 본인부담금 식대는 지원하지 않음</li>
                        </_.Explain>
                        <li>의료급여증과 장애인 등록증을 제시</li>
                    </_.Explain>
                </_.RightBox>
            </_.ContentBox>
        </_.Container>
    )
}

export default MainDetail;