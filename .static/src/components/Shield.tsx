import React from "react";
import { Alert } from "react-bootstrap";

interface Props {
  children: React.ReactNode;
}

interface State {
  error: boolean;
  info?: string;
}

class Shield extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      error: false,
      info: undefined
    };
    console.log("construtor ", this.props.children);
  }

  componentDidMount() {
    console.log("montou ", this.props.children);
  }

  componentDidCatch(error: any, info: any) {
    console.log("componente didcatch error: ", error, info);
    this.setState({
      error: error,
      info: info
    });
  }

  render() {
    const { error, info } = this.state;
    console.log("shield error: ", error, info);
    if (error) {
      // Some error was thrown. Let's display something helpful to the user
      return (
        <>
          <Alert
            variant="danger"
            onClose={() => this.setState({ error: false })}
            dismissible
          >
            <Alert.Heading>{info}</Alert.Heading>
          </Alert>
        </>
      );
    }
    // No errors were thrown. As you were.
    return this.props.children;
  }
}

export default Shield;
