import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Nunito:300,400,700|Roboto:300,400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    overflow: hidden;
    padding: 20px;
    
  }
  body, html, #root{
    height:100%;
  }

  body {
    font-family: 'Nunito', 'Roboto', sans-serif;
    /* font-family: 'Consolas', 'Roboto', sans-serif; */
    font-size: 14px;
    background: rgb(25, 24, 31);
    color: #fff;
    -webkit-font-smoothing: antialiased !important;

  }

  ul {
    list-style: none;
  }

  .squares {
    margin-top: 100px;
    opacity: 0.15;
    display: block;
    position: absolute;
    bottom: 0;
    width: 100%;

    li {
      animation: up 10s;
    }
  }

  @media (max-width: 768px) {
    .squares {
      display: none;
    }
  }

`;
