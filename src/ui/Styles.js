import styled from 'styled-components'

export const AppLayout = styled.div`
  padding: 20px 40px;
`

export const H2 = styled.div`
  font-size: 30px;
`

export const Title = styled.h1`
  font-size: 60px;
  text-align: center;
  color: palevioletred;
  padding: 0 20px ;
  font-weight: bold;
`

export const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  font-weight: bold;
  border-radius: 5px;
  font-size: 18px;
  display: block;
  :hover {
    color: #9DC5BB;
    } 
`
export const NavItem = styled.nav`
  display: flex;
  flex-flow:row nowrap;
  justify-content: space-evenly;
  align-items: center;

  .title {
    font-size: 60px;
    text-align: left;
    color: palevioletred;
    font-weight: bold;
  }
  .nav-links {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
  }

  .link {
    color: palevioletred;
    margin: 5px;
    padding: 5px;
    font-weight: bold;
    border-radius: 5px;
    font-size: 18px;
    :hover {
    color: #9DC5BB;
    } 
  }

`
// display: inline - block;
// color: palevioletred;
// margin: 1em;
// padding: 0.25em 1em;
// border: 2px solid palevioletred;
// font - weight: bold;
// border - radius: 8px;
// font - size: 18px;
// display: block;