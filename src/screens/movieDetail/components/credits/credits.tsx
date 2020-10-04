import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import { Spinner, Avatar, Text } from 'components';
import { ICast, ICreditResponse, ICrew, IMovie } from 'types';
import styles from './credits.styles';
import { getCredits } from '../../movieDetail.helper';
import { strings as locale } from 'assets';
import { FlatList } from 'react-native-gesture-handler';

interface ICredits {
    data: IMovie
}

interface IRenderCast {
    item: ICast,
    index: number
}

interface IRenderCrew {
    item: ICrew,
    index: number
}

const keyExtractorCast = (item: ICast, index: number) => item.id.toString() + '-' + index;
const keyExtractorCrew= (item: ICrew, index: number) => item.id.toString() + '-' + index;

const Credits = (props: ICredits) => {
    const { data } = props;
    const strings = locale.detail;
    const [loading, setLoading] = useState<boolean>(true);
    const [credits, setCredits] = useState<ICreditResponse | null>(null);

    const getMovieCredits = useCallback(async () => {
        const credits = await getCredits(data.id);
        setCredits(credits);
        setLoading(false);
    }, [data, setCredits, setLoading]);

    useEffect(() => {
        getMovieCredits();
    }, [])

    const renderCast = useCallback((props: IRenderCast) => {
        const { item } = props;
        return(
            <RenderElement name={item.name} path={item.profile_path} upperText={item.character}/>
        );
    }, [])

    const renderCrew = useCallback((props: IRenderCrew) => {
        const { item } = props;
        return(
            <RenderElement name={item.name} path={item.profile_path} upperText={item.department}/>
        );
    }, [])

    const renderSeparator = useCallback(() => <View style={styles.separator} />, []);

    if (loading || !credits) return <Spinner style={styles.spinner} />

    

    const { cast, crew } = credits;
    return (
        <View style={styles.container}>
            <Text style={styles.title} title>{strings.cast}</Text>
            <FlatList
                data={cast}
                renderItem={renderCast}
                horizontal
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={renderSeparator}
                keyExtractor={keyExtractorCast}
            />
            <Text style={styles.title} title>{strings.technical}</Text>
            <FlatList
                data={crew}
                renderItem={renderCrew}
                horizontal
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={renderSeparator}
                keyExtractor={keyExtractorCrew}
            />
        </View>
    );
}

interface IRenderElement {
    path?: string | null,
    name: string,
    upperText: string
}
const RenderElement = (props: IRenderElement) => {
    const { path, name, upperText } = props;
    return (
        <View style={styles.itemWrapper}>
            <Text style={styles.itemText} numberOfLines={1}>{upperText}</Text>
            <Avatar name={name} path={path} />
            <Text style={styles.itemText}  numberOfLines={1}>{name}</Text>
        </View>
    );
}

export default Credits;