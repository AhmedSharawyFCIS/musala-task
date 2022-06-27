export interface NewsItemProps {
  image: string;
  title: string;
  onPressCB: () => void;
}

export interface SearchProps {
  searchText: string;
  setSearchTextCB: (text: string) => void;
}

export type setTimeoutType = ReturnType<typeof setTimeout>;
