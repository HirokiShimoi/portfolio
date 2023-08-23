import React from 'react';
import { TextField, Button, Typography, Container, Grid } from '@mui/material';

function Contact() {
  return (
    <Container>
      <Typography variant="h3" style={{ margin: '100px 0' }}>
        Contact 
      </Typography>
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
