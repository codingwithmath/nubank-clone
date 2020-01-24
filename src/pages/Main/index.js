import React from 'react';
import { Animated } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { PanGestureHandler, State } from 'react-native-gesture-handler'


import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import Menu from '../../components/Menu';


import { 
  Container, 
  Content, 
  Card, 
  CardHeader,
  CardHeaderTitle,
  CardHeaderText, 
  CardContent, 
  Title,
  Description, 
  CardFooter,
  CardFooterContent,
  CardFooterMessage,
  CardFooterIcon,
  Annotation 
} from './styles';

export default function Main() {
  let offset = 0;

  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY
        }
      }
    ],
    { userNativeDrive: true },
  )

  function onHandlerStateChange(e) {
    if(e.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const { translationY } = e.nativeEvent;

      offset += translationY;

      if (translationY >= 100) {
        opened = true
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 480 : 0,
        duration: 200,
      }).start(() =>{
        offset = opened ? 480 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      }); 
    }
  }

  return (
    <Container>
      <Header/>
      <Content>
        <Menu  translateY={translateY}/>
        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChange}
        >
          <Card style={{
            transform: [{
              translateY: translateY.interpolate({
                inputRange: [0, 430],
                outputRange: [0, 570],
                extrapolate: 'clamp'
              })
            }]
          }}>
            <CardHeader>
              <CardHeaderTitle>
              <MaterialIcons name="attach-money" size={28} color="#999" />
              <CardHeaderText>NuConta</CardHeaderText>
              </CardHeaderTitle>
              <MaterialIcons name="visibility-off" size={28} color="#999" />
            </CardHeader>
            <CardContent>
              <Title>Saldo disponível</Title>
              <Description> R$ 200.000,69 </Description>
            </CardContent>
            <CardFooter>
              <CardFooterContent>
                <CardFooterMessage>
                  <MaterialIcons name="smartphone" size={28} color="#999" />
                  <Annotation>
                    Recarga de R$ 10,00 efetuada no numero (11) 99999-9999 ontem
                  </Annotation>
                </CardFooterMessage>
                <CardFooterIcon>
                  <MaterialIcons name="keyboard-arrow-right" size={24} color="#999" />
                </CardFooterIcon>
              </CardFooterContent>
            </CardFooter>
          </Card>
        </PanGestureHandler>  
      </Content>
      <Tabs translateY={translateY}/>
    </Container>
  );
}
