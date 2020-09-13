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
      y: {200: -500},
      shape: 'custom',
      scale: {1: 1},
      duration: 5800,
      radius: 30,
      swirlFrequency: 4,

    }
    const firstGroup = new staggerShapes({
      y: 'stagger(300, rand(0, 5))',
      x: 'stagger(-80, rand(0, 5))',
      quantifier: 10,
      speed: ['rand(1.5, 2)'],
      ...HEART_OPTS,
      swirlFrequency: [
        'rand(3, 4.5)'
      ],
      direction: [
        'rand(2, 3)'
      ],
    })
    const secondGroup = new staggerShapes({
      y: 'stagger(200, rand(0, 5))',
      x: 'stagger(-50, rand(0, 5))',
      quantifier: 10,
      speed: ['rand(1.8, 2.5)'],
      ...HEART_OPTS,
      swirlFrequency: [
        'rand(3, 4.5)'
      ],
      direction: [
        'rand(2, 4)'
      ],
    })
    const thirdGroup = new staggerShapes({
      y: 'stagger(100, rand(0, 5))',
      x: 'stagger(-40, rand(0, 5))',
      quantifier: 10,
      speed: ['rand(2, 3)'],
      ...HEART_OPTS,
      swirlFrequency: [
        'rand(3, 4.5)'
      ],
      direction: [
        'rand(2, 3.5)'
      ],
    })
    const timeline = new mojs.Timeline();
    timeline.add(firstGroup, secondGroup, thirdGroup
    ).play();
    // new MojsPlayer({add: timeline})
  }


  render() {
    return <div id="hearts"></div>;
  }
}
