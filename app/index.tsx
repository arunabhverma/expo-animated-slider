import { ImageBackground, StyleSheet, View } from "react-native";
import React from "react";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { BlurView } from "expo-blur";

const HEIGHT = 271.8;
const WIDTH = 122.4;
const BORDER_RADIUS = 43.2;
const LOWER_BOUND = 0;
const UPPER_BOUND = HEIGHT;

const Main = () => {
  const innerHeight = useSharedValue(200);
  const initialScale = useSharedValue(0.9);

  const pan = Gesture.Pan()
    .onStart(() => {
      initialScale.value = 1;
    })
    .onChange((e) => {
      innerHeight.value -= e.changeY;
    })
    .onEnd(() => {
      initialScale.value = 0.8;
      if (innerHeight.value < LOWER_BOUND) {
        innerHeight.value = withSpring(LOWER_BOUND, {
          mass: 1,
          damping: 50,
          stiffness: 300,
        });
      } else if (innerHeight.value > UPPER_BOUND) {
        innerHeight.value = withSpring(UPPER_BOUND, {
          mass: 1,
          damping: 50,
          stiffness: 300,
        });
      }
    });

  const animatedBackground = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(
        initialScale.value === 1 ? "rgba(0,0,0,0.2)" : "transparent"
      ),
    };
  });

  const animatedInnerContainerStyle = useAnimatedStyle(() => {
    return {
      height: innerHeight.value,
    };
  });

  const animatedUpperContainerStyle = useAnimatedStyle(() => {
    const scaleYVal = interpolate(
      innerHeight.value,
      [LOWER_BOUND - 100, LOWER_BOUND, UPPER_BOUND, UPPER_BOUND + 100],
      [1.08, 1, 1, 1.08],
      Extrapolation.CLAMP
    );

    const scaleXVal = interpolate(
      innerHeight.value,
      [LOWER_BOUND - 100, LOWER_BOUND, UPPER_BOUND, UPPER_BOUND + 100],
      [0.95, 1, 1, 0.95],
      Extrapolation.CLAMP
    );

    const origin = interpolate(
      innerHeight.value,
      [UPPER_BOUND, LOWER_BOUND],
      [
        (UPPER_BOUND * (1 - scaleYVal)) / 2,
        -((UPPER_BOUND * (1 - scaleYVal)) / 2),
      ],
      Extrapolation.CLAMP
    );

    const translateY = interpolate(
      innerHeight.value,
      [LOWER_BOUND - 100, LOWER_BOUND, UPPER_BOUND, UPPER_BOUND + 100],
      [10, 0, 0, -10],
      Extrapolation.CLAMP
    );

    return {
      transform: [
        {
          scaleY: scaleYVal,
        },
        {
          scaleX: scaleXVal,
        },
        {
          translateY: origin,
        },
        {
          translateY: translateY,
        },
        {
          scale: withTiming(initialScale.value),
        },
      ],
    };
  });

  return (
    <ImageBackground
      source={require("../assets/images/blur-back.png")}
      style={{ flex: 1 }}
    >
      <GestureHandlerRootView>
        <View style={styles.container}>
          <Animated.View
            style={[StyleSheet.absoluteFillObject, animatedBackground]}
          />
          <GestureDetector gesture={pan}>
            <Animated.View
              onTouchStart={() => (initialScale.value = 1)}
              onTouchEnd={() => (initialScale.value = 0.8)}
              style={[styles.mainContainer, animatedUpperContainerStyle]}
            >
              <BlurView
                style={[
                  StyleSheet.absoluteFillObject,
                  { backgroundColor: "rgba(0,0,0,0.4)" },
                ]}
                tint="dark"
              />
              <Animated.View
                style={[styles.innerContainer, animatedInnerContainerStyle]}
              >
                <BlurView
                  style={[
                    StyleSheet.absoluteFillObject,
                    { backgroundColor: "rgba(255,255,255,0.8)" },
                  ]}
                  tint="light"
                />
              </Animated.View>
            </Animated.View>
          </GestureDetector>
        </View>
      </GestureHandlerRootView>
    </ImageBackground>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mainContainer: {
    borderRadius: BORDER_RADIUS,
    height: HEIGHT,
    width: WIDTH,
    overflow: "hidden",
    justifyContent: "flex-end",
  },
  innerContainer: {
    width: WIDTH,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: "white",
  },
});
