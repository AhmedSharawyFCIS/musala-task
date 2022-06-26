import React from 'react';

export interface Props {
  loading: Boolean;
  error: Boolean;
  data: Array<{ [key: string]: string }>;
  children: React.ReactNode;
  onRefresh: Function;
}
