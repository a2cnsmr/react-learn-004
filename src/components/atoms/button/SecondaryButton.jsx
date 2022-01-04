import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const SecondaryButton = (props) => {
  const { children } = props;

  return <SButton>{children}</SButton>;
};

// ボタンのスタイルを作成する
// const SButton = styled.button`
//   background-color: #11999e;
//   color: #fff;
//   padding: 6px 24px;
//   border: none;
//   border-radius: 9999px;
//   outline: none;
//   &:hover {
//     cursor: pointer;
//     opacity: 0.8;
//   }
// `;

// 基本となるボタンを継承し、スタイルを追加する
const SButton = styled(BaseButton)`
  background-color: #11999e;
`;
