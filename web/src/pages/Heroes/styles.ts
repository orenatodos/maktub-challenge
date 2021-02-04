import styled, { css } from 'styled-components';

import { Button } from '../../components/Button/styles';

export const Heroes = styled.main`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(27.2rem, 1fr));
    gap: ${theme.spacings.large};
    padding: ${theme.spacings.xlarge} 0;

    article {
      padding: ${theme.spacings.xsmall};
      border: 0.4rem solid ${theme.colors.primary};

      img {
        width: 100%;
        object-fit: cover;
      }

      > div {
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

        ${Button} {
          align-content: flex-end;
        }
      }
    }
  `}
`;
