import { colors } from 'assets';
import React, { useCallback } from 'react';
import { View, TextInput, ViewStyle } from 'react-native';
import Icon from '../icons';
import styles from './searchbar.styles';
import debounce from 'lodash.debounce'; // For delay
import { Utils } from 'helpers';

interface ISearchBar {
    placeholder?:string,
    style?: ViewStyle,
    onChangeText?: (text :string) => void,
    value?: string
}

const Searchbar = (props: ISearchBar) => {
    const { placeholder, onChangeText, style, value } = props;

    const onChange = useCallback((text: string) => {
        if(onChangeText && Utils.isFunction(onChangeText)) 
            onChangeText(text);
    }, [onChangeText]);

    return(
        <View style={[styles.container, style]}>
            <Icon color={colors.gray} size={20} name="search1" />
            <TextInput value={value} style={styles.textInput} placeholder={placeholder} onChangeText={debounce(onChange, 200)} />
        </View>
    );
}

export default Searchbar;
