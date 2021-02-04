import styled, { css } from 'styled-components';

export const Field = styled.label`
  ${({ theme }) => css`
    height: 5.6rem;
    display: flex;
    align-items: center;
    background: ${theme.colors.white};
    border: 0.1rem solid ${theme.colors.lighterGray};
    border-radius: ${theme.radius.large};
    color: ${theme.colors.lightGray};

    input {
      width: 100%;
      height: 100%;
      flex: 1;
      padding: 0 ${theme.spacings.small};
      background: transparent;
      font-size: 1.8rem;
      color: ${theme.colors.text};

      &::placeholder {
        color: #a8a8b3;
      }
    }

    svg {
      margin-left: ${theme.spacings.small};
    }
  `}
`;
