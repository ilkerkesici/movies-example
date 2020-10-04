
import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, View, Animated } from 'react-native';
import { styles } from './home.styles';
import { useNavigation } from '@react-navigation/native';
import { ScreenContainer, Text } from 'components';
import RowCard from './components/rowCard';
import TableCard from './components/tableCard';
import { EHomeStatus, IMovie } from 'types';
import { useSelector, useStore } from 'react-redux';
import { IRootState } from 'store';
import ListHeader from './components/listHeader';
import ListFooter from './components/listFooter';
import { search, loadMore, refreshMovies } from './home.helper';

interface IRenderItem {
    item: IMovie,
    index: number
}

interface IHomeState {
    status: EHomeStatus,
    searchedText: string
}

const keyExtractor = (item: IMovie, index: number) => item.id.toString();


export const Home = () => {
    const navigation = useNavigation();
    const [animation, setAnimation] = useState<any>(new Animated.Value(0.01));

    const [state, setState] = useState<IHomeState>({
        status: EHomeStatus.ROW,
        searchedText: ''
    });
    const movies = useSelector<IRootState, any>((r_state: IRootState) => r_state.MoviesResponse.movies);
    const refreshing = useSelector<IRootState, any>((r_state: IRootState) => r_state.MoviesResponse.refreshing);
    const rState: IRootState = useStore().getState();
    const moviesState = rState.MoviesResponse;

    const animateScreen = useCallback(() => {
        animation.setValue(0.01);
        Animated.timing(animation, {
            duration: 1000,
            toValue: 1,
            useNativeDriver: false,
        }).start();
    }, [animation])

    /**
     * Run on press movie card
     */
    const onPressItem = useCallback((data: IMovie) => {
        navigation.navigate('Movie Details', { data });
    }, [navigation])

    /**
     * Render Item component for FlatList
     */
    const renderItem = useCallback((props: IRenderItem) => {
        const { item, index } = props;
        if (state.status === EHomeStatus.COLUMN)
            return (
                <Animated.View style={{ opacity: animation, alignSelf: 'stretch', flex: 1 }}>
                    <TableCard onPress={onPressItem} index={index} data={item} />
                </Animated.View>
            );
        return (
            <Animated.View style={{ opacity: animation, alignSelf: 'stretch', flex: 1 }}>
                <RowCard onPress={onPressItem} data={item} />
            </Animated.View>
        );
    }, [state, onPressItem, animation]);

    /**
     * Change the list status
     */
    const changeStatus = useCallback(() => {
        animateScreen()
        const { status } = state;
        const newStatus = status === EHomeStatus.ROW ? EHomeStatus.COLUMN : EHomeStatus.ROW;
        setState({ ...state, status: newStatus });
    }, [state, setState, animateScreen]);

    /**
     * Run on change search bar
     */
    const onSearchTextChange = useCallback((text: string) => {
        search(text);
        setState({ ...state, searchedText: text });
    }, [state, setState]);

    /**
     * Run on reach end
     */
    const onReachedEnd = useCallback(() => {
        const { searchedText } = state;
        const { page, totalPage } = moviesState;
        loadMore(page, totalPage, searchedText, page + 1, movies);
    }, [state, moviesState, movies]);

    /**
     * Run pull down refresh
     */
    const onRefresh = useCallback(() => {
        refreshMovies();
    }, [state, setState])

    /**
     * FlatList item separator
     */
    const renderSeparator = useCallback(() => <View style={styles.separator} />, []);

    useEffect(() => {
        animateScreen()
    }, [animateScreen])

    const { status } = state;

    return (
        <ScreenContainer style={styles.container}>
            <FlatList
                ListHeaderComponent={
                    <ListHeader
                        listStatus={status}
                        onSearch={onSearchTextChange}
                        changeStatus={changeStatus}
                    />
                }
                data={movies}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                refreshing={refreshing}
                onRefresh={onRefresh}
                onEndReached={onReachedEnd}
                onEndReachedThreshold={0}
                ListFooterComponent={<ListFooter />}
                ItemSeparatorComponent={renderSeparator}
                numColumns={status === EHomeStatus.COLUMN ? 2 : 1}
                key={status === EHomeStatus.COLUMN ? 2 : 1}
                ListEmptyComponent={<EmptyScreen />}
            />
        </ScreenContainer>
    );
}


const EmptyScreen = () => {
    return(
        <Text subtitle style={{fontSize: 20, marginTop: 20}}>There is no movie.</Text>
    );
}


