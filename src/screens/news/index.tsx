import React, { useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Wrapper from '../../components/wrapper';
import * as Actions from '../../redux/actions';
import { AppDispatch, State } from '../../redux/types';
import { commonStyles } from '../../theme';
import { NewsParams, Obj } from '../../types';
import NewsItem from './newsItem';
const News: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { news, loadingGetNews, errorGetNews } = useSelector(
    (state: State) => state.news
  );
  useEffect(() => {
    getNews();
  }, []);

  const getNews = async (
    isRefresh: Boolean = false,
    params: NewsParams = { q: 'tesla' }
  ) => {
    try {
      await dispatch(Actions.getNews(isRefresh, params));
    } catch (error) {}
  };

  const renderNewsItem = ({ item }: { item: Obj }) => {
    const { title, urlToImage } = item;
    return <NewsItem image={urlToImage} title={title} />;
  };
  return (
    <View style={[commonStyles.flex]}>
      <Text>News</Text>
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
        />
      </Wrapper>
    </View>
  );
};

export default News;

const styles = StyleSheet.create({});
