import React from 'react'
import { 
    Button,
    Dimensions,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'
import { connect } from 'react-redux'

const { height, width } = Dimensions.get('window')

function Counter(props) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.loggedInContainer}>
            <Text style={styles.loggedInText}>Logged In: </Text>
            <Text style={styles.loggedInText}>{`${props.loggedIn}`}</Text>

            <Button
                title="Login"
                onPress={props.loggedIn === false ? () => props.reduxLogin(true) : () => this.props.reduxLogin(false)}
                style={styles.loginButton}
            />
            </View>

            <Text style={styles.counterTitle}>Counter</Text>

            <View style={styles.counterContainer}>
            <TouchableOpacity onPress={() => props.reduxIncreaseCounter()}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>

            <Text style={styles.counterText}>{props.counter}</Text>

            <TouchableOpacity onPress={() => props.reduxDecreaseCounter()}>
                <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

// Styles
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    loggedInContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 40,
    },
    loginButton: {
      marginTop: 20,
      paddingTop: 20,
    },
    counterContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    loggedInText: {
      fontFamily: 'System',
      fontSize: 17,
      fontWeight: '400',
      color: '#000',
    },
    counterTitle: {
      fontFamily: 'System',
      fontSize: 32,
      fontWeight: '700',
      color: '#000',
    },
    counterText: {
      fontFamily: 'System',
      fontSize: 36,
      fontWeight: '400',
      color: '#000',
    },
    buttonText: {
      fontFamily: 'System',
      fontSize: 50,
      fontWeight: '300',
      color: '#007AFF',
      marginLeft: 40,
      marginRight: 40,
    },
  });

const mapStateToProps = (state) => {
    return {
        counter: state.counterReducer.counter,
        loggedIn: state.authReducer.loggedIn
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      reduxIncreaseCounter: (payload) => dispatch({
          type: 'INCREASE_COUNTER',
          payload: payload
      }),
      reduxDecreaseCounter: (payload) => dispatch({
          type: 'DECREASE_COUNTER',
          payload: payload
      }),
      reduxLogin: (payload) => dispatch({
          type: 'LOGGED_IN',
          payload: payload
      })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)