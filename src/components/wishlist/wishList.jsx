import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const WishList = () => {
  const store = useSelector((store) => store.market);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(store, "wish");

  return (
    <ListGroup>
      <ListGroupItem>
        {/* onClick={() => {
          dispatch({ type: "plus", payload: { id: 1 } });
          navigate("/wish");
        }} */}
      </ListGroupItem>
    </ListGroup>
  );
};

export default WishList;
