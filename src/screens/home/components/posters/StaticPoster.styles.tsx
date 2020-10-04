import { colors } from 'assets';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: 200,
        width: 135,
        borderRadius: 10
    },
    filter: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: colors.blackTransparant,
        alignItems: 'flex-end',
        padding: 8,
        borderRadius: 15,
    },
    icon: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default styles;