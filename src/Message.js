import React from 'react';


class Message extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        text: '-'
      };
    }
  
    componentDidMount() {
      fetch("/api/message?name=Joe")
        .then(res => res.text())
        .then(
          (text) => {
              debugger;
            this.setState({
              isLoaded: true,
              message: text
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <div>{this.state.message}</div>
        );
      }
    }
  }

  export default Message