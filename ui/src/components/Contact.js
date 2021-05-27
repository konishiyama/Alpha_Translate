import React from "react";
import styled from "styled-components";
import { Button, Form, Input, PageCover, SubIndex } from "../components/common";

const TEXTAREA = styled.textarea`
  display: block;
  width: 100%;
  height: 8rem;
  padding: 8px;
  font-size: 14px;
  margin-bottom: 18px;
  border-radius: 4px;
  border: 1px solid #ddd;
  box-shadow: none;
`;

const Contact = () => {
  return (
    <>
      <Form
        name="contact"
        method="post"
        action="/contact_success"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <p>下記フォームに必要事項をご記入の上、「送信」を押してください。</p>
        <p>メールアドレスの入力はお間違いのないようにお気をつけください。</p>
        <br></br>
        <input type="hidden" name="form-name" value="contact" />
        <SubIndex>お名前</SubIndex>
        <Input required placeholder="Name" type="text" name="name" />
        <SubIndex>タイトル</SubIndex>
        <Input required placeholder="Title" type="text" name="subject" />
        <SubIndex>EMAIL</SubIndex>
        <Input required placeholder="Email" type="email" name="email" />
        <SubIndex>お問合せ内容</SubIndex>
        <TEXTAREA required placeholder="Inquiry" name="inquiry" />
        <Button type="submit" block>
          送信
        </Button>
      </Form>
    </>
  );
};

export default Contact;
