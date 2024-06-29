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
