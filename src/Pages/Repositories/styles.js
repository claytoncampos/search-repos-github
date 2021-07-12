import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100vw;
  max-width: 1280px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #333;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const ListItem = styled.li`
  margin: 0.5rem;
  height: 30px;
  background-color: #000;
  color: #fff;
`;

export const LinkHome = styled(Link)`
  display: block;
  width: 4rem;
  text-align: center;
  margin: 2rem auto;
  background-color: #000;
  padding: 0.5rem 0;
  color: #fff;
  text-decoration: none;

  &:hover {
    color: blue;
  }
`;
