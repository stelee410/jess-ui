import {Box} from '@mui/material';
import CCBar from './chatComponents/ccBar';
import CCContainer from './chatComponents/ccContainer';
import { useState } from 'react';

function ChatBox({profile}){
    let messages_sample = [
        { "role": "assistant", "message": "你好，今天感觉怎么样？" },
        { "role": "user", "message": "我今天有点不太开心。" },
        { "role": "assistant", "message": "听起来你遇到了一些困难，想谈谈是什么事吗？" },
        { "role": "user", "message": "就是工作上的压力太大了。" },
        { "role": "assistant", "message": "工作压力确实很难应对。你觉得主要的压力来源是什么呢？" },
        { "role": "user", "message": "主要是截止日期太紧，任务又多。" },
        { "role": "assistant", "message": "这确实很有挑战性。你尝试过什么方法来管理工作量和截止日期吗？" },
        { "role": "user", "message": "我试过，但是感觉很难跟上。" },
        { "role": "assistant", "message": "照顾好自己很重要。也许你可以和你的经理谈谈你的感受？" },
        { "role": "user", "message": "也许我应该这么做。谢谢你的建议。" },
        { "role": "assistant", "message": "不客气。记住，寻求帮助是可以的。保重！" }
      ]
    const [messages, setMessages] = useState(messages_sample);
    const [enableUpdate, setEnableUpdate] = useState(true);
    function updateMsg(newMessage){
        setMessages((messages) => [...messages, newMessage]);
        setEnableUpdate(false);
    setTimeout(() => {
        let serverMessage={ "role": "assistant", "message": "系统正在测试，稍后恢复功能" }
        setMessages((messages) => [...messages, serverMessage]);
        setEnableUpdate(true);
    }, 2000);
    }
      
    
    return (
        <Box
            sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
        >
            <CCBar profile={profile}/>
            <CCContainer messages={messages} profile={profile} updateMessages={updateMsg} enableUpdate={enableUpdate}/>
        </Box>
    )
}

export default ChatBox;