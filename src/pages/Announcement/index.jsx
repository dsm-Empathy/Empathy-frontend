import React from "react";
import { useNavigate } from "react-router-dom";
import styled, { CSS } from "styled-components";

const Total = styled.div`
  width: 100%;
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Middle = styled.div`
  width: 69.4%;
`;

const Header = styled.div`
  width: 42.5%;
  height: 76px;
  font-family: DM Sans;
  font-size: 60px;
  font-weight: 700;
  line-height: 76px;
  letter-spacing: 0.5px;
  text-align: left;
  color: #486284;
`;

const Line_ = styled.div`
  border: 1px solid #000000;
`;

const Presentation = styled.div`
  width: 69.4%;
`;

const Text = styled.div`
  width: 90%;
  height: 50px;
  font-family: DM Sans;
  font-size: 21px;
  font-weight: 500;
  line-height: 22px;
  padding: 14px;
  letter-spacing: 0.15px;
  color: #486284;
  cursor: pointer;
`;

const Line = styled.div`
  width: 100%;
  border-bottom: 1px solid #b9b9b9;
`;

const Announcement = () => {
  const navigate = useNavigate();

  return (
    <Total>
      <Middle>
        <Header>Announcement</Header>
        <Line_ />
      </Middle>

      <Presentation>
        <Text onClick={() => navigate('/announcement/detail/1')}>건강보험 지역가입자의 보험료 경감</Text>
        <Line />
      </Presentation>
      <Presentation>
        <Text onClick={() => navigate('/announcement/detail/0')}>장애인 등록 진단비 지급</Text>
        <Line />
      </Presentation>
    </Total>
  );
};

export default Announcement;
