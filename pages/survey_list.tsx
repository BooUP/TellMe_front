import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

import DotBadge from "../components/shared/badge/DotBadge";
import ListIcon from "../components/shared/icon/ListIcon";
import BarProgress from "../components/shared/progress/BarProgress";
import TitleBox from "../components/shared/title/TitieBox";
import { progressText } from "../uttils/survey_list";

const results = [
  {
    id: 1,
    title: "제목이 들어갑니다.",
    desc: "상세 내용잊 들어갑니다. 상세 내용잊 들어갑니다. 상세 내용잊 들어갑니다. 상세 내용잊 들어갑니다.상세 내용잊 들어갑니다. 상세 내용잊 들어갑니다. 상세 내용잊 들어갑니다. 상세 내용잊 들어갑니다.",
    progress: 0,
  },
  {
    id: 2,
    title: "제목이 들어갑니다.",
    desc: "상세 내용잊 들어갑니다. 상세 내용잊 들어갑니다. 상세 내용잊 들어갑니다. 상세 내용잊 들어갑니다.",
    progress: 20,
  },
  {
    id: 3,
    title: "제목이 들어갑니다.",
    desc: "상세 내용잊 들어갑니다. 상세 내용잊 들어갑니다. 상세 내용잊 들어갑니다. 상세 내용잊 들어갑니다.",
    progress: 40,
  },
  {
    id: 4,
    title: "제목이 들어갑니다.",
    desc: "상세 내용잊 들어갑니다. 상세 내용잊 들어갑니다. 상세 내용잊 들어갑니다. 상세 내용잊 들어갑니다.",
    progress: 50,
  },
  {
    id: 5,
    title: "제목이 들어갑니다.",
    desc: "상세 내용잊 들어갑니다. 상세 내용잊 들어갑니다. 상세 내용잊 들어갑니다. 상세 내용잊 들어갑니다.",
    progress: 100,
  },
];
export default function SurveyList() {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/login`);
  };

  return (
    <Content>
      <TitleBox
        title="나의 설문 목록"
        buttonInfo={[{ text: "설문추가", onClick: handleClick }]}
      />
      <List>
        {results &&
          results.map((item) => (
            <ListItem key={item.id}>
              <Link href={``}>
                <Item>
                  <ListIcon status={progressText(item.progress)} />
                  <TextBox>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </TextBox>
                  <BarProgress number={item.progress} />
                  <DotBadge status={progressText(item.progress)} />
                </Item>
              </Link>
            </ListItem>
          ))}
      </List>
    </Content>
  );
}

const Content = styled.div`
  max-width: 1440px;
  padding: 30px;
`;

const List = styled.div`
  margin-top: 40px;
`;

const ListItem = styled.div`
  margin-top: 20px;
  background: #fff;
  border-radius: 15px;
  box-shadow: 5px 5px 10px rgb(254, 168, 47, 0.2);
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 150px;
  padding: 20px;
`;

const TextBox = styled.div`
  flex: 4;
  margin-right: 40px;
  & h3 {
    font-size: 22px;
    line-height: 20px;
  }
  & p {
    margin-top: 10px;
    font-size: 14px;
    line-height: 20px;
  }
`;
