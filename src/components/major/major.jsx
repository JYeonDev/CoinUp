import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import styles from "./major.module.css";

const Major = (props) => {
  const majorLogo = [
    "upbit.png",
    "bithumb.png",
    "coinone.png",
    "gopax.png",
    "korbit.jpeg",
  ];

  const marketName = [
    "업비트(upbit)",
    "빗썸(bithumb)",
    "코인원(coinone)",
    "고팍스(gopax)",
    "코빗(korbit)",
  ];

  const text = [
    "한국을 넘어서 세계에서 가장 거래가 활발한 거래소 중에 하나로 하루 거래액이 30억 달러에 육박하여 국내에서는 업계 1위입니다. 다른 업체보다 늦게 출발하였으나 업계 1위 자리를 차지하였습니다.",
    '초창기 거래소로 2014년 "엑스코인" 이라는 이름으로 서비스를 시작을 하다가 2015년 "빗썸"으로 변경하였습니다. 지금은 업비트에 조금 밀리는 판국이지만 아직 까지는 많이 이용하고 있습니다.',
    "2014년 8월에 출시가 되었고 2016년에는 기존 '디바인랩'에서 '코인원'으로 통합하였습니다. 국내 최초로 이더리움과 이더리움 클래식을 상장한 거래소입니다. UI가 가장 뛰어나서 편리하다고 알려져 있으며 실명 계좌는 농협은행 계좌 개설을 통해 거래를 진행합니다.",
    "신한은행의 투자 유치를 받은 '스트리미'에서 개설한 거래소로 다른 거래소와 달리 사용자가 보유한 다양한 은행의 계좌로 등록이 가능합니다.",
    "2013년 '한국비트코인거래소' 이름으로 설립된 대한민국 최초의 암호화폐 거래소. 지금은 2017년 넥슨의 모회사 NXC에 인수되어서 NXC의 계열사가 되었습니다. 신한은행 실명계좌를 통해 거래가 가능합니다.",
  ];

  return (
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 5 }).map((_, idx) => (
        <Col>
          <Card
            className={styles.card}
            onClick={() => {
              window.location.href = [
                "https://upbit.com/home",
                "https://www.bithumb.com/",
                "https://coinone.co.kr/",
                "https://www.gopax.co.kr/",
                "https://www.korbit.co.kr/",
              ][idx];
            }}
          >
            <Card.Img
              variant="top"
              src={`../images/majorLogo/${majorLogo[idx]}`}
              alt="logo"
              className={styles.img}
            />
            <Card.Body>
              <Card.Title className={styles.title}>
                {marketName[idx]}
              </Card.Title>
              <Card.Text>{text[idx]}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Major;
