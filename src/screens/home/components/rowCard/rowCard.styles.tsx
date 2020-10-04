import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        flexDirection: 'row',
    },
    body:{
        flex: 1,
        alignSelf: 'stretch',
        marginLeft: 10
    },
    upperBody:{
        flex: 1,
    },
    downBody: {
        flex: 1,
        justifyContent: 'flex-end'
    }
});

export default styles;