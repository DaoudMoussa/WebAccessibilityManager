import { styled, TextField, TextFieldProps } from '@mui/material';

const InputComponent = styled(TextField)({});

const Input = (props: TextFieldProps) => <InputComponent {...props} />;

export default Input;
