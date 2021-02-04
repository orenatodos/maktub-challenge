import styled, { css } from 'styled-components';

import { shade } from 'polished';

export const Button = styled.button`
  ${({ theme }) => css`
    height: 5.6rem;
    font-size: 1.8rem;
    font-weight: ${theme.font.semibold};
    text-transform: uppercase;
    color: ${theme.colors.white};
    background: ${theme.colors.primary};
    border-radius: ${theme.radius.large};
    transition: background ${theme.transitions.default};
    padding: 0 ${theme.spacings.large};

    &:hover {
      background: ${shade(0.2, theme.colors.primary)};
    }
  `}
`;
