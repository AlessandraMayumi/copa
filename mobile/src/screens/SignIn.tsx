import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Center, NativeBaseProvider, Text } from 'native-base';
import { THEME } from '../styles/theme';

export function SignIn() {

    return (
        <NativeBaseProvider theme={THEME}>
            <Center flex={1} bgColor="gray.900">
                <Text color="white" fontSize={24}>Sign In</Text>
                <StatusBar style="auto" />
            </Center>
        </NativeBaseProvider>
    )
}
