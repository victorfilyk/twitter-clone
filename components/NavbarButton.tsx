import Image from "next/image"
import styled from "styled-components"

const ButtonLinkWrapper = styled.a`
  height: auto;
`

const ButtonInnerBlock = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  border-radius: 24px;
  color: #000;
  :hover {
    background-color: #dbf8fd;
    color: #1da1f2;
    > div {
      filter: invert(51%) sepia(92%) saturate(2334%) hue-rotate(176deg)
        brightness(100%) contrast(90%);
    }
  }
`

const ButtonLabel = styled.span`
  margin-left: 20px;
  margin-right: 16px;
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
`

interface NavbarButtonProps {
  label: string
  src: string
}

const NavbarButton: React.FC<NavbarButtonProps> = ({ label, src }) => {
  return (
    <ButtonLinkWrapper href="">
      <ButtonInnerBlock>
        <Image
          src={`/images/navbar-icons/${src}`}
          width="26"
          height="26"
          draggable={false}
        ></Image>
        <ButtonLabel>{label}</ButtonLabel>
      </ButtonInnerBlock>
    </ButtonLinkWrapper>
  )
}

export default NavbarButton
