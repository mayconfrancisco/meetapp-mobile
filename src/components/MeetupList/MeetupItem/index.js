import React from 'react';
import { Icon } from 'native-base';

import Button from '~/components/Button';

import {
  Container,
  Image,
  Title,
  MeetupDetails,
  MeetupDetail,
  MeetupDetailText,
} from './styles';

export default function MeetupItem({ meetup }) {
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
        <Button onPress={() => {}}>Realizar Inscrição</Button>
      </MeetupDetails>
    </Container>
  );
}
