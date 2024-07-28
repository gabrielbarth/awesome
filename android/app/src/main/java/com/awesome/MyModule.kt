package com.awesome

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise

class MyNativeModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName(): String {
        return "MyNativeModule"
    }

    @ReactMethod
    fun sampleMethod(param: String, promise: Promise) {
        promise.resolve("Received param: $param")
    }
}