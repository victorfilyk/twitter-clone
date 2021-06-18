import { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import React from "react"
import styled, { css } from "styled-components"
import TwitterLogoSVG from "../components/svg/TwitterLogo"
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
  margin-bottom: ${(props) => props.btnType === "signup" ? "20px" : "0"};
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

const NavbarBlock = styled.div`
  margin-top: auto;
`

const AuthBlock = styled.div`
  order: 2;
  height: 100%;
  width: 45vw;
  padding: 180px 0 0 40px;
`

const StyledSmallTwitterLogo = styled(Image)`
  filter: invert(52%) sepia(73%) saturate(1754%) hue-rotate(175deg)
    brightness(95%) contrast(101%);
`

const BigHeader = styled.h2`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif;
  font-weight: 700;
  font-size: 64px;
  line-height: 84px;
`

const SmallHeader = styled.span`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif;
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
        {/* <NavbarBlock>
          <ul>
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/">Help Center</Link>
            </li>
            <li>
              <Link href="/">Terms of Service</Link>
            </li>
            <li>
              <Link href="/">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/">Cookie Policy</Link>
            </li>
            <li>
              <Link href="/">Ads info</Link>
            </li>
            <li>
              <Link href="/">Blog</Link>
            </li>
            <li>
              <Link href="/">Status</Link>
            </li>
            <li>
              <Link href="/">Careers</Link>
            </li>
            <li>
              <Link href="/">Brand Resources</Link>
            </li>
            <li>
              <Link href="/">Advertising</Link>
            </li>
            <li>
              <Link href="/">Marketing</Link>
            </li>
            <li>
              <Link href="/">Twitter for Business</Link>
            </li>
            <li>
              <Link href="/">Developers</Link>
            </li>
            <li>
              <Link href="/">Directory</Link>
            </li>
            <li>
              <Link href="/">Settings</Link>
            </li>
          </ul>
          <span>© 2021 Twitter, Inc.</span>
        </NavbarBlock> */}
      </MainWrapper>
    </>
  )
}

export default Home
