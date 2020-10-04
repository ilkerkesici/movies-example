import React, { useCallback } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { IMovie } from 'types';
import { StaticPoster } from '../posters';
import styles from './rowCard.styles';
import { Text } from 'components';
import { Utils } from 'helpers';
import { useStore } from 'react-redux';
import { IRootState } from 'store';
import { movieGenresToString } from '../../home.helper';

interface IRowCard {
    data: IMovie,
    onFav?: (movie: IMovie) => void,
    onUnfav?: (movie: IMovie) => void,
    onPress: (data: IMovie) => void
}

const RowCard = (props: IRowCard) => {
    const rState: IRootState = useStore().getState();
    const { data, onFav, onUnfav, onPress } = props;
    const year = Utils.getYearFromStringDate(data.release_date);
    const yearAndLang = `${year} | ${Utils.capitalize(data.original_language)}`;
    const genres = movieGenresToString(rState.MoviesResponse.genres, data.genre_ids);

    const onFavClick = useCallback(() => {
        if(onFav && Utils.isFunction(onFav)) onFav(data);
    }, [data, onFav]);

    const onUnfavClick = useCallback(() => {
        if(onUnfav && Utils.isFunction(onUnfav)) onUnfav(data);
    }, [data, onUnfav]);

    const onPressCard = useCallback(() => {
        if(onPress && Utils.isFunction(onPress)) onPress(data);
    }, [data, onPress])

    return (
        <TouchableOpacity activeOpacity={0.5} onPress={onPressCard} style={styles.container}>
            <StaticPoster onFav={onFavClick} onUnfav={onUnfavClick} uri={data.poster_path} />
            <View style={styles.body}>
                <View style={styles.upperBody}>
                    <Text title>{data.title}</Text>
                    <Text subtitle>{yearAndLang}</Text>
                    <Text subtitle>{genres}</Text>
                </View>
                <View style={styles.downBody}>
                    <Text subtitle>{data.vote_average.toString()}</Text>
                    <Text subtitle>{'Public'}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default RowCard;