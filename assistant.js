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
                              // Create a message
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
                                // Add Message to Chat History
                                _model.addToChatHistory(
                                    ContentStruct.maybeFromMap(getJsonField(
                                  (_model.apiMessageCreateResult
                                          ?.jsonBody ??
                                      ''),
                                  r'''$.content[0]''',
                                ))!);
                                setState(() {});
                                // Clear TextField
                                setState(() {
                                  _model.questionTestFieldTextController
                                      ?.clear();
                                });
                                // Wait for UI to catchup
                                await Future.delayed(
                                    const Duration(milliseconds: 500));
                                // Scroll to bottom
                                await _model.scollingChatColumn?.animateTo(
                                  _model.scollingChatColumn!.position
                                      .maxScrollExtent,
                                  duration: Duration(milliseconds: 100),
                                  curve: Curves.ease,
                                );
                                // Run the assistant
                                _model.apiAssistantRunResult =
                                    await OpenAIChatGPTGroup.runCall.call(
                                  threadId: _model.threadId,
                                  token: FFAppState().apiKey,
                                  assistantId: FFAppState().assistantId,
                                );

                                if ((_model
                                        .apiAssistantRunResult?.succeeded ??
                                    true)) {
                                  // Store the runid
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
                                        // Delay 3 seconds before next check
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
                                    // Add message to chat history
                                    _model.addToChatHistory(
                                        ContentStruct.maybeFromMap(
                                            OpenAIChatGPTGroup.messagesCall
                                                .data(
                                      (_model.apiGetMessagesResult
                                              ?.jsonBody ??
                                          ''),
                                    ))!);
                                    setState(() {});
                                    // Wait for UI to catchup
                                    await Future.delayed(
                                        const Duration(milliseconds: 500));
                                    // Scroll to bottom
                                    await _model.scollingChatColumn
                                        ?.animateTo(
                                      _model.scollingChatColumn!.position
                                          .maxScrollExtent,
                                      duration: Duration(milliseconds: 100),
                                      curve: Curves.ease,
                                    );
                                    // Reset completed status
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
