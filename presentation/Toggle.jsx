import React from 'react';

export class Toggle extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      isOn: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOn: !this.state.isOn
    });
  }

  render() {
    const { isOn } = this.state;
    return (
      <div
        onClick={this.toggle}
        style={{
          fontSize: 70,
          lineHeight: 8,
          fontWeight: 'bold',
          background: isOn ? 'yellow' : 'gray',
          color: isOn ? 'purple' : 'white'
        }}
        >
        {isOn ? 'On' : 'Off'}
      </div>
    );
  }
}
