import React, { useState } from 'react';
import Styled from 'styled-components/native';

const NoticeBox = Styled.TouchableOpacity`
width:100%;
 height:60px;
 border-bottom-color: #eee;
 border-bottom-width: 1px;    
 align-items : center;
 margin-left: 15px;
 flex-direction: row;   
`;

const NoticeTitle = Styled.Text`
 color:black;
`;

const ArrowImage = Styled.Image`  
 align-items : flex-end;
`;

const NoticeDetailBox = Styled.ScrollView`
    width: 100%;
    height: 400px;
    background-color: white;
    flex-direction: column;  
`;

const NoticeRegDate = Styled.Text`
    color:black;
    margin-top:5px;
    justify-content: flex-end;
`;

const NoticeContent = Styled.Text`
    padding-top: 5px;
    color:black;    
`;

export default function NotificationsDetail({data}:any){  

 const [isToggle, setIsToggle] = useState<boolean>(false);
 const changeToggle = () => {
     setIsToggle(!isToggle);
 } 

  return (
       <>
            <NoticeBox  onPress={changeToggle}>            
                <NoticeTitle>{data.title}</NoticeTitle>            
                <ArrowImage source={ isToggle ? require('~/image/down.png') : require('~/image/up.png') }></ArrowImage>                
            </NoticeBox>
            {isToggle?                
                <NoticeDetailBox>
                    <NoticeRegDate>{data.date}</NoticeRegDate>      
                    <NoticeContent>{data.detail}</NoticeContent>                     
                </NoticeDetailBox>
                :
                null
            }
        </>
    );            
};