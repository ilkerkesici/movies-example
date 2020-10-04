import { StyleSheet } from 'react-native';
import { colors } from 'assets';

const styles = StyleSheet.create({
    container: {
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        borderRadius: 5,
        marginHorizontal: 20,
        marginVertical: 10
    },
    activeTitle: {
        fontSize: 16,
        color: colors.white
    },
    disableTitle: {
        fontSize: 16,
        color: colors.black
    }
});

export default styles;