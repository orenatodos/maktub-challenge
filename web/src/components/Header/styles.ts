import styled, { css } from 'styled-components';

export const Header = styled.header`
  ${({ theme }) => css`
    padding: ${theme.spacings.large} 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > a {
      font: ${theme.font.bold} 3.6rem 'Ubuntu', sans-serif;
      max-width: 14.4rem;
      line-height: 1;
      letter-spacing: -0.2rem;
      color: ${theme.colors.primary};
    }
  `}
`;
