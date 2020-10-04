import { colors } from 'assets';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {

    },
    title: {
        marginBottom: 10
    },
    readMore: {
        fontWeight: 'normal',
        color: colors.primary,
        fontSize: 14
    },
    readMoreContainer: {
        alignSelf: 'stretch',
        alignItems: 'flex-end',
        marginTop: 5
    }
});

export default styles;
