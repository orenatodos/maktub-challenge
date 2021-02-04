import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import * as S from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Field(props: PropsWithChildren<ButtonProps>) {
  const { children, ...rest } = props;

  return (
    <S.Button type="button" {...rest}>
      {children}
    </S.Button>
  );
}
