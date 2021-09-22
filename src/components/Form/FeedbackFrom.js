import React, { useState } from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import { device } from '../../device/device.js';

const CardWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 425px;
  height: 350px;
  // border: 1px solid gray;
  top: 100px;

  @media ${device.desktop} {
    width: 563px;
    height: 575px;
    top: 179px;
    left: 147px;
  }
`;
const FormTitle = styled.h1`
  font-family: Apercu Arabic Pro;
  font-weight: 400;
  font-size: 25px;
  line-height: 130%;
  margin-top: 0px;
  margin-bottom: 20px;
  text-align: center;

  @media ${device.desktop} {
    font-size: 40px;
    margin-bottom: 30px;
    text-align: left;
  }
`;

const Form = styled.form``;

const FormContiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  height: 45px;
  width: 401px;
  margin-bottom: 8px;
  padding-left: 26px;
  font-size: 18px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  box-sizing: border-box;
  border-radius: 10px;

  @media ${device.desktop} {
    height: 93px;
    width: 557px;
    padding-left: 46px;
    font-size: 24px;
  }

  ::placeholder,
  ::-webkit-input-placeholder {
    font-family: Apercu Arabic Pro;
    font-weight: 400;
    font-size: 14px;
    color: #2d2d2d;

    @media ${device.desktop} {
      font-size: 18px;
    }
  }
`;

const StyledTextarea = styled.textarea`
  height: 100px;
  width: 401px;
  margin-bottom: 23px;
  padding-left: 26px;
  padding-top: 16px;
  font-size: 18px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  box-sizing: border-box;
  border-radius: 10px;
  resize: none;

  @media ${device.desktop} {
    height: 189px;
    width: 557px;
    padding-left: 46px;
    padding-top: 31px;
    font-size: 24px;
  }

  ::placeholder,
  ::-webkit-input-placeholder {
    font-family: Apercu Arabic Pro;
    font-weight: 400;
    font-size: 14px;
    color: #2d2d2d;
    @media ${device.desktop} {
      font-size: 18px;
    }
  }
`;

const Button = styled.button`
  display: block;
  width: 150px;
  height: 50px;
  background-color: #fad34f;
  border-radius: 500px;
  border: 0;
  color: rgba(255, 255, 255, 1);
  margin: 0px auto;

  @media ${device.desktop} {
    width: 218px;
    height: 73px;
    margin-left: 3px;
  }
`;

const FeedbackFrom = () => {
  const [feedback, setFeedback] = useState({
    name: '',
    email: '',
    comment: '',
  });

  const onInputChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setFeedback(prevState => ({ ...prevState, [name]: value }));
        break;
      case 'email':
        setFeedback(prevState => ({ ...prevState, [name]: value }));
        break;
      case 'comment':
        setFeedback(prevState => ({ ...prevState, [name]: value }));
        break;
      default:
        console.log("There aren't such data");
    }
  };
  const submitHandler = e => {
    e.preventDefault();
    // Here we make fetch Post request to server
    reset();
  };

  const reset = () => {
    setFeedback({ name: '', email: '', comment: '' });
  };

  return (
    <>
      <CardWrapper>
        <FormTitle>Reach out to us!</FormTitle>
        <Form onSubmit={submitHandler}>
          <FormContiner>
            <Input
              type="text"
              name="name"
              value={feedback.name}
              onChange={onInputChange}
              placeholder={'Your name*'}
            />
            <Input
              type="text"
              name="email"
              value={feedback.email}
              onChange={onInputChange}
              placeholder={'Your e-mail*'}
            />
            <StyledTextarea
              type="text"
              name="comment"
              value={feedback.comment}
              onChange={onInputChange}
              placeholder={'Your message*'}
            />
          </FormContiner>
          <Button type="submit">Send message</Button>
        </Form>
      </CardWrapper>
    </>
  );
};

export default FeedbackFrom;
