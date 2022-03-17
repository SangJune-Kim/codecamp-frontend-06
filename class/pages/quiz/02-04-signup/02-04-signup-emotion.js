import styled from '@emotion/styled'


export const Wrapper = styled.div`
    width: 540px;
    height: 960px;
    border: 1px solid #AACDFF;
    box-shadow: 7px 7px 39px rgba(0, 104, 255, 0.25);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    padding: 60px;
    margin: 20px auto;
`
// 맨 윗 부분
export const Title = styled.div`
    font-size: 32px;
    color: #0068FF;
    font-weight: bold;
    width: 380px;
    margin-bottom: 40px;
`

export const InputBox = styled.input`
    width: 380px;
    height: 60px;
    background-color: white;
    border-radius: 7px;
    border: 1px solid #D2D2D2;
    padding: 18px;
    margin-top: 20px;
`

export const ErrorEmail = styled.div`
    color: red;
    height: 10px;
    font-size: 11px;
`

export const ErrorName = styled.div`
    color: red;
    height: 10px;
    font-size: 11px;
`

export const ErrorPassword = styled.div`
    color: red;
    height: 10px;
    font-size: 11px;
`

export const ErrorPasswordCheck = styled.div`
    color: red;
    height: 10px;
    font-size: 11px;    
`
//핸드폰 번호 입력 부분

export const PhoneWrapper = styled.div`
    width: 380px;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;   
`
export const Phone1 = styled.input`
    width: 100px;
    height: 40px;
    border: 1px solid #D2D2D2;
    border-radius: 7px;
    font-size: 16px;
    text-align: center;
`
export const Phone2 = styled.input`
width: 100px;
    height: 40px;
    border: 1px solid #D2D2D2;
    border-radius: 7px;
    font-size: 16px;
    text-align: center;
`
export const Phone3 = styled.input`
width: 100px;
    height: 40px;
    border: 1px solid #D2D2D2;
    border-radius: 7px;
    font-size: 16px;
    text-align: center;
`

export const TokenWrapper = styled.div`
    width: 380px;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-top: 20px;
`
export const Token = styled.div`
    color: #0068FF;
    font-size: 18px;
`
export const TokenButton = styled.button`
    width: 120px;
    height: 40px;
    border-radius: 7px;
    margin-left: 20px;
    border: 1px solid #D2D2D2;
    font-size: 16px;
`
export const TokenConfirmButton = styled.button`
    width: 120px;
    height: 40px;
    border-radius: 7px;
    margin-left: 20px;
    border: 1px solid #D2D2D2;
    font-size: 16px;
`

export const Location = styled.select`
    margin-top: 20px;
    width: 380px;
    height: 60px;
    border: 1px solid #D2D2D2;
    border-radius: 7px;
    font-size: 16px;
    padding: 18px;
    color: #797979;
`


export const LocationWrapper = styled.div`

`

export const GenderWrapper = styled.div`
    width: 380px;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
`

export const GenderRadioWoman = styled.input`
    width: 40px;
    text-align: center;
`
export const GenderRadioMan = styled.input`
    width: 40px;
    text-align: center;
`
export const Hr = styled.div`
    margin-top: 30px;
    margin-bottom: 20px;
    border: 1px solid #e6e6e6;
    width: 380px;
`
export const LocationError = styled.div`
    color: red;
    height: 10px;
    font-size: 11px;
`
export const GenderError = styled.div`
    color: red;
    height: 10px;
    font-size: 11px;
`

// 바닥부분
export const Footer = styled.div`
`

export const SignupButton = styled.button`
    width: 380px;
    height: 75px;
    border: 1px solid #D2D2D2;
    border-radius: 10px;
    font-size: 18px;
`




