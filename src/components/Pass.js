import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';



import InputAdornment from '@mui/material/InputAdornment';



import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function Pass(props) {
  const [values, setValues] = React.useState({
    password: '',

    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  // const [pass, setPass] = useState(props)

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <div>
      <Input
            id="standard-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={props.amount}
            key={props.id}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
      </div>
    </Box>
  );
}
