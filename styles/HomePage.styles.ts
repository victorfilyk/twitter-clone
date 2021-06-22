import styled from "styled-components"
import DefaultButton from "../components/DefaultButton"

export const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100vh;
`

export const MainBlock = styled.div`
  display: flex;
  height: 95vh;
  @media (max-width: 1367px) {
    height: 93vh;
  }
  @media (max-width: 1030px) {
    flex-direction: column;
  }
`

export const AuthBlock = styled.div`
  order: 2;
  height: 100%;
  width: 50vw;
  padding: 215px 0 0 40px;
  @media (max-width: 1030px) {
    order: 1;
    width: 100vw;
    padding: 40px 225px 40px 225px;
  }
`

export const ImagesBlock = styled.div`
  order: 1;
  height: 100%;
  width: 50vw;
  position: relative;
  @media (max-width: 1030px) {
    order: 2;
    width: 100vw;
  }
`

export const BigHeader = styled.h2`
  font-weight: 700;
  font-size: 60px;
  line-height: 84px;
  @media (max-width: 1030px) {
    max-width: 400px;
  }
`

export const SmallHeader = styled.h4`
  font-size: 31px;
  line-height: 36px;
  font-weight: 700;
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
  @media (max-width: 1030px) {
    flex-direction: row;
    justify-content: space-around;
  }
`

export const AuthorizationButton = styled(DefaultButton)`
  @media (max-width: 1030px) {
    width: 255px;
  }
`

export const NavbarBlock = styled.div`
  height: 5vh;
  padding: 0 10px 0 10px;
  @media (max-width: 1367px) {
    height: 7vh;
  }
`

export const NavbarContainer = styled.nav`
  max-width: 1380px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 0 auto;
  flex-wrap: wrap;
  @media (max-width: 1367px) {
    height: 7vh;
    padding: 10px 0 10px 0;
  }
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
  margin-right: 15px;
`

export const NavbarCopyrightSpan = styled.span`
  font-size: 13px;
  line-height: 16px;
  font-weight: 400;
  color: #5b7083;
`