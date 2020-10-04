
import React, { useCallback, useEffect, useState } from 'react';
import { Image, View, ScrollView } from 'react-native';
import { styles } from './movieDetail.styles';
import { ScreenContainer, Icon } from 'components';
import { IMovie, IMovieDetail } from 'types';
import { IMAGE_URL } from 'config';
import { colors } from 'assets';
import { getMovieDetail } from './movieDetail.helper';
import { DurationRow, OverView, Creadits } from './components';

interface IMovieDetailState {
    data: IMovie
}
interface IMovieDetailProps {
    route: { params: { data: IMovie } }
}

interface IDetail {
    loading: boolean,
    data: IMovieDetail | null
}

export const MovieDetail = (props: IMovieDetailProps) => {
    const [passedData] = useState<IMovie>(props.route.params.data);
    const [fav, setFav] = useState<boolean>(false);
    const [detail, setDetail] = useState<IDetail>({
        loading: true,
        data: null
    })

    const onPressFav = useCallback(() => {
        setFav(!fav);
    }, [fav, setFav]);

    const getTheMovieDetail = useCallback(async () => {
        const response = await getMovieDetail(passedData.id);
        setDetail({ loading: false, data: response });
    }, [passedData]);

    useEffect(() => {
        getTheMovieDetail();
    }, []);

    const { loading, data } = detail;
    return (
        <ScreenContainer style={styles.container}>
            <ScrollView>
                <Image style={styles.image} source={{ uri: IMAGE_URL + passedData.backdrop_path }} />
                <View style={styles.iconWrapper}>
                    <Icon onPress={onPressFav} name={'heart'} style={fav ? styles.iconActive : styles.iconInactive} color={colors.white} />
                </View>
                <View style={styles.content}>
                    <DurationRow passedData={passedData} data={data} loading={loading} />
                    <OverView data={passedData} />
                    <Creadits data={passedData} />
                </View>
            </ScrollView>
        </ScreenContainer>
    );
}


