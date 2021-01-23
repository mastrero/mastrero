import * as React from 'react';
import { Box, Input as In, InputGroup, InputRightElement, InputLeftElement, Icon } from '@chakra-ui/react';
import { Input_Props } from '@types';

const Input = ({
  placeholder = '',
  size = 'md',
  variant = 'outline',
  borderRadius = '0px',
  type = 'text',
  isRequired = true,
  icon,
  name,
  value = '',
  update = () => {},
  id,
}: Input_Props): JSX.Element => {
  return (
    <InputGroup my="5px" id={id}>
      {icon && <InputLeftElement children={<Icon as={icon} />} />}
      <In
        name={name}
        value={value}
        onChange={({ target: { name, value } }): void => update(name, value)}
        type={type}
        placeholder={placeholder}
        size={size}
        variant={variant}
        borderRadius={borderRadius}
        isRequired={isRequired}
      />
      {isRequired && (
        <InputRightElement
          children={
            <Box as="span" title="Field is Required" cursor="pointer">
              *
            </Box>
          }
        />
      )}
    </InputGroup>
  );
};

export default Input;
