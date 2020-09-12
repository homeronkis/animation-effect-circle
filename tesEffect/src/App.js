import React, {Component} from "react";
import mojs from "@mojs/core";

// import MojsPlayer from "@mojs/player";

// import "./styles.css";

export default class App extends Component {

  componentDidMount() {
    /* ADD CUSTOM SHAPE */
    class Heart extends mojs.CustomShape {
      getShape() {
        return '<path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"/>';
      }

      getLength() {
        return 200;
      } // optional
    }


    mojs.addShape('custom', Heart);
    const CUSTOM_PROPERTIES = {
      Parent: '#hearts',
      y: {0: 0},
      x: {0: 0},
      shape: 'custom',
      fill: 'black',
      draw(el, props) {

      }

    }
    const HEART_OPTS = {
      customProperties: CUSTOM_PROPERTIES,
      fill: 'black',
      y: {0: 0},
      x: {0: 0},
      shape: 'custom',
      direction: 1,
      radius: 100,
      swirlFrequency: 4,
      duration: 2500,

    }
    const firstGroup = new mojs.ShapeSwirl({
      ...HEART_OPTS,
      y: {150: -400},
      degreeShift: 10,

    }).then({
      ...HEART_OPTS,
      y: {500: -400},
      degreeShift: 10,

    })
    const secondHeart = new mojs.ShapeSwirl({
      ...HEART_OPTS,
      y: {190: -400},
      degreeShift: 10,

    }).then({
      ...HEART_OPTS,
        y: {530: -450},
      degreeShift: 14,
      direction: 1
    })

    const timeline = new mojs.Timeline();
    timeline.add(firstGroup, secondHeart).play();
    // new MojsPlayer({add: timeline})
  }


  render() {
    return <div id="hearts"></div>;
  }
}
