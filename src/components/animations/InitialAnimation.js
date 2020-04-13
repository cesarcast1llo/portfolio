import React from 'react';
import { Spring } from 'react-spring/renderprops';
import { Transition } from 'react-spring/renderprops';

const c = [{ text: 'C' }];
const e = [{ text: 'E' }];
const s = [{ text: 'S' }];
const a = [{ text: 'A' }];
const r = [{ text: 'R' }];

const InitialAnimation = (props) => {
  if (props.animation) {
    return (
      <>
        <Transition
          items={c}
          keys={(item) => item.key}
          delay="1000"
          from={{ transform: 'translate3d(0,-900px,0)' }}
          enter={{ transform: 'translate3d(0,0px,0)' }}
        >
          {(item) => (props) => (
            <p className="name" style={props}>
              {item.text}
            </p>
          )}
        </Transition>
        <Transition
          items={e}
          keys={(item) => item.key}
          delay="1200"
          from={{ transform: 'translate3d(0,-900px,0)' }}
          enter={{ transform: 'translate3d(0,0px,0)' }}
        >
          {(item) => (props) => (
            <p className="name" style={props}>
              {item.text}
            </p>
          )}
        </Transition>
        <Transition
          items={s}
          keys={(item) => item.key}
          delay="1400"
          from={{ transform: 'translate3d(0,-900px,0)' }}
          enter={{ transform: 'translate3d(0,0px,0)' }}
        >
          {(item) => (props) => (
            <p className="name" style={props}>
              {item.text}
            </p>
          )}
        </Transition>
        <Transition
          items={a}
          keys={(item) => item.key}
          delay="1600"
          from={{ transform: 'translate3d(0,-900px,0)' }}
          enter={{ transform: 'translate3d(0,0px,0)' }}
        >
          {(item) => (props) => (
            <p className="name" style={props}>
              {item.text}
            </p>
          )}
        </Transition>
        <Transition
          items={r}
          keys={(item) => item.key}
          delay="1800"
          from={{ transform: 'translate3d(0,-900px,0)' }}
          enter={{ transform: 'translate3d(0,0px,0)' }}
        >
          {(item) => (props) => (
            <p className="name" style={props}>
              {item.text}
            </p>
          )}
        </Transition>
        <Spring
          from={{
            opacity: 0,
          }}
          to={{ opacity: 1 }}
          delay="750"
        >
          {(props) => (
            <div style={props}>
              <p id="cast" className="name">
                CASTILLO
              </p>
            </div>
          )}
        </Spring>
      </>
    );
  } else {
    return null;
  }
};

export default InitialAnimation;
