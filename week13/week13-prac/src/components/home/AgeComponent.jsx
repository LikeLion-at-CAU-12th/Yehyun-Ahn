import React from "react";
import { useRecoilState } from "recoil";
import { ageAtom } from "../../recoil/atom";

const AgeComponent = () => {
    const [age, setAge] = useRecoilState(ageAtom);

    return (
        <div style={{ textAlign: "center" }}> {/* 가운데 정렬을 위한 스타일 추가 */}
            <p>나이: {age}</p>
            <button onClick={() => setAge(age + 1)}>Up 🔼</button>
            <button onClick={() => setAge(age - 1)}>Down 🔽</button> {/* 나이를 줄이는 버튼 추가 */}
        </div>
    );
};

export default AgeComponent;
