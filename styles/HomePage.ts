import styled from "styled-components"

export const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100vh;
`

export const MainBlock = styled.div`
  display: flex;
  height: 95vh;
`

export const AuthBlock = styled.div`
  order: 2;
  height: 100%;
  width: 45vw;
  padding: 215px 0 0 50px;
`

export const BigHeader = styled.h2`
  font-weight: 700;
  font-size: 64px;
  line-height: 84px;
`

export const SmallHeader = styled.h4`
  font-size: 31px;
  line-height: 36px;
  font-weight: 700;
`

export const ImagesBlock = styled.div`
  order: 1;
  height: 100%;
  width: 55vw;
  position: relative;
`

export const BigTwitterLogoWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const AuthButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`

export const NavbarBlock = styled.div`
  height: 5vh;
  margin: 0 auto;
  padding: 0 50px 0 50px;
`

export const NavbarContainer = styled.nav`
  line-height: 5vh;
`

export const NavbarLink = styled.a`
  font-size: 13px;
  line-height: 16px;
  font-weight: 400;
  color: #5b7083;
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

export const NavbarCopyrightSpan = styled.span`
  font-size: 13px;
  line-height: 16px;
  font-weight: 400;
  color: #5b7083;
`