import styled from "styled-components";

interface Props {
  iconType: string;
  size?: string;
  onClick(): void;
}

interface IconProps {
  iconSize: number;
  bgSize: number;
}

interface StyleProps {
  iconType: string;
  icon: IconProps;
}
export default function IconButton({
  iconType,
  size = "medium",
  onClick,
}: Props) {
  const iconImg = (): IconProps => {
    if (size === "small") return { iconSize: 15, bgSize: 325 };
    if (size === "medium") return { iconSize: 22, bgSize: 325 };
    return { iconSize: 40, bgSize: 617 };
  };

  return (
    <ButtonStyle onClick={onClick} iconType={iconType} icon={iconImg()}>
      {iconType}
    </ButtonStyle>
  );
}

const ButtonStyle = styled.button<StyleProps>`
  width: ${({ icon }) => `${icon.iconSize}px`};
  height: ${({ icon }) => `${icon.iconSize}px`};
  font-size: 0;
  background-repeat: no-repeat;
  background-image: ${({ iconType }) => {
    if (iconType === "clear") return "url('images/btn_close.png')";
    if (iconType === "minus") return "url('images/btn_minus.png')";
  }};
  background-position: center;
  background-size: cover;
  vertical-align: middle;
`;
