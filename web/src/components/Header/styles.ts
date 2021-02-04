import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { Button } from '../Button/styles';

export const Header = styled.header`
  ${({ theme }) => css`
    padding: ${theme.spacings.large} 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
      font: ${theme.font.bold} 3.6rem 'Ubuntu', sans-serif;
      max-width: 14.4rem;
      line-height: 1;
      letter-spacing: -0.2rem;
      color: ${theme.colors.primary};
    }

    > div {
      display: flex;
      align-items: center;
      gap: ${theme.spacings.small};

      ${media.lessThan('small')`
        ${Button}{
          position: fixed;
          bottom: 0;
          width: 100%;
          left: 0;
          border-radius: 0;
        }
      `}

      .logout {
        height: 5.6rem;
        display: flex;
        align-items: center;
        color: ${theme.colors.primary};
        border: 0.2rem solid ${theme.colors.primary};
        border-radius: ${theme.radius.default};
        padding: ${theme.spacings.small};
        transition: background ${theme.transitions.default};

        &:hover {
          color: ${theme.colors.white};
          background: ${theme.colors.primary};
        }
      }
    }
  `}
`;
