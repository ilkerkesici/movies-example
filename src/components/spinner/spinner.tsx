/*
* My custom indicator
*/

import React from 'react';
import { ActivityIndicator, View, ViewStyle } from 'react-native';
import { colors } from 'assets';

const Spinner = (props: ISpinner) => {
    return (
        <View style={props.style} >
            <ActivityIndicator color={props.color || colors.primary} size={props.size || 'large'} />
        </View>
    );
}

interface ISpinner {
    color?: string,
    size?: "small" | "large",
    style?: ViewStyle
}



export default Spinner;