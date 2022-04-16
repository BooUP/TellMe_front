import styled from "styled-components";

interface Props {
  type?: "button" | "submit" | "reset";
  value: string;
  color?: string;
  borderColor?: string;
  backgroundColor?: string;
  onClick?(): void;
}

export default function Button({
  type = "button",
  value,
  color = "#000",
  borderColor,
  backgroundColor,
  onClick,
}: Props) {
  return (
    <ButtonStyle
      type={type}
      onClick={onClick}
      color={color}
      borderColor={borderColor}
      backgroundColor={backgroundColor}
    >
      {value}
    </ButtonStyle>
  );
}

interface StyleProps {
  type: string;
  color: string;
  borderColor?: string;
  backgroundColor?: string;
}

const ButtonStyle = styled.button<StyleProps>`
  width: 120px;
  height: 38px;
  border-radius: 25px;
  border: ${(props) =>
    props.borderColor
      ? `1px solid ${props.theme.colors[props.borderColor]}`
      : "none"};
  font-size: 14px;
  color: ${(props) => props.theme.colors[props.color]};
  font-weight: 700;
  background-color: ${(props) =>
    props.backgroundColor
      ? props.theme.colors[props.backgroundColor]
      : "transparent"};
`;
