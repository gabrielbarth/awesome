package com.awesome

import android.content.Context
import android.util.Log
import android.widget.Toast
import androidx.compose.ui.platform.ComposeView
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Favorite
import com.facebook.react.bridge.Arguments
import com.facebook.react.uimanager.events.RCTEventEmitter
import com.facebook.react.uimanager.events.RCTModernEventEmitter

class ComposeCardViewManager : SimpleViewManager<ComposeView>() {
    override fun getName() = "ComposeCardView"

    override fun createViewInstance(reactContext: ThemedReactContext): ComposeView {
        return ComposeView(reactContext).apply {
            setContent {
                CardComponent(icon = Icons.Default.Favorite, label = "Favorite") {
                    Toast.makeText(context, "Card Pressed", Toast.LENGTH_SHORT).show()
                    Log.d("ComposeCard", "Card Pressed")
                }
            }
        }
    }
}
