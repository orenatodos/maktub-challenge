import styled, { css } from 'styled-components';

import { Field } from '../../components/Form/Field/styles';
import { Textarea } from '../../components/Form/Textarea/styles';
import { Button } from '../../components/Button/styles';

export const Container = styled.main`
  ${({ theme }) => css`
    max-width: 60rem;
    margin: 0 auto;
    padding: ${theme.spacings.medium} 0;

    h1 {
      font-size: 3.6rem;
      text-align: center;
      margin-bottom: ${theme.spacings.medium};
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
