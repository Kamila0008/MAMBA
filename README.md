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
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { TextField, Button, Typography, Container } from '@material-ui/core';
import GradientText from 'react-gradient-text';
import { MaskedInput } from 'react-text-mask';

const FormWidget = () => {
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [description, setDescription] = useState('');
  const history = useHistory();

  useEffect(() => {
    // On page load action.
    history.push('/MAIN');
  }, [history]);

  const handleFullNameChange = (event) => setFullName(event.target.value);
  const handleAgeChange = (event) => setAge(event.target.value);
  const handlePhoneNumberChange = (event) => setPhoneNumber(event.target.value);
  const handleDateOfBirthChange = (event) => setDateOfBirth(event.target.value);
  const handleDescriptionChange = (event) => setDescription(event.target.value);

  useEffect(() => {
    return () => {
      // Cleanup if necessary
    };
  }, []);

  return (
    <div onClick={() => document.activeElement.blur()}>
      <Container
        maxWidth="sm"
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#f0f0f0' }}
      >
        <Typography variant="h2" gutterBottom>
          <GradientText gradient={['#237C70', '#00C9A7']} text="MAMBA" />
        </Typography>
        <Typography variant="h5" gutterBottom>
          Tell me about yourself
        </Typography>
        <form style={{ width: '100%', marginTop: '1em' }}>
          <TextField
            label="Full Name"
            value={fullName}
            onChange={handleFullNameChange}
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Age"
            value={age}
            onChange={handleAgeChange}
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <MaskedInput
            mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            render={(ref, props) => (
              <TextField
                {...props}
                inputRef={ref}
                fullWidth
                margin="normal"
                label="Phone Number"
                variant="outlined"
              />
            )}
          />
          <TextField
            label="Date of Birth"
            value={dateOfBirth}
            onChange={handleDateOfBirthChange}
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Description"
            value={description}
            onChange={handleDescriptionChange}
            fullWidth
            margin="normal"
            variant="outlined"
            multiline
            rows={4}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={() => alert('Form Submitted')}
            style={{ marginTop: '20px' }}
            fullWidth
          >
            Submit
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default FormWidget;
enabledBorder: OutlineInputBorder(
  borderSide: BorderSide(
    color: FlutterFlowTheme.of(context)
        .secondary,
    width: 2,
  ),
  borderRadius:
      BorderRadius.circular(12),
),
focusedBorder: OutlineInputBorder(
  borderSide: BorderSide(
    color: Color(0xFF6F61EF),
    width: 2,
  ),
  borderRadius:
      BorderRadius.circular(12),
),
errorBorder: OutlineInputBorder(
  borderSide: BorderSide(
    color: Color(0xFFFF5963),
    width: 2,
  ),
  borderRadius:
      BorderRadius.circular(12),
),
focusedErrorBorder: OutlineInputBorder(
  borderSide: BorderSide(
    color: Color(0xFFFF5963),
    width: 2,
  ),
  borderRadius:
      BorderRadius.circular(12),
),
filled: true,
fillColor: (_model.fullNameFocusNode
            ?.hasFocus ??
        false)
    ? Color(0x4D9489F5)
    : Colors.white,
contentPadding:
    EdgeInsetsDirectional.fromSTEB(
        16, 20, 16, 20),
),
style: FlutterFlowTheme.of(context)
  .bodyLarge
  .override(
    fontFamily: 'Outfit',
    letterSpacing: 0,
  ),
cursorColor: Color(0xFF6F61EF),
validator: _model
  .fullNameTextControllerValidator
  .asValidator(context),
),
TextFormField(
controller: _model.ageTextController,
focusNode: _model.ageFocusNode,
autofocus: true,
textCapitalization:
  TextCapitalization.words,
obscureText: false,
decoration: InputDecoration(
labelText: 'Age',
labelStyle: FlutterFlowTheme.of(context)
    .labelLarge
    .override(
      fontFamily: 'Outfit',
      color: Color(0xFF606A85),
      fontSize: 16,
      letterSpacing: 0,
      fontWeight: FontWeight.w500,
    ),
hintStyle: FlutterFlowTheme.of(context)
    .labelMedium
    .override(
      fontFamily: 'Outfit',
      color: Color(0xFF606A85),
      fontSize: 14,
      letterSpacing: 0,
      fontWeight: FontWeight.w500,
    ),
errorStyle: FlutterFlowTheme.of(context)
    .bodyMedium
    .override(
      fontFamily: 'Figtree',
      color: Color(0xFFFF5963),
      fontSize: 12,
      letterSpacing: 0,
      fontWeight: FontWeight.w600,
    ),
enabledBorder: OutlineInputBorder(
  borderSide: BorderSide(
    color: FlutterFlowTheme.of(context)
        .secondary,
    width: 2,
  ),
  borderRadius:
      BorderRadius.circular(12),
),
focusedBorder: OutlineInputBorder(
  borderSide: BorderSide(
    color: Color(0xFF6F61EF),
    width: 2,
  ),
  borderRadius:
      BorderRadius.circular(12),
),
errorBorder: OutlineInputBorder(
  borderSide: BorderSide(
    color: Color(0xFFFF5963),
    width: 2,
  ),
  borderRadius:
      BorderRadius.circular(12),
),
focusedErrorBorder: OutlineInputBorder(
  borderSide: BorderSide(
    color: Color(0xFFFF5963),
    width: 2,
  ),
  borderRadius:
      BorderRadius.circular(12),
),
filled: true,
fillColor:
    (_model.ageFocusNode?.hasFocus ??
            false)
        ? Color(0x4D9489F5)
        : Colors.white,
contentPadding:
    EdgeInsetsDirectional.fromSTEB(
        16, 20, 16, 20),
),
style: FlutterFlowTheme.of(context)
  .bodyLarge
  .override(
    fontFamily: 'Figtree',
    color: Color(0xFF15161E),
    fontSize: 16,
    letterSpacing: 0,
    fontWeight: FontWeight.w600,
  ),
cursorColor: Color(0xFF6F61EF),
validator: _model
  .ageTextControllerValidator
  .asValidator(context),
),
TextFormField(
controller:
  _model.phoneNumberTextController,
focusNode: _model.phoneNumberFocusNode,
autofocus: true,
textCapitalization:
  TextCapitalization.words,
obscureText: false,
decoration: InputDecoration(
labelText: 'Phone number',
labelStyle: FlutterFlowTheme.of(context)
    .labelLarge
    .override(
      fontFamily: 'Outfit',
      color: Color(0xFF606A85),
      fontSize: 16,
      letterSpacing: 0,
      fontWeight: FontWeight.w500,
    ),
hintStyle: FlutterFlowTheme.of(context)
    .labelMedium
    .override(
      fontFamily: 'Outfit',
      color: Color(0xFF606A85),
      fontSize: 14,
      letterSpacing: 0,
      fontWeight: FontWeight.w500,
    ),
errorStyle: FlutterFlowTheme.of(context)
    .bodyMedium
    .override(
      fontFamily: 'Figtree',
      color: Color(0xFFFF5963),
      fontSize: 12,
      letterSpacing: 0,
      fontWeight: FontWeight.w600,
    ),
enabledBorder: OutlineInputBorder(
  borderSide: BorderSide(
    color: FlutterFlowTheme.of(context)
        .secondary,
    width: 2,
  ),
  borderRadius:
      BorderRadius.circular(12),
),
focusedBorder: OutlineInputBorder(
  borderSide: BorderSide(
    color: Color(0xFF6F61EF),
    width: 2,
  ),
  borderRadius:
      BorderRadius.circular(12),
),
errorBorder: OutlineInputBorder(
  borderSide: BorderSide(
    color: Color(0xFFFF5963),
    width: 2,
  ),
  borderRadius:
      BorderRadius.circular(12),
),
focusedErrorBorder: OutlineInputBorder(
  borderSide: BorderSide(
    color: Color(0xFFFF5963),
    width: 2,
  ),
  borderRadius:
      BorderRadius.circular(12),
),
filled: true,
fillColor: (_model.phoneNumberFocusNode
            ?.hasFocus ??
        false)
    ? Color(0x4D9489F5)
    : Colors.white,
contentPadding:
    EdgeInsetsDirectional.fromSTEB(
        16, 20, 16, 20),
),
style: FlutterFlowTheme.of(context)
  .bodyLarge
  .override(
    fontFamily: 'Figtree',
    color: Color(0xFF15161E),
    fontSize: 16,
    letterSpacing: 0,
    fontWeight: FontWeight.w600,
  ),
cursorColor: Color(0xFF6F61EF),
validator: _model
  .phoneNumberTextControllerValidator
  .asValidator(context),
),
TextFormField(
controller:
  _model.dateOfBirthTextController,
focusNode: _model.dateOfBirthFocusNode,
autofocus: true,
textCapitalization:
  TextCapitalization.words,
obscureText: false,
decoration: InputDecoration(
labelText: 'Date of birth',
labelStyle: FlutterFlowTheme.of(context)
    .labelLarge
    .override(
      fontFamily: 'Outfit',
      color: Color(0xFF606A85),
      fontSize: 16,
      letterSpacing: 0,
      fontWeight: FontWeight.w500,
    ),
hintStyle: FlutterFlowTheme.of(context)
    .labelMedium
    .override(
      fontFamily: 'Outfit',
      color: Color(0xFF606A85),
      fontSize: 14,
      letterSpacing: 0,
      fontWeight: FontWeight.w500,
    ),
errorStyle: FlutterFlowTheme.of(context)
    .bodyMedium
    .override(
      fontFamily: 'Figtree',
      color: Color(0xFFFF5963),
      fontSize: 12,
      letterSpacing: 0,
      fontWeight: FontWeight.w600,
    ),
enabledBorder: OutlineInputBorder(
  borderSide: BorderSide(
    color: FlutterFlowTheme.of(context)
        .secondary,
    width: 2,
  ),
  borderRadius:
      BorderRadius.circular(12),
),
focusedBorder: OutlineInputBorder(
  borderSide: BorderSide(
    color: Color(0xFF6F61EF),
    width: 2,
  ),
  borderRadius:
      BorderRadius.circular(12),
),
errorBorder: OutlineInputBorder(
  borderSide: BorderSide(
    color: Color(0xFFFF5963),
    width: 2,
  ),
  borderRadius:
      BorderRadius.circular(12),
),
focusedErrorBorder: OutlineInputBorder(
  borderSide: BorderSide(
    color: Color(0xFFFF5963),
    width: 2,
  ),
  borderRadius:
      BorderRadius.circular(12),
),
filled: true,
fillColor: (_model.dateOfBirthFocusNode
            ?.hasFocus ??
        false)
    ? Color(0x4D9489F5)
    : Colors.white,
contentPadding:
    EdgeInsetsDirectional.fromSTEB(
        16, 20, 16, 20),
),
style: FlutterFlowTheme.of(context)
  .bodyLarge
  .override(
    fontFamily: 'Figtree',
    color: Color(0xFF15161E),
    fontSize: 16,
    letterSpacing: 0,
    fontWeight: FontWeight.w600,
  ),
cursorColor: Color(0xFF6F61EF),
validator: _model
  .dateOfBirthTextControllerValidator
  .asValidator(context),
inputFormatters: [_model.dateOfBirthMask],
),
Text(
'Gender',
style: FlutterFlowTheme.of(context)
  .labelMedium
  .override(
    fontFamily: 'Outfit',
    color: Color(0xFF606A85),
    fontSize: 14,
    letterSpacing: 0,
    fontWeight: FontWeight.w500,
  ),
),
FlutterFlowChoiceChips(
options: [
ChipData('Female'),
ChipData('Male'),
ChipData('Other')
],
onChanged: (val) => setState(() => _model
  .choiceChipsValue = val?.firstOrNull),
selectedChipStyle: ChipStyle(
backgroundColor:
    FlutterFlowTheme.of(context)
        .secondary,
textStyle: FlutterFlowTheme.of(context)
    .bodyMedium
    .override(
      fontFamily: 'Figtree',
      color: Color(0xFF15161E),
      fontSize: 14,
      letterSpacing: 0,
      fontWeight: FontWeight.w600,
    ),
iconColor: Color(0xFF15161E),
iconSize: 18,
elevation: 0,
borderColor:
    FlutterFlowTheme.of(context)
        .secondary,
borderWidth: 2,
borderRadius: BorderRadius.circular(8),
),
unselectedChipStyle: ChipStyle(
backgroundColor: Color(0xFFF1F4F8),
textStyle: FlutterFlowTheme.of(context)
    .bodyMedium
    .override(
      fontFamily: 'Figtree',
      color: Color(0xFF606A85),
      fontSize: 14,
      letterSpacing: 0,
      fontWeight: FontWeight.w600,
    ),
iconColor: Color(0xFF606A85),
iconSize: 18,
elevation: 0,
borderColor: Color(0xFFE5E7EB),
borderWidth: 2,
borderRadius: BorderRadius.circular(8),
),
chipSpacing: 12,
rowSpacing: 12,
multiselect: false,
alignment: WrapAlignment.start,
controller:
  _model.choiceChipsValueController ??=
      FormFieldController<List<String>>(
[],
),
wrapped: true,
),
TextFormField(
controller:
  _model.descriptionTextController,
focusNode: _model.descriptionFocusNode,
autofocus: true,
textCapitalization:
  TextCapitalization.words,
obscureText: false,
decoration: InputDecoration(
labelText:
    'Please, indicate your long-term goals...',
labelStyle: FlutterFlowTheme.of(context)
    .labelLarge
    .override(
      fontFamily: 'Outfit',
      color: Color(0xFF606A85),
      fontSize: 16,
      letterSpacing: 0,
      fontWeight: FontWeight.w500,
    ),
alignLabelWithHint: true,
hintStyle: FlutterFlowTheme.of(context)
    .labelMedium
    .override(
      fontFamily: 'Outfit',
      color: Color(0xFF606A85),
      fontSize: 14,
      letterSpacing: 0,
      fontWeight: FontWeight.w500,
    ),
errorStyle: FlutterFlowTheme.of(context)
    .bodyMedium
    .override(
      fontFamily: 'Figtree',
      color: Color(0xFFFF5963),
      fontSize: 12,
      letterSpacing: 0,
      fontWeight: FontWeight.w600,
    ),
enabledBorder: OutlineInputBorder(
  borderSide: BorderSide(
    color: FlutterFlowTheme.of(context)
        .secondary,
    width: 2,
  ),
  borderRadius:
      BorderRadius.circular(12),
),
focusedBorder: OutlineInputBorder(
  borderSide: BorderSide(
    color: Color(0xFF6F61EF),
    width: 2,
  ),
  borderRadius:
      BorderRadius.circular(12),
),
errorBorder: OutlineInputBorder(
  borderSide: BorderSide(
    color: FlutterFlowTheme.of(context)
        .secondary,
    width: 2,
  ),
  borderRadius:
      BorderRadius.circular(12),
),
focusedErrorBorder: OutlineInputBorder(
  borderSide: BorderSide(
    color: FlutterFlowTheme.of(context)
        .secondary,
    width: 2,
  ),
  borderRadius:
      BorderRadius.circular(12),
),
filled: true,
fillColor: (_model.descriptionFocusNode
            ?.hasFocus ??
        false)
    ? Color(0x4D9489F5)
    : Colors.white,
contentPadding:
    EdgeInsetsDirectional.fromSTEB(
        16, 16, 16, 16),
),
style: FlutterFlowTheme.of(context)
  .bodyLarge
  .override(
    fontFamily: 'Figtree',
    color: Color(0xFF15161E),
    fontSize: 16,
    letterSpacing: 0,
    fontWeight: FontWeight.w600,
  ),
maxLines: 9,
minLines: 5,
cursorColor: Color(0xFF6F61EF),
validator: _model
  .descriptionTextControllerValidator
  .asValidator(context),
),
]
.divide(SizedBox(height: 12))
.addToEnd(SizedBox(height: 32)),
),
),
),
),
),
Container(
constraints: BoxConstraints(
maxWidth: 770,
),
decoration: BoxDecoration(),
child: Padding(
padding:
EdgeInsetsDirectional.fromSTEB(16, 12, 16, 20),
child: FFButtonWidget(
onPressed: () async {
context.pushNamed('MAIN');
},
text: 'Submit Form',
options: FFButtonOptions(
width: double.infinity,
height: 48,
padding: EdgeInsetsDirectional.fromSTEB(
24, 0, 24, 0),
iconPadding:
EdgeInsetsDirectional.fromSTEB(0, 0, 0, 0),
color: FlutterFlowTheme.of(context).secondary,
textStyle: FlutterFlowTheme.of(context)
.titleSmall
.override(
fontFamily: 'Figtree',
color: Colors.white,
fontSize: 16,
letterSpacing: 0,
fontWeight: FontWeight.w500,
),
elevation: 3,
borderSide: BorderSide(
color: Colors.transparent,
width: 1,
),
borderRadius: BorderRadius.circular(8),
),
),
),
),
],
),
),
),
],
),
),
),
),
);
}
}
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import Carousel styles
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css'; // Import Audio Player styles
import { Typography, Container } from '@material-ui/core';
import GradientText from 'react-gradient-text';

const MainWidget = () => {
  const [model, setModel] = useState(null);

  useEffect(() => {
    // Simulate initState behavior
    const createModel = () => {
      // Simulate createModel function
      return {
        // Simulated model methods and properties
      };
    };

    // Initialize model
    setModel(createModel());

    // Simulate componentDidMount behavior
    setTimeout(() => {
      // Perform actions after mounting
    }, 0);

    // Simulate componentWillUnmount behavior
    return () => {
      // Clean up any subscriptions or resources
    };
  }, []);

  return (
    <Container maxWidth="md" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
      <Typography variant="h2" gutterBottom>
        <GradientText gradient={['#237C70', '#00C9A7']} text="MAMBA" />
      </Typography>
      <Carousel showArrows={true} showThumbs={false} emulateTouch={true}>
        <div>
          <img src="image1.jpg" alt="Image 1" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="image2.jpg" alt="Image 2" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="image3.jpg" alt="Image 3" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
      <AudioPlayer
        autoPlay={false}
        src="audio.mp3"
        onPlay={() => console.log('Playing')}
        onPause={() => console.log('Paused')}
        onEnded={() => console.log('Ended')}
      />
    </Container>
  );
};

export default MainWidget;
@override
  void dispose() {
    _model.dispose();

    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () => _model.unfocusNode.canRequestFocus
          ? FocusScope.of(context).requestFocus(_model.unfocusNode)
          : FocusScope.of(context).unfocus(),
      child: Scaffold(
        key: scaffoldKey,
        backgroundColor: FlutterFlowTheme.of(context).primaryBackground,
        body: SafeArea(
          top: true,
          child: Column(
            mainAxisSize: MainAxisSize.max,
            children: [
              Flexible(
                child: SingleChildScrollView(
                  child: Column(
                    mainAxisSize: MainAxisSize.max,
                    crossAxisAlignment: CrossAxisAlignment.center,
                    children: [
                      GradientText(
                        'MAMBA',
                        style:
                            FlutterFlowTheme.of(context).headlineLarge.override(
                                  fontFamily: 'Outfit',
                                  color: Color(0xFF237C70),
                                  letterSpacing: 0,
                                  fontWeight: FontWeight.w800,
                                ),
                        colors: [
                          FlutterFlowTheme.of(context).secondary,
                          Color(0xFF237C70)
                        ],
                        gradientDirection: GradientDirection.ttb,
                        gradientType: GradientType.linear,
                      ),
                      Padding(
                        padding: EdgeInsetsDirectional.fromSTEB(16, 30, 16, 0),
                        child: Text(
                          'Daily Motivational Quote',
                          textAlign: TextAlign.center,
                          style: FlutterFlowTheme.of(context)
                              .headlineMedium
                              .override(
                                fontFamily: 'Plus Jakarta Sans',
                                letterSpacing: 0,
                                fontWeight: FontWeight.w800,
                              ),
                        ),
                      ),
                      Flexible(
                        child: Padding(
                          padding:
                              EdgeInsetsDirectional.fromSTEB(12, 12, 12, 12),
                          child: Column(
                            mainAxisSize: MainAxisSize.max,
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Container(
                                width: 385,
                                height: 190,
                                decoration: BoxDecoration(
                                  color: Color(0xC54D6E7A),
                                  borderRadius: BorderRadius.circular(12),
                                  shape: BoxShape.rectangle,
                                ),
                                child: Align(
                                  alignment: AlignmentDirectional(0, 0),
                                  child: Padding(
                                    padding: EdgeInsetsDirectional.fromSTEB(
                                        4, 10, 4, 0),
                                    child: Text(
                                      '“This feeling will pass. The fear is real but the danger is not.” ― Cammie McGovern',
                                      textAlign: TextAlign.center,
                                      style: FlutterFlowTheme.of(context)
                                          .headlineSmall
                                          .override(
                                            fontFamily: 'Plus Jakarta Sans',
                                            color: FlutterFlowTheme.of(context)
                                                .primaryBackground,
                                            letterSpacing: 0,
                                            fontWeight: FontWeight.bold,
                                            decoration:
                                                TextDecoration.underline,
                                          ),
                                    ),
                                  ),
                                ),
                              ),
                            ],
                          ),
                        ),
                      ),
                      Padding(
                        padding: EdgeInsetsDirectional.fromSTEB(16, 30, 16, 0),
                        child: Text(
                          'Books',
                          style: FlutterFlowTheme.of(context)
                              .headlineSmall
                              .override(
                                fontFamily: 'Plus Jakarta Sans',
                                color: FlutterFlowTheme.of(context).primaryText,
                                fontSize: 24,
                                letterSpacing: 0,
                                fontWeight: FontWeight.bold,
                              ),
                        ),
                      ),
                      Padding(
                        padding: EdgeInsetsDirectional.fromSTEB(16, 8, 16, 0),
                        child: Container(
                          width: double.infinity,
                          height: 343,
                          decoration: BoxDecoration(
                            color: FlutterFlowTheme.of(context).secondary,
                            borderRadius: BorderRadius.circular(12),
                          ),
                          child: Padding(
                            padding:
                                EdgeInsetsDirectional.fromSTEB(12, 20, 12, 12),
                            child: Column(
                              mainAxisSize: MainAxisSize.max,
                              mainAxisAlignment: MainAxisAlignment.center,
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Container(
                                  width: double.infinity,
                                  height: 180,
                                  child: CarouselSlider(
                                    items: [
                                      ClipRRect(
                                        borderRadius: BorderRadius.circular(8),
                                        child: Image.network(
                                          'https://www.guilford.com/covers/large/9781462540471.jpg',
                                          width: 300,
                                          height: 200,
                                          fit: BoxFit.fitHeight,
                                        ),
                                      ),
                                      ClipRRect(
                                        borderRadius: BorderRadius.circular(8),
                                        child: Image.network(
                                          'https://2.bp.blogspot.com/-A3UUe93bg2c/VJi9IG-rHRI/AAAAAAAAAGw/wdfaHvebe8U/s1600/books%2Bon%2Bmental%2Bhealth.png',
                                          width: 300,
                                          height: 482,
                                          fit: BoxFit.fitHeight,
                                        ),
                                      ),
                                      ClipRRect(
                                        borderRadius: BorderRadius.circular(8),
                                        child: Image.network(
                                          'https://i.ebayimg.com/images/g/sY4AAOSwbrlgACbf/s-l600.jpg',
                                          width: 300,
                                          height: 200,
                                          fit: BoxFit.fitHeight,
                                        ),
                                      ),
                                      ClipRRect(
                                        borderRadius: BorderRadius.circular(8),
                                        child: Image.network(
                                          'https://i.pinimg.com/736x/41/ed/62/41ed625dd8ec28ac977b1cf3c3efe0af.jpg',
                                          width: 300,
                                          height: 200,
                                          fit: BoxFit.fitHeight,
                                        ),
                                      ),
                                    ],
                                    carouselController:
                                        _model.carouselController ??=
                                            CarouselController(),
                                    options: CarouselOptions(
                                      initialPage: 1,
                                      viewportFraction: 0.5,
                                      disableCenter: true,
                                      enlargeCenterPage: true,
                                      enlargeFactor: 0.25,
                                      enableInfiniteScroll: true,
                                      scrollDirection: Axis.horizontal,
                                      autoPlay: false,
                                      onPageChanged: (index, _) =>
                                          _model.carouselCurrentIndex = index,
                                    ),
                                  ),
                                ),
                                Padding(
                                  padding: EdgeInsetsDirectional.fromSTEB(
                                      8, 30, 0, 0),
                                  child: FFButtonWidget(
                                    onPressed: () {
                                      print('Button pressed ...');
                                    },
                                    text: 'Search',
                                    options: FFButtonOptions(
                                      width: double.infinity,
                                      height: 44,
                                      padding: EdgeInsetsDirectional.fromSTEB(
                                          0, 0, 0, 0),
                                      iconPadding:
                                          EdgeInsetsDirectional.fromSTEB(
                                              0, 0, 0, 0),
                                      color: Color(0xC54D6E7A),
                                      textStyle: FlutterFlowTheme.of(context)
                                          .titleSmall
                                          .override(
                                            fontFamily: 'Plus Jakarta Sans',
                                            color: Colors.white,
                                            letterSpacing: 0,
                                          ),
                                      elevation: 2,
                                      borderRadius: BorderRadius.circular(8),
                                    ),
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ),
                      ),
                      Padding(
                        padding: EdgeInsetsDirectional.fromSTEB(16, 30, 16, 0),
                        child: Text(
                          'Audios',
                          style: FlutterFlowTheme.of(context)
                              .headlineSmall
                              .override(
                                fontFamily: 'Plus Jakarta Sans',
                                color: FlutterFlowTheme.of(context).primaryText,
                                letterSpacing: 0,
                                fontWeight: FontWeight.bold,
                              ),
                        ),
                      ),
                      Padding(
                        padding: EdgeInsetsDirectional.fromSTEB(16, 8, 16, 0),
                        child: Container(
                          width: double.infinity,
                          height: 223,
                          decoration: BoxDecoration(
                            color: Color(0xC54D6E7A),
                            borderRadius: BorderRadius.circular(12),
                          ),
                          child: Padding(
                            padding: EdgeInsets.all(16),
                            child: Column(
                              mainAxisSize: MainAxisSize.max,
                              children: [
                                Padding(
                                  padding: EdgeInsetsDirectional.fromSTEB(
                                      0, 10, 0, 10),
                                  child: Text(
                                    'Podcast of the Day',
                                    style: FlutterFlowTheme.of(context)
                                        .titleLarge
                                        .override(
                                          fontFamily: 'Outfit',
                                          color: FlutterFlowTheme.of(context)
                                              .primaryBackground,
                                          letterSpacing: 0,
                                          fontWeight: FontWeight.bold,
                                        ),
                                  ),
                                ),
                                FlutterFlowAudioPlayer(
                                  audio: Audio(
                                    'assets/audios/tolerating_anxiety.mp3',
                                    metas: Metas(
                                      id: 'tolerating_anxiety.mp3-12718632',
                                      title: 'How to get rid of anxiety?',
                                    ),
                                  ),
                                  titleTextStyle: FlutterFlowTheme.of(context)
                                      .titleSmall
                                      .override(
                                        fontFamily: 'Plus Jakarta Sans',
                                        color: FlutterFlowTheme.of(context)
                                            .primaryText,
                                        letterSpacing: 0,
                                        fontWeight: FontWeight.w600,
                                      ),
                                  playbackDurationTextStyle:
                                      FlutterFlowTheme.of(context)
                                          .labelMedium
                                          .override(
                                            fontFamily: 'Outfit',
                                            color: FlutterFlowTheme.of(context)
                                                .primaryText,
                                            letterSpacing: 0,
                                          ),
                                  fillColor: FlutterFlowTheme.of(context)
                                      .primaryBackground,
                                  playbackButtonColor:
                                      FlutterFlowTheme.of(context).secondary,
                                  activeTrackColor: Color(0xFFFF3700),
                                  elevation: 4,
                                  playInBackground: PlayInBackground
                                      .disabledRestoreOnForeground,
                                ),
                                Padding(
                                  padding: EdgeInsets.all(24),
                                  child: FFButtonWidget(
                                    onPressed: () {
                                      print('Button pressed ...');
                                    },
                                    text: 'Search for other',
                                    options: FFButtonOptions(
                                      height: 40,
                                      padding: EdgeInsetsDirectional.fromSTEB(
                                          24, 0, 24, 0),
                                      iconPadding:
                                          EdgeInsetsDirectional.fromSTEB(
                                              0, 0, 0, 0),
                                      color: FlutterFlowTheme.of(context)
                                          .secondary,
                                      textStyle: FlutterFlowTheme.of(context)
                                          .titleSmall
                                          .override(
                                            fontFamily: 'Plus Jakarta Sans',
                                            color: FlutterFlowTheme.of(context)
                                                .primaryText,
                                            letterSpacing: 0,
                                            fontWeight: FontWeight.w600,
                                          ),
                                      elevation: 3,
                                      borderSide: BorderSide(
                                        color: Colors.transparent,
                                        width: 1,
                                      ),
                                      borderRadius: BorderRadius.circular(8),
                                    ),
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ),
                      ),
                      Padding(
                        padding: EdgeInsetsDirectional.fromSTEB(16, 30, 16, 0),
                        child: Text(
                          'Discussions',
                          style: FlutterFlowTheme.of(context)
                              .headlineSmall
                              .override(
                                fontFamily: 'Plus Jakarta Sans',
                                color: FlutterFlowTheme.of(context).primaryText,
                                letterSpacing: 0,
                                fontWeight: FontWeight.bold,
                              ),
                        ),
                      ),
                      Padding(
                        padding: EdgeInsetsDirectional.fromSTEB(16, 8, 16, 0),
                        child: Container(
                          width: double.infinity,
                          height: 409,
                          decoration: BoxDecoration(
                            color: FlutterFlowTheme.of(context).secondary,
                            borderRadius: BorderRadius.circular(12),
                          ),
                          child: Align(
                            alignment: AlignmentDirectional(0, 0),
                            child: Column(
                              mainAxisSize: MainAxisSize.min,
                              children: [
                                Padding(
                                  padding: EdgeInsetsDirectional.fromSTEB(
                                      15, 15, 15, 0),
                                  child: Row(
                                    mainAxisSize: MainAxisSize.max,
                                    mainAxisAlignment: MainAxisAlignment.start,
                                    children: [
                                      Flexible(
                                        child: Align(
                                          alignment:
                                              AlignmentDirectional(-1, 0),
                                          child: Padding(
                                            padding:
                                                EdgeInsetsDirectional.fromSTEB(
                                                    0, 0, 0, 12),
                                            child: ClipRRect(
                                              borderRadius:
                                                  BorderRadius.circular(10),
                                              child: Image.asset(
                                                'assets/images/1679113001_bogatyr-club-p-fon-psikhoterapiya-foni-pinterest-1.jpg',
                                                height: 115,
                                                fit: BoxFit.cover,
                                                alignment: Alignment(0, 0),
                                              ),
                                            ),
                                          ),
                                        ),
                                      ),
                                      ClipRRect(
                                        borderRadius: BorderRadius.circular(8),
                                        child: Image.network(
                                          'https://picsum.photos/seed/304/600',
                                          width: 0,
                                          height: 200,
                                          fit: BoxFit.cover,
                                        ),
                                      ),
                                      Padding(
                                        padding: EdgeInsetsDirectional.fromSTEB(
                                            4, 4, 4, 12),
                                        child: Column(
                                          mainAxisSize: MainAxisSize.max,
                                          mainAxisAlignment:
                                              MainAxisAlignment.start,
                                          crossAxisAlignment:
                                              CrossAxisAlignment.start,
                                          children: [
                                            Padding(
                                              padding: EdgeInsetsDirectional
                                                  .fromSTEB(8, 0, 0, 0),
                                              child: Text(
                                                'You are not alone!',
                                                style:
                                                    FlutterFlowTheme.of(context)
                                                        .bodyLarge
                                                        .override(
                                                          fontFamily: 'Outfit',
                                                          color: FlutterFlowTheme
                                                                  .of(context)
                                                              .primaryBackground,
                                                          letterSpacing: 0,
                                                        ),
                                              ),
                                            ),
                                            Padding(
                                              padding: EdgeInsetsDirectional
                                                  .fromSTEB(8, 4, 0, 0),
                                              child: Text(
                                                '216 Members',
                                                style:
                                                    FlutterFlowTheme.of(context)
                                                        .labelSmall
                                                        .override(
                                                          fontFamily: 'Outfit',
                                                          color: FlutterFlowTheme
                                                                  .of(context)
                                                              .primaryBackground,
                                                          letterSpacing: 0,
                                                        ),
                                              ),
                                            ),
                                          ],
                                        ),
                                      ),
                                      Expanded(
                                        child: Padding(
                                          padding:
                                              EdgeInsetsDirectional.fromSTEB(
                                                  8, 0, 0, 0),
                                          child: FFButtonWidget(
                                            onPressed: () {
                                              print('Button pressed ...');
                                            },
                                            text: 'Join',
                                            options: FFButtonOptions(
                                              width: 10,
                                              height: 44,
                                              padding: EdgeInsetsDirectional
                                                  .fromSTEB(0, 0, 0, 0),
                                              iconPadding: EdgeInsetsDirectional
                                                  .fromSTEB(0, 0, 0, 0),
                                              color: Color(0xC54D6E7A),
                                              textStyle:
                                                  FlutterFlowTheme.of(context)
                                                      .titleSmall
                                                      .override(
                                                        fontFamily:
                                                            'Plus Jakarta Sans',
                                                        color: Colors.white,
                                                        letterSpacing: 0,
                                                      ),
                                              elevation: 2,
                                              borderRadius:
                                                  BorderRadius.circular(8),
                                            ),
                                          ),
                                        ),
                                      ),
                                    ],
                                  ),
                                ),
                                Padding(
                                  padding: EdgeInsetsDirectional.fromSTEB(
                                      0, 0, 0, 10),
                                  child: Container(
                                    width:
                                        MediaQuery.sizeOf(context).width * 0.5,
                                    decoration: BoxDecoration(
                                      color: FlutterFlowTheme.of(context)
                                          .secondaryBackground,
                                      borderRadius: BorderRadius.circular(14),
                                    ),
                                  ),
                                ),
                                Padding(
                                  padding: EdgeInsetsDirectional.fromSTEB(
                                      15, 0, 15, 0),
                                  child: Row(
                                    mainAxisSize: MainAxisSize.max,
                                    mainAxisAlignment: MainAxisAlignment.start,
                                    children: [
                                      Flexible(
                                        child: Align(
                                          alignment:
                                              AlignmentDirectional(-1, 0),
                                          child: Padding(
                                            padding:
                                                EdgeInsetsDirectional.fromSTEB(
                                                    0, 0, 0, 12),
                                            child: ClipRRect(
                                              borderRadius:
                                                  BorderRadius.circular(10),
                                              child: Image.asset(
                                                'assets/images/under-pressure.jpg',
                                                height: 115,
                                                fit: BoxFit.cover,
                                                alignment: Alignment(0, 0),
                                              ),
                                            ),
                                          ),
                                        ),
                                      ),
                                      Padding(
                                        padding: EdgeInsetsDirectional.fromSTEB(
                                            4, 4, 4, 12),
                                        child: Column(
                                          mainAxisSize: MainAxisSize.max,
                                          mainAxisAlignment:
                                              MainAxisAlignment.start,
                                          crossAxisAlignment:
                                              CrossAxisAlignment.start,
                                          children: [
                                            Padding(
                                              padding: EdgeInsetsDirectional
                                                  .fromSTEB(8, 0, 0, 0),
                                              child: Text(
                                                'How to find friends',
                                                style:
                                                    FlutterFlowTheme.of(context)
                                                        .bodyLarge
                                                        .override(
                                                          fontFamily: 'Outfit',
                                                          color: FlutterFlowTheme
                                                                  .of(context)
                                                              .primaryBackground,
                                                          letterSpacing: 0,
                                                        ),
                                              ),
                                            ),
                                            Padding(
                                              padding: EdgeInsetsDirectional
                                                  .fromSTEB(8, 4, 0, 0),
                                              child: Text(
                                                '157 Members',
                                                style:
                                                    FlutterFlowTheme.of(context)
                                                        .labelSmall
                                                        .override(
                                                          fontFamily: 'Outfit',
                                                          color: FlutterFlowTheme
                                                                  .of(context)
                                                              .primaryBackground,
                                                          letterSpacing: 0,
                                                        ),
                                              ),
                                            ),
                                          ],
                                        ),
                                      ),
                                      Expanded(
                                        child: Padding(
                                          padding:
                                              EdgeInsetsDirectional.fromSTEB(
                                                  8, 0, 0, 0),
                                          child: FFButtonWidget(
                                            onPressed: () {
                                              print('Button pressed ...');
                                            },
                                            text: 'Join',
                                            options: FFButtonOptions(
                                              width: 10,
                                              height: 44,
                                              padding: EdgeInsetsDirectional
                                                  .fromSTEB(0, 0, 0, 0),
                                              iconPadding: EdgeInsetsDirectional
                                                  .fromSTEB(0, 0, 0, 0),
                                              color: Color(0xC54D6E7A),
                                              textStyle:
                                                  FlutterFlowTheme.of(context)
                                                      .titleSmall
                                                      .override(
                                                        fontFamily:
                                                            'Plus Jakarta Sans',
                                                        color: Colors.white,
                                                        letterSpacing: 0,
                                                      ),
                                              elevation: 2,
                                              borderRadius:
                                                  BorderRadius.circular(8),
                                            ),
                                          ),
                                        ),
                                      ),
                                    ],
                                  ),
                                ),
                                Padding(
                                  padding: EdgeInsetsDirectional.fromSTEB(
                                      0, 12, 0, 12),
                                  child: Container(
                                    width:
                                        MediaQuery.sizeOf(context).width * 0.5,
                                    decoration: BoxDecoration(
                                      color: FlutterFlowTheme.of(context)
                                          .secondaryBackground,
                                      borderRadius: BorderRadius.circular(14),
                                    ),
                                  ),
                                ),
                                Align(
                                  alignment: AlignmentDirectional(0, 0),
                                  child: Padding(
                                    padding: EdgeInsetsDirectional.fromSTEB(
                                        0, 30, 0, 0),
                                    child: FFButtonWidget(
                                      onPressed: () {
                                        print('Button pressed ...');
                                      },
                                      text: 'Initiate',
                                      options: FFButtonOptions(
                                        width: 300,
                                        height: 40,
                                        padding: EdgeInsetsDirectional.fromSTEB(
                                            24, 0, 24, 0),
                                        iconPadding:
                                            EdgeInsetsDirectional.fromSTEB(
                                                0, 0, 0, 0),
                                        color: Color(0xC54D6E7A),
                                        textStyle: FlutterFlowTheme.of(context)
                                            .titleSmall
                                            .override(
                                              fontFamily: 'Plus Jakarta Sans',
                                              color: Colors.white,
                                              letterSpacing: 0,
                                              fontWeight: FontWeight.w600,
                                            ),
                                        elevation: 3,
                                        borderSide: BorderSide(
                                          color: Colors.transparent,
                                          width: 1,
                                        ),
                                        borderRadius: BorderRadius.circular(8),
                                      ),
                                    ),
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
import React, { useEffect, useState } from 'react';
import { Container, Typography, Button } from '@material-ui/core';
import { Animate } from 'react-animate-mount';
import 'react-animate-mount/dist/react-animate-mount.css'; // Import Animate styles

const UserWidget = () => {
  const [model, setModel] = useState(null);

  useEffect(() => {
    // Simulate initState behavior
    const createModel = () => {
      // Simulate createModel function
      return {
        // Simulated model methods and properties
      };
    };

    // Initialize model
    setModel(createModel());

    // Simulate componentDidMount behavior
    setTimeout(() => {
      // Perform actions after mounting
    }, 0);

    // Simulate componentWillUnmount behavior
    return () => {
      // Clean up any subscriptions or resources
    };
  }, []);

  return (
    <Container maxWidth="md" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
      <Typography variant="h2" gutterBottom>
        User Widget
      </Typography>
      <Animate
        enter={{ animation: 'fade-in', duration: 500 }}
        exit={{ animation: 'fade-out', duration: 500 }}
      >
        <div>
          <Typography variant="h5" gutterBottom>
            Animate me!
          </Typography>
          <Button variant="contained" color="primary">
            Click me
          </Button>
        </div>
      </Animate>
    </Container>
  );
};

export default UserWidget;
@override
void initState() {
  super.initState();
  _model = createModel(context, () => UserModel());

  animationsMap.addAll({
    'cardOnPageLoadAnimation': AnimationInfo(
      trigger: AnimationTrigger.onPageLoad,
      effectsBuilder: () => [
        VisibilityEffect(duration: 1.ms),
        FadeEffect(
          curve: Curves.easeInOut,
          delay: 0.0.ms,
          duration: 600.0.ms,
          begin: 0.0,
          end: 1.0,
        ),
        ScaleEffect(
          curve: Curves.easeInOut,
          delay: 0.0.ms,
          duration: 600.0.ms,
          begin: Offset(0.6, 0.6),
          end: Offset(1.0, 1.0),
        ),
      ],
    ),
    'textOnPageLoadAnimation1': AnimationInfo(
      trigger: AnimationTrigger.onPageLoad,
      effectsBuilder: () => [
        VisibilityEffect(duration: 1.ms),
        FadeEffect(
          curve: Curves.easeInOut,
          delay: 0.0.ms,
          duration: 600.0.ms,
          begin: 0.0,
          end: 1.0,
        ),
        MoveEffect(
          curve: Curves.easeInOut,
          delay: 0.0.ms,
          duration: 600.0.ms,
          begin: Offset(0.0, 20.0),
          end: Offset(0.0, 0.0),
        ),
      ],
    ),
    'textOnPageLoadAnimation2': AnimationInfo(
      trigger: AnimationTrigger.onPageLoad,
      effectsBuilder: () => [
        VisibilityEffect(duration: 1.ms),
        FadeEffect(
          curve: Curves.easeInOut,
          delay: 0.0.ms,
          duration: 600.0.ms,
          begin: 0.0,
          end: 1.0,
        ),
        MoveEffect(
          curve: Curves.easeInOut,
          delay: 0.0.ms,
          duration: 600.0.ms,
          begin: Offset(0.0, 20.0),
          end: Offset(0.0, 0.0),
        ),
      ],
    ),
    'dividerOnPageLoadAnimation': AnimationInfo(
      trigger: AnimationTrigger.onPageLoad,
      effectsBuilder: () => [
        VisibilityEffect(duration: 1.ms),
        FadeEffect(
          curve: Curves.easeInOut,
          delay: 0.0.ms,
          duration: 600.0.ms,
          begin: 0.0,
          end: 1.0,
        ),
        MoveEffect(
          curve: Curves.easeInOut,
          delay: 0.0.ms,
          duration: 600.0.ms,
          begin: Offset(0.0, 20.0),
          end: Offset(0.0, 0.0),
        ),
      ],
    ),
    'containerOnPageLoadAnimation1': AnimationInfo(
      trigger: AnimationTrigger.onPageLoad,
      effectsBuilder: () => [
        VisibilityEffect(duration: 1.ms),
        FadeEffect(
          curve: Curves.easeInOut,
          delay: 0.0.ms,
          duration: 600.0.ms,
          begin: 0.0,
          end: 1.0,
        ),
        MoveEffect(
          curve: Curves.easeInOut,
          delay: 0.0.ms,
          duration: 600.0.ms,
          begin: Offset(0.0, 60.0),
          end: Offset(0.0, 0.0),
        ),
      ],
    ),
    'containerOnPageLoadAnimation2': AnimationInfo(
      trigger: AnimationTrigger.onPageLoad,
      effectsBuilder: () => [
        VisibilityEffect(duration: 200.ms),
        FadeEffect(
          curve: Curves.easeInOut,
          delay: 200.0.ms,
          duration: 600.0.ms,
          begin: 0.0,
          end: 1.0,
        ),
        MoveEffect(
          curve: Curves.easeInOut,
          delay: 200.0.ms,
          duration: 600.0.ms,
          begin: Offset(0.0, 60.0),
          end: Offset(0.0, 0.0),
        ),
      ],
    ),
    'containerOnPageLoadAnimation3': AnimationInfo(
      trigger: AnimationTrigger.onPageLoad,
      effectsBuilder: () => [
        VisibilityEffect(duration: 300.ms),
        FadeEffect(
          curve: Curves.easeInOut,
          delay: 300.0.ms,
          duration: 600.0.ms,
          begin: 0.0,
          end: 1.0,
        ),
        MoveEffect(
          curve: Curves.easeInOut,
          delay: 300.0.ms,
          duration: 600.0.ms,
          begin: Offset(0.0, 60.0),
          end: Offset(0.0, 0.0),
        ),
      ],
    ),
    'containerOnPageLoadAnimation4': AnimationInfo(
      trigger: AnimationTrigger.onPageLoad,
      effectsBuilder: () => [
        VisibilityEffect(duration: 300.ms),
        FadeEffect(
          curve: Curves.easeInOut,
          delay: 300.0.ms,
          duration: 600.0.ms,
          begin: 0.0,
          end: 1.0,
        ),
        MoveEffect(
          curve: Curves.easeInOut,
          delay: 300.0.ms,
          duration: 600.0.ms,
          begin: Offset(0.0, 60.0),
          end: Offset(0.0, 0.0),
        ),
      ],
    ),
    'buttonOnPageLoadAnimation': AnimationInfo(
      trigger: AnimationTrigger.onPageLoad,
      effectsBuilder: () => [
        VisibilityEffect(duration: 400.ms),
        FadeEffect(
          curve: Curves.easeInOut,
          delay: 400.0.ms,
          duration: 600.0.ms,
          begin: 0.0,
          end: 1.0,
        ),
        MoveEffect(
          curve: Curves.easeInOut,
          delay: 400.0.ms,
          duration: 600.0.ms,
          begin: Offset(0.0, 60.0),
          end: Offset(0.0, 0.0),
        ),
      ],
    ),
  });
  setupAnimations(
    animationsMap.values.where((anim) =>
        anim.trigger == AnimationTrigger.onActionTrigger ||
        !anim.applyInitialState),
    this,
  );

  WidgetsBinding.instance.addPostFrameCallback((_) => setState(() {}));
}

@override
void dispose() {
  _model.dispose();

  super.dispose();
}

@override
Widget build(BuildContext context) {
  return GestureDetector(
    onTap: () => _model.unfocusNode.canRequestFocus
        ? FocusScope.of(context).requestFocus(_model.unfocusNode)
        : FocusScope.of(context).unfocus(),
    child: Scaffold(
      key: scaffoldKey,
      backgroundColor: FlutterFlowTheme.of(context).primaryBackground,
      body: SafeArea(
        top: true,
        child: Column(
          mainAxisSize: MainAxisSize.max,
          children: [
            Flexible(
              child: Column(
                mainAxisSize: MainAxisSize.max,
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Align(
                    alignment: AlignmentDirectional(0, -1),
                    child: Card(
                      clipBehavior: Clip.antiAliasWithSaveLayer,
                      color: Color(0xC54D6E7A),
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.only(
                          bottomLeft: Radius.circular(80),
                          bottomRight: Radius.circular(80),
                          topLeft: Radius.circular(80),
                          topRight: Radius.circular(80),
                        ),
                      ),
                      child: Padding(
                        padding: EdgeInsets.all(8),
                        child: InkWell(
                          splashColor: Colors.transparent,
                          focusColor: Colors.transparent,
                          hoverColor: Colors.transparent,
                          highlightColor: Colors.transparent,
                          onTap: () async {
                            await Navigator.push(
                              context,
                              PageTransition(
                                type: PageTransitionType.fade,
                                child: FlutterFlowExpandedImageView(
                                  image: Image.network(
                                    'https://gas-kvas.com/grafic/uploads/posts/2024-01/gas-kvas-com-p-applikatsii-golova-medvedya-17.png',
                                    fit: BoxFit.contain,
                                    alignment: Alignment(0, 0),
                                  ),
                                  allowRotation: false,
                                  tag: 'imageTag',
                                  useHeroAnimation: true,
                                ),
                              ),
                            );
                          },
                          child: Hero(
                            tag: 'imageTag',
                            transitionOnUserGestures: true,
                            child: ClipRRect(
                              borderRadius: BorderRadius.only(
                                bottomLeft: Radius.circular(80),
                                bottomRight: Radius.circular(80),
                                topLeft: Radius.circular(80),
                                topRight: Radius.circular(80),
                              ),
                              child: Image.network(
                                'https://gas-kvas.com/grafic/uploads/posts/2024-01/gas-kvas-com-p-applikatsii-golova-medvedya-17.png',
                                width: 150,
                                height: 150,
                                fit: BoxFit.cover,
                                alignment: Alignment(0, 0),
                              ),
                            ),
                          ),
                        ),
                      ),
                    ).animateOnPageLoad(
                        animationsMap['cardOnPageLoadAnimation']!),
                  ),
                  Padding(
                    padding: EdgeInsetsDirectional.fromSTEB(0, 12, 0, 0),
                    child: Text(
                      'Kamila Oralbekova',
                      style: FlutterFlowTheme.of(context)
                          .headlineMedium
                          .override(
                            fontFamily: 'Plus Jakarta Sans',
                            color: Color(0xC54D6E7A),
                            fontSize: 30,
                            letterSpacing: 0,
                            fontWeight: FontWeight.w800,
                          ),
                    ).animateOnPageLoad(
                        animationsMap['textOnPageLoadAnimation1']!),
                  ),
                  Padding(
                    padding: EdgeInsetsDirectional.fromSTEB(0, 4, 0, 0),
                    child: Text(
                      'kamilaoralbekova6@gmail.com',
                      style: FlutterFlowTheme.of(context)
                          .titleMedium
                          .override(
                            fontFamily: 'Plus Jakarta Sans',
                            color: FlutterFlowTheme.of(context).primaryText,
                            letterSpacing: 0,
                            fontWeight: FontWeight.w600,
                          ),
                    ).animateOnPageLoad(
                        animationsMap['textOnPageLoadAnimation2']!),
                  ),
                  Divider(
                    height: 80,
                    thickness: 1,
                    indent: 24,
                    endIndent: 24,
                    color: FlutterFlowTheme.of(context).secondary,
                  ).animateOnPageLoad(
                      animationsMap['dividerOnPageLoadAnimation']!),
                  Padding(
                    padding: EdgeInsetsDirectional.fromSTEB(16, 0, 16, 0),
                    child: Container(
                      width: double.infinity,
                      decoration: BoxDecoration(
                        color: FlutterFlowTheme.of(context).primaryBackground,
                        borderRadius: BorderRadius.circular(12),
                        border: Border.all(
                          color: FlutterFlowTheme.of(context).secondary,
                          width: 2,
                        ),
                      ),
                      child: Padding(
                        padding: EdgeInsets.all(2),
                        child: Row(
                          mainAxisSize: MainAxisSize.max,
                          children: [
                            Padding(
                              padding:
                                  EdgeInsetsDirectional.fromSTEB(12, 0, 0, 0),
                              child: Icon(
                                Icons.power_settings_new_rounded,
                                color:
                                    FlutterFlowTheme.of(context).primaryText,
                                size: 24,
                              ),
                            ),
                            Expanded(
                              child: SwitchListTile.adaptive(
                                value: _model.switchListTileValue ??= true,
                                onChanged: (newValue) async {
                                  setState(() =>
                                      _model.switchListTileValue = newValue!);
                                },
                                title: Text(
                                  'Active',
                                  style: FlutterFlowTheme.of(context)
                                      .bodyMedium
                                      .override(
                                        fontFamily: 'Plus Jakarta Sans',
                                        color: FlutterFlowTheme.of(context)
                                            .primaryText,
                                        letterSpacing: 0,
                                      ),
                                ),
                                tileColor:
                                    FlutterFlowTheme.of(context).accent2,
                                activeColor: Color(0xFFFF3700),
                                activeTrackColor: Color(0xC54D6E7A),
                                dense: false,
                                controlAffinity:
                                    ListTileControlAffinity.trailing,
                                contentPadding:
                                    EdgeInsetsDirectional.fromSTEB(
                                        12, 0, 4, 0),
                              ),
                            ),
                          ],
                        ),
                      ),
                    ).animateOnPageLoad(
                        animationsMap['containerOnPageLoadAnimation1']!),
                  ),
                  Padding(
                    padding: EdgeInsetsDirectional.fromSTEB(16, 12, 16, 0),
                    child: Container(
                      width: double.infinity,
                      decoration: BoxDecoration(
                        color: FlutterFlowTheme.of(context).primaryBackground,
                        borderRadius: BorderRadius.circular(12),
                        border: Border.all(
                          color: FlutterFlowTheme.of(context).secondary,
                          width: 2,
                        ),
                      ),
                      child: Padding(
                        padding: EdgeInsetsDirectional.fromSTEB(8, 12, 8, 12),
                        child: Row(
                          mainAxisSize: MainAxisSize.max,
                          children: [
                            Padding(
                              padding:
                                  EdgeInsetsDirectional.fromSTEB(8, 0, 0, 0),
                              child: Icon(
                                Icons.account_circle_outlined,
                                color:
                                    FlutterFlowTheme.of(context).primaryText,
                                size: 24,
                              ),
                            ),
                            Padding(
                              padding:
                                  EdgeInsetsDirectional.fromSTEB(12, 0, 0, 0),
                              child: Text(
                                'Edit Profile Photo',
                                style: FlutterFlowTheme.of(context)
                                    .bodyMedium
                                    .override(
                                      fontFamily: 'Plus Jakarta Sans',
                                      color: FlutterFlowTheme.of(context)
                                          .primaryText,
                                      letterSpacing: 0,
                                    ),
                              ),
                            ),
                          ],
                        ),
                      ),
                    ).animateOnPageLoad(
                        animationsMap['containerOnPageLoadAnimation2']!),
                  ),
                  Padding(
                    padding: EdgeInsetsDirectional.fromSTEB(16, 12, 16, 0),
                    child: Container(
                      width: double.infinity,
                      decoration: BoxDecoration(
                        color: FlutterFlowTheme.of(context).primaryBackground,
                        borderRadius: BorderRadius.circular(12),
                        border: Border.all(
                          color: FlutterFlowTheme.of(context).secondary,
                          width: 2,
                        ),
                      ),
                      child: Padding(
                        padding: EdgeInsetsDirectional.fromSTEB(8, 12, 8, 12),
                        child: Row(
                          mainAxisSize: MainAxisSize.max,
                          children: [
                            Padding(
                              padding:
                                  EdgeInsetsDirectional.fromSTEB(8, 0, 0, 0),
                              child: Icon(
                                Icons.brightness_5,
                                color:
                                    FlutterFlowTheme.of(context).primaryText,
                                size: 24,
                              ),
                            ),
                            Padding(
                              padding:
                                  EdgeInsetsDirectional.fromSTEB(12, 0, 0, 0),
                              child: Text(
                                'Date of Birth',
                                style: FlutterFlowTheme.of(context)
                                    .bodyMedium
                                    .override(
                                      fontFamily: 'Plus Jakarta Sans',
                                      color: FlutterFlowTheme.of(context)
                                          .primaryText,
                                      letterSpacing: 0,
                                    ),
                              ),
                            ),
                          ],
                        ),
                      ),
                    ).animateOnPageLoad(
                        animationsMap['containerOnPageLoadAnimation3']!),
                  ),
                  Padding(
                    padding: EdgeInsetsDirectional.fromSTEB(16, 12, 16, 0),
                    child: Container(
                      width: double.infinity,
                      decoration: BoxDecoration(
                        color: FlutterFlowTheme.of(context).primaryBackground,
                        borderRadius: BorderRadius.circular(12),
                        border: Border.all(
                          color: FlutterFlowTheme.of(context).secondary,
                          width: 2,
                        ),
                      ),
                      child: Padding(
                        padding: EdgeInsetsDirectional.fromSTEB(8, 12, 8, 12),
                        child: Row(
                          mainAxisSize: MainAxisSize.max,
                          children: [
                            Padding(
                              padding:
                                  EdgeInsetsDirectional.fromSTEB(8, 0, 0, 0),
                              child: Icon(
                                Icons.numbers_outlined,
                                color:
                                    FlutterFlowTheme.of(context).primaryText,
                                size: 24,
                              ),
                            ),
                            Padding(
                              padding:
                                  EdgeInsetsDirectional.fromSTEB(12, 0, 0, 0),
                              child: Text(
                                'Phone Number',
                                style: FlutterFlowTheme.of(context)
                                    .bodyMedium
                                    .override(
                                      fontFamily: 'Plus Jakarta Sans',
                                      color: FlutterFlowTheme.of(context)
                                          .primaryText,
                                      letterSpacing: 0,
                                    ),
                              ),
                            ),
                          ],
                        ),
                      ),
                    ).animateOnPageLoad(
                        animationsMap['containerOnPageLoadAnimation4']!),
                  ),
                  Padding(
                    padding: EdgeInsetsDirectional.fromSTEB(0, 16, 0, 0),
                    child: FFButtonWidget(
                      onPressed: () async {
                        context.pushNamed(
                          'okay',
                          extra: <String, dynamic>{
                            kTransitionInfoKey: TransitionInfo(
                              hasTransition: true,
                              transitionType: PageTransitionType.fade,
                            ),
                          },
                        );
                      },
                      text: 'Log Out',
                      options: FFButtonOptions(
                        width: 150,
                        height: 44,
                        padding: EdgeInsetsDirectional.fromSTEB(0, 0, 0, 0),
                        iconPadding:
                            EdgeInsetsDirectional.fromSTEB(0, 0, 0, 0),
                        color: FlutterFlowTheme.of(context).secondary,
                        textStyle:
                            FlutterFlowTheme.of(context).bodyLarge.override(
                                  fontFamily: 'Outfit',
                                  color: FlutterFlowTheme.of(context)
                                      .primaryBackground,
                                  letterSpacing: 0,
                                ),
                        elevation: 0,
                        borderSide: BorderSide(
                          color: FlutterFlowTheme.of(context).secondary,
                          width: 1,
                        ),
                        borderRadius: BorderRadius.circular(38),
                      ),
                    ).animateOnPageLoad(
                        animationsMap['buttonOnPageLoadAnimation']!),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    ),
  );
}
}
import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@material-ui/core';

const SupportAssistantWidget = () => {
  const [model, setModel] = useState(null);

  useEffect(() => {
    // Simulate initState behavior
    const createModel = async () => {
      const apiKey = 'your-api-key'; // Replace with your API key
      try {
        // Perform API call on page load
        const response = await fetch('your-api-endpoint', {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        
        // Update model state with API response
        setModel({
          apiResultr2i: data, // Adjust as per your data structure
          threadId: data.threadId, // Assuming this is how you access threadId in your response
        });

        // Set dark mode setting (example)
        setDarkModeSetting('dark'); // Replace with your dark mode handling

      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error state or retry logic
      }
    };

    // Initialize model on component mount
    createModel();

    // Simulate componentWillUnmount behavior
    return () => {
      // Clean up any subscriptions or resources
    };
  }, []);

  return (
    <Container maxWidth="md" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
      <Typography variant="h2" gutterBottom>
        Support Assistant Widget
      </Typography>
      {/* Render UI components using model state */}
      {model && (
        <div>
          {/* Example usage of fetched data */}
          <Typography variant="body1" gutterBottom>
            API Result: {model.apiResultr2i}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Thread ID: {model.threadId}
          </Typography>
        </div>
      )}
    </Container>
  );
};

export default SupportAssistantWidget;
_model.questionTestFieldTextController ??= TextEditingController();
_model.questionTestFieldFocusNode ??= FocusNode();

animationsMap.addAll({
  'containerOnPageLoadAnimation1': AnimationInfo(
    trigger: AnimationTrigger.onPageLoad,
    effectsBuilder: () => [
      FadeEffect(
        curve: Curves.easeInOut,
        delay: 0.0.ms,
        duration: 300.0.ms,
        begin: 0.0,
        end: 1.0,
      ),
    ],
  ),
  'containerOnPageLoadAnimation2': AnimationInfo(
    trigger: AnimationTrigger.onPageLoad,
    effectsBuilder: () => [
      FadeEffect(
        curve: Curves.easeInOut,
        delay: 0.0.ms,
        duration: 300.0.ms,
        begin: 0.0,
        end: 1.0,
      ),
    ],
  ),
});

WidgetsBinding.instance.addPostFrameCallback((_) => setState(() {}));
}

@override
void dispose() {
_model.dispose();

super.dispose();
}

@override
Widget build(BuildContext context) {
context.watch<FFAppState>();

return GestureDetector(
  onTap: () => _model.unfocusNode.canRequestFocus
      ? FocusScope.of(context).requestFocus(_model.unfocusNode)
      : FocusScope.of(context).unfocus(),
  child: Scaffold(
    key: scaffoldKey,
    backgroundColor: FlutterFlowTheme.of(context).secondaryBackground,
    body: SafeArea(
      top: true,
      child: Container(
        width: double.infinity,
        height: double.infinity,
        decoration: BoxDecoration(
          color: FlutterFlowTheme.of(context).primaryBackground,
          image: DecorationImage(
            fit: BoxFit.cover,
            image: Image.asset(
              'assets/images/blur_bg@1x.png',
            ).image,
          ),
        ),
        child: Align(
          alignment: AlignmentDirectional(0, 0),
          child: Container(
            width: double.infinity,
            height: double.infinity,
            constraints: BoxConstraints(
              maxWidth: 770,
            ),
            decoration: BoxDecoration(),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                Expanded(
                  child: Align(
                    alignment: AlignmentDirectional(0, -1),
                    child: Padding(
                      padding: EdgeInsetsDirectional.fromSTEB(0, 12, 0, 0),
                      child: Column(
                        mainAxisSize: MainAxisSize.max,
                        mainAxisAlignment: MainAxisAlignment.start,
                        children: [
                          if (responsiveVisibility(
                            context: context,
                            phone: false,
                            tablet: false,
                          ))
                            Container(
                              width: 100,
                              height: 24,
                              decoration: BoxDecoration(),
                            ),
                          Padding(
                            padding: EdgeInsetsDirectional.fromSTEB(
                                24, 0, 24, 12),
                            child: Row(
                              mainAxisSize: MainAxisSize.max,
                              mainAxisAlignment: MainAxisAlignment.center,
                              children: [
                                Column(
                                  mainAxisSize: MainAxisSize.max,
                                  crossAxisAlignment:
                                      CrossAxisAlignment.start,
                                  children: [
                                    GradientText(
                                      'MAMBA HEALTH',
                                      style: FlutterFlowTheme.of(context)
                                          .headlineLarge
                                          .override(
                                            fontFamily: 'Outfit',
                                            letterSpacing: 0,
                                            fontWeight: FontWeight.w800,
                                          ),
                                      colors: [
                                        FlutterFlowTheme.of(context)
                                            .secondary,
                                        Color(0xFF237C70)
                                      ],
                                      gradientDirection:
                                          GradientDirection.ttb,
                                      gradientType: GradientType.linear,
                                    ),
                                    Padding(
                                      padding:
                                          EdgeInsetsDirectional.fromSTEB(
                                              30, 0, 0, 0),
                                      child: Text(
                                        '                  your therapist friend',
                                        style: FlutterFlowTheme.of(context)
                                            .bodyMedium
                                            .override(
                                              fontFamily:
                                                  'Plus Jakarta Sans',
                                              color: FlutterFlowTheme.of(
                                                      context)
                                                  .secondaryText,
                                              fontSize: 12,
                                              letterSpacing: 0,
                                            ),
                                      ),
                                    ),
                                  ].divide(SizedBox(height: 4)),
                                ),
                              ],
                            ),
                          ),
                          Expanded(
                            child: Padding(
                              padding: EdgeInsetsDirectional.fromSTEB(
                                  12, 12, 12, 0),
                              child: ClipRRect(
                                borderRadius: BorderRadius.circular(12),
                                child: BackdropFilter(
                                  filter: ImageFilter.blur(
                                    sigmaX: 5,
                                    sigmaY: 4,
                                  ),
                                  child: Container(
                                    width: double.infinity,
                                    decoration: BoxDecoration(
                                      color: FlutterFlowTheme.of(context)
                                          .overlay,
                                      borderRadius:
                                          BorderRadius.circular(12),
                                      border: Border.all(
                                        color: FlutterFlowTheme.of(context)
                                            .lineColor,
                                        width: 1,
                                      ),
                                    ),
                                    child: SingleChildScrollView(
                                      controller: _model.scollingChatColumn,
                                      child: Column(
                                        mainAxisSize: MainAxisSize.max,
                                        children: [
                                          Align(
                                            alignment:
                                                AlignmentDirectional(0, -1),
                                            child: Padding(
                                              padding: EdgeInsetsDirectional
                                                  .fromSTEB(16, 0, 16, 0),
                                              child: Builder(
                                                builder: (context) {
                                                  final chat = _model
                                                      .chatHistory
                                                      .toList();
                                                  if (chat.isEmpty) {
                                                    return Container(
                                                      width:
                                                          double.infinity,
                                                      child:
                                                          BlankListComponentWidget(),
                                                    );
                                                  }
                                                  return ListView.separated(
                                                    padding:
                                                        EdgeInsets.fromLTRB(
                                                      0,
                                                      16,
                                                      0,
                                                      16,
                                                    ),
                                                    primary: false,
                                                    shrinkWrap: true,
                                                    scrollDirection:
                                                        Axis.vertical,
                                                    itemCount: chat.length,
                                                    separatorBuilder:
                                                        (_, __) => SizedBox(
                                                            height: 16),
                                                    itemBuilder: (context,
                                                        chatIndex) {
                                                      final chatItem =
                                                          chat[chatIndex];
                                                      return Column(
                                                        mainAxisSize:
                                                            MainAxisSize
                                                                .max,
                                                        crossAxisAlignment:
                                                            CrossAxisAlignment
                                                                .start,
                                                        children: [
                                                          if ((int index) {
                                                            return index %
                                                                    2 !=
                                                                0;
                                                          }(chatIndex))
                                                            Row(
                                                              mainAxisSize:
                                                                  MainAxisSize
                                                                      .max,
                                                              children: [
                                                                Column(
                                                                  mainAxisSize:
                                                                      MainAxisSize
                                                                          .max,
                                                                  crossAxisAlignment:
                                                                      CrossAxisAlignment
                                                                          .start,
                                                                  children: [
                                                                    Container(
                                                                      constraints:
                                                                          BoxConstraints(
                                                                        maxWidth:
                                                                            () {
                                                                          if (MediaQuery.sizeOf(context).width >= 1170.0) {
                                                                            return 700.0;
                                                                          } else if (MediaQuery.sizeOf(context).width <= 470.0) {
                                                                            return 330.0;
                                                                          } else {
                                                                            return 530.0;
                                                                          }
                                                                        }(),
                                                                      ),
                                                                      decoration:
                                                                          BoxDecoration(
                                                                        color:
                                                                            Color(0xC54D6E7A),
                                                                        boxShadow: [
                                                                          BoxShadow(
                                                                            blurRadius: 3,
                                                                            color: Color(0x33000000),
                                                                            offset: Offset(
                                                                              0,
                                                                              1,
                                                                            ),
                                                                          )
                                                                        ],
                                                                        borderRadius:
                                                                            BorderRadius.circular(12),
                                                                        border:
                                                                            Border.all(
                                                                          color: FlutterFlowTheme.of(context).primary,
                                                                          width: 1,
                                                                        ),
                                                                      ),
                                                                      child:
                                                                          Padding(
                                                                        padding:
                                                                            EdgeInsets.all(12),
                                                                        child:
                                                                            Column(
                                                                          mainAxisSize: MainAxisSize.min,
                                                                          crossAxisAlignment: CrossAxisAlignment.start,
                                                                          children: [
                                                                            SelectionArea(
                                                                                child: AutoSizeText(
                                                                              chatItem.text.value,
                                                                              style: FlutterFlowTheme.of(context).titleMedium.override(
                                                                                    fontFamily: 'Plus Jakarta Sans',
                                                                                    color: FlutterFlowTheme.of(context).primaryBtnText,
                                                                                    fontSize: 14,
                                                                                    letterSpacing: 0,
                                                                                    lineHeight: 1.5,
                                                                                  ),
                                                                            )),
                                                                          ],
                                                                        ),
                                                                      ),
                                                                    ).animateOnPageLoad(
                                                                        animationsMap['containerOnPageLoadAnimation1']!),
                                                                    Padding(
                                                                      padding: EdgeInsetsDirectional.fromSTEB(
                                                                          0,
                                                                          6,
                                                                          0,
                                                                          0),
                                                                      child:
                                                                          InkWell(
                                                                        splashColor:
                                                                            Colors.transparent,
                                                                        focusColor:
                                                                            Colors.transparent,
                                                                        hoverColor:
                                                                            Colors.transparent,
                                                                        highlightColor:
                                                                            Colors.transparent,
                                                                        onTap:
                                                                            () async {
                                                                          await Clipboard.setData(ClipboardData(text: chatItem.text.value));
                                                                          ScaffoldMessenger.of(context).showSnackBar(
                                                                            SnackBar(
                                                                              content: Text(
                                                                                'Response copied to clipboard.',
                                                                                style: FlutterFlowTheme.of(context).bodyMedium.override(
                                                                                      fontFamily: 'Plus Jakarta Sans',
                                                                                      color: Color(0x00000000),
                                                                                      fontSize: 12,
                                                                                      letterSpacing: 0,
                                                                                    ),
                                                                              ),
                                                                              duration: Duration(milliseconds: 2000),
                                                                              backgroundColor: FlutterFlowTheme.of(context).primary,
                                                                            ),
                                                                          );
                                                                        },
                                                                        child:
                                                                            Row(
                                                                          mainAxisSize: MainAxisSize.max,
                                                                          children: [
                                                                            Padding(
                                                                              padding: EdgeInsetsDirectional.fromSTEB(0, 0, 4, 0),
                                                                              child: Icon(
                                                                                Icons.content_copy,
                                                                                color: FlutterFlowTheme.of(context).primary30,
                                                                                size: 10,
                                                                              ),
                                                                            ),
                                                                            Text(
                                                                              'Copy response',
                                                                              style: FlutterFlowTheme.of(context).bodyMedium.override(
                                                                                    fontFamily: 'Plus Jakarta Sans',
                                                                                    color: FlutterFlowTheme.of(context).primary30,
                                                                                    fontSize: 10,
                                                                                    letterSpacing: 0,
                                                                                  ),
                                                                            ),
                                                                          ],
                                                                        ),
                                                                      ),
                                                                    ),
                                                                  ],
                                                                ),
                                                              ],
                                                            ),
                                                          if (chatIndex %
                                                                  2 ==
                                                              0)
                                                            Row(
                                                              mainAxisSize:
                                                                  MainAxisSize
                                                                      .max,
                                                              mainAxisAlignment:
                                                                  MainAxisAlignment
                                                                      .end,
                                                              children: [
                                                                Container(
                                                                  constraints:
                                                                      BoxConstraints(
                                                                    maxWidth:
                                                                        () {
                                                                      if (MediaQuery.sizeOf(context).width >=
                                                                          1170.0) {
                                                                        return 700.0;
                                                                      } else if (MediaQuery.sizeOf(context).width <=
                                                                          470.0) {
                                                                        return 330.0;
                                                                      } else {
                                                                        return 530.0;
                                                                      }
                                                                    }(),
                                                                  ),
                                                                  decoration:
                                                                      BoxDecoration(
                                                                    color: FlutterFlowTheme.of(context)
                                                                        .primaryBackground,
                                                                    borderRadius:
                                                                        BorderRadius.circular(12),
                                                                    border:
                                                                        Border.all(
                                                                      color:
                                                                          FlutterFlowTheme.of(context).lineColor,
                                                                    ),
                                                                  ),
                                                                  child:
                                                                      Padding(
                                                                    padding:
                                                                        EdgeInsets.all(12),
                                                                    child:
                                                                        Column(
                                                                      mainAxisSize:
                                                                          MainAxisSize.min,
                                                                      crossAxisAlignment:
                                                                          CrossAxisAlignment.start,
                                                                      children: [
                                                                        Text(
                                                                          chatItem.text.value,
                                                                          style: FlutterFlowTheme.of(context).bodyMedium.override(
                                                                                fontFamily: 'Plus Jakarta Sans',
                                                                                letterSpacing: 0,
                                                                              ),
                                                                        ),
                                                                      ],
                                                                    ),
                                                                  ),
                                                                ).animateOnPageLoad(
                                                                    animationsMap[
                                                                        'containerOnPageLoadAnimation2']!),
                                                              ],
                                                            ),
                                                        ],
                                                      );
                                                    },
                                                    controller:
                                                        _model.chatListView,
                                                  );
                                                },
                                              ),
                                            ),
                                          ),
                                        ],
                                      ),
                                    ),
                                  ),
                                ),
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                ),
                Padding(
                  padding: EdgeInsets.all(12),
                  child: Container(
                    width: double.infinity,
                    decoration: BoxDecoration(
                      color:
                          FlutterFlowTheme.of(context).secondaryBackground,
                      boxShadow: [
                        BoxShadow(
                          blurRadius: 3,
                          color: Color(0x33000000),
                          offset: Offset(
                            0,
                            1,
                          ),
                        )
                      ],
                      borderRadius: BorderRadius.circular(12),
                    ),
                    child: Padding(
                      padding: EdgeInsetsDirectional.fromSTEB(16, 4, 16, 4),
                      child: Row(
                        mainAxisSize: MainAxisSize.max,
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Expanded(
                            child: Container(
                              width: 300,
                              child: TextFormField(
                                controller:
                                    _model.questionTestFieldTextController,
                                focusNode:
                                    _model.questionTestFieldFocusNode,
                                autofocus: true,
                                textCapitalization:
                                    TextCapitalization.sentences,
                                obscureText: false,
                                decoration: InputDecoration(
                                  hintText: 'How do you feel today?...',
                                  hintStyle: FlutterFlowTheme.of(context)
                                      .bodySmall
                                      .override(
                                        fontFamily: 'Plus Jakarta Sans',
                                        letterSpacing: 0,
                                      ),
                                  enabledBorder: UnderlineInputBorder(
                                    borderSide: BorderSide(
                                      color: Color(0x00000000),
                                      width: 1,
                                    ),
                                    borderRadius: const BorderRadius.only(
                                      topLeft: Radius.circular(4.0),
                                      topRight: Radius.circular(4.0),
                                    ),
                                  ),
                                  focusedBorder: UnderlineInputBorder(
                                    borderSide: BorderSide(
                                      color: Color(0x00000000),
                                      width: 1,
                                    ),
                                    borderRadius: const BorderRadius.only(
                                      topLeft: Radius.circular(4.0),
                                      topRight: Radius.circular(4.0),
                                    ),
                                  ),
                                  errorBorder: UnderlineInputBorder(
                                    borderSide: BorderSide(
                                      color: Color(0x00000000),
                                      width: 1,
                                    ),
                                    borderRadius: const BorderRadius.only(
                                      topLeft: Radius.circular(4.0),
                                      topRight: Radius.circular(4.0),
                                    ),
                                  ),
                                  focusedErrorBorder: UnderlineInputBorder(
                                    borderSide: BorderSide(
                                      color: Color(0x00000000),
                                      width: 1,
                                    ),
                                    borderRadius: const BorderRadius.only(
                                      topLeft: Radius.circular(4.0),
                                      topRight: Radius.circular(4.0),
                                    ),
                                  ),
                                ),
                                style: FlutterFlowTheme.of(context)
                                    .bodyMedium
                                    .override(
                                      fontFamily: 'Plus Jakarta Sans',
                                      letterSpacing: 0,
                                    ),
                                maxLines: 8,
                                minLines: 1,
                                keyboardType: TextInputType.multiline,
                                validator: _model
                                    .questionTestFieldTextControllerValidator
                                    .asValidator(context),
                              ),
                            ),
                          ),
                          FlutterFlowIconButton(
                            borderColor: Colors.transparent,
                            borderRadius: 30,
                            borderWidth: 1,
                            buttonSize: 60,
                            icon: Icon(
                              Icons.send_rounded,
                              color: FlutterFlowTheme.of(context).secondary,
                              size: 30,
                            ),
                            showLoadingIndicator: true,
                            onPressed: () async {
                          
                              _model.apiMessageCreateResult =
                                  await OpenAIChatGPTGroup.messageCall.call(
                                threadId: _model.threadId,
                                token: FFAppState().apiKey,
                                content: _model
                                    .questionTestFieldTextController.text,
                              );

                              if ((_model
                                      .apiMessageCreateResult?.succeeded ??
                                  true)) {
                               
                                _model.addToChatHistory(
                                    ContentStruct.maybeFromMap(getJsonField(
                                  (_model.apiMessageCreateResult
                                          ?.jsonBody ??
                                      ''),
                                  r'''$.content[0]''',
                                ))!);
                                setState(() {});

                                setState(() {
                                  _model.questionTestFieldTextController
                                      ?.clear();
                                });
                                
                                await Future.delayed(
                                    const Duration(milliseconds: 500));
                            
                                await _model.scollingChatColumn?.animateTo(
                                  _model.scollingChatColumn!.position
                                      .maxScrollExtent,
                                  duration: Duration(milliseconds: 100),
                                  curve: Curves.ease,
                                );
                                
                                _model.apiAssistantRunResult =
                                    await OpenAIChatGPTGroup.runCall.call(
                                  threadId: _model.threadId,
                                  token: FFAppState().apiKey,
                                  assistantId: FFAppState().assistantId,
                                );

                                if ((_model
                                        .apiAssistantRunResult?.succeeded ??
                                    true)) {

                                  _model.runId = OpenAIChatGPTGroup.runCall
                                      .runId(
                                        (_model.apiAssistantRunResult
                                                ?.jsonBody ??
                                            ''),
                                      )
                                      .toString();
                                  setState(() {});
                                  while (_model.status != 'completed') {
                                    _model.apiRetrieveRunResult =
                                        await OpenAIChatGPTGroup
                                            .retrieverunCall
                                            .call(
                                      threadId: _model.threadId,
                                      runId: _model.runId,
                                      token: FFAppState().apiKey,
                                    );

                                    if ((_model.apiRetrieveRunResult
                                            ?.succeeded ??
                                        true)) {
                                      _model.status = OpenAIChatGPTGroup
                                          .retrieverunCall
                                          .status(
                                        (_model.apiRetrieveRunResult
                                                ?.jsonBody ??
                                            ''),
                                      )!;
                                      setState(() {});
                                      if (OpenAIChatGPTGroup.retrieverunCall
                                              .status(
                                            (_model.apiRetrieveRunResult
                                                    ?.jsonBody ??
                                                ''),
                                          ) !=
                                          'completed') {
                                        
                                        await Future.delayed(const Duration(
                                            milliseconds: 3000));
                                      }
                                    }
                                  }
                                  // Get latest message
                                  _model.apiGetMessagesResult =
                                      await OpenAIChatGPTGroup.messagesCall
                                          .call(
                                    threadId: _model.threadId,
                                    token: FFAppState().apiKey,
                                  );

                                  if ((_model.apiGetMessagesResult
                                          ?.succeeded ??
                                      true)) {
                                   
                                    _model.addToChatHistory(
                                        ContentStruct.maybeFromMap(
                                            OpenAIChatGPTGroup.messagesCall
                                                .data(
                                      (_model.apiGetMessagesResult
                                              ?.jsonBody ??
                                          ''),
                                    ))!);
                                    setState(() {});
                                
                                    await Future.delayed(
                                        const Duration(milliseconds: 500));
                                  
                                    await _model.scollingChatColumn
                                        ?.animateTo(
                                      _model.scollingChatColumn!.position
                                          .maxScrollExtent,
                                      duration: Duration(milliseconds: 100),
                                      curve: Curves.ease,
                                    );
                                   
                                    _model.status = '';
                                    setState(() {});
                                  }
                                }
                              }

                              setState(() {});
                            },
                          ),
                        ],
                      ),
                    ),
                  ),
                ),
                if (responsiveVisibility(
                  context: context,
                  phone: false,
                  tablet: false,
                ))
                  Container(
                    width: 100,
                    height: 60,
                    decoration: BoxDecoration(),
                  ),
              ],
            ),
          ),
        ),
      ),
    ),
  ),
);
}
}
