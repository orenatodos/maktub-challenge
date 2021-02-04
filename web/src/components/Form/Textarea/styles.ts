import styled, { css } from 'styled-components';

export const Textarea = styled.textarea`
  ${({ theme }) => css`
    width: 100%;
    height: 14.4rem;
    background: ${theme.colors.white};
    border: 0.1rem solid ${theme.colors.lighterGray};
    border-radius: ${theme.radius.large};
    color: ${theme.colors.text};
    font-size: 1.8rem;
    padding: ${theme.spacings.small};
    resize: none;

    &::placeholder {
      color: #a8a8b3;
    }
  `}
`;
