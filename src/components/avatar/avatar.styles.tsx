import { colors } from 'assets';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary
    },
    spinner: {
        position: "absolute",
        bottom: 0,
        top: 0,
        right: 0,
        left: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    shortName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.white
    }
});

export default styles;