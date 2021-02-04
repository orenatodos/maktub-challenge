import styled, { css } from 'styled-components';

import { Field } from '../../components/Form/Field/styles';
import { Button } from '../../components/Button/styles';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
`;

export const Content = styled.div`
  ${({ theme }) => css`
    width: 40rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      font: ${theme.font.bold} 5.6rem 'Ubuntu', sans-serif;
      line-height: 5rem;
      color: ${theme.colors.primary};
      margin-bottom: ${theme.spacings.xxlarge};
    }

    form {
      display: flex;
      flex-direction: column;

      strong {
        display: block;
        font-size: 3.2rem;
        margin-bottom: ${theme.spacings.medium};
      }

      ${Field} + ${Field} {
        margin-top: ${theme.spacings.xsmall};
      }

      ${Button} {
        margin-top: ${theme.spacings.small};
      }
    }

    > a {
      display: flex;
      align-items: center;
      margin-top: ${theme.spacings.large};
      font-weight: ${theme.font.semibold};
      color: ${theme.colors.text};

      svg {
        margin-right: ${theme.spacings.small};
        color: ${theme.colors.primary};
      }
    }
  `}
`;

export const Illustration = styled.div`
  ${({ theme }) => css`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-left: ${theme.spacings.medium};

    img {
      width: 60rem;
    }
  `}
`;
