import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { Alert, RefreshControl } from 'react-native';
import { Icon } from 'native-base';
import { format, parseISO, addDays, subDays } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import PropTypes from 'prop-types';

import api from '~/services/api';

import Background from '~/components/Background';
import Header from '~/components/Header';
import ButtonOpacity from '~/components/ButtonOpacity';
import MeetupList from '~/components/MeetupList';
import ListEmpty from '~/components/ListEmpty';
import {
  Container,
  SelectDateContainer,
  DateSelected,
  Content,
} from './styles';

// TODO - Maycon - Refatorar - utilizar o Redux para os componentes Dashboard e Subscriptions
// ao alterar entre tabs o effect/ciclo de vida nao eh disparado - forçando o usuário a atualizar manualmente
export default function Dashboard() {
  const [date, setDate] = useState(new Date());
  const [loading, setLoading] = useState(true);
  const [meetups, setMeetups] = useState([]);
  const [page, setPage] = useState(1);
  const dateFormatted = useMemo(() => {
    return format(date, "dd 'de' MMMM", { locale: pt });
  }, [date]);

  const loadMeetups = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await api.get('/meetups', {
        params: { date, page },
      });

      const dataMeetups = data.map(mt => {
        return {
          ...mt,
          dateFormatted: format(parseISO(mt.date), "dd 'de' MMMM', às' HH", {
            locale: pt,
          }),
        };
      });

      setMeetups(m => (page === 1 ? dataMeetups : [...m, ...dataMeetups]));
    } catch (err) {
      Alert.alert(err.response.data.error);
    } finally {
      setLoading(false);
    }
  }, [date, page]);

  function addDate() {
    setDate(addDays(date, 1));
    setPage(1);
  }
  function subDate() {
    setDate(subDays(date, 1));
    setPage(1);
  }

  useEffect(() => {
    loadMeetups();
  }, [loadMeetups]);

  async function onSubscribe(id) {
    try {
      await api.post(`/meetups/${id}/subscribe`);
      Alert.alert('Inscrição realizada com sucesso');
    } catch (err) {
      Alert.alert(err.response.data.error);
    }
  }

  return (
    <Background>
      <Header />
      <Container>
        <SelectDateContainer>
          <ButtonOpacity onPress={subDate} icon="chevron-left" iconSize={40} />
          <DateSelected>{dateFormatted}</DateSelected>
          <ButtonOpacity onPress={addDate} icon="chevron-right" iconSize={40} />
        </SelectDateContainer>

        <Content>
          <MeetupList
            data={meetups}
            fieldKey="id"
            onAction={onSubscribe}
            onActionLabel="Realizar Inscrição"
            onEndReachedThreshold={0.4}
            onEndReached={({ distanceFromEnd }) => {
              if (distanceFromEnd > 0) {
                setPage(page + 1);
              }
            }}
            refreshControl={
              <RefreshControl
                refreshing={loading}
                onRefresh={() => setPage(1)}
                // title="Arraste para atualizar"
                tintColor="#fff"
                titleColor="#fff"
              />
            }
            ListEmptyComponent={<ListEmpty />}
          />
        </Content>
      </Container>
    </Background>
  );
}

const IconTab = ({ tintColor }) => (
  <Icon
    type="FontAwesome"
    name="list-ul"
    style={{ fontSize: 20, color: tintColor }}
  />
);

IconTab.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

Dashboard.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: props => <IconTab {...props} />,
};
