import styled from '@emotion/styled'

export const Background = styled.div`
box-sizing: border-box; 
display: flex; 
justify-content: center;
align-items: center; 
width: 100%; 
padding-top: 50px; 
height: 100%; 
padding-bottom: 50px;
`

export const Wrapper = styled.div`
    display: flex; flex-direction: column; width: 640px;  
    height: auto; padding: 32px 32px 0px 32px; border: 1px solid gray;
    margin: 0 auto;
`
export const Look = styled.div`
    display: flex; flex-direction: column; align-items: end; width: 100%;
 `

export const Head = styled.div`
    display: flex; flex-direction: row; width: 100%; height: auto;
    justify-content: space-between; align-items: center;
`

export const Header = styled.div`
    font-size: 40px; font-weight:bold;
`

export const Profile = styled.div`
    display: flex; flex-direction:row; width: auto; height: auto; 
     align-items: center;
`
export const ProfileText = styled.div`
    font-size: 20px; font-weight: bold; margin-left: 20px;
`

export const Menu = styled.div`
    display: flex; flex-direction: row; width: 100%; 
`
export const MenuText = styled.div`
    color: gray; font-size: 30px; margin-right : 60px;
`

export const FaqText = styled.div`
    color: #ff1b6d; font-size: 30px; margin-right : 60px;
    border-bottom: 2px solid #ff1b6d;

`
export const Hr = styled.div`
    width: 100%; 
`
export const InnerBox = styled.div`
    display: flex; flex-direction: row; justify-content: space-between;
`

export const Question = styled.div`
    color: gray; font-size: 20px;
`
export const QuestionText = styled.div`
    color: black; font-size: 24px;
`
export const Link = styled.div`
    display: flex; flex-direction: row; justify-content: space-between;
    margin:0px 30px;
`
export const LinkSet = styled.div`
    display: flex; flex-direction: column; justify-content: center; align-items: center;
    color: gray;

`
export const My = styled.div`
    color: #ff1b6d;
`