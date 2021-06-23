import styled from "styled-components"
import DefaultButton from "../components/DefaultButton"
import { mediaBreakpoints } from "../utils/media-breakpoints"

export const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100vh;
`

export const MainBlock = styled.div`
  display: flex;
  height: 95vh;
  @media (max-width: ${mediaBreakpoints.HomePage.xlg}) {
    height: 91vh;
  }
  @media (max-width: ${mediaBreakpoints.HomePage.lg}) {
    flex-direction: column;
    height: 100%;
  }
`

export const AuthBlock = styled.div`
  order: 2;
  height: 100%;
  width: 45vw;
  position: relative;
  padding-left: 30px;
  @media (max-width: ${mediaBreakpoints.HomePage.lg}) {
    order: 1;
    position: static;
    width: 100vw;
    height: 530px;
  }
`

export const AuthBlockContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  @media (max-width: ${mediaBreakpoints.HomePage.lg}) {
    padding: 16px;
    margin: 0 40px 0 40px;
    position: static;
    height: 100%;
    width: 100vw;
  }
`

export const ImagesBlock = styled.div`
  order: 1;
  height: 100%;
  width: 55vw;
  position: relative;
  @media (max-width: ${mediaBreakpoints.HomePage.lg}) {
    order: 2;
    display:none;
  }
`

export const AuthPageBackgroundImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  @media (max-width: ${mediaBreakpoints.HomePage.lg}) {
    
  }
`

export const BigHeader = styled.h2`
  font-family: "Prompt";
  font-size: 60px;
  line-height: 64px;
  padding-right: 20px;
`

export const SmallHeader = styled.h4`
  font-family: "Prompt";
  font-size: 31px;
  line-height: 36px;
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

export const AuthorizationButton = styled(DefaultButton)`
  
`

export const NavbarBlock = styled.div`
  height: 5vh;
  padding: 0 10px 0 10px;
  @media (max-width: ${mediaBreakpoints.HomePage.xlg}) {
    height: 9vh;
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
  @media (max-width: ${mediaBreakpoints.HomePage.xlg}) {
    height: 9vh;
    padding: 5px 0 5px 0;
  }
`

export const NavbarLink = styled.a`
  font-size: 13px;
  line-height: 16px;
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
  color: #5b7083;
`