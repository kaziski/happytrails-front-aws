import styled from 'styled-components'

export const AppLayout = styled.div`
  padding: 20px 40px;
`

export const H2 = styled.div`
  font-size: 30px;
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

  .nav-links {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
  }

  .link {
    color: #DB7093;
    border: 2px solid #DB7093;
    margin: 1em;
    padding: 0.25em 1em;
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