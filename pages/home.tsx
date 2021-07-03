import { NextPage } from "next"
import Image from "next/image"
import React from "react"
import styled from "styled-components"
import DefaultButton from "../components/DefaultButton"
import NavbarButton from "../components/NavbarButton"

const Container = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  display: flex;
`

const NavBlock = styled.nav`
  flex: 22%;
`

const MainBlock = styled.main`
  flex: 48%;
`

const SearchBlock = styled.section`
  flex: 30%;
`

const TwitterLogoHomeRef = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 50px;
  :hover {
    background-color: #dbf8fd;
  }
`

const HomePage: NextPage<{}> = () => {
  return (
    <Container>
      <NavBlock>
        <TwitterLogoHomeRef href="/home">
          <Image
            src="/images/twitter-logo.svg"
            width="28"
            height="28"
            draggable={false}
            css={`
              filter: invert(52%) sepia(73%) saturate(1754%) hue-rotate(175deg)
                brightness(95%) contrast(101%);
            `}
          ></Image>
        </TwitterLogoHomeRef>
        <ul
          css={`
            display: flex;
            flex-direction: column;
          `}
        >
          <NavbarButton label="Home" src="home-icon.svg"></NavbarButton>
          <NavbarButton label="Explore" src="explore-icon.png"></NavbarButton>
          <NavbarButton
            label="Notifications"
            src="notifications-icon.png"
          ></NavbarButton>
          <NavbarButton label="Messages" src="messages-icon.png"></NavbarButton>
          <NavbarButton
            label="Bookmarks"
            src="bookmarks-icon.svg"
          ></NavbarButton>
          <NavbarButton label="Lists" src="lists-icon.png"></NavbarButton>
          <NavbarButton label="Profile" src="profile-icon.png"></NavbarButton>
          <NavbarButton label="More" src="view-more-icon.png"></NavbarButton>
        </ul>
        <DefaultButton btnType="signup">Tweet</DefaultButton>
        <div>
          <img src="" alt="" />
          <div>
            <span></span>
            <span></span>
          </div>
          <img src="" alt="" />
        </div>
      </NavBlock>
      <MainBlock></MainBlock>
      <SearchBlock></SearchBlock>
    </Container>
  )
}

export default HomePage
