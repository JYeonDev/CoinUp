import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  FormControl,
  InputGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";

const ExchangeList = () => {
  const [price, setPrice] = useState();
  const [priceList, setPriceList] = useState([]);

  function onChange(e) {
    setPrice(e.target.value);
  }

  console.log(price);

  function addClick() {
    setPriceList([...priceList, price]);
    setPrice("");
  }

  console.log(priceList);

  function editPriceList(e) {
    if (e.keyCode === 13) {
      addClick();
    }
    return;
  }

  return (
    <Container>
      <Row>
        <Col>
          <InputGroup>
            <FormControl
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              onKeyDown={(e) => editPriceList(e)}
            />
            <InputGroup.Append>
              <Button>추가</Button>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          {priceList.length && Array.isArray(priceList) > 0
            ? priceList.map((one, key) => {
                return (
                  <ListGroupItem action key={key}>
                    {one}
                  </ListGroupItem>
                );
              })
            : "목록없음"}
        </Col>
      </Row>
    </Container>
  );
};

export default ExchangeList;
