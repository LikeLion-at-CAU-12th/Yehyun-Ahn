import React, { useContext } from "react";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { ModalContext } from "../../context/ModalContext";
import { emailAtom, userNameAtom } from "../../recoil/atom";


const Modal = () => {
    const { isModalOpen, closeModal } = useContext(ModalContext);
    const userName = useRecoilValue(userNameAtom);
    const email = useRecoilValue(emailAtom);
    const navigate = useNavigate();

    const handleConfirm = () => {
        closeModal();
        navigate("/mypage");
    };

    if (!isModalOpen) return null;

    return (
        <ModalWrapper>
            <ModalContent>
                <h2>입력 정보 확인</h2>
                <p>이름: {userName}</p>
                <p>이메일: {email}</p>
                <Button onClick={handleConfirm}>확인</Button>
                <Button onClick={closeModal}>취소</Button>
            </ModalContent>
        </ModalWrapper>
    );
};

export default Modal;

const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
    background: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
`;

const Button = styled.button`
    margin: 10px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;
