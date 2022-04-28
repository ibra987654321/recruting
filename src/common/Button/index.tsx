import { StyledButton } from "./styles";
import { ButtonProps } from "../types";

export const Button = ({
  color,
  fixedWidth,
  children,
  onClick,
}: ButtonProps) => (
  <StyledButton type="submit" color={color} fixedWidth={fixedWidth} onClick={onClick}>
    {children}
  </StyledButton>
);
