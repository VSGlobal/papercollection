import React from 'react'
import {View, Animated} from 'react-native'

const Animation = () => {
  // Create animated values for opacity and translateY
  const opacity = useState(new Animated.Value(0))[0]
  const translateY = useState(new Animated.Value(100))[0]

  // Function to trigger the fade-in and slide-up animation
  const fadeIn = () => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500, // 2 seconds
        useNativeDriver: true, // Add this for better performance
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 500, // 2 seconds
        useNativeDriver: true, // Add this for better performance
      }),
    ]).start()
  }

  useEffect(() => {
    // Call the fadeIn function after a delay (e.g., 1000ms) to trigger the animation
    const animationTimeout = setTimeout(fadeIn, 100)

    return () => {
      // Clear the timeout to prevent memory leaks when the component unmounts
      clearTimeout(animationTimeout)
    }
  }, [])

  return (
    <Animated
      style={{
        opacity: opacity,
        transform: [{translateY: translateY}],
      }}></Animated>
  )
};
export default Animation;