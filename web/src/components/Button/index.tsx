import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import * as S from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Field({ children }: PropsWithChildren<ButtonProps>) {
  return <S.Button type="button">{children}</S.Button>;
}
