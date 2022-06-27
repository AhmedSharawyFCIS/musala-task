import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useDispatch, useSelector } from 'react-redux';
import Wrapper from '../../components/wrapper';
import * as Actions from '../../redux/actions';
import { AppDispatch, State } from '../../redux/types';
import { colors, commonStyles } from '../../theme';
import { NewsParams, Obj } from '../../types';
import NewsItem from './newsItem';
import Search from './search';
import { setTimeoutType } from './types';
const News: React.FC = (props) => {
  const { navigation } = props;
  const dispatch: AppDispatch = useDispatch();
  const timer = useRef<setTimeoutType>();
  const [searchText, setSearchText] = useState<string>('');
  const [refresh, setRefresh] = useState<Boolean>(false);
  const { news, loadingGetNews, errorGetNews } = useSelector(
    (state: State) => state.news
  );

  const getNews = useCallback(
    async (isRefresh: Boolean = false, params: NewsParams = { q: 'tesla' }) => {
      try {
        setRefresh(isRefresh);
        await dispatch(Actions.getNews(isRefresh, params));
      } catch (error) {
      } finally {
        setRefresh(false);
      }
    },
    [dispatch]
  );

  useEffect(() => {
    getNews();
  }, [getNews]);

  useEffect(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    if (searchText.length > 0) {
      timer.current = setTimeout(() => {
        getNews(false, { q: searchText });
      }, 500);
    } else {
      getNews();
    }
  }, [searchText, getNews]);

  const renderNewsItem = ({ item }: { item: Obj }) => {
    const { title, urlToImage } = item;
    return (
      <NewsItem
        image={urlToImage}
        title={title}
        onPressCB={() => navigation.navigate('newsDetails', { item })}
      />
    );
  };
  return (
    <View style={[commonStyles.flex]}>
      <Search searchText={searchText} setSearchTextCB={setSearchText} />
      <Wrapper
        loading={loadingGetNews}
        error={errorGetNews}
        data={news}
        onRefresh={() => getNews()}
      >
        <FlatList
          keyExtractor={(_, index) => index?.toString()}
          data={news}
          renderItem={renderNewsItem}
          contentContainerStyle={styles.flatList}
          refreshControl={
            <RefreshControl
              colors={[colors.primary]}
              tintColor={colors.primary}
              refreshing={refresh}
              onRefresh={() => getNews(true)}
            />
          }
        />
      </Wrapper>
    </View>
  );
};

export default News;

const styles = StyleSheet.create({
  flatList: {
    paddingBottom: RFValue(20),
  },
});
