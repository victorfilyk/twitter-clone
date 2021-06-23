import { NextPage } from "next"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import Meta from "../components/Meta"
import AuthPageBackgroundPNG from "../public/images/auth-page-background.png"
import {
  AuthBlock,
  AuthButtonsWrapper,
  BigHeader,
  BigTwitterLogoWrapper,
  ImagesBlock,
  MainBlock,
  MainWrapper,
  NavbarBlock,
  NavbarContainer,
  NavbarCopyrightSpan,
  NavbarLink,
  SmallHeader,
  AuthorizationButton,
  AuthBlockContainer,
  AuthPageBackgroundImageWrapper
} from "../styles/home-page.styles"

const Home: NextPage<{}> = () => {
  return (
    <>
      <Meta></Meta>
      <MainWrapper>
        <MainBlock>
          <AuthBlock>
            <AuthBlockContainer>
              <Image
                src="/images/twitter-logo.svg"
                width="45"
                height="45"
                draggable={false}
                css={`
                  filter: invert(52%) sepia(73%) saturate(1754%)
                    hue-rotate(175deg) brightness(95%) contrast(101%);
                `}
              ></Image>
              <BigHeader>Happening now</BigHeader>
              <SmallHeader>Join Twitter today.</SmallHeader>
              <AuthButtonsWrapper>
                <AuthorizationButton
                  btnType="signup"
                  css={`
                    margin-bottom: 20px;
                  `}
                >
                  Sign up
                </AuthorizationButton>
                <AuthorizationButton btnType="login">
                  <Link href="/login">
                    <a>Log in</a>
                  </Link>
                </AuthorizationButton>
              </AuthButtonsWrapper>
            </AuthBlockContainer>
          </AuthBlock>
          <ImagesBlock>
            <AuthPageBackgroundImageWrapper>
              <Image
                src={AuthPageBackgroundPNG}
                layout="fill"
                objectFit="cover"
                draggable={false}
              ></Image>
            </AuthPageBackgroundImageWrapper>
            <BigTwitterLogoWrapper>
              <Image
                src="/images/twitter-logo.svg"
                width="360"
                height="360"
                draggable={false}
                css={`
                  filter: invert(100%) sepia(23%) saturate(2%)
                    hue-rotate(113deg) brightness(106%) contrast(101%);
                `}
              ></Image>
            </BigTwitterLogoWrapper>
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
