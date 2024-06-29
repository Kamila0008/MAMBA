npm install react-router-dom @mui/material @emotion/react @emotion/styled google-fonts react-gradient-text

import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { GoogleFonts } from 'google-fonts';
import GradientText from 'react-gradient-text';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { keyframes } from '@emotion/react';
import { css } from '@emotion/react';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const moveUp = keyframes`
  from { transform: translateY(140px); }
  to { transform: translateY(0); }
`;

const scaleUp = keyframes`
  from { transform: scale(0.9); }
  to { transform: scale(1); }
`;

const tilt = keyframes`
  from { transform: rotate(-20deg); }
  to { transform: rotate(0); }
`;

const animationStyle = css`
  animation: ${fadeIn} 300ms ease-in-out, ${moveUp} 300ms ease-in-out, ${scaleUp} 300ms ease-in-out, ${tilt} 300ms ease-in-out;
`;

const OkayWidget = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  useEffect(() => {
    history.push('/FORM');
  }, [history]);

  const handleLogin = () => {
    history.push('/FORM');
  };

  return (
    <Box onClick={() => emailInputRef.current.blur()}>
      <Container maxWidth="sm" sx={{ textAlign: 'center', mt: 5 }}>
        <Typography variant="h1" component="div" sx={{ fontFamily: 'Outfit', color: '#237C70', fontSize: 78, fontWeight: 800 }}>
          <GradientText colors={['#FF6D6D', '#237C70']} gradientDirection="ttb">
            MAMBA
          </GradientText>
        </Typography>
        <Box sx={{ mt: 5, p: 4, bgcolor: 'rgba(77, 110, 122, 0.77)', boxShadow: 4, borderRadius: 2, textAlign: 'center' }} css={animationStyle}>
          <Typography variant="h4" sx={{ fontFamily: 'Plus Jakarta Sans', color: '#F5F5F5', fontWeight: 800 }}>
            Welcome!
          </Typography>
          <Typography sx={{ mt: 2, color: '#070404' }}>
            Heal, Grow, Thrive with us...
          </Typography>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            sx={{ mt: 3, mb: 2 }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            inputRef={emailInputRef}
            autoComplete="email"
          />
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            type={passwordVisible ? 'text' : 'password'}
            sx={{ mb: 2 }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            inputRef={passwordInputRef}
            autoComplete="current-password"
            InputProps={{
              endAdornment: (
                <Button onClick={() => setPasswordVisible(!passwordVisible)}>
                  {passwordVisible ? 'Hide' : 'Show'}
                </Button>
              ),
            }}
          />
          <Button variant="contained" color="primary" fullWidth sx={{ mb: 2 }} onClick={handleLogin}>
            Login
          </Button>
          <Typography>
            Don't have an account? <Button color="secondary" onClick={() => history.push('/SIGNUP')}>Sign Up here</Button>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default OkayWidget;
