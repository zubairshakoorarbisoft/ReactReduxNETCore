import * as React from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { getLoggedInStatus } from "../../actions";



class NavMenu extends React.Component {
    state = {
        isOpen: false
    };


    componentDidMount() {
        this.props.getLoggedInStatus();
    }
    getNavigationSection() {
        if (this.props.isLoggedIn) {
            return (<div>
                <NavItem>
                <NavLink tag={Link} className="text-dark" to="/Dashboard">Posts</NavLink>
            </NavItem>
                <NavItem>
                    <NavLink tag={Link} className="text-dark" to="/Weathers">Weather Forcast</NavLink>
                </NavItem>



                <NavItem>
                    <a className="text-dark nav-link" href="/Account/Logout">Logout</a>
                </NavItem></div>
                );
        }
        else {
            return (<NavItem>
                <a className="text-dark nav-link" href="/Account/Login">Login</a>
            </NavItem>);
        }
    }
    render() {
        return (
            <header>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3" light>
                    <Container>
                        <NavbarBrand tag={Link} to="/">ReactReduxNETCore</NavbarBrand>

                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={this.state.isOpen} navbar>
                            <ul className="navbar-nav flex-grow">

                                {this.getNavigationSection()}
                            </ul>
                        </Collapse>
                    </Container>
                </Navbar>
            </header>
        );
    }
}

function MapStateToProps(state) {
    return { isLoggedIn: state.isLoggedIn };
}

export default connect(MapStateToProps, { getLoggedInStatus: getLoggedInStatus })(NavMenu);