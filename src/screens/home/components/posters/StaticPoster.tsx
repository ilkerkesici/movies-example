import React, { useCallback, useState } from 'react';
import { ImageBackground, View } from 'react-native';
import { IMAGE_URL } from 'config';
import styles from './StaticPoster.styles';
import { Icon } from 'components';
import { colors } from 'assets';
import { Utils } from 'helpers';

interface IStaticPoster {
    uri: string,
    onFav?: () => void,
    onUnfav?: () => void
}



const StaticPoster = (props: IStaticPoster) => {
    const [fav, setFav] = useState<boolean>(false);
    const { uri, onUnfav, onFav } = props;
    
    const onPressFav = useCallback(() => {
        fav && Utils.isFunction(onFav) && onFav && onFav();  // Run onFav if onFav is a function
        !fav && Utils.isFunction(onUnfav) && onUnfav && onUnfav(); // Run onUnfav if onUnfav is a function
        setFav(!fav);
    }, [onFav, onUnfav, fav, setFav]);

    const heartColor = fav ? colors.primary : colors.white;
    const iconName = fav ? 'heart' : 'hearto';
    return (
        <ImageBackground imageStyle={styles.container} style={styles.container} source={{ uri: IMAGE_URL + uri }}>
            <View style={styles.filter}>
                <Icon name={iconName} color={heartColor} size={20} style={styles.icon} onPress={onPressFav} />
            </View>
        </ImageBackground>
    );
}

export default StaticPoster;