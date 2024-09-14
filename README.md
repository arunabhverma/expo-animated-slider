# iOS Control Center Style Slider

This project demonstrates a custom iOS Control Center style slider, built using [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/) and [react-native-gesture-handler](https://docs.swmansion.com/react-native-gesture-handler/). The slider emulates the smooth and responsive experience found in iOS, with interactive scaling and stretchy effects to enhance user interaction.

Check out the slider in action 👇:

| iOS                                                                                                                        |
|--------------------------------------------------------------------------------------------------------------------------------|
| <video src="https://github.com/user-attachments/assets/8dc599ed-1f51-4db3-b62c-ff95ab7be500" /> |

| Android                                                                                                                        |
|--------------------------------------------------------------------------------------------------------------------------------|
| <video src="https://github.com/user-attachments/assets/55fb297b-8aab-4f41-806c-78ff3a8b6835" /> |






## Features

- **Interactive Scaling on Touch**: The slider scales up when pressed, providing responsive feedback. This effect is powered by `react-native-reanimated`, making interactions smooth and natural.
- **Gesture-Driven Slider Movement**: The slider responds to gestures using `react-native-gesture-handler`, allowing users to drag and control the slider with precision.
- **Stretchy Slider Effect**: Animating `scaleX` and `scaleY` properties adds a stretchy, elastic feel to the slider as it moves, mimicking the fluid transitions of iOS controls.
- **Blurred Background**: The slider container includes a blurred background using [Expo Blur](https://docs.expo.dev/versions/latest/sdk/blur-view/), which creates a native, polished appearance reminiscent of the iOS Control Center.
- **Cross-Platform Support**: Although inspired by iOS design, the slider works smoothly on both Android and iOS, ensuring a consistent experience across platforms.

## How It Works

- **Touch Scaling Animation**: When the slider is pressed, a scale-up animation on the X and Y axes (`scaleX` and `scaleY`) is triggered. This is handled using `react-native-reanimated`, adding subtle visual feedback during interaction.
  
- **Gesture Handling**: `react-native-gesture-handler` captures touch and drag gestures, allowing users to control the slider's position with smooth and responsive motion.

- **Stretchy Feel**: As the slider is dragged, animated scaling creates a stretchy, dynamic effect, enhancing the overall interaction. The slider returns to its original state when the gesture ends, maintaining a smooth, fluid transition.

- **Blur Effect**: The blurred background, implemented with [Expo Blur](https://docs.expo.dev/versions/latest/sdk/blur-view/), provides a polished, native look to the slider container, particularly on iOS.

## Related

Check out the my Twitter post: [https://x.com/iamarunabh/status/1835013571203547267](https://x.com/iamarunabh/status/1835013571203547267)

## Contributions

Contributions are welcome! If you'd like to improve the animations, refine gesture handling, or add new features, feel free to open a pull request (PR).

## Acknowledgments

- **[Expo](https://expo.dev/)**: For providing the tools that power this cross-platform project.
- **[Reanimated](https://docs.swmansion.com/react-native-reanimated/)**: For smooth, interactive animations.
- **[Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/)**: For managing gesture-based interactions.
- **[Expo Blur](https://docs.expo.dev/versions/latest/sdk/blur-view/)**: For the native blur effect that enhances the UI.

---

Feel free to contribute or provide feedback!
