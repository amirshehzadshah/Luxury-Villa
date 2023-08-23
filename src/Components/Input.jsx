import { Box, TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useFormik } from 'formik';
import React from 'react'
import { orderSchema } from '../Schemas';
import Alert from './Alert';
import { Email } from '@mui/icons-material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#e5bc00',
    }
  }
});

const initialValues = {
  emailAddress: ""
};

const Input = () => {

  const { values, errors, touched, handleBlur, handleChange, handleSubmit, resetForm } = useFormik({
    initialValues,
    validationSchema: orderSchema,
    onSubmit: (values, action) => {
      handleClickOpen();
    }
  })

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    console.log("3 ClickOpen" + open)
    setOpen(true);
    console.log("4 ClickOpen" + open)
  };

  const handleClose = () => {
    resetForm();
    setOpen(false);
  };


  return (
    <form onSubmit={handleSubmit} className='text-white'>
      <div className="relative mt-2 rounded-md shadow-sm">
        <div>
          <ThemeProvider theme={theme}>
            <Box component="form" autoComplete="off">
              <TextField
                id="emailAddress"
                placeholder="Enter Your Email ID"
                label={errors.emailAddress && touched.emailAddress ? (<p className="form-error">{errors.emailAddress}</p>) : null}
                variant="outlined"
                type="emailAddress"
                value={values.emailAddress}
                onChange={handleChange}
                onBlur={handleBlur}
                color= 'primary'
                className='block w-full bg-white rounded-md border-0 py-1.5 pl-7 pr-20 text-white ring-1 ring-inset ring-white placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
            </Box>
          </ThemeProvider>
          <button className="absolute inset-y-0 right-2 flex items-center text-yellow" type='submit'><Email /></button>
          <Alert open={open} handleClose={handleClose} />
        </div>
      </div>
    </form>
  )
}

export default Input