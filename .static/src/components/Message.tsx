import React, { SFC, useState, useEffect } from "react";

import { Alert } from "react-bootstrap";


interface Props {
    show: boolean;
    message?: string | null;
    type?: | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'dark'
    | 'light';
}

const Message: SFC<Props> = (props: Props) => {

    const { show, message, type } = props;

    const [showAlert, setShowAlert] = useState(true);

    useEffect(()=>{
        setShowAlert(show);
    }, [show]);

    return showAlert ? (
      <Alert variant={type} onClose={() => setShowAlert(false)} dismissible>
        {message}
      </Alert>
    ) : null;
    
};

Message.defaultProps = {
  message: "",
  type: "danger"
}

// 'primary',   'secondary',  'success',  'danger',  'warning',  'info',  'light',  'dark',

export default Message;