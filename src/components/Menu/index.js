import React from 'react';

import { TouchableOpacity, Animated } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'


import { 
  Container, 
  Code, 
  QRcode,
  AccountInfoContainer,
  BankInfo,
  BankUserInfo,
  Bank,
  Nav,
  NavItemContainer,
  NavItem,
  NavTextContainer,
  NavText,
  NavSubText,
  NavGoToButton,
  SignOutButton,
  SignOutButtonText,
 } from './styles';


export default function Menu({ translateY }) {
  return (
    <Container 
    style={{
      opacity: translateY.interpolate({
        inputRange: [0 , 300],
        outputRange: [0, 1],
      })
    }}
    >
      <Code>
        <QRcode />
      </Code>
      <AccountInfoContainer>
        <BankInfo>
          <Bank>Banco</Bank>
          <BankUserInfo>001 - Nu Pagamentos S.A.</BankUserInfo>
        </BankInfo>
        <BankInfo>
          <Bank>Agência</Bank>
          <BankUserInfo>0001</BankUserInfo>
        </BankInfo>
        <BankInfo>
          <Bank>Conta</Bank>
          <BankUserInfo>123456-7</BankUserInfo>
        </BankInfo>
      </AccountInfoContainer>

      <Nav>
        <NavItemContainer>
          <NavItem>
            <MaterialIcons name="help-outline" size={28} color="#FFF" />
            <NavText>Me ajuda</NavText>
          </NavItem>
          <TouchableOpacity>
            <MaterialIcons name="keyboard-arrow-right" size={20} color="#FFF"/>
          </TouchableOpacity>
        </NavItemContainer>
        <NavItemContainer>
          <NavItem>
            <MaterialIcons name="person-outline" size={28} color="#FFF" />
            <NavTextContainer>
              <NavText>Perfil</NavText>
              <NavSubText>Nome de preferência, telefone, e-mail</NavSubText>
            </NavTextContainer>  
          </NavItem>
          <TouchableOpacity>
            <MaterialIcons name="keyboard-arrow-right" size={20} color="#FFF"/>
          </TouchableOpacity>
        </NavItemContainer>
        <NavItemContainer>
          <NavItem>
            <MaterialIcons name="attach-money" size={28} color="#FFF" />
            <NavText>Configurar NuConta</NavText>
          </NavItem>
          <TouchableOpacity>
            <MaterialIcons name="keyboard-arrow-right" size={20} color="#FFF"/>
          </TouchableOpacity>
        </NavItemContainer>
        <NavItemContainer>
          <NavItem>
            <MaterialIcons name="store-mall-directory" size={28} color="#FFF" />
            <NavText>Pedir Conta PJ</NavText>
          </NavItem>
          <TouchableOpacity>
            <MaterialIcons name="keyboard-arrow-right" size={20} color="#FFF"/>
          </TouchableOpacity>
        </NavItemContainer>
        <NavItemContainer>
          <NavItem>
            <MaterialIcons name="smartphone" size={28} color="#FFF" />
            <NavText>Configurações do app</NavText>
          </NavItem>
          <TouchableOpacity>
            <MaterialIcons name="keyboard-arrow-right" size={20} color="#FFF"/>
          </TouchableOpacity>
        </NavItemContainer>
      </Nav>

      <SignOutButton onpress={() =>{}}>
        <SignOutButtonText>Sair da conta</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
}
