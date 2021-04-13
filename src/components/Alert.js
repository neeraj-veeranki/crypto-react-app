import React from 'react';
import Alert from '@material-ui/lab/Alert';

// Alert component for showing error message.
export default function AlertComponent(props) {
  const { errorMessage, errorType } = props;
  

  return (
    <div className="Alert">
      <Alert severity={errorType}>{errorMessage}</Alert>
    </div>
  );
}
