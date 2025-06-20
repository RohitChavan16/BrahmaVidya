import React , { useContext, useState } from "react";
import { Context } from "../../context/Context";
import './Sidebar.css'
import {assets} from '../../assets/assets'

const Sidebar = () => {

   const[expand, setExpanded] = useState(false);
   const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

   const ChangedSidebar = () => {
    setExpanded(prev => !prev);
  };
  const loadPreviousPrompt = async (prompt) => {
		setRecentPrompt(prompt);
		await onSent(prompt);
	};
    return(
      <div className = "sidebar">
      <div className="top">
        <img onClick ={ChangedSidebar} className = 'menuIcon' src ={assets.menu_icon} alt = "Menu-Icon" />
     <div onClick={()=>{newChat()}} className="newChat">
        <img src = {assets.plus_icon} alt = "Plus-Icon" />
       {expand ? <p>New Chat</p> : null}
     </div>
     {expand ?
     <div className="recent">
       
        <p className ="recent-title">Recent</p>
        {prevPrompts.map((item, index) => {
          return (
        <div onClick={()=>{loadPreviousPrompt(item)}} className="recent-entry">
            <img src={assets.message_icon} alt = "Message-Icon" />
            <p>{item.slice(0,18)} ...</p>
        </div>
        )})}
     </div>
     
      : null
      }
       </div> 
      <div className="bottom">
  <div className="bottom-item recent-entry">
    <img src={assets.question_icon} alt = "" />
    {expand ? <p>Help</p> : null}
  </div>
  <div className="bottom-item recent-entry">
    <img src={assets.history_icon} alt = "" />
    {expand ? <p>Activity</p> : null}
  </div>
  <div className="bottom-item recent-entry">
    <img src={assets.setting_icon} alt = "" />
    {expand ? <p>Setting</p> : null}
  </div>
      </div>
      </div>
   )
}

export default Sidebar;