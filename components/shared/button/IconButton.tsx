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
    if (size === "small") return { iconSize: 10, bgSize: 325 };
    if (size === "medium") return { iconSize: 20, bgSize: 325 };
    return { iconSize: 40, bgSize: 617 };
  };

  const getIconPosition = (): string => {
    if (iconType === "clear") return "5% 65%";
    if (iconType === "minus") return "86% 4%";
    return "";
  };

  return (
    <ButtonStyle
      onClick={onClick}
      iconType={getIconPosition()}
      icon={iconImg()}
    >
      {iconType}
    </ButtonStyle>
  );
}

const ButtonStyle = styled.button<StyleProps>`
  width: ${({ icon }) => `${icon.iconSize}px`};
  height: ${({ icon }) => `${icon.iconSize}px`};
  font-size: 0;
  background-repeat: no-repeat;
  background-image: url("icons.jpeg");
  background-position: ${({ iconType }) => iconType};
  background-size: ${({ icon }) => `${icon.bgSize}px`};
`;
