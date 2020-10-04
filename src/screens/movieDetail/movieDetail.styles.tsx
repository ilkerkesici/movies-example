import { StyleSheet } from 'react-native';
import { colors } from 'assets';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background
    },
    image: {
        alignSelf: 'stretch',
        height: 220
    },
    iconWrapper: {
        alignSelf: 'stretch',
        alignItems: 'flex-end',
        marginRight: 10,
        marginTop: -25
    },
    iconActive: {
        backgroundColor: colors.primary,
        height: 50,
        width: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconInactive: {
        backgroundColor: colors.gray,
        height: 50,
        width: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        marginHorizontal: 10
    }
});

