import React from 'react';

export interface Props {
  loading: boolean;
  error: boolean;
  data: Array<{ [key: string]: string }>;
  children: React.ReactNode;
  onRefresh: Function;
}
