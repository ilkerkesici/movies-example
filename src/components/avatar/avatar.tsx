import { colors } from 'assets';
import Spinner from 'components/spinner';
import { IMAGE_URL } from 'config';
import React, { useState } from 'react';
import { Image, View, ViewStyle, Text } from 'react-native';
import styles from './avatar.styles';

interface IAvatar {
    style?: ViewStyle,
    name: string,
    path?: string | null
}

/**
 * Convert the short format the given text (exp. Ilker Kesici to IK)
 * @param name is a string
 */
const shortTheName = (name: string): string => {
    let short = '';
    const parsed = name.split(' ');
    short += parsed[0][0].toUpperCase();
    if(parsed[1]){
        short += parsed[1][0].toUpperCase();
    }
    return short;
}

const Avatar = (props: IAvatar) => {
    const { style, name, path } = props;
    const [loading, setLoading] = useState<boolean>(true);
    if(!path) {
        const short = shortTheName(name);
        return(
            <View style={[styles.container, style]}>
                <Text style={styles.shortName}>{short}</Text>
            </View>
        );
    }
    return(
        <View style={[styles.container, style]}>
            {loading && <Spinner style={styles.spinner} color={colors.white} size={'small'} />}
            <Image onLoadEnd={() => setLoading(false)} style={styles.container} source={{uri: IMAGE_URL + path}} />
        </View>
    );
}

export default Avatar;