import React from 'react'
import './Main.css'
import { useContext } from "react";
import { Context } from "../../context/Context";
import {assets} from '../../assets/assets'

const Main = () => {

  const {
		onSent,
		recentPrompt,
		showResults,
		loading,
		resultData,
		setInput,
		input,
	} = useContext(Context);

return (
    <div className="main">
       <div className="nav">
				<p>BrahmaVidya</p>
				<img src={assets.user_icon} alt="User-Icon" style={{ width: '60px' }} />
			</div>
            <div className="main-container">
              { !showResults ? <>
              <div className="greet">
                <p><span>Namaskar</span></p>
                <p>How can I help you ?</p>
              </div>
              <div className="cards">
                <div className="card">
                  <p>Best books to learn coding / AI / business / productivity?</p>
                  <img src={assets.bulb_icon} />
                </div>
                <div className="card">
                  <p>Help me debug this problem</p>
                  <img src={assets.code_icon} />
                </div>
                <div className="card">
                  <p>Give me a roadmap to become a full-stack developer / data scientist.</p>
                  <img src={assets.compass_icon} />
                </div>
                <div className="card">
                  <p>Help with physics/chemistry homework problems.</p>
                  <img src={assets.message_icon} />
                </div>
              </div>
              </>  : <div className="result">
                <div className="result-title">
                  <img src={assets.bvlogo_icon} alt="" style={{ width: '90px' }} className="bvlogo" />
                  <p style={{ fontSize: '20px' }} >{recentPrompt}</p>
                </div>
                <div className="result-data">
                  <img src={assets.gemini_icon} alt=""  />
                 {loading ? (
								<div className="loader">
									<hr />
									<hr />
								</div>
							) : (
								<p dangerouslySetInnerHTML={{ __html: resultData }}></p>
							)}
                </div>
              </div>
               }
              <div className="main-bottom">
                <div className="search-box">
                  <input onChange = {(e) => setInput(e.target.value)} value={input} type="text" placeholder="Ask Anything..." />
                  <div>
                  <img src={assets.gallery_icon} alt="" />
                  <img src={assets.mic_icon} alt="" />
                  <img onClick={()=> onSent()} src={assets.send_icon} alt="" />
                  </div>
                </div>
              </div>
            </div>
    </div>
);
}

export default Main;