import axios from "axios";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import styles from "./major.module.css";

const Major = () => {
  const majorLogo = [
    "upbit.png",
    "bithumb.png",
    "coinone.png",
    "gopax.png",
    "korbit.jpeg",
  ];

  const _majorLogo = [
    "binance.jpeg",
    "bybit.png",
    "bitmex.png",
    "bittrex.png",
    "coinbase.png",
  ];

  const marketName = [
    "업비트(upbit)",
    "빗썸(bithumb)",
    "코인원(coinone)",
    "고팍스(gopax)",
    "코빗(korbit)",
  ];

  const _marketName = [
    "바이낸스(binance)",
    "바이비트(bybit)",
    "비트멕스(bitmex)",
    "비트렉스(bittrex)",
    "코인베이스(coinbase)",
  ];

  const text = [
    "한국을 넘어서 세계에서 가장 거래가 활발한 거래소 중에 하나로 하루 거래액이 30억 달러에 육박하여 국내에서는 업계 1위입니다. 다른 업체보다 늦게 출발하였으나 업계 1위 자리를 차지하였습니다.",
    '초창기 거래소로 2014년 "엑스코인" 이라는 이름으로 서비스를 시작을 하다가 2015년 "빗썸"으로 변경하였습니다. 지금은 업비트에 조금 밀리는 판국이지만 아직 까지는 많이 이용하고 있습니다.',
    "2014년 8월에 출시가 되었고 2016년에는 기존 '디바인랩'에서 '코인원'으로 통합하였습니다. 국내 최초로 이더리움과 이더리움 클래식을 상장한 거래소입니다. UI가 가장 뛰어나서 편리하다고 알려져 있으며 실명 계좌는 농협은행 계좌 개설을 통해 거래를 진행합니다.",
    "신한은행의 투자 유치를 받은 '스트리미'에서 개설한 거래소로 다른 거래소와 달리 사용자가 보유한 다양한 은행의 계좌로 등록이 가능합니다.",
    "2013년 '한국비트코인거래소' 이름으로 설립된 대한민국 최초의 암호화폐 거래소. 지금은 2017년 넥슨의 모회사 NXC에 인수되어서 NXC의 계열사가 되었습니다. 신한은행 실명계좌를 통해 거래가 가능합니다.",
  ];

  const _text = [
    "자타가 공인하는 세계최대규모의 암호화폐 거래소이다. 저렴한 거래수수료와 200여개에 가까운 상장코인과 검증된 안정성 그리고 한국어 서비스를 지원한다.",
    "암호화폐 선물 계약 24시간 기준 거래량 세계 3위이다. 높은 자산 유동성과 일거래 고객수 15k 와 등록된 고객 수만 1.5M+ 를 육박한다. 24시간 서포트하는 라이브쳇 시스템이 특징이다.",
    "비트코인 거래량 최상위 거래소이다. 암호화폐 선물 거래소로 레버리지가 최대 100배까지 가능하다.(현재는 20배까지인걸로 앎) 한국어 서비스를 지원한다.",
    "미국 중하위권 암호화폐 거래소로 상장된 코인은 220종류 이상이고 아쉽게도 한국어 서비스는 지원하지 않는다.",
    "미국 대형 암호화폐 거래소이다. Coinbase와 GDAX간의 코인송금은 수수료가 면제된다. 상장된 코인은 4-5종류 소수의 메이저코인만 운영한다. 신용카드로 코인결제가 가능하며 수수료 4%가 붙는다. 한국어 서비스를 지원한다.",
  ];

  return (
    <>
      <Row xs={1} md={4} className="g-4">
        {Array.from({ length: 5 }).map((_, idx) => (
          <Col className={styles.container}>
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
      <Row xs={1} md={4} className="g-4">
        {Array.from({ length: 5 }).map((_, idx) => (
          <Col>
            <Card
              className={styles.card}
              onClick={() => {
                window.location.href = [
                  "https://www.binance.com/en",
                  "https://www.bybit.com/en-US/",
                  "https://www.bitmex.com/",
                  "https://global.bittrex.com/",
                  "https://www.coinbase.com/",
                ][idx];
              }}
            >
              <Card.Img
                variant="top"
                src={`../images/majorLogo/${_majorLogo[idx]}`}
                alt="logo"
                className={styles.img}
              />
              <Card.Body>
                <Card.Title className={styles.title}>
                  {_marketName[idx]}
                </Card.Title>
                <Card.Text>{_text[idx]}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Major;
