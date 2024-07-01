import React, { useContext } from 'react'
import { Button, Wrapper } from '../layout/common'
import { Form } from './Form'
import { ThemeColorContext } from '../../context/context';
//import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { isSubmittedAtom } from '../../recoil/atom';
import AgeComponent from './AgeComponent';
import { ModalContext } from '../../context/ModalContext';
import Modal from '../layout/Modal';

export const FormSection = () => {
    const mode = useContext(ThemeColorContext);
    const { openModal } = useContext(ModalContext);
    //const navigate = useNavigate();
    const setIsSubmited = useSetRecoilState(isSubmittedAtom);

    const handleBtn = ()=>{
        openModal();
        setIsSubmited(true);
        //navigate("/mypage");
    };

  return (
    <Wrapper>
        <Form type='text' inputType='이름' />
        <Form type='email' inputType='이메일' />
        <AgeComponent />
        <Button mode={mode.button} onClick={handleBtn} >제출</Button>
        <Modal />
    </Wrapper>
  )
}
