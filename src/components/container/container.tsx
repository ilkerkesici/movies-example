import React, { ReactNode } from 'react';
import { View, SafeAreaView, ViewStyle } from 'react-native';
import styles from './container.styles';

interface IContainerProps {
    style?: ViewStyle,
    children?: ReactNode 
}

const Container = (props: IContainerProps) => {
    const { children, style } = props;
    return(
        <View style={styles.container}>
            <SafeAreaView style={[styles.container, style]}>
                {children}
            </SafeAreaView>
        </View>
    );
}

export default Container;