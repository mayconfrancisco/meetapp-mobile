import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #fff;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 20px;
`;

export const Image = styled.Image`
  height: 150px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;

export const MeetupDetails = styled.View`
  padding: 20px;
`;

export const MeetupDetail = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
`;

export const MeetupDetailText = styled.Text`
  margin-left: 5px;
  font-size: 13px;
  color: #999;
`;
