import { SelectHTMLAttributes } from 'react';
import * as S from './styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: Array<{
    value: string;
    label: string;
  }>;
}

export default function Select(props: SelectProps) {
  const { options, ...rest } = props;

  return (
    <S.Select {...rest}>
      <option value="" disabled hidden>
        Selecione uma opção
      </option>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </S.Select>
  );
}
