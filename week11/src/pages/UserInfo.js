import React, {useState} from 'react'
import styled from 'styled-components'
import UserFilter from '../components/user/UserFilter'
import UserSection from '../components/user/UserSection'
import PageSelection from '../components/user/PageSelection'

const UserInfo = () => {
    const [userData, setUserData] = useState([]); //userData는 useState 담고 있는 변수고 setUserData는 바뀌도록 트리거 하는 함수
    const [curPage, setCurPage] = useState(); //initial value === undefined
    const [filter, setFilter] = useState("all"); //색상 넣을 때 얘 이용하세요~
  return (
    <MainLayout>
        <h1>🦁👶🏻12기 아기사자 리스트👶🏻🦁</h1>
        <ContentBox>
            <UserFilter 
            setFilter={setFilter}
            setUserData={setUserData}
            setCurPage={setCurPage} />
            <UserSection userData={userData} />
            {filter === "all" && <PageSelection //all일때만 페이지 나오게
            curPage={curPage}
            setUserData={setUserData}
            setCurPage={setCurPage} />}
        </ContentBox>
    </MainLayout>
  )
}

export default UserInfo

const MainLayout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    & > h1{
        font-size: 3.5rem;
        margin-top: 5rem;
        margin-bottom: 5rem;
    }
`

const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95%;
    border-radius: 1rem;
    border: 5px solid #ff7710;
`