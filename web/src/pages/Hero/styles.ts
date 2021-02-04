import styled, { css } from 'styled-components';

export const Hero = styled.main`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxlarge} 0;
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xxlarge};

    img {
      width: 40rem;
      height: 40rem;
      border-radius: 50%;
      object-fit: cover;
      border: 0.8rem solid ${theme.colors.text};
      padding: ${theme.spacings.xsmall};
    }

    > div {
      max-width: 60rem;

      > a {
        font-size: 1.8rem;
        color: ${theme.colors.primary};
        display: flex;
        align-items: center;

        svg {
          margin-right: ${theme.spacings.xsmall};
        }
      }

      strong {
        font-size: 5.6rem;
        display: block;
        position: relative;
        margin-top: ${theme.spacings.medium};

        &::after {
          content: '';
          height: 0.8rem;
          width: 15%;
          background: ${theme.colors.text};
          position: absolute;
          bottom: -${theme.spacings.xxsmall};
          left: 0;
        }
      }

      p {
        font-size: 1.8rem;
        margin-top: ${theme.spacings.large};
      }
    }
  `}
`;
