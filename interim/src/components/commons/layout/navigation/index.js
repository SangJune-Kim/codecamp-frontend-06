import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  /* background-color: yellow; */
  width: 200px;
  height: 708px;
  margin-right: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  padding: 30px 20px;
`;

// TALKR 부분
const HeadWrapper = styled.div`
  margin-bottom: 30px;
  font-size: 16px;
  font-weight: 800;
  font-family: "SUIT-ExtraBold";
`;

const HeadIcon = styled.img`
  margin-right: 5px;
`;

const HeadLine = styled.div`
  border-bottom: 1px solid #e5e5e5;
  margin-bottom: 30px;
`;

// 메뉴 부분

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MenuBox = styled.div`
  display: flex;
  margin-bottom: 20px;
  cursor: pointer;
`;

const ListIcon = styled.img`
  margin-right: 10px;
`;

export default function LayoutNavigation() {
  const router = useRouter();

  const onClickMoveBoardList = () => {
    router.push(`/boards`);
  };

  const onClickMoveBoardNew = () => {
    router.push(`/boards/new`);
  };

  return (
    <Wrapper>
      <HeadWrapper>
        <HeadIcon src="/images/TALKR.png" />
        TALKR
      </HeadWrapper>
      <HeadLine></HeadLine>
      <MenuWrapper>
        <MenuBox onClick={onClickMoveBoardList}>
          <ListIcon src="/images/ic_list.png" />
          <div>전체 글 보기</div>
        </MenuBox>
        <MenuBox onClick={onClickMoveBoardNew}>
          <ListIcon src="/images/ic_new.png" />
          <div>새 글 작성</div>
        </MenuBox>
      </MenuWrapper>
    </Wrapper>
  );
}
