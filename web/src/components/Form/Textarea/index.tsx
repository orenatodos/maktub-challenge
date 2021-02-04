import { TextareaHTMLAttributes } from 'react';

import * as S from './styles';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
}

export default function Field(props: TextareaProps) {
  const { name, ...rest } = props;

  return <S.Textarea name={name} {...rest} />;
}
