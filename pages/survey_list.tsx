import Link from "next/link";
import styled from "styled-components";
import { COLOR } from "../constants/themes";

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
  const progressText = (status: number) => {
    if (status === 100) return "Done";
    if (status === 0) return "Not Started";
    return "In Progress";
  };

  return (
    <Content>
      <TitleBox>
        <Title>나의 설문 목록</Title>
        <Button>설문추가</Button>
      </TitleBox>
      <List>
        {results &&
          results.map((item) => (
            <ListItem key={item.id}>
              <Link href={``}>
                <Item>
                  <ListIcon status={progressText(item.progress)}></ListIcon>
                  <TextBox>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </TextBox>
                  <Progress number={item.progress}>
                    progress{item.progress}
                  </Progress>
                  <Badge status={progressText(item.progress)}>
                    {progressText(item.progress)}
                  </Badge>
                </Item>
              </Link>
            </ListItem>
          ))}
      </List>
    </Content>
  );
}

interface ProgressState {
  status: string;
}

interface ProgressNumber {
  number: number;
}

const Content = styled.div`
  max-width: 1440px;
  padding: 30px;
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 14px;
  z-index: 20;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
`;

const Button = styled.button`
  width: 200px;
  height: 50px;
  border-radius: 25px;
  background: ${COLOR.CREAM_ORANGE};
  font-size: 16px;
  color: #fff;
  font-weight: 700;
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

const ListIcon = styled.i<ProgressState>`
  display: inline-block;
  position: relative;
  width: 40px;
  height: 40px;
  margin-right: 20px;
  background: url("icon_list.png") no-repeat left center / 100%;
  &:after {
    content: "";
    position: absolute;
    right: 3px;
    bottom: 4px;
    display: inline-block;
    width: 7px;
    height: 7px;
    background: ${(props) => {
      if (props.status === "Done") return "#ccc";
      if (props.status === "Not Started") return COLOR.BEIGE;
      return COLOR.DACK_ORANGE;
    }};
    border-radius: 50%;
  }
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

const Progress = styled.div<ProgressNumber>`
  flex: 2;
  position: relative;
  width: 250px;
  height: 10px;
  margin-right: 40px;
  background: #eee;
  font-size: 0;
  border-radius: 10px;
  overflow: hidden;
  &:after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: ${(props) => `${props.number}%`};
    height: 10px;
    background: ${(props) =>
      props.number === 100 ? "#ccc" : COLOR.DACK_ORANGE};
  }
`;

const Badge = styled.div<ProgressState>`
  flex: 1;
  position: relative;
  max-width: 160px;
  height: 40px;
  padding: 0 20px 0 40px;
  border: 1px solid #ccc;
  border-radius: 20px 20px 0 20px;
  margin-left: 20px;
  line-height: 40px;
  font-size: 14px;
  font-weight: 700;
  &:before {
    content: "";
    display: inline-block;
    position: absolute;
    left: 20px;
    top: 15px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${(props) => {
      if (props.status === "Done") return "#ccc";
      if (props.status === "Not Started") return COLOR.BEIGE;
      return COLOR.DACK_ORANGE;
    }};
  }
`;
