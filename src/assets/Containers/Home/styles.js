import styled from "styled-components";
import turing2 from "../../../assets/turing2.jpg"
import turing3 from "../../../assets/turing3.jpg"
import turing4 from "../../../assets/turing4.jpg"
import turing5 from "../../../assets/turing5.jpg"
import turing6 from "../../../assets/turing6.jpg"
import turing7 from "../../../assets/turing7.jpg"

export const Header = styled.div`
    border-bottom: 1px solid #EBEBEB;
`
export const InputBox = styled.div`
    padding-top: 20px;
    padding-bottom: 9px;

    img{
        width: 92px;
        position: absolute;
        top: 30px;
        left: 20px;
    }
`
export const Img = styled.img``
export const Form = styled.form`
    display: inline-block;
    position: relative;

    #search-icon, #keyboard-icon, #mic-icon  {
    position: absolute;
    top: 14px;
    font-size: 18px;
  }

    #search-icon {
    right: 18px;;
    }

    #keyboard-icon {
    right: 53px;
    }

    #mic-icon {
    right: 88px;
    }

    span{
        cursor: pointer;
    }
`
export const Input = styled.input`
    height: 44px;
    border-radius: 22px;
    width: 597px;
    border: 1px solid #DFE1E5;
    padding: 0 21px;
    margin-left: 146px;
    font-size: 16px;
`


export const Nav = styled.nav`
    #links-list {
        list-style: none;
        padding-left: 0;
        margin-left: 146px;
        margin-bottom: 0;
    }

    #links-list li {
        display: inline-block;
        padding: 0 11px;
    }

    #links-list li a {
        color: #5F6368;
        text-decoration: none;
        font-size: 13px;
        padding-bottom: 12px;
        display: inline-block;
    }

    #links-list li span {
        font-size: 16px;
        display: inline-block;
        margin-right: 3px;
    }

    #links-list li a:hover {
        color: #1A73E8;
    }

    .active-link {
        border-bottom: 3px solid #1A73E8;
    }

    #links-list .active-link a {
        color: #1A73E8;
    }

`
export const Ul = styled.ul`
    list-style: none;
    padding-left: 0;
    margin-left: 146px;
    margin-bottom: 0;
`
export const Li = styled.li`
    list-style: none;
    padding-left: 0;
    margin-left: 146px;
    margin-bottom: 0;

    a{
        color: #5F6368;
        text-decoration: none;
        font-size: 13px;
        padding-bottom: 12px;
        display: inline-block;
    }

    span{
        font-size: 16px;
        display: inline-block;
        margin-right: 3px;
    }

    a:hover {
        color: #1A73E8;
    }
`
export const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding-left: 165px;
    padding-right: 70px;

    display: inline-block;
    font-size: 14px;
    color: #3C4043;
    text-decoration: none;
    margin-bottom: 8px;
    margin-top: 15px;
    position: relative;
    width: auto;
`
export const Main = styled.main`
    flex: 2 1 0;
    padding-right: 35px;

    #results{
        color: #70757A;
        font-size: 14px;
        margin-bottom: 5px;
    }

    .search-result-box{
        margin-bottom: 10px;

    }

    .ref-link{
        display: inline-block;
        font-size: 14px;
        color: #3C4043;
        text-decoration: none;
        margin-bottom: 8px;
        margin-top: 15px;
        position: relative;
        width: auto;
    }

    .triangle{
        width: 0; 
        height: 0; 
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid #3C4043;
        position: absolute;
        top: 7px;
        right: -15px;
    }

    .main-link {
        font-size: 20px;
        text-decoration: none;
        display: block;
    }

    .main-link:hover {
        text-decoration: underline;
    }

    .search-result-desc{
        font-size: 14px;
        color: #3C4043;
        line-height: 1.57;
        margin: 5px 0;
    }

    .info-box{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
    }

    .info{
        flex: 1 1 1;
        width: 50%;
        color: #70757A;
        font-size: 14px;
        margin: 5px 0;
    }

    .info-title {
        font-weight: bold;
    }

    .related-results{
        list-style: none;
        padding-left: 0;
        margin: 5px 0;
    }

    ul{
        list-style: none;
        padding-left: 0;
        margin: 5px 0;
    }

    li{
        display: inline-block;
    }

    li a{
        font-size: 14px;
        text-decoration: none;
    }


`
export const Lado = styled.aside`
    flex: 1 1 0;
    min-width: 460px;
    margin-top: 50px;
    position: relative;
    
    #gallery-box {
        height: 186px;
        position: relative;
    }

    .userPhoto {
        border-top-left-radius: 10px;
    }

    #gallery {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 305px;
        height: 186px;
        position: absolute;
        top: 0;
        left: 149px;
    }

    div{
        flex: 1 1 30%;
        height: 50%;
        background-size: cover;
        background-position: center;
    }

    #gallery-img1 {
        background-image: url(${turing2});
    }

    #gallery-img2 {
        background-image: url(${turing3});
    }

    #gallery-img3 {
        background-image: url(${turing4});
        border-top-right-radius: 10px;
    }

    #gallery-img4 {
        background-image: url(${turing5});
    }

    #gallery-img5 {
        background-image: url(${turing6});
    }

    #gallery-img6 {
        background-image: url(${turing7});
    }
    
    #moreimg-btn{
        position: absolute;
        right: 0;
        padding: 10px;
        bottom: 0;
        font-size: 13px;
        color: #fff;
        background-color: black;
        text-decoration: none;
        border-top-left-radius: 5px;
    }

    .lnr-picture{
        margin-right: 5px;
    }

    #about-box{
        border: 1px solid #EBEBEB;
    }

    #name-box{
        border-bottom: 1px solid #EBEBEB;;
    }

    #name{
        font-size: 30px;
        font-weight: 400;
        margin-top: 12px;
        margin-bottom: 10px;
    }

    #role{
        color: #70757A;
        font-size: 14px;
        margin: 0;
        margin-bottom: 20px;
    }

    .about-text{
        font-size: 14px;
        color: #222;
        line-height: 1.57;
        padding: 0 15px;
    }

    .spantext{
        font-weight: bold;
    }
`
