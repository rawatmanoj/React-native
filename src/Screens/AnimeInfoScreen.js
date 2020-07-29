/* eslint-disable react/self-closing-comp */
import React, {useEffect} from 'react';
import {View, Text, StyleSheet, StatusBar, ImageBackground} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Image} from 'react-native-elements';
import {deviceHeight, deviceWidth} from '../api/Constants';
import LinearGradient from 'react-native-linear-gradient';
import {shortAnimeName} from '../api/utils';
import AnimeTabView from '../Components/Home/Anime/TabView';
import {getAnime} from '../api/apicalls';
import {useDispatch, useSelector} from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
const AnimeInfoScreen = () => {
  const dispatch = useDispatch();
  console.log('AnimeInfoSCreen');

  const anime = useSelector((state) => state.getAnime);

  useEffect(() => {
    const fetchData = async () => {
      const animeInfo = await getAnime(anime.currentAnime);
      console.log(animeInfo);

      dispatch({
        type: 'CURRENT_ANIME_INFO',
        payload: animeInfo.Media,
      });
    };

    fetchData();
  }, [anime.currentAnime, dispatch]);

  return (
    <View style={styles.pageContainer}>
      <View style={styles.animeContainer}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        {anime.currentAnimeInfo ? (
          <View>
            <ImageBackground
              source={{uri: anime.currentAnimeInfo.bannerImage}}
              style={styles.imageBackgroundStyle}
              resizeMode="cover">
              <LinearGradient
                colors={['transparent', '#191724']}
                start={{x: 0.5, y: 0.5}}
                style={styles.container1}></LinearGradient>
            </ImageBackground>
            <View style={styles.smallImage}>
              <Image
                source={{uri: anime.currentAnimeInfo.coverImage.medium}}
                style={styles.imageStyle}
                resizeMode="contain"></Image>
            </View>
          </View>
        ) : null}
        {anime.currentAnimeInfo ? (
          <View style={styles.lowerPart}>
            <View style={styles.animeNameView}>
              <Text style={styles.animeNameStyle}>
                {shortAnimeName(anime.currentAnimeInfo.title.userPreferred, 30)}
              </Text>
              <Text style={styles.dateStyle}>
                {anime.currentAnimeInfo.seasonYear
                  ? anime.currentAnimeInfo.seasonYear + ' | '
                  : null}

                {anime.currentAnimeInfo.status}
              </Text>
            </View>
          </View>
        ) : null}
        {anime.currentAnimeInfo ? (
          <View style={styles.popularityContainer}>
            <View style={styles.popularityIcon}>
              <Ionicons
                // style={{}}
                name={'heart'}
                size={22}
                color={'tomato'}
              />
              <Text style={styles.scoreStyles}>
                {anime.currentAnimeInfo.averageScore
                  ? anime.currentAnimeInfo.averageScore.toFixed(0) + '%'
                  : '0%'}
              </Text>
            </View>
            <Text style={styles.rankStyles}>
              Rank {anime.currentAnimeInfo.rankings[0].rank}
            </Text>
          </View>
        ) : null}
      </View>
      <View style={styles.navStyles}>
        <AnimeTabView />
      </View>
    </View>
  );
};

export default AnimeInfoScreen;

const styles = EStyleSheet.create({
  imageBackgroundStyle: {
    width: deviceWidth,
    height: deviceWidth * 0.5,
  },
  rankStyles: {color: '#605D74', fontFamily: 'Lato-Bold', fontSize: 22},
  popularityContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    height: deviceHeight * 0.075,
    width: deviceWidth,
    justifyContent: 'space-evenly',
  },
  popularityIcon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageStyle: {
    width: 122,
    height: 150,
    borderRadius: 8,
  },
  pageContainer: {
    flex: 1,
  },
  smallImage: {
    // position: 'relative',
    position: 'absolute',
    left: deviceWidth / 2 - 185,
    top: deviceHeight * 0.18,
  },
  container1: {
    flex: 1,
  },
  scoreStyles: {
    paddingLeft: 3,
    color: '#605D74',
    fontFamily: 'RobotoSlab-Bold',
    fontSize: 22,
  },
  animeNameStyle: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Lato-Bold',
    //fontWeight: '700',
  },
  lowerPart: {
    marginTop: 13,
    width: deviceWidth,
    height: 90,
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  animeNameView: {
    width: deviceWidth / 2,
    marginRight: deviceWidth * 0.14,
    alignSelf: 'flex-end',
    // alignItems: 'flex-end',
  },
  dateStyle: {
    color: 'grey',
    fontSize: 15,
    fontFamily: 'Lato-Bold',
  },
  navStyles: {
    flex: 3,
    // position: 'absolute',
  },
  animeContainer: {
    flex: 3,
    alignItems: 'center',
    backgroundColor: '#191725',
  },
});
