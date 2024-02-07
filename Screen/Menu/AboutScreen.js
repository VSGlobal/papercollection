import React from 'react'
import {View, Text, ScrollView, StyleSheet} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import NavbarScreen from '../Components/NavbarScreen'
import {useTheme} from '../Components/ThemeContext'
const AboutScreen = ({navigation}) => {
  const {theme} = useTheme()
  return (
    <View style={[styles.spr_container, {backgroundColor: theme.bg}]}>
      <NavbarScreen navigation={navigation} pdfTitle='About Us' />
      <ScrollView showsVerticalScrollIndicator={false} style={{width: '90%'}}>
        <Text style={[styles.text, {color: theme.t}]}>
          Welcome to our study app, where we aim to empower students by
          providing a comprehensive platform for exam preparation and study
          material.
          {'\n'}
          {'\n'}We understand the challenges students face when searching for
          government exam old papers and books scattered across the internet.
          That's why we've created an all-in-one solution to make your study
          journey smoother and more efficient.
          {'\n'}
          {'\n'}
          Our app brings together a vast collection of government exam old
          papers, ensuring easy access to valuable resources. With just a few
          taps, you can dive into a treasure trove of past papers, allowing you
          to assess your progress, identify areas for improvement, and gain
          confidence in your exam readiness.
          {'\n'}
          {'\n'}
          But that's not all. We go beyond just old papers. Our app also offers
          an extensive library of books carefully curated to help you strengthen
          your exam preparation. Whether you're seeking reference material or
          comprehensive study guides, our collection covers a wide range of
          subjects and topics. Now, you can have all the resources you need at
          your fingertips, eliminating the hassle of searching through multiple
          sources.
          {'\n'}
          {'\n'}
          One of the standout features of our app is the quiz functionality,
          designed to help you gauge your knowledge and test your understanding.
          Engage in interactive quizzes, track your performance, and receive
          instant feedback, allowing you to identify areas of strength and areas
          that require more focus. Our quiz feature serves as a valuable
          self-assessment tool, enabling you to fine-tune your preparation
          strategy.
          {'\n'}
          {'\n'}
          We also understand the importance of college education, and that's why
          our app includes college books and college exam papers as well.
          Whether you're pursuing higher studies or preparing for college exams,
          our app provides a comprehensive collection of resources tailored to
          meet your academic needs.
          {'\n'}
          {'\n'}
          With a clean and intuitive user interface, our app ensures a seamless
          and user-friendly experience. Navigating through the app is
          effortless, allowing you to focus on what matters most – your studies.
          We've prioritized simplicity and ease of use, so you can quickly find
          the study material you need and make the most of your valuable study
          time.
          {'\n'}
          {'\n'}
          Our ultimate goal is to assist every student who is currently
          struggling to find study material from friends or the internet. We
          believe that education should be accessible to all, and our app is
          built on the foundation of making quality study resources readily
          available to students. With our app, you no longer have to spend
          countless hours searching for materials or rely solely on external
          sources. We're here to support you on your educational journey, making
          your exam preparation more convenient, efficient, and effective.
          {'\n'}
          {'\n'}
          {'\n'}
          Download our study app today and embark on a path of academic success.
          Empower yourself with comprehensive resources, enhance your exam
          preparation, and unlock your true potential. Together, let's make your
          educational aspirations a reality :)
        </Text>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  spr_container: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    marginTop: 80,
    margin: 0,
    paddingBottom: 20,
    letterSpacing: 0.5,
    textAlign: 'justify',
    lineHeight: 28,
    fontFamily: 'Ubuntu-Regular',
  },
})

export default AboutScreen
