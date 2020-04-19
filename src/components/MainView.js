import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Swiper from 'react-native-swiper';
import MainCard from './MainCard';

const MainView = () => {
  return (
    <Swiper
      loop={false}
      showsPagination={false}
    >
      <MainCard balType='Spent' />
      <MainCard balType='Saved' />
    </Swiper>
  )
}

export default MainView

const styles = StyleSheet.create({})
