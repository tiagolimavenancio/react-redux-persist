import React, { Component } from "react";
import styled from "styled-components";

import { connect } from "react-redux";
import { getConfirmedMessage } from "../../reducers/message";
import { getNumberOfChange } from "../../reducers/number";

class Result extends Component {
  render() {
    const { numberOfChange, confirmedMessage } = this.props;
    return (
      <Wrapper>
        <StyledSubLabel>modifié {numberOfChange} fois</StyledSubLabel>
        <ResultLabel>{confirmedMessage} </ResultLabel>
      </Wrapper>
    );
  }
}


const Wrapper = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
`;

const ResultLabel = styled.span`
  color: white;
  font-size: 100px;
`;

const StyledSubLabel = styled.span`
  color: orange;
  font-size: 30px;
  font-family: Optima, Segoe, "Segoe UI", Candara, Calibri, Arial, sans-serif;
  text-shadow: 0 -15px 100px white;
`;

const mapStateToProps = state => ({
    confirmedMessage: getConfirmedMessage(state),
    numberOfChange: getNumberOfChange(state)
});
  
export default connect(mapStateToProps)(Result);