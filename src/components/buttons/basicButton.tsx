import React, { useCallback } from 'react';
import { Text, TouchableOpacity, ViewStyle } from 'react-native';
import Spinner from '../spinner';
import styles from './basicButton.styles';
import { colors } from 'assets';
import { Utils } from 'helpers';

interface IBasicButton {
    loading?: boolean
    onPress?: () => void,
    disabled?: boolean,
    title: string,
    style?: ViewStyle
}

/**
 * Basic custom button
 * @param props : IBasicButton
 */
const BasicButton = (props: IBasicButton) => {
    const { loading, disabled, onPress, title, style } = props;
    const onPressButton = useCallback((): void => {
        onPress && Utils.isFunction(onPress) && onPress();
    }, [onPress])
    return (
        <TouchableOpacity
            onPress={onPressButton}
            style={[style, styles.container, { backgroundColor: disabled ? colors.lightGray : colors.primary }]}
            activeOpacity={disabled ? 0 : 0.5}
        >
            {
                loading ?
                    <Spinner size={"small"} /> :
                    <Text style={[disabled ? styles.disableTitle : styles.activeTitle]}>{title}</Text>
            }
        </TouchableOpacity>
    );
}

export default BasicButton;