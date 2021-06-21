import styled from "styled-components"

interface AuthorizationButtonProps {
  btnType: "signup" | "login"
  width: string
  height: string
}

const AuthorizationButton = styled.button<AuthorizationButtonProps>`
  cursor: pointer;
  border-radius: 30px;
  font-size: 15px;
  font-weight: 700;
  width: ${props => props.width};
  height: ${props => props.height};
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

export default AuthorizationButton
