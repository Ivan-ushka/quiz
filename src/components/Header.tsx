import React from 'react';
import {Button, Container, Dropdown, DropdownButton, DropdownMenu, Nav, Navbar, Stack} from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../state/store";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-regular-svg-icons";
import {logout} from "../state/authAction";
import {Link} from "react-router-dom";
import './style.css'

const Header = () => {
    const dispatch: any = useDispatch();
    const isAuth: boolean = useSelector((state: RootState) => state.auth.isAuth);
    const isLoading: boolean = useSelector((state: RootState) => state.auth.isLoading);

    return (
        <Navbar expand="md" className="text-dark mx-md-0 bg-light">
            <Container className="py-3 px-md-0 px-5">
                <Navbar.Brand>
                    <Link className="text-decoration-none text-black" to="/">
                        <h3>Quiz</h3>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle/>

                <Navbar.Collapse>
                    <Nav>
                        <Link to="/search" className="link-dark text-decoration-none mx-md-2 mx-0">
                            <h3>Search</h3>
                        </Link>
                        <Link to="/information" className="link-dark text-decoration-none mx-md-2 mx-0">
                            <h3>Information</h3>
                        </Link>
                    </Nav>
                </Navbar.Collapse>

                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Stack direction="horizontal" gap={2} className="m-auto">
                            {!isLoading && !isAuth ?
                                <>
                                    <Link to="/auth/register">
                                        <Button variant="warning">
                                            Sign in
                                        </Button>
                                    </Link>
                                    <Link to="/auth/login">
                                        <Button variant="primary">
                                            Log in
                                        </Button>
                                    </Link>
                                </>
                                :
                                <Dropdown drop="down-centered" >
                                    <Dropdown.Toggle
                                        id="circle-dropdown-toggle"
                                        className="p-2 px-3 mx-5 rounded-circle"
                                    >
                                        <FontAwesomeIcon icon={faUser} fontSize={25}/>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item as="button">
                                            <Link to="/profile"
                                                  className="text-decoration-none link-dark rounded-circle">
                                                <p className="w-100 mb-0">
                                                    Profile
                                                </p>
                                            </Link>
                                        </Dropdown.Item>
                                        <Dropdown.Divider/>

                                        <Dropdown.Item onClick={() => dispatch(logout())}>
                                            Log out
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            }
                        </Stack>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};


export default Header;