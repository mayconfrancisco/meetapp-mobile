import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { Icon } from 'native-base';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

import api from '~/services/api';

import Background from '~/components/Background';
import Header from '~/components/Header';
import LoadingScreen from '~/components/LoadingScreen';
import MeetupList from '~/components/MeetupList';
import { Container, Content } from './styles';

export default function Subscriptions() {
  const [loading, setLoading] = useState(true);
  const [meetups, setMeetups] = useState(true);

  useEffect(() => {
    async function loadMeetups() {
      try {
        setLoading(true);
        const { data } = await api.get('/subscriptions');

        const dataMeetups = data.map(mtSubs => {
          return {
            ...mtSubs.Meetup,
            id: mtSubs.id,
            id_meetup: mtSubs.Meetup.id,
            dateFormatted: format(
              parseISO(mtSubs.Meetup.date),
              "dd 'de' MMMM', às' HH",
              {
                locale: pt,
              },
            ),
          };
        });

        setMeetups(dataMeetups);
      } catch (err) {
        Alert.alert(err.response.data.erro);
      } finally {
        setLoading(false);
      }
    }

    loadMeetups();
  }, []);

  async function onSubscribe(id) {
    try {
      await api.delete(`/subscriptions/${id}`);
      setMeetups(meetups.filter(mt => mt.id !== id));
      Alert.alert('Inscrição cancelada com sucesso');
    } catch (err) {
      console.tron.error(err.response.data.erro);
      Alert.alert(err.response.data.erro);
    }
  }

  return (
    <Background>
      <Header />
      <Container>
        <Content>
          {loading ? (
            <LoadingScreen />
          ) : (
            <MeetupList
              data={meetups}
              fieldKey="id"
              onAction={onSubscribe}
              onActionLabel="Cancelar inscrição"
            />
          )}
        </Content>
      </Container>
    </Background>
  );
}

Subscriptions.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon: ({ tintColor }) => (
    <Icon
      type="FontAwesome"
      name="tag"
      style={{ fontSize: 20, color: tintColor }}
    />
  ),
};
