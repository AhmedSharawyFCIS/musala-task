import moment from 'moment';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import CustomImage from '../../components/customImage';
import { translate } from '../../helpers';
import { commonStyles } from '../../theme';
import { Props } from './types';

const NewsDetails: React.FC<Props> = (props) => {
  const { item } = props.route?.params;
  const { urlToImage, title, description, content, author, publishedAt } = item;

  const renderSection = (header: string, text: string) => (
    <View style={styles.sectionContainer}>
      <Text style={styles.header2}>{header}</Text>
      <Text>{text}</Text>
    </View>
  );
  return (
    <ScrollView contentContainerStyle={commonStyles.flexGrow}>
      <CustomImage url={urlToImage} style={styles.img} />
      <View style={styles.content}>
        <Text style={styles.header1}>{title}</Text>
        {renderSection(translate('description'), description)}
        {renderSection(translate('content'), content)}
        {renderSection(translate('author'), author)}
        {renderSection(
          translate('published-at'),
          moment(publishedAt).format('DD/MM/YYYY')
        )}
      </View>
    </ScrollView>
  );
};

export default NewsDetails;

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: RFValue(200),
  },
  content: {
    margin: RFValue(10),
  },
  sectionContainer: {
    marginTop: RFValue(10),
  },
  header1: {
    fontWeight: '600',
    fontSize: RFValue(16),
  },
  header2: {
    fontWeight: '700',
    marginBottom: RFValue(2),
  },
});
