import { colors } from 'assets';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {

    },
    spinner: {
        alignSelf: 'stretch',
        alignItems: 'center'
    },
    title: {
        marginVertical: 10
    },
    itemText: {
        color: colors.gray,
        fontSize: 12,
        marginVertical: 5
    },
    itemWrapper: {
        width: 50
    },
    separator: {
        margin: 10
    }
});

export default styles;