import { Animated } from 'react-native' 
import styled from 'styled-components/native';


export const Container = styled.View`
  flex: 1;
  background: #8810ae;
  justify-content: center;
`;

export const Content = styled.View`
  flex: 1;
  max-height: 600px;
  z-index: 5;
`;

export const Card = styled(Animated.View)`
  flex: 1;
  background: #FFF;
  max-height: 370px;
  border-radius: 4px;
  margin: 55px 20px;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0px;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  padding-left: 20px;
`;

export const CardHeaderTitle = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CardHeaderText = styled.Text`
  margin-left: 10px;
  font-size: 16px;
  color: #999;
`;

export const CardContent = styled.View`
  flex:1;
  padding: 30px;
  padding-left: 20px;
  justify-content: center;
`;

export const Title = styled.Text`
  padding-left: 10px;
  font-size: 16px;
  color: #999;
`;

export const Description = styled.Text`
  font-size: 32px;
  margin-top: 3px;
  color: #333;
`;

export const CardFooter = styled.View`
  padding: 30px;
  background: #eee;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

export const CardFooterContent = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const CardFooterMessage = styled.View`
  align-items: center;
  flex-direction: row;
  flex: 0 0 75%;
  margin-left: -5px;
`;

export const Annotation = styled.Text`
  font-size: 13px;
  color: #333;
  margin-left: 15px;
`;

export const CardFooterIcon = styled.View`
`;