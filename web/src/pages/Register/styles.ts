import styled, { css } from 'styled-components';

import { Field } from '../../components/Form/Field/styles';
import { Textarea } from '../../components/Form/Textarea/styles';
import { Button } from '../../components/Button/styles';

export const Container = styled.main`
  ${({ theme }) => css`
    max-width: 60rem;
    margin: 0 auto;
    padding: ${theme.spacings.xxlarge} 0;
    display: flex;
    flex-direction: column;

    > a {
      font-size: 1.8rem;
      color: ${theme.colors.primary};
      display: flex;
      align-items: center;

      svg {
        margin-right: ${theme.spacings.xsmall};
      }
    }

    h1 {
      font-size: 3.6rem;
      margin: ${theme.spacings.medium} 0;
    }

    form {
      width: 100%;
      display: flex;
      flex-direction: column;

      ${Field}, ${Textarea} {
        margin-bottom: ${theme.spacings.small};
      }

      ${Button} {
        align-self: flex-end;
        margin-top: ${theme.spacings.xsmall};
      }
    }
  `}
`;
