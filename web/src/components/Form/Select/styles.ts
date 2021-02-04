import styled, { css } from 'styled-components';

export const Select = styled.select`
  ${({ theme }) => css`
    height: 5.6rem;
    background: ${theme.colors.white};
    border: 0.1rem solid ${theme.colors.lighterGray};
    border-radius: ${theme.radius.large};
    color: ${theme.colors.lightGray};
    padding: 0 ${theme.spacings.small};
    font-size: 1.8rem;
    appearance: none;

    &::placeholder {
      color: #a8a8b3;
    }
  `}
`;
