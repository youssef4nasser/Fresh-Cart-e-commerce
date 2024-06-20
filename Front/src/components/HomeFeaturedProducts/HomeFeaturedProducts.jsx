import { faArrowRight, faCartArrowDown, faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, Col, Container, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import MdalShow from "../modal/ModalShow.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllProducts } from "../../Redux/produtsSlice.js";

export default function HomeFeaturedProducts() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  let {products} = useSelector((store)=> store.allProduts)

  return <>
  <section className="py-5">
    <Container>
      <Row className="gy-4">
        <Col md={12}>
          <Stack direction="horizontal" className="justify-content-between mb-4">
            <h2>Featured Products</h2>
            <Link className="main-color text-decoration-none" to={"/shop"}>View All <FontAwesomeIcon icon={faArrowRight} /></Link>
          </Stack>
        </Col>
        {products.map((item, index)=>{
          return(
            <Col key={index} xs={12} sm={6} md={3} lg={3}>
                <Card className="h-100 shadow-sm product-item border-hover">
                    <Link to={`shop/ProductDetails/${item._id}`} className="text-decoration-none text-dark">
                        <Card.Img variant="top" src={item?.images[0].secure_url} alt='product' />
                        <Card.Body className="d-flex flex-column">
                            <Card.Title className="h6 fw-bold">{item.name}</Card.Title>
                            <Card.Text className="fw-bold main-color">${item.price}</Card.Text>
                            <div className="d-flex justify-content-start my-2">
                                {[...Array(5)].map((star, i) => (
                                    <FontAwesomeIcon
                                        key={i}
                                        icon={faStar}
                                        className={`me-1 ${i < 4 ? "text-warning" : "text-secondary"}`}
                                    />
                                ))}
                            </div>
                        </Card.Body>
                    </Link>
                    <Card.Footer className="bg-white border-0">
                        <div className="d-flex justify-content-around">
                            <Button variant="light">
                                <FontAwesomeIcon icon={faCartArrowDown} className="text-secondary" />
                            </Button>
                            <Button variant="light">
                                <FontAwesomeIcon icon={faHeart} className="text-secondary" />
                            </Button>
                            <Button variant="light">
                                <MdalShow data={item} />
                            </Button>
                        </div>
                    </Card.Footer>
                </Card>
            </Col>
          )
        })}
      </Row>
    </Container>
  </section>
  </>
}
