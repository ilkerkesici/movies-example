import React, { ReactNode, useCallback, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Splash, Home, MovieDetail, Profile } from 'screens';
import { Icon } from 'components';
import { colors } from 'assets';


const ProfileStack = createStackNavigator();
const HomeStack = createStackNavigator();
const Tab = createBottomTabNavigator();

interface ITabNavigator {
    children?: ReactNode
}

function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={Home} />
            <HomeStack.Screen options={{ headerTintColor: colors.black }} name="Movie Details" component={MovieDetail} />
        </HomeStack.Navigator>
    );
}

function PrifileStackScreen() {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen name="Profile" component={Profile} />
        </ProfileStack.Navigator>
    );
}

function TabNavigator(props: ITabNavigator) {
    const { children } = props;
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color }) => {
                    let iconName = 'home'

                    if (route.name === 'Home') {
                        iconName = 'home';
                    } else if (route.name === 'Profile') {
                        iconName = 'user';
                    }

                    // You can return any component that you like here!
                    return <Icon name={iconName} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: colors.primary,
                inactiveTintColor: colors.gray,
            }}
        >
            {children}
        </Tab.Navigator>
    );
}

const RouterComponent = () => {
    const [splash, setSplash] = useState<boolean>(true);

    /**
     * Redirect required screen (if there is an authantication)
     * Exit from splash
     */
    const redirect = useCallback(() => {
        setSplash(false);
    }, [setSplash])

    if (splash) return <Splash setSplash={redirect} />
    return (
        <NavigationContainer>
            <TabNavigator>
                <Tab.Screen name="Home" component={HomeStackScreen} />
                <Tab.Screen name="Profile" component={PrifileStackScreen} />
            </TabNavigator>
        </NavigationContainer>
    )
}



export default RouterComponent;