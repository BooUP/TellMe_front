import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  html,body {font-family: 'Nanum Gothic', sans-serif; height:100%;width:100%;overflow:hidden;}
  * {margin:0; padding:0;-ms-user-select: none; -moz-user-select: -moz-none; -webkit-user-select: none; -khtml-user-select: none; user-select:none;line-height:1;}
  *, ::after, ::before {-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing: border-box;}
  body {color:#333; font-size:16px; line-height:18px;}
  ul,ol,li{list-style:none;}
  img,hr{border:none;}
  img	{display:inline-block;vertical-align:middle;width:100%;border:0px;}
  table {border-collapse:collapse; border-spacing:0; width:100%;}
  table td img {vertical-align:middle;}
  a {display:inline-block;color:#333;}
  a:link,a:visited,a:active,a:hover {text-decoration:none;}
  article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section {display:block;}

  input[type='email'],
  input[type='text'],
  input[type='password'],
  input[type="date"] {display:inline-block;width:100%;height:48px;padding:0 15px;color:#333;font-size:14px;-moz-user-select:auto;-webkit-user-select:auto;-ms-user-select:auto;user-select:auto;vertical-align:middle; border:1px solid #000;outline: 0;border-radius:10px}
  input[type='email']::placeholder,
  input[type='text']::placeholder,
  input[type='password']::placeholder,
  input[type='date']::placeholder {color:#494B56;}
  input[type='email']:focus,
  input[type='text']:focus,
  input[type='password']:focus,
  input[type='date']:focus {border-color: #ff6701}
  select {display:inline-block;width:100%;height:48px;background:url('/images/button/btn_select.png') no-repeat center right 21px / 13px 8px #1A1A1A;border:none;color:#fff;font-size:14px;-moz-user-select:auto;-webkit-user-select:auto;-ms-user-select:auto;user-select:auto; -webkit-appearance: none;-moz-appearance: none;}
  textarea {display:inline-block;vertical-align:middle;width:100%;padding:8px 8px; border:solid 1px #cccccc;background-color:#fff;color:#333;outline:none;font-size:18px;}
  input[type='file'],
  input[type='image'],
  input[type='reset'],
  input[type='button'],
  input[type='submit'] {cursor:pointer;}
  input[type='text']::-ms-clear {display: none;}
  input[type='password']::-ms-clear {display: none;}
  button {border:0 none;background-color:transparent;cursor:pointer;outline:none;}
  hr, caption {display:none;position:absolute; right:-9999px; top:-9999px;height:0;text-indent:-1000000000px;font-size:0;}
  legend {position:absolute;height:0;font-size:0px;line-height:0;overflow:hidden;text-indent:-9999px;}
  i,address,cite,em {font-style:normal;}
  label {cursor:pointer;}
  .cusor {cursor:pointer}
  fieldset {border:0;}
  input[type="checkbox"],
  input[type="radio"] {display:none;}

  h1 {margin:0;}
  #__next {height:100%;}
  #wrapper {height:100%;overflow:auto;}
  .container {background:#FCECDD;min-height:calc(100vh - 170px);}
`;
