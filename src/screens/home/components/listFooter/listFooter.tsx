import React from 'react';
import { View } from 'react-native';
import { Spinner } from 'components';
import { IRootState } from 'store';
import { useSelector } from 'react-redux';

const ListFooter = () => {
    const loading = useSelector<IRootState, any>((r_state: IRootState) => r_state.MoviesResponse.loading);
    if(loading)
        return(
            <View style={{alignSelf: 'stretch', alignItems: 'center', marginVertical: 10}}>
                <Spinner />
            </View>
        );
    return <></>
}

export default ListFooter;