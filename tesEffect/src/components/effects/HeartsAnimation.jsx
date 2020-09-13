import React, {Component} from "react";
import mojs from "@mojs/core";

export default class App extends Component {

  componentDidMount() {
    class Heart extends mojs.CustomShape {
      getShape() {
        return '<path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"/>';
      }

      getLength() {
        return 200;
      } // optional
    }


    mojs.addShape('custom', Heart);
    var staggerShapes = mojs.stagger(mojs.ShapeSwirl);
    const CUSTOM_PROPERTIES = {
      Parent: '#hearts',
      shape: 'custom',
      draw(el, props) {
      }

    }
    const HEART_OPTS = {
      customProperties: CUSTOM_PROPERTIES,
      fill: '#3C5E82',
      y: {300: -500},
      x: {[-50]: 0},
      shape: 'custom',
      scale: {1: 1},
      duration: 6000,
      radius: 30,
      swirlFrequency: 3,

    }
    const firstGroup = new staggerShapes({
      ...HEART_OPTS,
      y: {250: -500},
      quantifier: 10,
      speed: ['rand(2, 2.9)'],
      swirlFrequency: [
        'rand(3, 2.8)'
      ],
      direction: [
        'rand(1, 2.2)'
      ],
    })
    const secondGroup = new staggerShapes({
      ...HEART_OPTS,
      y: {300: -500},
      quantifier: 10,
      speed: ['rand(1.8, 3)'],
      swirlFrequency: [
        'rand(3, 4.5)'
      ],
      direction: [
        'rand(1.2,2.5)'
      ],
    })
    const thirdGroup = new staggerShapes({
      ...HEART_OPTS,
      y: {300: -500},
      quantifier: 10,
      speed: ['rand(2, 3.2)'],
      swirlFrequency: [
        'rand(2.9, 4)'
      ],
      direction: [
        'rand(2, 2.3)'
      ],
    })
    const timeline = new mojs.Timeline();
    timeline.add(firstGroup,secondGroup, thirdGroup
    ).play();
    // new MojsPlayer({add: timeline})
  }


  render() {
    return <div id="hearts"></div>;
  }
}
