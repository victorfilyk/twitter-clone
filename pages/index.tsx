import { NextPage } from "next"
import Head from "next/head"
import Link from "next/Link"
import Image from "next/image"
import React from "react"
import styled, { css } from "styled-components"
import AuthPageBackgroundPNG from "../public/images/auth-page-background.png"
import Meta from "../components/Meta"

interface AuthButtonProps {
  readonly btnType: "signup" | "login"
}

const AuthButton = styled.button<AuthButtonProps>`
  cursor: pointer;
  border-radius: 30px;
  width: 365px;
  height: 45px;
  font-size: 15px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif;
  font-weight: 700;
  :hover {
    background-color: ${(props) =>
      props.btnType === "signup" ? "#0a70af" : "#dde7e9"};
  }
  background-color: ${(props) =>
    props.btnType === "signup" ? "#1da1f2" : "#fff"};
  color: ${(props) => (props.btnType === "signup" ? "#fff" : "#1da1f2")};
  border: ${(props) =>
    props.btnType === "signup" ? "none" : "1px solid #1da1f2"};
  margin-bottom: ${(props) => (props.btnType === "signup" ? "20px" : "0")};
`

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100vh;
`

const MainBlock = styled.div`
  display: flex;
  height: 95vh;
`

const AuthBlock = styled.div`
  order: 2;
  height: 100%;
  width: 45vw;
  padding: 215px 0 0 50px;
`

const StyledSmallTwitterLogo = styled(Image)`
  filter: invert(52%) sepia(73%) saturate(1754%) hue-rotate(175deg)
    brightness(95%) contrast(101%);
`

const BigHeader = styled.h2`
  font-family: -apple-system, BNavbarLinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif;
  font-weight: 700;
  font-size: 64px;
  line-height: 84px;
`

const SmallHeader = styled.span`
  font-family: -apple-system, BNavbarLinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif;
  font-size: 31px;
  line-height: 36px;
  font-weight: 700;
`

const ImagesBlock = styled.div`
  order: 1;
  height: 100%;
  width: 55vw;
  position: relative;
`

const StyledBigTwitterLogo = styled(Image)`
  filter: invert(100%) sepia(23%) saturate(2%) hue-rotate(113deg)
    brightness(106%) contrast(101%);
`

const TwitterLogoWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const AuthButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`

const NavbarBlock = styled.div`
  height: 5vh;
  display: flex;
  justify-content: center;
`

const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 1400px;
`

const NavbarLink = styled.a`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif;
  font-size: 13px;
  line-height: 16px;
  font-weight: 400;
  color: #5b7083;
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

const NavbarCopyrightSpan = styled.span`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif;
  font-size: 13px;
  line-height: 16px;
  font-weight: 400;
  color: #5b7083;
`

const Home: NextPage<{}> = () => {
  return (
    <>
      <Meta />
      <MainWrapper>
        <MainBlock>
          <AuthBlock>
            <StyledSmallTwitterLogo
              src="/images/twitter-logo.svg"
              width="45"
              height="45"
            ></StyledSmallTwitterLogo>
            <BigHeader>Happening now</BigHeader>
            <SmallHeader>Join Twitter today.</SmallHeader>
            <AuthButtonsWrapper>
              <AuthButton btnType="signup">Sign up</AuthButton>
              <AuthButton btnType="login">Log in</AuthButton>
            </AuthButtonsWrapper>
          </AuthBlock>
          <ImagesBlock>
            <Image
              src={AuthPageBackgroundPNG}
              layout="fill"
              objectFit="cover"
            ></Image>
            <TwitterLogoWrapper>
              <StyledBigTwitterLogo
                src="/images/twitter-logo.svg"
                width="360"
                height="360"
              ></StyledBigTwitterLogo>
            </TwitterLogoWrapper>
          </ImagesBlock>
        </MainBlock>
        <NavbarBlock>
          <NavbarContainer>
            <NavbarLink href="/">About</NavbarLink>
            <NavbarLink href="/">Help Center</NavbarLink>
            <NavbarLink href="/">Terms of Service</NavbarLink>
            <NavbarLink href="/">Privacy Policy</NavbarLink>
            <NavbarLink href="/">Cookie Policy</NavbarLink>
            <NavbarLink href="/">Ads info</NavbarLink>
            <NavbarLink href="/">Blog</NavbarLink>
            <NavbarLink href="/">Status</NavbarLink>
            <NavbarLink href="/">Careers</NavbarLink>
            <NavbarLink href="/">Brand Resources</NavbarLink>
            <NavbarLink href="/">Advertising</NavbarLink>
            <NavbarLink href="/">Marketing</NavbarLink>
            <NavbarLink href="/">Twitter for Business</NavbarLink>
            <NavbarLink href="/">Developers</NavbarLink>
            <NavbarLink href="/">Directory</NavbarLink>
            <NavbarLink href="/">Settings</NavbarLink>
            <NavbarCopyrightSpan>© 2021 Twitter, Inc.</NavbarCopyrightSpan>
          </NavbarContainer>
        </NavbarBlock>
      </MainWrapper>
    </>
  )
}

export default Home
