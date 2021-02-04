import { ComponentType, InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import * as S from './styles';

interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: ComponentType<IconBaseProps>;
}

export default function Field(props: FieldProps) {
  const { name, icon: Icon, ...rest } = props;

  return (
    <S.Field>
      {Icon && <Icon size={20} />}
      <input type="text" name={name} {...rest} />
    </S.Field>
  );
}

Field.defaultProps = {
  icon: null,
};
