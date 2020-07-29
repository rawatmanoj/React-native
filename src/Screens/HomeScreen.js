import React, {useEffect, useState} from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import HomeSlider from '../Components/Home/HomeSlider';
import {deviceWidth, deviceHeight} from '../api/Constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {TopAnime} from '../api/apicalls';

const HomeScreen = React.memo(() => {
  console.log('HomeScreen');

  const [state, setState] = useState({
    top: {
      topAnime: null,
      topManga: null,
      upcoming: null,
      topMovie: null,
      airing: null,
      trendingAnime: null,
      trendingMovie: null,
    },
  });
  useEffect(() => {
    const fetchData = async () => {
      const topAnime = await TopAnime('ANIME', 'SCORE_DESC', 'TV');
      const topMovie = await TopAnime('ANIME', 'SCORE_DESC', 'MOVIE');
      const topManga = await TopAnime('MANGA', 'FAVOURITES_DESC', 'MANGA');
      const trendingAnime = await TopAnime('ANIME', 'TRENDING_DESC', 'TV');
      const trendingMovie = await TopAnime('ANIME', 'TRENDING_DESC', 'MOVIE');

      setState({
        top: {
          topAnime: topAnime,
          topManga: topManga,
          topMovie: topMovie,
          trendingAnime: trendingAnime,
          trendingMovie: trendingMovie,
        },
      });
    };

    fetchData();
  }, []);
  return (
    <View style={styles.homeContainer}>
      <View style={styles.navbarConatiner}>
        <Text style={styles.appName}>animenation</Text>
        <View style={styles.searchContainer}>
          <StatusBar backgroundColor="#191725" barStyle="light-content" />
          <TouchableOpacity>
            <Ionicons name={'search'} size={20} color={'grey'} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo name={'dots-three-vertical'} size={20} color={'grey'} />
          </TouchableOpacity>
        </View>
      </View>

      {state.top.topMovie ? (
        <ScrollView>
          <HomeSlider
            name={'Trending anime'}
            compProp={state.top.trendingAnime}
          />
          <HomeSlider
            name={'Trending Movie'}
            compProp={state.top.trendingMovie}
          />
          <HomeSlider name={'Top anime'} compProp={state.top.topAnime} />
          <HomeSlider name={'Top manga'} compProp={state.top.topManga} />
          <HomeSlider name={'Top movie'} compProp={state.top.topMovie} />
        </ScrollView>
      ) : null}
    </View>
  );
});

const styles = EStyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#191725',
  },
  appName: {
    flex: 3,
    color: '#e84545',
    fontSize: '35rem',
    marginLeft: '10rem',
    fontFamily: 'Poppins-Regular',
  },
  searchContainer: {
    flex: 1,
    marginRight: '1rem',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  navbarConatiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: deviceWidth,
    height: deviceHeight * 0.1,
    backgroundColor: '#191725',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.9,
    shadowRadius: 4,
    elevation: 5,
    shadowColor: 'black',
  },
});

export default HomeScreen;
