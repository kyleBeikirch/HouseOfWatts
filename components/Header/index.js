// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import LinkList from '../LinkList';
import { Header as StyledHeader, H1 } from './styles';
import connect from './store';

type Props = {
  pathname: string,
  authenticated?: boolean,
  actions: {
    logout: Function
  }
};

const Header = ({ pathname, authenticated, actions: { logout } }: Props) => (
  <StyledHeader>
    <H1>House of WATTS</H1>
    <LinkList
      pathname={pathname}
      authenticated={authenticated}
      logout={logout}
    />
  </StyledHeader>
);

Header.defaultProps = {
  authenticated: false
};

Header.propTypes = {
  pathname: PropTypes.string.isRequired,
  authenticated: PropTypes.bool,
  actions: PropTypes.shape({
    logout: PropTypes.func.isRequired
  }).isRequired
};

export default connect(Header);
