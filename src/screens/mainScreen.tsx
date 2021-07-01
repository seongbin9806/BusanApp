import React, { useContext } from 'react';
import Styled from 'styled-components/native';
import { UserContext } from "~/Context/User";
import { Linking } from 'react-native';

const Fragment = Styled.View`
  flex: 1;
`;

const BackGroundImage = Styled.ImageBackground`
  flex: 1;    
`;

const MainLogoContainer = Styled.View`    
  width: 100%;    
  height: 60px;
  margin-top: 40px;
  align-items: center;
  margin-left: -2px;
`;

const MainLogo = Styled.Image` 
  width: 80%;
  height: 100%;  
`;

const SelectMenuContainer = Styled.View`  
  width: 95%;
  height: 200px;
  align-items: center;  
  flex-direction: row;
  justify-content: space-between;   
`;

const SelectContainer = Styled.View`    
  width: 100%;
  height: 100%;  
  margin-top: -5px;  
  align-items: center;
  justify-content: center;  
`;

const TopSelectMenu = Styled.TouchableOpacity`
  margin-top: 60px;
  width: 48%;
  height: 100%;
  background: white;
  border-radius: 10px;
`;

const BottomSelectMenu = Styled.TouchableOpacity`
  margin-top: 90px;
  width: 30%;
  height: 100%;
  background: white;
  border-radius: 10px;    
`;

const SelectImage = Styled.Image`
  width: 60px;
  height: 60px;
`;

const SelectText = Styled.Text`
  font-weight: 700;  
`;

const LanguageBtnContainer = Styled.View`
  flex-direction: row;  
  width:100%;  
  justify-content : flex-end;
  margin-top: 8px;    
`;

const LanguageBtn = Styled.TouchableOpacity`
  border : 1.2px;
  border-color: white;
  border-radius: 5px;  
  width: 50px;
  height: 23px;
  align-items: center;
  justify-content: center;  
  margin-right: 5px;  
`;

const LanguageText = Styled.Text`
  color: white;
  font-size: 10px;  
`;

const Home = ({navigation}: any) => {

  const {lang,  changeLang, config} = useContext<IUserContext>(UserContext);
    
  return (     
    <Fragment>
      <BackGroundImage source={require('~/image/main_bg.png')}>

        <LanguageBtnContainer>
            <LanguageBtn onPress={() => changeLang('kor')} style={[{ backgroundColor: lang === 'kor' ? 'white' : 'rgba(0, 0, 0, 0)'}]} >
              <LanguageText style={[{ color: lang === 'kor' ? 'black' : 'white'}]}>한국어</LanguageText>
            </LanguageBtn>        
            <LanguageBtn onPress={() => changeLang('eng')} style={[{ backgroundColor: lang === 'eng' ? 'white' : 'rgba(0, 0, 0, 0)'}]}>
              <LanguageText style={[{ color: lang === 'eng' ? 'black' : 'white'}]}>ENG</LanguageText>
            </LanguageBtn>          
        </LanguageBtnContainer>

        <MainLogoContainer>
          <MainLogo source={require('~/image/main_logo.png')}  resizeMode={'contain'} ></MainLogo>
 
          <SelectMenuContainer>
            <TopSelectMenu onPress={()=> { navigation.navigate('notifications')}}>
              <SelectContainer>
                <SelectImage source={require('~/image/icon1.png')} resizeMode={'contain'}></SelectImage>
                <SelectText>{config.main_title1}</SelectText>
              </SelectContainer>
            </TopSelectMenu>            

            <TopSelectMenu onPress={ ()=>{ Linking.openURL('https://dorm.pusan.ac.kr/dorm/function/mealPlan/20000403')}}>
              <SelectContainer>
                <SelectImage source={require('~/image/icon2.png')} resizeMode={'contain'}></SelectImage>
                <SelectText>{config.main_title2}</SelectText>
              </SelectContainer>
            </TopSelectMenu>
          </SelectMenuContainer>

          <SelectMenuContainer>          
            <BottomSelectMenu onPress={ ()=>{ Linking.openURL('https://dorm.pusan.ac.kr/dorm/bbs/list01/20000601')}}>  
              <SelectContainer>
                <SelectImage source={require('~/image/icon3.png')} resizeMode={'contain'}></SelectImage>
                <SelectText>{config.main_title3}</SelectText>
              </SelectContainer>
            </BottomSelectMenu>
            <BottomSelectMenu onPress={ ()=>{ Linking.openURL('https://dorm.pusan.ac.kr/dorm/bbs/list05/20000401')}}>
              <SelectContainer>
                <SelectImage source={require('~/image/icon4.png')} resizeMode={'contain'}></SelectImage>
                <SelectText>{config.main_title4}</SelectText>
              </SelectContainer>
            </BottomSelectMenu>
            <BottomSelectMenu onPress={()=>{ navigation.navigate('inquiries')}}>
              <SelectContainer>              
                <SelectImage source={require('~/image/icon5.png')} resizeMode={'contain'}></SelectImage>
                <SelectText>{config.main_title5}</SelectText>
              </SelectContainer>
            </BottomSelectMenu>             
          </SelectMenuContainer>                         
        </MainLogoContainer> 
      </BackGroundImage>      
    </Fragment>
  );
}

export default Home; 