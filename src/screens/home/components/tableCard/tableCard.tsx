import React, { useCallback, useState } from 'react';
import { ImageBackground, View, TouchableOpacity } from 'react-native';
import { IMovie } from 'types';
import styles from './tableCard.styles';
import { Text, Icon } from 'components';
import { Utils } from 'helpers';
import { useStore } from 'react-redux';
import { IRootState } from 'store';
import { movieGenresToString } from '../../home.helper';
import { IMAGE_URL } from 'config';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from 'assets';

interface ITableCard {
    data: IMovie,
    onFav?: (movie: IMovie) => void,
    onUnfav?: (movie: IMovie) => void,
    index: number,
    onPress: (data: IMovie) => void
}

const gradientColors = ['rgba(0, 0, 0, 0.2)', 'rgba(0, 0, 0, 0.2)', 'rgba(0, 0, 0, 0.4)', 'rgba(0, 0, 0, 0.8)']

const TableCard = (props: ITableCard) => {
    const rState: IRootState = useStore().getState();
    const { data, onFav, onUnfav, index, onPress } = props;
    const [fav, setFav] = useState<boolean>(false);

    const year = Utils.getYearFromStringDate(data.release_date);
    const yearAndLang = `${year} | ${Utils.capitalize(data.original_language)}`;
    const genres = movieGenresToString(rState.MoviesResponse.genres, data.genre_ids);

    const onPressFav = useCallback(() => {
        fav && Utils.isFunction(onFav) && onFav && onFav(data);  // Run onFav if onFav is a function
        !fav && Utils.isFunction(onUnfav) && onUnfav && onUnfav(data); // Run onUnfav if onUnfav is a function
        setFav(!fav);
    }, [fav, setFav, data, onFav, onUnfav]);

    const onPressCard = useCallback(() => {
        if(onPress && Utils.isFunction(onPress)) onPress(data);
    }, [data, onPress])

    const extraStylesImage = index % 2 === 0 ? styles.imageLeft : styles.imageRight;
    const iconName = fav ? 'heart' : 'hearto';
    const heartColor = fav ? colors.primary : colors.white;

    return (
        <TouchableOpacity onPress={onPressCard} activeOpacity={0.5} style={[styles.container, extraStylesImage]}>
            <ImageBackground
                style={styles.imageBackground}
                imageStyle={styles.image}
                source={{ uri: IMAGE_URL + data.poster_path }}
            >
                <LinearGradient colors={gradientColors} style={styles.image}>
                    <View style={styles.favContainer}>
                        <Icon name={iconName} color={heartColor} size={20} style={styles.icon} onPress={onPressFav} />
                    </View>
                    <Text numberOfLines={2} title style={styles.title}>{data.title}</Text>
                </LinearGradient>
            </ImageBackground>
            <View style={styles.downBody}>
                <Text subtitle>{yearAndLang}</Text>
                <Text subtitle>{genres}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default TableCard;