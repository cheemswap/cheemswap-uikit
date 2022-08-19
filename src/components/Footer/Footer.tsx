import React from "react";
import { FullLogo } from "../../widgets/Navbar/icons";
import NetworkButton from "../../widgets/Navbar/NetworkButton";
import { Skeleton } from "../Skeleton";
import {
  ApeSwapRoundIcon,
  // DiscordIcon,
  // InstagramIcon,
 // MediumIcon,
  // RedditIcon,
  TelegramIcon,
  TwitterIcon,
} from "../Svg";
import { Text } from "../Text";
import { FooterProps } from "./types";
import { supportLinks, engageLinks, learnLinks } from "./config";
import {
  FlexContainer,
  Container,
  PeakingMonkey,
  PriceLink,
  IconFlex,
  LinkskWrapper,
  LinkColumnFlex,
  LogoFlex,
  ButtonFlex,
  LinkText,
  StyledLink,
  BuyBananaButton,
  BottomRowContainer,
  AllRightsReserved,
} from "./styles";
import useMatchBreakpoints from "../../hooks/useMatchBreakpoints";
import lightTheme from "../../theme/light";
import darkTheme from "../../theme/dark";
import { ThemeSwitcher } from "../ThemeSwitcher";
import MobileLinks from "./MobileLinks";

const Footer: React.FC<FooterProps> = ({ chainId, toggleTheme, isDark, bananaPriceUsd, switchNetwork }) => {
  const iconFillColor = isDark ? darkTheme.colors.text : lightTheme.colors.text;
  const { isXxl, isLg, isXl } = useMatchBreakpoints();
  const isMobile = isXxl === false && isXl === false && isLg === false;
  return (
    <Container>
      <FlexContainer>
        <LogoFlex>
          <FullLogo width="240px" mb="20px" />
          <Text color="white">
            {`CheemSwap is a DeFi Hub on Doge Chain focused on offering an accessible, transparent and secure
            experience for everyone.`}
          </Text>
          <ButtonFlex>
            <ThemeSwitcher toggleTheme={toggleTheme} isDark={isDark} />
            <div style={{ margin: "0px 12.5px" }} />
            <NetworkButton chainId={chainId} switchNetwork={switchNetwork} />
          </ButtonFlex>
          <IconFlex>
            <StyledLink href="https://twitter.com/cheemsswapdoge" target="_blank" rel="noopener noreferrer">
              <TwitterIcon color="white3" fill={iconFillColor} />
            </StyledLink>
            <StyledLink href="https://t.me/cheemswap" target="_blank" rel="noopener noreferrer">
              <TelegramIcon color="white3" fill={iconFillColor} />
            </StyledLink>
            {/* <StyledLink href="https://www.reddit.com/r/Apeswap/" target="_blank" rel="noopener noreferrer">
              <RedditIcon color="white3" fill={iconFillColor} />
            </StyledLink>
            <StyledLink href="https://ape-swap.medium.com/" target="_blank" rel="noopener noreferrer">
              <MediumIcon color="white3" fill={iconFillColor} />
            </StyledLink>
            <StyledLink href="https://www.instagram.com/apeswap.finance/" target="_blank" rel="noopener noreferrer">
              <InstagramIcon color="white3" fill={iconFillColor} />
  </StyledLink> */}
          </IconFlex>
          <BottomRowContainer>
            <div>
              {bananaPriceUsd ? (
                <PriceLink
                  href="https://info.cheemswap.finance/token/0x1f87ED533c6c807B7D62Bbd9d973E0616f66c30e"
                  target="_blank"
                >
                  <ApeSwapRoundIcon width="34px" mr="8px" />
                  <Text color="white" fontSize="18px" fontWeight={600}>{`$${bananaPriceUsd.toFixed(3)}`}</Text>
                </PriceLink>
              ) : (
                <Skeleton width={90} height={35} />
              )}
            </div>
            <a href="https://cheemswap.finance/swap" target="_blank" rel="noopener noreferrer">
              <BuyBananaButton>BUY CHEEMS</BuyBananaButton>
            </a>
          </BottomRowContainer>
        </LogoFlex>
        {isMobile ? (
          <MobileLinks />
        ) : (
          <LinkskWrapper>
            <LinkColumnFlex style={{ width: "200px" }}>
              <Text color="rgba(255, 179, 0, 1)" fontSize="22px" bold>
                Support
              </Text>
              {supportLinks.map((link) => {
                return (
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    <LinkText>{link.label}</LinkText>
                  </a>
                );
              })}
            </LinkColumnFlex>
            <LinkColumnFlex style={{ width: "240px" }}>
              <Text color="rgba(255, 179, 0, 1)" fontSize="22px" bold>
                Engage
              </Text>
              {engageLinks.map((link) => {
                return (
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    <LinkText>{link.label}</LinkText>
                  </a>
                );
              })}
            </LinkColumnFlex>
            <LinkColumnFlex style={{ width: "130px" }}>
              <Text color="rgba(255, 179, 0, 1)" fontSize="22px" bold>
                Learn
              </Text>
              {learnLinks.map((link) => {
                return (
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    <LinkText>{link.label}</LinkText>
                  </a>
                );
              })}
            </LinkColumnFlex>
          </LinkskWrapper>
        )}
      </FlexContainer>
      <PeakingMonkey />
      <AllRightsReserved>©2022 All rights reserved</AllRightsReserved>
    </Container>
  );
};

export default Footer;
