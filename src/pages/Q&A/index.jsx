import React from "react";
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

const Details = styled.details`
  width: 69.4%;
  font-size: 21px;
  border-bottom: 1px solid #b9b9b9;
  color: #486284;
`;

const Summary = styled.summary`
  display: flex;
  justify-content: left;
  padding: 14px;
`;

const Q_Icon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #bd1313;
`;

const Q = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: DM Sans;
  font-size: 21px;
  color: #ffffff;
`;

const A_Icon = styled.div`
  width: 28.205px;
  height: 30px;
  border-radius: 50%;
  background-color: #000000;
`;

const A = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: DM Sans;
  font-size: 21px;
  color: #ffffff;
`;

const Question = styled.div`
  width: 42.5%;
  font-family: DM Sans;
  font-size: 21px;
  font-weight: 500;
  padding-left: 14px;
  letter-spacing: 0.15000000596046448px;
  text-align: left;
  color: #486284;
`;

const Answer = styled.div`
  width: 105%;
  padding: 14px;
  padding-left: 56px;
  display: flex;
  justify-content: left;
`;

const Text = styled.div`
  width: 90%;
  font-family: DM Sans;
  font-size: 21px;
  font-weight: 500;
  padding-left: 14px;
  letter-spacing: 0.15000000596046448px;
  text-align: left;
  color: #486284;
`;

const Line = styled.div`
  width: 100%;
  border-bottom: 1px solid #b9b9b9;
`;

const Q_and_A = () => {
  return (
    <Total>
      <Middle>
        <Header>Q&A</Header>
        <Line_ />
      </Middle>

      <Details>
        <Summary>
          <Q_Icon>
            <Q>Q</Q>
          </Q_Icon>
          <Question>장애란 무엇인가요?</Question>
        </Summary>
        <Line />
        <Answer>
          <A_Icon>
            <A>A</A>
          </A_Icon>
          <Text>
            장애에 대한 사전적 정의는 ‘신체 기관이 본래의 제 기능을 하지
            못하거나 정신 능력에 결함이 있는 상태’입니다.
          </Text>
        </Answer>
      </Details>
      <Details>
        <Summary>
          <Q_Icon>
            <Q>Q</Q>
          </Q_Icon>
          <Question>장애인은 아무것도 하지 못하나요?</Question>
        </Summary>
        <Line />
        <Answer>
          <A_Icon>
            <A>A</A>
          </A_Icon>
          <Text>
            장애인도 직업을 가지고 소득을 창출할 수 있습니다. 기업이 장애인을
            고용하는 것을 선호하지 않을 뿐입니다.
          </Text>
        </Answer>
      </Details>
      <Details>
        <Summary>
          <Q_Icon>
            <Q>Q</Q>
          </Q_Icon>
          <Question>장애인 복지에 대한 예산은 얼마인가요?</Question>
        </Summary>
        <Line />
        <Answer>
          <A_Icon>
            <A>A</A>
          </A_Icon>
          <Text>
            2023년 기준, 대한민국 총 예산은 638.7조원입니다. 그 중 장애인 예산은
            7.5조원을 편성, 작년에 비해 9.2%(6조 8천억 → 7조 5천억)
            증액되었습니다.
          </Text>
        </Answer>
      </Details>
      <Details>
        <Summary>
          <Q_Icon>
            <Q>Q</Q>
          </Q_Icon>
          <Question>장애인은 국가에 이익이 되나요?</Question>
        </Summary>
        <Line />
        <Answer>
          <A_Icon>
            <A>A</A>
          </A_Icon>
          <Text>윤리적인 문제이므로 답변이 어렵습니다.</Text>
        </Answer>
      </Details>
      <Details>
        <Summary>
          <Q_Icon>
            <Q>Q</Q>
          </Q_Icon>
          <Question>
            장애를 가지고 있으면 어디에서 도움을 받을 수 있나요?
          </Question>
        </Summary>
        <Line />
        <Answer>
          <A_Icon>
            <A>A</A>
          </A_Icon>
          <Text>
            장애인쉼터나 발달장애인지원센터 등의 국가기관에서 도움을 받을 수
            있습니다.
          </Text>
        </Answer>
      </Details>
      <Details>
        <Summary>
          <Q_Icon>
            <Q>Q</Q>
          </Q_Icon>
          <Question>전염되는 장애가 있나요?</Question>
        </Summary>
        <Line />
        <Answer>
          <A_Icon>
            <A>A</A>
          </A_Icon>
          <Text>장애는 전염될 수 없습니다.</Text>
        </Answer>
      </Details>
      <Details>
        <Summary>
          <Q_Icon>
            <Q>Q</Q>
          </Q_Icon>
          <Question>장애는 선천적인가요?</Question>
        </Summary>
        <Line />
        <Answer>
          <A_Icon>
            <A>A</A>
          </A_Icon>
          <Text>
            장애인의 약 90%가 후천적으로 장애를 얻습니다. 비장애인들도 사고나
            질병, 재난 등의 이유로 장애를 가질 수 있습니다.
          </Text>
        </Answer>
      </Details>
      <Details>
        <Summary>
          <Q_Icon>
            <Q>Q</Q>
          </Q_Icon>
          <Question>
            의학과 과학 기술이 발전하면 장애인의 수가 줄어드나요?
          </Question>
        </Summary>
        <Line />
        <Answer>
          <A_Icon>
            <A>A</A>
          </A_Icon>
          <Text>
            의학의 발전은 치료와 재활 기술 등을 통해 장애인들을 돕지만, 일부
            장애는 완전히 치료되기 어렵습니다. 또한 산업사회의 발전으로 수많은
            사람들이 교통사고나 산업재해로 장애를 만들고 있습니다.
          </Text>
        </Answer>
      </Details>
      <Details>
        <Summary>
          <Q_Icon>
            <Q>Q</Q>
          </Q_Icon>
          <Question>청각 장애인과의 대화는 불가능한가요?</Question>
        </Summary>
        <Line />
        <Answer>
          <A_Icon>
            <A>A</A>
          </A_Icon>
          <Text>
            농아인은 글로 적거나 수화통역사의 도움으로 난청인은 보청기의 도움을
            받아 대화할 수 있습니다. 그리고 입모양을 보고 말을 알아들을 수 있는
            청각 장애인들도 있습니다.
          </Text>
        </Answer>
      </Details>
      <Details>
        <Summary>
          <Q_Icon>
            <Q>Q</Q>
          </Q_Icon>
          <Question>장애인 편의시설은 장애인들만 사용해야 하나요?</Question>
        </Summary>
        <Line />
        <Answer>
          <A_Icon>
            <A>A</A>
          </A_Icon>
          <Text>
            편의시설 가운데 장애인들만 이용해야 하는 시설은 장애인 주차장
            뿐입니다. 장애인 이외에도 노인, 임산부 등 몸이 불편한 사람들도
            편리하게 이용할 수 있습니다.
          </Text>
        </Answer>
      </Details>
      <Details>
        <Summary>
          <Q_Icon>
            <Q>Q</Q>
          </Q_Icon>
          <Question>장애인의 수는?</Question>
        </Summary>
        <Line />
        <Answer>
          <A_Icon>
            <A>A</A>
          </A_Icon>
          <Text>
            2017 장애인 실태 조사에 의하면 우리나라 장애인 수는 267만명에
            달합니다. 전체 인구의 5.4%, 100명 중 5명이 장애인임을 의미합니다.
            등록된 장애인 중 지체장애인 123만 9000명, 청각장애인 34만 2000명,
            시각장애인은 25만 3000명에 이릅니다.
          </Text>
        </Answer>
      </Details>
      <Details>
        <Summary>
          <Q_Icon>
            <Q>Q</Q>
          </Q_Icon>
          <Question>장애인 장애우 중 어떤 용어를 사용해야 하나요?</Question>
        </Summary>
        <Line />
        <Answer>
          <A_Icon>
            <A>A</A>
          </A_Icon>
          <Text>
            장애우는 비장애인 중심적인 용어 입니다. 비장애인이 친구처럼 도와주고
            보살펴주어야 한다는 의미를 담고 있어 장애인을 수동적으로 바라보고
            있습니다. 장애우보다 장애인이라는 말을 사용하는 것이 바람직합니다.
          </Text>
        </Answer>
      </Details>
    </Total>
  );
};

export default Q_and_A;
