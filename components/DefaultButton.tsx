import styled from "styled-components"

interface DefaultButtonProps {
  btnType: "signup" | "login"
}

const DefaultButton = styled.button<DefaultButtonProps>`
  cursor: pointer;
  border-radius: 30px;
  font-size: 15px;
  font-weight: 700;
  width: 365px;
  height: 45px;
  :hover {
    background-color: ${props =>
      props.btnType === "signup"
        ? "#0687d8"
        : props.btnType === "login"
        ? "#e2f4f8"
        : ""};
    animation: 0.2s linear;
  }
  background-color: ${props =>
    props.btnType === "signup"
      ? "#1da1f2"
      : props.btnType === "login"
      ? "#fff"
      : ""};
  color: ${props =>
    props.btnType === "signup"
      ? "#fff"
      : props.btnType === "login"
      ? "#1da1f2"
      : ""};
  border: ${props =>
    props.btnType === "signup"
      ? "none"
      : props.btnType === "login"
      ? "1px solid #1da1f2"
      : ""};
`

export default DefaultButton
