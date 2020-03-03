import React from 'react';
import { Spring } from 'react-spring/renderprops';
import { Transition } from 'react-spring/renderprops';

const c = [{ text: 'U' }];
const e = [{ text: 'N' }];
const s = [{ text: 'D' }];
const a = [{ text: 'E' }];
const r = [{ text: 'R' }];

const InitialAnimation = props => {
  if (props.animation) {
    return (
      <>
        <Transition
          items={c}
          keys={item => item.key}
          delay="1200"
          from={{ transform: 'translate3d(0,-900px,0)' }}
          enter={{ transform: 'translate3d(0,0px,0)' }}
        >
          {item => props => (
            <p className="name" style={props}>
              {item.text}
            </p>
          )}
        </Transition>
        <Transition
          items={e}
          keys={item => item.key}
          delay="1300"
          from={{ transform: 'translate3d(0,-900px,0)' }}
          enter={{ transform: 'translate3d(0,0px,0)' }}
        >
          {item => props => (
            <p className="name" style={props}>
              {item.text}
            </p>
          )}
        </Transition>
        <Transition
          items={s}
          keys={item => item.key}
          delay="1400"
          from={{ transform: 'translate3d(0,-900px,0)' }}
          enter={{ transform: 'translate3d(0,0px,0)' }}
        >
          {item => props => (
            <p className="name" style={props}>
              {item.text}
            </p>
          )}
        </Transition>
        <Transition
          items={a}
          keys={item => item.key}
          delay="1500"
          from={{ transform: 'translate3d(0,-900px,0)' }}
          enter={{ transform: 'translate3d(0,0px,0)' }}
        >
          {item => props => (
            <p className="name" style={props}>
              {item.text}
            </p>
          )}
        </Transition>
        <Transition
          items={r}
          keys={item => item.key}
          delay="1600"
          from={{ transform: 'translate3d(0,-900px,0)' }}
          enter={{ transform: 'translate3d(0,0px,0)' }}
        >
          {item => props => (
            <p className="name" style={props}>
              {item.text}
            </p>
          )}
        </Transition>
        <Spring
          from={{
            opacity: 0
          }}
          to={{ opacity: 1 }}
          delay="750"
        >
          {props => (
            <div style={props}>
              <p id="cast" className="name">
                CONSTRUCTION
              </p>
            </div>
          )}
        </Spring>
        <div className="contact">
          <p>contact me:&nbsp;</p>
          <a href="mailto:cescastillo25@gmail.com">
            <img
              style={{ width: '52px', marginTop: '4px' }}
              alt="Email Icon"
              className="email"
              src="https://img.Icons8.com/small/90/3d3e3d/filled-message.png"
            />
          </a>
          <a href="https://github.com/cesarcast1llo/" target="_blank">
            <img
              style={{ width: '52px' }}
              className="github"
              alt="Github Icon"
              src="https://img.icons8.com/ios-glyphs/120/3d3e3d/github.png"
            />
          </a>
          <a href="https://www.linkedin.com/in/cescastillo/" target="_blank">
            <img
              style={{ width: '50px' }}
              alt="LinkedIn icon"
              className="lnkdin"
              src="https://img.icons8.com/ios-filled/100/3d3e3d/linkedin.png"
            />
          </a>
        </div>
      </>
    );
  } else {
    return null;
  }
};

export default InitialAnimation;
