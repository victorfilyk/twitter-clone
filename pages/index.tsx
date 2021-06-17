import { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import React from "react"
import styled, { css } from "styled-components"
import TwitterLogoSVG from "../components/svg/TwitterLogo"
import AuthPageBackgroundPNG from "../public/images/auth-page-background.png"

interface AuthButtonProps {
  readonly btnType: "signup" | "login"
}

const AuthButton = styled.button<AuthButtonProps>`
  cursor: pointer;
  border-radius: 30px;
  width: 315px;
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
`

const MainHeader = styled.h2`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif;
  font-size: 64px;
  line-height: 84px;
  font-weight: 700;
`

const SubHeader = styled.span`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif;
  font-size: 31px;
  line-height: 36px;
  font-weight: 700;
`

const Wrapper = styled.div`
  width: 100%;
`


const Home: NextPage<{}> = () => {
  return (
    <main>
      <div>
        <div>
          <Image src={AuthPageBackgroundPNG}></Image>
          <TwitterLogoSVG />
        </div>
        <div>
          <TwitterLogoSVG />
          <h2>Happening now</h2>
          <h4>Join Twitter today.</h4>
          <AuthButton btnType="signup">Sign up</AuthButton>
          <AuthButton btnType="login">Log in</AuthButton>
        </div>
      </div>
      <div>
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
      </div>
    </main>
  )
}

export default Home
