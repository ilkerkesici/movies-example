import React, { useCallback } from 'react';
import { colors } from 'assets';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity, View, ViewStyle } from 'react-native';
import { Utils } from 'helpers';
AntDesignIcon.loadFont();
FontAwesome.loadFont();

interface IIcon {
    size?: number,
    name: string,
    onPress?: () => void,
    color?: string,
    style?: ViewStyle,
    fontAwesome?: boolean
}

const Icon = (props: IIcon) => {
    const { size, onPress, name, color, style, fontAwesome } = props;
    const onPressIcon = useCallback(() => {
        onPress && Utils.isFunction(onPress) && onPress();
    }, [onPress])
    if (onPress) {
        return (
            <TouchableOpacity onPress={onPressIcon} style={[style]}>
                {
                    fontAwesome ?
                        <FontAwesome name={name} size={size || 30} color={color || colors.primary} /> :
                        <AntDesignIcon name={name} size={size || 30} color={color || colors.primary} />
                }
            </TouchableOpacity>
        )
    }
    return (
        <View style={style}>
            {
                fontAwesome ?
                    <FontAwesome name={name} size={size || 30} color={color || colors.primary} /> :
                    <AntDesignIcon name={name} size={size || 30} color={color || colors.primary} />
            }
        </View>
    );
}

export default Icon;