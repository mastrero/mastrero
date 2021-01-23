import * as React from 'react';
import { Box, Textarea, InputGroup, InputRightElement, InputLeftElement, Icon } from '@chakra-ui/react';
import { Input_Props } from '@types';

const TextArea = ({
  placeholder = '',
  size = 'md',
  variant = 'outline',
  borderRadius = '0px',
  type = 'text',
  isRequired = true,
  resize = 'vertical',
  icon,
  name,
  value = '',
  update = () => {},
  id,
}: Input_Props): JSX.Element => {
  return (
    <InputGroup my="5px" id={id}>
      {icon && <InputLeftElement children={<Icon as={icon} />} />}
      <Textarea
        name={name}
        value={value}
        onChange={({ target: { name, value } }): void => update(name, value)}
        pl={icon ? '40px' : 0}
        type={type}
        placeholder={placeholder}
        resize={resize}
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

export default TextArea;
