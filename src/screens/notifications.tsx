 import React, { useContext, useEffect, useState } from 'react';
 import { UserContext } from "~/Context/User";
 import Styled from 'styled-components/native';
 import NotificationsDetail from './notificationsDetail';
 
 const Fragment = Styled.View`
  flex: 1;
`;

const Container = Styled.View`
  flex: 1;    
  width:90%;
  margin:auto;  
`;

const AlermContainer = Styled.View`
  height:40px;  
  justify-content: center; 
`;

const MainText = Styled.Text`
  color: black;
  font-weight: bold;
  font-size: 16px;      
  position: absolute;
`;

const SwtichBar = Styled.Switch``; 

const NoticeScrollContainer = Styled.ScrollView`
  width: 100%;
  height: 100%;      
`;

 export default function Notifications({navigation}:any){  
  const { push, changePush, config } = useContext<IUserContext>(UserContext);

  const [isToggle, setIsToggle] = useState<boolean>(false);
  const changeToggle = () => {
      setIsToggle(!isToggle);
  }

  useEffect(() => {      
      navigation.setOptions({
          headerTitle: config.main_title1
      });
  }, []);

  const [data] = useState<Array<Object>>([
    {
     "title":"2021학년도 정기퇴사 안내",
     "date":"21.06.18(금) 10:10",     
     "detail":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
     "title":"코로나 확진자 관련 안내",
     "date":"21.06.11(금) 13:03",     
     "detail":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
     "title":"2021학년도 정기퇴사 안내",
     "date":"21.06.18(금) 10:10",     
     "detail":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
     "title":"코로나 확진자 관련 안내",
     "date":"21.06.11(금) 13:03",
     "detail":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
     "title":"2021학년도 정기퇴사 안내",
     "date":"21.06.18(금) 10:10",     
     "detail":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    },
    {
      "title":"코로나 확진자 관련 안내",
      "date":"21.06.11(금) 13:03",     
      "detail":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
     }, 
     {
      "title":"코로나 확진자 관련 안내",
      "date":"21.06.11(금) 13:03",     
      "detail":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
     }, 
     {
      "title":"코로나 확진자 관련 안내",
      "date":"21.06.11(금) 13:03",     
      "detail":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
     },  
     {
      "title":"코로나 확진자 관련 안내",
      "date":"21.06.11(금) 13:03",     
      "detail":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
     }, 
     {
      "title":"코로나 확진자 관련 안내",
      "date":"21.06.11(금) 13:03",     
      "detail":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
     }, 
     {
      "title":"코로나 확진자 관련 안내",
      "date":"21.06.11(금) 13:03",     
      "detail":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
     }, 
  ]);

   return (
        <Fragment>
            <Container> 
              <AlermContainer>
              <MainText>{config.sub_page1_t1}</MainText>  
                <SwtichBar
                  onValueChange={changePush}
                  value={push}
                >
                </SwtichBar>
              </AlermContainer>
              <AlermContainer>
                <MainText>{config.sub_page1_t2}</MainText>
              </AlermContainer>

              <NoticeScrollContainer>
                {data.map((data, index) => (                  
                    <NotificationsDetail  data={data} key={index} />                    
                ))}                                
              </NoticeScrollContainer>              
            </Container>            
        </Fragment>
   );  
 };
 