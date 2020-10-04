
import React, { useEffect } from 'react';
import { styles } from './splash.styles';
import { initialize } from './splash.helper';
import { ScreenContainer, Text } from 'components';


interface ISplashProps {
    setSplash: () => void
}

export const Splash = (props: ISplashProps) => {
    const { setSplash } = props;
    useEffect(() => {
        initialize(setSplash);
    }, [])


    return (
        <ScreenContainer style={styles.container}>
            <Text title>Welcome</Text>
        </ScreenContainer>
    );
}


