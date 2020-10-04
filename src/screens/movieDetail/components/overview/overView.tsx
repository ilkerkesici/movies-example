import React, { useCallback, useState } from 'react';
import { View } from 'react-native';
import { IMovie } from 'types';
import { strings as locale } from 'assets';
import { Text } from 'components';
import styles from './overView.styles';

interface IOverView {
    data: IMovie
}

const OverView = (props: IOverView) => {

    const [collapse, setCollapse] = useState<boolean>(false);
    const strings = locale.detail;
    const { data } = props;

    const onPressReadMore = useCallback(() => {
        setCollapse(!collapse);
    }, [collapse, setCollapse]);

    const collapseText = collapse ? strings.readLess : strings.readMore;
    return(
        <View>
            <Text style={styles.title} title>{strings.synopsis}</Text>
            <Text numberOfLines={collapse ? undefined : 3} subtitle>{data.overview}</Text>
            <View style={styles.readMoreContainer}>
                <Text onPress={onPressReadMore} style={styles.readMore}>{collapseText}</Text>
            </View>
        </View>
    );
}

export default OverView;