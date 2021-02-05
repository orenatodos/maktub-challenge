import styled, { css } from 'styled-components';

export const Heroes = styled.main`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(27.2rem, 1fr));
    gap: ${theme.spacings.large};
    padding: ${theme.spacings.xxlarge} 0;

    article {
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        width: 30rem;
        height: 30rem;
        border-radius: 50%;
        object-fit: cover;
        padding: ${theme.spacings.xsmall};
        border: 0.4rem solid ${theme.colors.primary};
      }

      > div {
        width: 100%;
        padding: ${theme.spacings.small};
        display: flex;
        flex-direction: column;
        text-align: center;

        strong {
          font-size: 2.4rem;
        }

        p {
          margin: ${theme.spacings.small} 0;
        }
      }
    }
  `}
`;
