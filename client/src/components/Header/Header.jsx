import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeaderStyles = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: center;

  img {
    max-width: 20%;
  }

  .title {
    margin: 0;
  }
`;
class Header extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const { authenticate, logOut } = this.props;
    if (e.target.innerHTML === 'Log in') {
      authenticate('Google');
    }

    if (e.target.innerHTML === 'Log out') {
      logOut();
    }
  }

  render() {
    const logInButton = (
      <button type="submit" onClick={e => this.handleClick(e)}>
        Log in
      </button>
    );
    const logOutButton = (
      <button type="submit" onClick={e => this.handleClick(e)}>
        Log out
      </button>
    );
    const { currentUser } = this.props;

    return (
      <HeaderStyles>
        <div>
          <img id="logo" src="/assets/emailbot.png" alt="logo did not load" />
          <h1 className="title">EmailBot</h1>
        </div>
        <div>{currentUser.isUserAuthenticated ? logOutButton : logInButton}</div>
      </HeaderStyles>
    );
  }
}

Header.propTypes = {
  authenticate: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,
  currentUser: PropTypes.instanceOf(Object).isRequired,
};

export default Header;
