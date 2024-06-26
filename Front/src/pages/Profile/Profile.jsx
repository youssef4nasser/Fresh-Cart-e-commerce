import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { logout } from "../../Redux/authSlice.js";

function Profile() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logOut = ()=>{
        dispatch(logout())
        localStorage.removeItem("userInfo", null)
        navigate("/login")
    }
  return <>
    <section className="my-5">
        <Container>
            <Breadcrumb className="text-black-50 text-decoration-none">
                <Breadcrumb.Item className="text-black-50 text-decoration-none" href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Profile</Breadcrumb.Item>
            </Breadcrumb>

            <Row className="gy-4">
                {/* Navigation */}
                <Col xs={12} md={3}>
                    <div className="border rounded">
                        <h3 className="p-3">Navigation</h3>
                        <ul className="list-unstyled">
                            <li><Link className="p-3 d-block cursor-pointer main-hover" to={''}>Account Settings</Link></li>
                            <li><Link className="p-3 d-block cursor-pointer main-hover" to={'orders'}>Orders</Link></li>
                            <li><Link className="p-3 d-block cursor-pointer main-hover" to={'Wishlist'}>Wishlist</Link></li>
                            <li><Link className="p-3 d-block cursor-pointer main-hover" to={'Address'}>Address</Link></li>
                            <li onClick={logOut}><Link className="p-3 d-block cursor-pointer main-hover">Logout</Link></li>
                        </ul>
                    </div>
                </Col>
                {/* Content */}
                <Col md={9}>
                    <Outlet />
                </Col>
            </Row>
        </Container>
    </section>
  </>
}

export default Profile