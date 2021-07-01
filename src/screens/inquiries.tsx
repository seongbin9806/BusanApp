import React, { useContext, useEffect } from 'react';
import { UserContext } from "~/Context/User";
 import Styled from 'styled-components/native'; 
 import { Linking } from 'react-native';
 
 const Fragment = Styled.View`
    flex: 1;        
`;

const Container = Styled.View`
    flex: 1;    
    width:90%;                       
    margin:auto;    
`;

const MainTitle = Styled.Text`
  color: black;
  margin-top: 12px;
  font-size: 16px;
  font-weight: bold;
`;

const SubTitle = Styled.Text`
  color: gray;
  margin-top: 7px;
  font-size: 13px;
`;
const TapMenu = Styled.TouchableOpacity`
  width: 100%;
  background: #8181F7;
  border-radius: 5px;
  height: 35px;
  margin-top: 10px;
  align-items: center;
  justify-content: center;    
`;

const TapMenuText = Styled.Text`
  color: white;  
`;

 export default function Inquiries({navigation}:any){    

  const { config } = useContext<IUserContext>(UserContext);

  useEffect(() => {      
      navigation.setOptions({
          headerTitle: config.main_title5
      });
  }, []);
  
   return (
        <Fragment>
            <Container>
              
              <MainTitle>{config.sub_page5_t1}</MainTitle>              
              <SubTitle>{config.sub_page5_t1_t1}</SubTitle>              
              <SubTitle>{config.sub_page5_t1_t2}</SubTitle>  
              <MainTitle>{config.sub_page4_t1}</MainTitle>
              <TapMenu onPress ={ ()=>{ Linking.openURL('https://dorm.pusan.ac.kr/')} }>
                <TapMenuText>{config.sub_page4_b1}</TapMenuText>
              </TapMenu>
              <SubTitle>{config.sub_page4_b1_t}</SubTitle>  
              <TapMenu onPress ={ ()=>{ Linking.openURL('https://dorm.pusan.ac.kr/')} }>
                <TapMenuText>{config.sub_page4_b2}</TapMenuText>
              </TapMenu>
              <SubTitle>{config.sub_page4_b2_t}</SubTitle>  
              <TapMenu onPress ={ ()=>{ Linking.openURL('tel:051-510-7827')} }>
                <TapMenuText>{config.sub_page4_b3}</TapMenuText>  
              </TapMenu>
              <SubTitle>{config.sub_page4_b3_t}</SubTitle>              
            </Container>
        </Fragment>
   );  
 };
 