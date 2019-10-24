import React from 'react';

import MeetupItem from './MeetupItem';
import { List } from './styles';

export default function MeetupList({
  data,
  fieldKey,
  onAction,
  onActionLabel,
  ...rest
}) {
  return (
    <List
      {...rest}
      data={data}
      keyExtractor={item => String(item[fieldKey])}
      renderItem={({ item }) => (
        <MeetupItem
          meetup={item}
          onAction={onAction}
          onActionLabel={onActionLabel}
        />
      )}
    />
  );
}
