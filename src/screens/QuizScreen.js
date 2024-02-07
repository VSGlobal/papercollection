import React, {useState, useEffect} from 'react'
import {
  View,
  Share,
  Linking,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
  Animated,
  Text,
  Dimensions,
} from 'react-native'
import styles from '../../Style/quiz'
import HapticFeedback from 'react-native-haptic-feedback'

import {useNavigation} from '@react-navigation/native' // Import the useNavigation hook
import {NavigationContainer} from '@react-navigation/native'
import NavbarScreen from '../../Screen/Components/NavbarScreen'
import {useTheme} from '../../Screen/Components/ThemeContext'
const QuizScreen = ({navigation, route}) => {
  const {theme} = useTheme()
  const [quizData, setQuizData] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null)
  const [score, setScore] = useState(0)
  const [timer, setTimer] = useState({minutes: 0, seconds: 0})
  const [timerInterval, setTimerInterval] = useState(null)
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false)
  const [questionAnswered, setQuestionAnswered] = useState(false)
  const [correctOptionIndex, setCorrectOptionIndex] = useState(null)
  const [rightAnswerCount, setRightAnswerCount] = useState(0)
  const [wrongAnswerCount, setWrongAnswerCount] = useState(0)

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

  useEffect(() => {
    // Fetch quiz data from the local file
    const data = require('../questions.json')
    // Shuffle the quizData array before setting it in the state
    const shuffledData = shuffleArray(data)
    setQuizData(shuffledData)

    // Start the timer when the component mounts
    startTimer()

    // Clean up the timer interval when the component unmounts
    return () => clearInterval(timerInterval)
  }, [])

  const shuffleArray = array => {
    // Create a copy of the original array to avoid modifying the original data
    const newArray = [...array]

    // Fisher-Yates shuffle algorithm
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
    }

    return newArray
  }

  useEffect(() => {
    // Check if all questions are answered and stop the timer
    if (currentQuestionIndex === quizData.length) {
      clearInterval(timerInterval)
    }
  }, [currentQuestionIndex, quizData.length])

  const startTimer = () => {
    setTimer({minutes: 0, seconds: 0})

    // Start the timer interval
    const interval = setInterval(() => {
      setTimer(prevTimer => {
        const newSeconds = prevTimer.seconds + 1
        const newMinutes = prevTimer.minutes + Math.floor(newSeconds / 60)
        return {minutes: newMinutes, seconds: newSeconds % 60}
      })
    }, 1000)

    setTimerInterval(interval)
  }

  const handleRestartQuiz = () => {
    // Reset the quiz and go back to the first question
    setCurrentQuestionIndex(0)
    setSelectedOptionIndex(null)
    setScore(0)
    // Restart the timer when the quiz is restarted
    startTimer()
  }

  const checkAnswer = optionIndex => {
    if (questionAnswered) {
      return // Return early if the question has already been answered
    }

    setSelectedOptionIndex(optionIndex)
    HapticFeedback.trigger('impactMedium')
    // Stop the timer when the user clicks on an option
    clearInterval(timerInterval)

    // Check if the selected option is correct
    const isCorrect =
      optionIndex === quizData[currentQuestionIndex].correctAnswer
    setIsAnswerCorrect(isCorrect)

    // Set the correct option index
    setCorrectOptionIndex(quizData[currentQuestionIndex].correctAnswer)

    // If the selected option is correct, update the score
    if (isCorrect) {
      setScore(prevScore => prevScore + 1)
      setRightAnswerCount(count => count + 1)
    } else {
      setWrongAnswerCount(count => count + 1)
    }

    // Mark the question as answered
    setQuestionAnswered(true)
  }

  const handleNextQuestion = () => {
    // Move to the next question or show the result screen if all questions are answered
    setSelectedOptionIndex(null)
    setQuestionAnswered(false) // Reset the questionAnswered state for the next question
    setCorrectOptionIndex(null) // Reset the correctOptionIndex for the next question
    HapticFeedback.trigger('impactMedium')
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1)
      // Restart the timer for the next question
      startTimer()
    } else {
      // Show the result screen if all questions are answered
      setCurrentQuestionIndex(quizData.length)
      // Stop the timer when all questions are answered
    }
  }

  // Calculate the total count of questions (right answer + wrong answer)
  const totalCount = rightAnswerCount + wrongAnswerCount

  // Calculate the width of the green and red bars
  const greenWidth =
    totalCount !== 0 ? (rightAnswerCount / totalCount) * 100 : 0
  const redWidth = totalCount !== 0 ? (wrongAnswerCount / totalCount) * 100 : 0

  // Use the useNavigation hook to access the navigation object

  // Function to handle the "Wrong Answer" button press
  const handleWrongAnswer = () => {
    const currentQuestion = quizData[currentQuestionIndex].question
    const currentAnswer =
      quizData[currentQuestionIndex].options[correctOptionIndex]
    const currentQuestionAndAnswer = `Question: ${currentQuestion}\nAnswer: ${currentAnswer}`

    // Navigate to the ContactScreen and pass the currentQuestionAndAnswer as a parameter
    navigation.navigate('Contact', {currentQuestionAndAnswer})
  }

  return (
    <View style={[styles.spr_container, {backgroundColor: theme.bg}]}>
      {currentQuestionIndex < quizData.length ? (
        <View style={styles.spr_container_1}>
          <View style={styles.container}>
            <NavbarScreen navigation={navigation} pdfTitle='Quiz' />
            <View style={styles.listContainer0}>
              {/* <Text style={styles.timerText}>
              {timer.minutes.toString().padStart(2, '0')}:{timer.seconds.toString().padStart(2, '0')}
            </Text> */}
              <View style={styles.progressBarContainer}>
                <View style={styles.progressBar}>
                  <View
                    style={[styles.greenProgress, {width: `${greenWidth}%`}]}
                  />
                  <View style={[styles.redProgress, {width: `${redWidth}%`}]} />
                </View>
                <View style={styles.progressTextContainer}>
                  <Text style={styles.timerText}>
                    {timer.minutes.toString().padStart(2, '0')}:
                    {timer.seconds.toString().padStart(2, '0')}
                  </Text>
                </View>
              </View>
              <Text style={styles.gkText}>Based on India GK</Text>
              <Text style={styles.questionText}>
                {quizData[currentQuestionIndex].question}
              </Text>
              <Animated.View
                style={{
                  opacity: opacity,
                  transform: [{translateY: translateY}],
                }}>
                {quizData[currentQuestionIndex].options.map((option, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.optionButton,
                      selectedOptionIndex === index &&
                        (isAnswerCorrect
                          ? styles.correctOption
                          : styles.wrongOption),
                      index === correctOptionIndex && styles.correctOption,
                      questionAnswered && {opacity: 0.5},
                    ]}
                    onPress={() => checkAnswer(index)}>
                    <Text style={styles.optionText}>{option}</Text>
                  </TouchableOpacity>
                ))}
              </Animated.View>
              <TouchableOpacity
                style={styles.submitButton}
                onPress={handleNextQuestion}
                disabled={!questionAnswered}>
                <Image
                  style={styles.next_btn}
                  source={require('../../assets/icons/nextqn2.png')}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.wrongAnswerButton}
              onPress={handleWrongAnswer}>
              <Text style={[styles.buttonText, {color: theme.bgI}]}>
                Wrong Answer
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width:'100%',
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: 60,
              backgroundColor: 'transparent',
            }}>
          
          </View>
        </View>
      ) : (
        <View>
          <Text style={styles.finalScoreText}>Your Final Score: {score}</Text>
          <TouchableOpacity
            style={styles.restartButton}
            onPress={handleRestartQuiz}>
            <Text style={styles.restartButtonText}>Restart Quiz</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}

export default QuizScreen
