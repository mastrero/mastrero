import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { Input, Submit } from '../ui/Input';
import Loader from '../ui/Loader';
import emailjs from 'emailjs-com';

/* eslint jsx-a11y/no-noninteractive-element-interactions: 0 */
/* eslint jsx-a11y/click-events-have-key-events: 0 */

const wrapper_anim = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`;

const form_anim = keyframes`
  0% {
    width: 0;
    transform: translateY(150%)
  }
  30% {
    transform: translateY(120%)
  }
  100% {
    transform: translateY(0%)
  }
`;

const ModelWrapper = styled.div`
  position: absolute;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 20;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  &.show {
    animation: ${wrapper_anim} 0.55s linear 0s 1;
  }
`;

const Model = styled.div`
  width: 40%;
  max-width: 380px;
  min-height: 200px;
  padding: 0px;
  min-width: 0px;
  background-color: #fff;
  position: relative;
  border-radius: 5%;
  box-shadow: 0px 0px 10px 0px #777777;
  > p {
    margin: 5px 0;
    font-size: 18px;
    font-weight: 600;
    text-align: center;
  }
  &.show {
    animation: ${form_anim} 0.35s linear 0s 1;
    > form {
      animation: ${wrapper_anim} 0.8s linear 0s 1;
    }
  }
  > form {
    margin-top: 10px;
    padding: 0 10px;
    > span {
      color: red;
      font-size: 14px;
      font-style: italic;
    }
  }
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

const ModelHeading = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  box-shadow: 0px 0px 5px 0px #777777;
  cursor: pointer;
  position: absolute;
  right: 0px;
  top: 0%;
`;

const CloseModel = styled.div`
  &,
  &:after {
    width: 22px;
    height: 2px;
    background-color: black;
    position: absolute;
  }
  & {
    transform: rotate(45deg);
    top: 50%;
    right: 15%;
  }
  &:after {
    content: '';
    transform: rotate(90deg);
  }
`;

export default function ContactModal({ show, close }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    purpose: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handlers = {
    updateValue: ({ target: { name, value } }) => {
      setFormData(prevData => {
        prevData[name] = value;
        return { ...prevData };
      });
    },
    submitForm: async e => {
      if (Object.values(formData).every(data => data) && /\S+@\S+\.\S+/.test(formData['email'])) {
        e.preventDefault();
        setSubmitting(true);
        await emailjs
          .send(
            process.env.GATSBY_EMAILJS_SERVICE,
            process.env.GATSBY_EMAILJS_TEMPLATE,
            formData,
            process.env.GATSBY_EMAILJS_USER_ID
          )
          .then(() => setSubmitted(true))
          .catch(e => console.log(e));
        setSubmitting(false);
      }
    },
  };

  return (
    <ModelWrapper className={show ? 'show' : ''}>
      <Model className={show ? 'show' : ''}>
        {submitting && <Loader />}
        <p>{!submitted ? 'Reach me out ... 🐱‍🏍' : 'CHEERS 🍻 !!'}</p>
        <ModelHeading onClick={close}>
          <CloseModel />
        </ModelHeading>
        {!submitted ? (
          <form name="Get_In_Touch">
            <Input value={formData['name']} update={handlers.updateValue} type="text" label="Name" name="name" />
            <Input value={formData['email']} update={handlers.updateValue} type="email" label="Email ID" name="email" />
            <Input value={formData['purpose']} update={handlers.updateValue} type="text" label="Purpose" name="purpose" />
            <Submit text="Submit" click={handlers.submitForm} />
            <span>* - required</span>
          </form>
        ) : (
          <Fragment>
            <p>We shall have a conversation soon ...</p>
            <img
              onClick={() => window.open('https://dribbble.com/catherinehpkns', '_blank')}
              src="https://cdn.dribbble.com/users/1088487/screenshots/3020473/cheers-dribbble.gif"
              style={{
                width: '50%',
                cursor: 'pointer',
                display: 'block',
                margin: '0 auto',
              }}
              alt="Cheers by Catherine Hopkins 💖"
              title="'Cheers' by Catherine Hopkins 💖"
              loading="eager"
            />
          </Fragment>
        )}
      </Model>
    </ModelWrapper>
  );
}

//! PROPTYPES
ContactModal.propTypes = {
  show: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};
