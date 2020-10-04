import React from 'react';
import { View } from 'react-native';
import { Icon, Searchbar, Text } from 'components';
import { colors, strings as locales } from 'assets';
import styles from './listHeader.styles';
import { EHomeStatus } from 'types';

interface IListHeader {
    listStatus: EHomeStatus,
    onSearch: (text: string) => void,
    changeStatus: () => void,
}

/**
 * ListHeaderComponent for flatlist on home page
 */
const ListHeader = (props: IListHeader) => {
    const strings = locales.home;
    const { listStatus, changeStatus, onSearch, } = props;
    
    const iconName = listStatus === EHomeStatus.COLUMN ?  'list' : 'table';
    return (
        <View>
            <Searchbar style={styles.searchbar} placeholder={strings.search} onChangeText={onSearch} />
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{strings.most}</Text>
                <Icon color={colors.gray} name={iconName} onPress={changeStatus} fontAwesome size={26} />
            </View>
        </View>
    );
}

export default ListHeader;