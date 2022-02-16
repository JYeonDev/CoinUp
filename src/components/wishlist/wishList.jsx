import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const WishList = (props) => {
  const store = useSelector((store) => store.market);
  const dispatch = useDispatch();
  console.log(store);

  return (
    <ListGroup>
      <ListGroupItem
        onClick={() => {
          dispatch({ type: "plus" });
        }}
      >
        {store}
      </ListGroupItem>
    </ListGroup>
  );
};

export default WishList;
