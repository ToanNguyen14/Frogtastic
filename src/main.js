import React from 'react';
import { Platform } from 'react-native';
import { WebView } from 'react-native-webview';
import { TestIds, BannerAd, BannerAdSize } from '@react-native-firebase/admob';
export default function Main() {
    if (Platform.OS === 'ios') {
        var urlios = require("../assets/index.html");
        return (
            <WebView
                style={{ flex: 1 }}
                originWhitelist={['*']}
                source={urlios}
                javaScriptEnabled={true}
                domStorageEnabled={true}
            />
        );
    }
    else {
        return (
            <>
                <WebView
                    style={{ flex: 1 }}
                    originWhitelist={['*']}
                    source={{ uri: 'file:///android_asset/index.html' }}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                />
                <BannerAd
                    unitId={TestIds.BANNER}
                    size={BannerAdSize.SMART_BANNER}
                    requestOptions={{
                        requestNonPersonalizedAdsOnly: true,
                    }}
                    onAdLoaded={() => {
                        console.log('Advert loaded');
                    }}
                    onAdFailedToLoad={(error) => {
                        console.error('Advert failed to load: ', error);
                    }}
                />
            </>
        )
    }
}