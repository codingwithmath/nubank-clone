import { StyleSheet, Animated } from 'react-native';  
import styled from 'styled-components/native';


export const Container = styled(Animated.ScrollView).attrs({
  showsVerticalScrollIndicator:false,
  overScrollMode:'never'
})`
  margin: 0 30px;
`;

export const Code = styled.View`
  overflow: hidden;
  padding: 10px 0px;
  align-self: center;
`;

export const QRcode = styled.View`
  width: 100px;
  height: 100px;
  border: 3px solid #FFF;
`;

export const AccountInfoContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const BankInfo = styled.View`
  flex-direction: row;
  margin-top: 3px;
`;

export const Bank = styled.Text`
  color: #FFF;
  margin-right: 5px;
`;

export const BankUserInfo = styled.Text`
  color: #FFF;
  font-weight: bold;
`;




export const Nav = styled.View`
  margin-top: 30px;
  border-top-width: 1px;
  border-color: rgba(255, 255, 255, 0.4);
`;

export const NavItemContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  border-color: rgba(255, 255, 255, 0.4);
  padding: 6px 0;
`;


export const NavItem = styled.View`
  flex: 0 0 75%;
  flex-direction: row;
  align-items: center;
  padding: 12px 0;
`;

export const NavTextContainer = styled.View`
`;

export const NavSubText = styled.Text`
  margin-left: 20px;
  font-size: 12px;
  color: #ccc;
`;

export const NavText = styled.Text`
  margin-left: 20px;
  font-size: 15px;
  color: #FFF;
`;

export const SignOutButton = styled.TouchableOpacity`
  border-width: 1px;
  border-color: rgba(255, 255, 255, 0.4);
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  padding: 12px;
  margin-top: 15px;
`;

export const SignOutButtonText = styled.Text`
  color: #FFF;
  font-weight: bold;
  font-size: 13px;
  text-transform: uppercase;
`;
