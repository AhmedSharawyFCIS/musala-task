import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { FlatList, RefreshControl, StyleSheet, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useDispatch, useSelector } from 'react-redux';
import Wrapper from '../../components/wrapper';
import * as Actions from '../../redux/actions';
import { AppDispatch, State } from '../../redux/types';
import { colors, commonStyles } from '../../theme';
import { NewsParams, NewsData } from '../../types';
import NewsItem from './newsItem';
import Search from './search';
import { setTimeoutType } from './types';
const News: React.FC = () => {
  const navigation = useNavigation();
  const dispatch: AppDispatch = useDispatch();
  const timer = useRef<setTimeoutType>();
  const [searchText, setSearchText] = useState<string>('');
  const [refresh, setRefresh] = useState<boolean>(false);
  const { news, loadingGetNews, errorGetNews } = useSelector(
    (state: State) => state.news
  );

  const getNews = async (isRefresh: boolean = false) => {
    const params: NewsParams = { q: searchText || 'tesla' };
    try {
      setRefresh(isRefresh);
      await dispatch(Actions.getNews(isRefresh, params));
    } catch (error) {
    } finally {
      setRefresh(false);
    }
  };

  useEffect(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    if (searchText) {
      timer.current = setTimeout(() => {
        getNews();
      }, 500);
    } else {
      getNews();
    }
  }, [searchText]);

  const renderNewsItem = ({ item }: { item: NewsData }) => {
    const { title, urlToImage } = item;
    return (
      <NewsItem
        image={urlToImage!}
        title={title}
        onPressCB={() =>
          navigation.navigate('newsDetails' as never, { ...item } as never)
        }
      />
    );
  };
  return (
    <View style={commonStyles.flex}>
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
