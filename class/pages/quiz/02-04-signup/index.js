import { useState } from "react"
import { Body, ErrorEmail, ErrorName, ErrorPassword, ErrorPasswordCheck, Footer, 
    InputBox, SignupButton, Title, Wrapper,PhoneWrapper, Phone1, Phone2, Phone3, 
    TokenWrapper, LocationWrapper, Token, TokenButton,TokenConfirmButton, Location,
    GenderWrapper,Hr, LocationError, GenderError, GenderRadioWoman, GenderRadioMan } from '../02-04-signup/02-04-signup-emotion'


export default function(){

    const [email,setEmail]=useState("")
    const [emailError,setEmailError]=useState("")
    const [name,setName]=useState("")
    const [nameError,setNameError]=useState("")
    const [password,setPassword]=useState("")
    const [passwordError,setPasswordError]=useState("")
    const [passwordCheck,setPasswordCheck]=useState("")
    const [passwordCheckError,setPasswordCheckError]=useState("")
    const [genderRadioWoman,setGenderRadioWoman]=useState("")
    const [genderRadioMan,setGenderRadioman]=useState("")
    const [genderError,setGenderError] = useState("")
    const [locationError,setLocationError] = useState("")


    function onChangeEmail(event){
        setEmail(event.target.value)
    }
    function onChangeName(event){
        setName(event.target.value)
    }
    function onChangePassword(event){
        setPassword(event.target.value)
    }
    function onChangePasswordCheck(event){
        setPasswordCheck(event.target.value)
    }
    

    const[phone1,setPhone1]=useState("")
    const[phone2,setPhone2]=useState("")
    const[phone3,setPhone3]=useState("")

    function onchangePhone1(event){
        setPhone1(event.target.value)
        if(phone1.length === 3){
            phone2.focus()
        }
    }
    function onchangePhone2(event){
        setPhone2(event.target.value)
        if(phone2.length === 4){
            phone3.focus()
        }
    }
    function onchangePhone3(event){
        setPhone3(event.target.value)
    }

    const [number,setNumber] =useState("000000")
    
    function handleNumber(){
        const number=(String(Math.floor(Math.random()*1000000)).padStart(6,"0"))
        setNumber(number)
    }


    const [time,setTime] = useState("3:00")

    // let isValid = true
    function onClickSignup(){
        if(email.includes("@") === false){
            setEmailError("이메일이 올바르지 않습니다. @가 없잔슴")
            // isValid = false
        } else{
            setEmailError("")
        }
        if(name === ""){
            setNameError("이름을 입력하세요.")
            // isValid = false
        } else{
            setNameError("")
        }
        if(password === ""){
            setPasswordError("비밀번호를 입력하세요.")
            // isValid = false
        }else{
            setPasswordError("")
        }
        if(passwordCheck === ""){
            setPasswordCheckError("비밀번호를 한번 더 입력하세요.")
            // isValid = false
        }else{
            setPasswordCheckError("")
        }
        if(password !== passwordCheck){
            setPasswordCheckError("비밀번호가 일치하지 않습니다.")
            // isValid = false
        }else{
            setPasswordCheckError("")
        }
        // if(genderRadioWoman === false && genderRadioMan === false){
        //     setGenderError("성별을 선택해 주세요.")
        // }
        // if(isValid === true){
        //      alert("가입이 완료되었습니다.")

        if( email.includes("@") === true && 
            name !== "" &&
            password !== "" &&
            passwordCheck !== "" &&
            password === passwordCheck){
                alert("가입이 완료되었습니다.")
            }
        
        }
        

    return(
    
        <Wrapper>
                <Title>코드캠프 회원가입</Title>
                    <InputBox type="text" placeholder="이메일을 입력해 주세요." onChange={onChangeEmail}/><br/>
                    <ErrorEmail>{emailError}</ErrorEmail>
                    <InputBox type="text" placeholder="이름을 입력해 주세요." onChange={onChangeName}/><br/>
                    <ErrorName>{nameError}</ErrorName>
                    <InputBox type="password" placeholder="비밀번호를 입력해 주세요." onChange={onChangePassword}/><br/>
                    <ErrorPassword>{passwordError}</ErrorPassword>
                    <InputBox type="password" placeholder="비밀번호를 다시 입력해 주세요." onChange={onChangePasswordCheck}/><br/>
                    <ErrorPasswordCheck>{passwordCheckError}</ErrorPasswordCheck>
                <PhoneWrapper>
                    <Phone1 type="text" onChange={onchangePhone1} onKeyUp={onchangePhone1}/>-
                    <Phone2 type="text" onChange={onchangePhone2} onKeyUp={onchangePhone2}/>-
                    <Phone3 type="text" onChange={onchangePhone3} onKeyUp={onchangePhone3}/>
                </PhoneWrapper>
                <TokenWrapper>
                    <Token>{number}</Token>
                    <TokenButton onClick={handleNumber} disabled>인증번호전송</TokenButton>
                </TokenWrapper>
                <TokenWrapper>
                    <Token>{time}</Token>
                    <TokenConfirmButton disabled>인증완료</TokenConfirmButton>
                </TokenWrapper>
                <LocationWrapper>   
                    <Location>
                        <option disabled selected>지역을 선택하세요.</option>
                        <option>서울</option>
                        <option>경기</option>
                        <option>인천</option>
                    </Location>
                </LocationWrapper>
                <LocationError>{locationError}</LocationError>            
                <GenderWrapper>
                    <GenderRadioWoman type="radio" name="gender" />여성 
                    <GenderRadioMan type="radio" name="gender"/>남성
                </GenderWrapper>
                <GenderError>{genderError}</GenderError>            
                <Hr></Hr>
            <Footer>
                <SignupButton onClick={onClickSignup}>가입하기</SignupButton>
            </Footer>   
        </Wrapper>
   
    )
}