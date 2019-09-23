import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { applyActionCreator, clearActionCreator } from "../../reducers/message";
import { addOneActionCreator } from "../../reducers/number";

 class CustomButton extends Component {
  handleClick = e => {
    const { addOne, applyMessage, clearInput } = this.props;
    applyMessage();
    addOne();
    clearInput();
  };

  render() {
    return <StyledButton onClick={this.handleClick}>Go</StyledButton>;
  }
}

const StyledButton = styled.div`
  display: flex;
  border-radius: 20px;
  align-self: center;
  height: 40px;
  width: 40px;
  justify-content: center;
  align-items: center;
  color: black;
  background-image: linear-gradient(to top, #ff5500, #ff0);
  box-shadow: yellow;
  border: 1px solid transparent;
  :hover {
    cursor: pointer;
    border: 1px solid yellow;
  }
`;

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  applyMessage: bindActionCreators(applyActionCreator, dispatch),
  addOne: bindActionCreators(addOneActionCreator, dispatch),
  clearInput: bindActionCreators(clearActionCreator, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomButton);