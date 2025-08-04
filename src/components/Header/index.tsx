import { BackButton, BackIcon, HeaderContainer, ScreenName } from "./styles";

interface Props {
  name: string;
  backButton?: boolean;
}

export function Header({ name, backButton = false }: Props) {
  return (
    <HeaderContainer>
      {
        backButton && 
        <BackButton>
          <BackIcon />
        </BackButton>
      }
      

      <ScreenName>{name}</ScreenName>
    </HeaderContainer>
  )
}