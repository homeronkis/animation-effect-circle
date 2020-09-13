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
      y: 'rand(10, 50 )',
      x: 'rand(40, 100)',
      shape: 'custom',
      fill: 'black',
      draw(el, props) {

      }

    }
    const HEART_OPTS = {
      customProperties: CUSTOM_PROPERTIES,
      fill: '#3C5E82',
      x: {40: 140},
      y: {180: -300},
      shape: 'custom',
      direction: 1,
      radius: 'stagger(20, 30)',
      swirlFrequency: 4,
      scale: {1: 'rand(0.1, 0.5)'},
      duration: 2800,

    }
    const firstGroup = new staggerShapes({
      quantifier: 3,
      ...HEART_OPTS,
      y: {300: -450},
      degreeShift: 2,
      direction: 1
    })
    const secondGroup = new staggerShapes({
      quantifier: 2,
      ...HEART_OPTS,
      y: {280: -470},
      degreeShift: 2,

    })
    const fourthGroup = new staggerShapes({
      quantifier: 2,
      ...HEART_OPTS,
      y: {150: -490},
      degreeShift: 3,

    })
    const fiveGroup = new staggerShapes({
      quantifier: 3,
      ...HEART_OPTS,
      y: {120: -515},
      degreeShift: -1,

    })
    const sixthGroup = new staggerShapes({
      quantifier: 3,
      ...HEART_OPTS,
      y: {90: -470},
      degreeShift: 1,
    })
    const eightGroup = new staggerShapes({
      quantifier: 2,
      ...HEART_OPTS,
      y: {80: -480},
      degreeShift: 1,
    })
    const seventhGroup = new staggerShapes({
      quantifier: 2,
      ...HEART_OPTS,
      y: {70: -500},
      degreeShift: -5,
    })
    const timeline = new mojs.Timeline();
    timeline.add(firstGroup, secondGroup, fourthGroup, fiveGroup, sixthGroup, eightGroup, seventhGroup).play();
    // new MojsPlayer({add: timeline})
  }


  render() {
    return <div id="hearts"></div>;
  }
}
