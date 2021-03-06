import styled, { css, keyframes } from 'styled-components';
import media from 'styled-media-query';

import { Field } from '../../components/Form/Field/styles';
import { Button } from '../../components/Button/styles';

export const Illustration = styled.div`
  ${({ theme }) => css`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-right: ${theme.spacings.medium};

    img {
      width: 60rem;
    }

    ${media.lessThan('medium')`
      display: none;
    `}
  `}
`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px)
  }
  to {
    opacity: 1;
    transform: translateX(0)
  }
`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  justify-content: space-between;

  ${media.lessThan('medium')`
    justify-content: center;
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    width: 40rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    animation: ${appearFromRight} 1s;

    ${media.lessThan('medium')`
      text-align: center;
      align-items: center;
    `}

    h1 {
      font: ${theme.font.bold} 5.6rem 'Ubuntu', sans-serif;
      line-height: 5rem;
      color: ${theme.colors.primary};
      margin-bottom: ${theme.spacings.xxlarge};
    }

    form {
      width: 100%;
      display: flex;
      flex-direction: column;

      strong {
        display: block;
        font-size: 3.2rem;
        margin-bottom: ${theme.spacings.medium};
      }

      ${Field} {
        margin-bottom: ${theme.spacings.xsmall};
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
