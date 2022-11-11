import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import './Header.scss';

interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = () => {
    return (
        <header className='header'>
            <Container>
                <Row className='justify-content-between'>
                    <Col xs='auto'>
                        <a
                            className='header__link header__title'
                            href='https://www.linkedin.com/in/thaongtp/'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            About Me
                        </a>
                    </Col>

                    <Col xs='auto'>
                        <NavLink
                            to='/photos'
                            className={({ isActive }) =>
                                isActive ? 'header__link header__link--active' : 'header__link'
                            }
                        >
                            Home Page
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </header>
    );
};

export default Header;
