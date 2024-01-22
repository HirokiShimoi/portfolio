import React from 'react';
import { TextField, Button, Typography, Container, Grid } from '@mui/material';
import useOnScreen from '../customhook/useOnScreen';

function Contact() {
  const [ref, isVisible] = useOnScreen({ threshold: 0.5});
  return (
    <Container>
      <div ref={ref} style={{animation: isVisible ? 'fadeIn 3000ms ease-in-out' : 'none',}}>
      <Typography variant="h3" 
                sx={{
                marginTop: '120px',
                marginBottom: '120px',
                letterSpacing: '0.3em', // ここで文字間隔を調整
                '@keyframes fadeIn': {
                    '0%': {
                        opacity: 0,
                        transform: 'translateY(20px)'
                    },
                    '100%': {
                        opacity: 1,
                        transform: 'translateY(0)'
                    }
                }
                }}>
        Contact 
      </Typography>
      </div>
      <form noValidate autoComplete="off">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              id="name"
              label="Name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              id="email"
              label="Your Email"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              id="subject"
              label="Subject"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              id="message"
              label="Message"
              multiline
              rows={4}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Send
            </Button>
          </Grid>
        </Grid>
      </form>

    </Container>
  );
}

export default Contact;
