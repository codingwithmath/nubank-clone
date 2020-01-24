import React from 'react';

import { 
  Container, TabsContainer, TabsItem, TabsOrganizer, TabsText 
} from './styles';

import { MaterialIcons } from '@expo/vector-icons'

export default function Tabs({ translateY }) {
  return (
    <Container style={{
      opacity: translateY.interpolate({
        inputRange: [0, 380],
        outputRange: [1, 0],
        extrapolate: 'clamp',
      }),
      marginBottom: translateY.interpolate({
        inputRange: [0, 380],
        outputRange: [20 , 0]
      }),
      marginTop: translateY.interpolate({
        inputRange: [0, 380],
        outputRange: [1 , 0]
      })
    }}>
      <TabsContainer>
        <TabsItem>
          <MaterialIcons name="person-add" size={24} color="#FFF" />
          <TabsText>Indicar amigos</TabsText>  
        </TabsItem>
        <TabsItem>
          <MaterialIcons name="smartphone" size={24} color="#FFF" />
          <TabsText>Recarga de celular</TabsText>  
        </TabsItem>
        <TabsItem>
          <MaterialIcons name="chat-bubble-outline" size={24} color="#FFF" />
          <TabsText>Cobrar</TabsText>  
        </TabsItem>
        <TabsItem>
          <MaterialIcons name="arrow-downward" size={24} color="#FFF" />
          <TabsText>Depositar</TabsText>  
        </TabsItem>
        <TabsItem>
          <MaterialIcons name="arrow-upward" size={24} color="#FFF" />
          <TabsText>Transferir</TabsText>  
        </TabsItem>
        <TabsItem>
          <MaterialIcons name="help-outline" size={24} color="#FFF" />
          <TabsText>Me ajuda</TabsText>  
        </TabsItem>
        <TabsItem>
          <MaterialIcons name="library-books" size={24} color="#FFF" />
          <TabsText>Pagar</TabsText>  
        </TabsItem>
        <TabsItem>
          <MaterialIcons name="lock-open" size={24} color="#FFF" />
          <TabsText>Bloquear Cartão</TabsText>  
        </TabsItem>
        <TabsOrganizer>
          <MaterialIcons name="sort" size={24} color="#FFF" />
          <TabsText>Organizar atalhos</TabsText>  
        </TabsOrganizer>
      </TabsContainer>
    </Container>
  );
}
