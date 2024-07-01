import React, { useContext } from 'react'
import { useRecoilValue, useResetRecoilState } from 'recoil'
import { emailAtom, isSubmittedAtom, userNameAtom, ageAtom} from '../recoil/atom'
import { Button, Title, Wrapper } from '../components/layout/common';
import { ThemeColorContext } from '../context/context';
import { useNavigate } from 'react-router-dom';

export const Mypage = () => {
  const userName = useRecoilValue(userNameAtom);
  const age = useRecoilValue(ageAtom);
  const mode = useContext(ThemeColorContext);
  const navigate = useNavigate();

  const resetUsername = useResetRecoilState(userNameAtom);
  const resetEmail = useResetRecoilState(emailAtom);
  const reset = useResetRecoilState(isSubmittedAtom);
  const resetAge = useResetRecoilState(ageAtom);


  const handleReset = ()=> {
    resetUsername();
    resetEmail();
    reset();
    resetAge();
    navigate("/");
  }

  const rice = age * 365 * 3;

  return (
    <Wrapper>
      <Title>Welcome {userName} 🖐🏻</Title>
      <Title>🍚: {rice}공기🥄</Title>
      <Button mode={mode.button} onClick={handleReset}>리셋</Button>
    </Wrapper>
  )
}
