import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';
import { Transition } from 'react-spring/renderprops';

const c = [{ text: 'E' }];
const e = [{ text: 'E' }];
const s = [{ text: 'A' }];
const a = [{ text: 'E' }];
const r = [{ text: 'R' }];

export default class InitialAnimation extends Component {
  // constructor(props) {
  //    super(props);
  //    this.state = {
  //      name: props.initialName || ``
  //    };
  //  }

  render() {
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
          delay="1250"
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
          items={a}
          keys={item => item.key}
          delay="1350"
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
        <Spring
          from={{
            opacity: 0
          }}
          to={{ opacity: 1 }}
          delay="1000"
        >
          {props => (
            <div style={props}>
              <p id="cast" className="name">
                IPSUMMMM
              </p>
            </div>
          )}
        </Spring>
      </>
    );
  }
}
