import React from "react"
import Layout from "../layouts/Layout"
import HeartsAnimation from "../components/effects/HeartsAnimation";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMicrophone} from '@fortawesome/free-solid-svg-icons'

function Home () {
  return (
    <Layout>
      <HeartsAnimation />
      <p className="simple-text">Say:</p>
      <div className="input-voice-btn">
        <FontAwesomeIcon icon={faMicrophone} color="#2D97FD"></FontAwesomeIcon>
      </div>
    </Layout>
  )
}
export default Home