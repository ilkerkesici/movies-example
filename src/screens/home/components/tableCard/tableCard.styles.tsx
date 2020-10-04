import { colors } from 'assets';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        flex: 1
    },
    imageBackground: {
        alignSelf: 'stretch',
        height: 200,
        borderRadius: 10,
        width: '100%'
    },
    image: {
        flex: 1,
        alignSelf: 'stretch',
        borderRadius: 10,
    },
    imageRight: {
        marginLeft: 10,
    },
    imageLeft: {
        marginRight: 10
    },
    downBody:{
        marginTop: 10
    },
    favContainer: {
        flex: 1,
        padding: 8,
        alignSelf: 'stretch',
        alignItems: 'flex-end'
    },
    icon: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: colors.white,
        margin: 10,
        fontSize: 18
    }
});

export default styles;