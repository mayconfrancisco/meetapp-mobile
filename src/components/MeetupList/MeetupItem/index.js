import React from 'react';
import { Icon } from 'native-base';
import PropTypes from 'prop-types';

import Button from '~/components/Button';

import {
  Container,
  Image,
  Title,
  MeetupDetails,
  MeetupDetail,
  MeetupDetailText,
} from './styles';

export default function MeetupItem({ meetup, onAction, onActionLabel }) {
  return (
    <Container>
      <Image source={{ uri: meetup.banner.url }} />
      <MeetupDetails>
        <Title>{meetup.title}</Title>
        <MeetupDetail>
          <Icon
            type="MaterialIcons"
            name="today"
            style={{ fontSize: 20, color: '#999' }}
          />
          <MeetupDetailText>{meetup.dateFormatted}</MeetupDetailText>
        </MeetupDetail>
        <MeetupDetail>
          <Icon
            type="MaterialIcons"
            name="room"
            style={{ fontSize: 20, color: '#999' }}
          />
          <MeetupDetailText>{meetup.location}</MeetupDetailText>
        </MeetupDetail>
        <MeetupDetail>
          <Icon
            type="MaterialIcons"
            name="person"
            style={{ fontSize: 20, color: '#999' }}
          />
          <MeetupDetailText>
            Organizador: {meetup.promoter.name}
          </MeetupDetailText>
        </MeetupDetail>
        <Button onPress={() => onAction(meetup.id)}>{onActionLabel}</Button>
      </MeetupDetails>
    </Container>
  );
}

MeetupItem.propTypes = {
  meetup: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    banner: PropTypes.shape({
      url: PropTypes.string,
    }),
    dateFormatted: PropTypes.string,
    location: PropTypes.string,
    promoter: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
  onAction: PropTypes.func.isRequired,
  onActionLabel: PropTypes.string.isRequired,
};
