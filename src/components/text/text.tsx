import React from 'react';
import { Text, TextStyle } from 'react-native';
import styles from './text.styles';

interface IText {
    style?: TextStyle,
    title?: boolean,
    subtitle?: boolean,
    children?: string,
    numberOfLines?: number,
    onPress?: () => void
}

/**
 * Custom Text component
 * If we add custom font we can make it here
 * @param props IText text props which I use
 */
const CustomText = (props: IText) => {
    const { style, subtitle, title, children, numberOfLines, onPress } = props;
    const combineStyles = [];
    if (subtitle) combineStyles.push(styles.subtitle);
    if (title) combineStyles.push(styles.title);
    combineStyles.push(style);
    return <Text onPress={onPress} numberOfLines={numberOfLines} style={combineStyles}>{children}</Text>
}

export default CustomText;