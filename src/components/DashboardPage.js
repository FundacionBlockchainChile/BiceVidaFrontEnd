import React, { Component } from 'react';
import { connect } from 'react-redux';
import Selector from './SelectorDeComponente';
import Card from './seguroCard';

export class DashboardPage extends Component {
  render() {
    return (
      <div className="justify-content">
        <Selector />
        {this.props.insurance ? (
          <Card insurance={this.props.insurance} />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    insurance: state.seguros.insurance,
  };
};

export default connect(mapStateToProps)(DashboardPage);
