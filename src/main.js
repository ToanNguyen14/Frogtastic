import React from 'react';
import { Platform } from 'react-native';
import { WebView } from 'react-native-webview';
import { TestIds, BannerAd, BannerAdSize } from '@react-native-firebase/admob';
export default function Main() {
    if (Platform.OS === 'ios') {
        var urlios = require("../assets/index.html");
        return (
            <>
                <WebView
                    style={{ flex: 1 }}
                    originWhitelist={['*']}
                    source={urlios}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    allowUniversalAccessFromFileURLs={true}
                    allowFileAccessFromFileURLs={true}
                />
                <BannerAd
                    unitId='ca-app-pub-5425858352547326/5541120611'
                    size={BannerAdSize.FULL_BANNER}
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
                    allowUniversalAccessFromFileURLs={true}
                    allowFileAccessFromFileURLs={true}
                />
                <BannerAd
                    unitId='ca-app-pub-5425858352547326/5541120611'
                    size={BannerAdSize.FULL_BANNER}
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