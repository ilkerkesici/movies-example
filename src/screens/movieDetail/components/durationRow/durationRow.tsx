import React from 'react';
import { View } from 'react-native';
import { Spinner, Text } from 'components';
import styles from './durationRaw.styles';
import { IMovie, IMovieDetail } from 'types';
import { Utils } from 'helpers';
import { IRootState } from 'store';
import { useStore } from 'react-redux';
import { movieGenresToString } from 'screens/home/home.helper';
import { strings as locale } from 'assets';

interface IDurationRow {
    loading: boolean,
    data?: IMovieDetail | null,
    passedData: IMovie
}

const DurationRow = (props: IDurationRow) => {
    const { loading, data, passedData } = props;
    const rState: IRootState = useStore().getState();
    const strings = locale.detail;
    if (!data || loading) return <Spinner style={styles.spinner} />

    const genres = movieGenresToString(rState.MoviesResponse.genres, passedData.genre_ids);
    const duration = Utils.minuteToHourAndMinuteString(data.runtime);
    return (
        <View style={styles.container}>
            <View style={styles.block}>
                <Text title style={styles.title}>{strings.duration}</Text>
                <Text subtitle>{duration}</Text>
            </View>
            <View style={styles.block}>
                <Text title style={styles.title}>{strings.genre}</Text>
                <Text subtitle>{genres}</Text>
            </View>
            <View style={styles.block}>
                <Text title style={styles.title}>{strings.language}</Text>
                <Text subtitle>{data.spoken_languages[0].name}</Text>
            </View>
        </View>
    );
}

export default DurationRow;