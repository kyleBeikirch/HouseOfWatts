import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Header = styled.header`
  margin-bottom: 5px;
  padding: 0 10px;
  border-bottom: 2px solid ${props => props.theme.colors.main};
`;

export const H1 = styled.h1`
  display: inline-block;
  vertical-align: middle;
  margin: 10px 20px 10px 0;
  font-weight: 700;
  letter-spacing: -3px;
  color: ${props => props.theme.colors.main};
`;
