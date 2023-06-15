import React from "react";
import { cartState } from "../context/Context";
import { Button, Card } from "react-bootstrap";

const Home = () => {
  const {
    state: { products },
  } = cartState();

  const {
    state: { cart },
    dispatch,
  } = cartState();

  return (
    <div className="home">
      <div className="productContainer">
        {products.map((prod) => {
          return (
            <div key={prod.id} className="products">
              <Card>
                <Card.Img
                  variant="top"
                  src={prod.img}
                  alt={prod.name}
                  className="productImg"
                />
                <Card.Body>
                  <Card.Title>{prod.name}</Card.Title>
                  <Card.Subtitle style={{ paddingBottom: 10 }}>
                    <span>₹ {prod.price}</span>
                  </Card.Subtitle>

                  {cart.some((p) => p.id === prod.id) ? (
                    <Button
                      onClick={() => {
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: prod,
                        });
                      }}
                      variant="danger"
                    >
                      Remove from Cart
                    </Button>
                  ) : (
                    <Button
                      onClick={() => {
                        dispatch({
                          type: "ADD_TO_CART",
                          payload: prod,
                        });
                      }}
                    >
                      Add to Cart
                    </Button>
                  )}
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
