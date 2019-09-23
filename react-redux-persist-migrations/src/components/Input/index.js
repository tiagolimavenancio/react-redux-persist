import React, { Component } from "react";
import styled from "styled-components";
import debounce from "lodash/debounce";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setMessageActionCreator } from "../../reducers/message";

class Input extends Component {
  state = {
    value: ""
  };

  handleSearchChange = e => {
    this.setState({ value: e.target.value });
    this.updateStore(e.target.value || "");
  };

  updateStore = debounce(value => {
    this.props.setMessage(value);
  }, 300);

  clearState = () => {
    this.setState({ value: "" });
  };

  render() {
    return (
      <StyledInput
        onChange={this.handleSearchChange}
        value={this.state.value}
        onBlur={this.clearState}
      />
    );
  }
}

const StyledInput = styled.input`
  height: 48px;
  color: #daa520;
  padding-left: 14px;
  padding-right: 14px;
  font-family: Optima, Segoe, "Segoe UI", Candara, Calibri, Arial, sans-serif;
  opacity: 0.8;
  font-weight: 600;
  font-size: 28px;
  width: 500px;
  border-radius: 5px;
  background-color: transparent;
  :hover {
    border-color: yellow;
  }
`;

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  setMessage: bindActionCreators(setMessageActionCreator, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Input);