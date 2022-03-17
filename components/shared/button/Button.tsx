import styled from "styled-components";

interface Props {
  value: string;
  color?: string;
  borderColor?: string;
  backgroundColor?: string;
  onClick(): void;
}

export default function Button({
  value,
  color = "#000",
  borderColor,
  backgroundColor,
  onClick,
}: Props) {
  return (
    <ButtonStyle
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
