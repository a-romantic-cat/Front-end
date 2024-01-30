import styled from 'styled-components';

const TextContainer=styled.div`
    dlsplay: flex;
    width:559px;
    height:116px;
    position:absolute;
    text-align: center;
`

const Text = styled.span`
    color: ${props => props.color};
    font-size: 40px;
    font-family: 'Pretendard';
    font-weight: 400;
    white-space: pre-wrap;
    line-height: 155%;
`

export default function SettingEnd() {
    return(
        <div style={{
            height: "100vh",
            display: "flex",
            flexDirection:"row",
            justifyContent:"space-evenly",
            alignItems:"center"
            }}>
            <TextContainer>
                <Text color="#000000">모든 준비가 끝났어요.{`\n`}자동으로 </Text>
                <Text color="#C90000">내 우편함</Text>
                <Text color="#000000">으로 이동합니다.</Text>
            </TextContainer>
        </div>
    )
}