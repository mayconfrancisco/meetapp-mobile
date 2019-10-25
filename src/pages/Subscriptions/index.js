import React, { useState, useEffect } from 'react';
import { Alert, RefreshControl } from 'react-native';
import { Icon } from 'native-base';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import PropTypes from 'prop-types';

import api from '~/services/api';

import Background from '~/components/Background';
import Header from '~/components/Header';
import LoadingScreen from '~/components/LoadingScreen';
import MeetupList from '~/components/MeetupList';
import ListEmpty from '~/components/ListEmpty';
import { Container, Content } from './styles';

export default function Subscriptions() {
  const [loading, setLoading] = useState(true);
  const [meetups, setMeetups] = useState(true);

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
      Alert.alert(err.response.data.error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadMeetups();
  }, []);

  async function onSubscribe(id) {
    try {
      await api.delete(`/subscriptions/${id}`);
      setMeetups(meetups.filter(mt => mt.id !== id));
      Alert.alert('Inscrição cancelada com sucesso');
    } catch (err) {
      Alert.alert(err.response.data.error);
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
              ListEmptyComponent={<ListEmpty />}
              refreshControl={
                <RefreshControl
                  refreshing={loading}
                  onRefresh={loadMeetups}
                  title="Arraste para atualizar"
                  tintColor="#fff"
                  titleColor="#fff"
                />
              }
            />
          )}
        </Content>
      </Container>
    </Background>
  );
}

const IconTab = ({ tintColor }) => (
  <Icon
    type="FontAwesome"
    name="tag"
    style={{ fontSize: 20, color: tintColor }}
  />
);

IconTab.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

Subscriptions.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon: props => <IconTab {...props} />,
};
