import { colors } from 'assets';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.lightGray,
        paddingVertical: 6,
        borderRadius: 10
    },
    textInput: {
        marginLeft: 10,
        flex: 1,
        fontWeight: 'bold'
    }
});

export default styles;