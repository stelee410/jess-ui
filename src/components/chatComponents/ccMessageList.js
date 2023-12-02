import { Avatar, Box, List, ListItem } from "@mui/material";
import { useRef, useEffect } from "react";

function CCMessageList({messages, profile}){
    let myAvatar = 'https://avatars.githubusercontent.com/u/25126281?v=4';
    const messagesEndRef = useRef(null);
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }
    
    useEffect(scrollToBottom, [messages]);
    return (
        <List
            sx={{
                overflowY: 'scroll',
                height: 'calc(80vh - 50px)',
                padding: 1,
                '&::-webkit-scrollbar': {
                    width: '0.4em',
                },
                '&::-webkit-scrollbar-thumb': {
                    backgroundColor: 'rgba(0, 0, 0, .1)',
                },
                color: 'black',
            }}
        >
            {messages.map((message, index) => (
                    <ListItem 
                        key={index} 
                        sx={{
                            display: 'flex',
                            flexDirection: message.role === 'user' ? 'row-reverse' : 'row',
                            justifyContent: 'flex-start',
                            marginBottom: 1,
                        }}
                    >
                        <Avatar src={message.role === 'user' ? myAvatar : profile.avatar} sx={
                            {
                                marginLeft: message.role === 'user' ? 1 : 0,
                                marginRight: message.role === 'user' ? 0 : 1,
                            }
                        }/>
                        <Box
                            sx={{
                                padding: 1,
                                backgroundColor: message.role === 'user' ? '#78e08f' : '#82ccdd',
                                borderRadius: '10px',
                                maxWidth: '70%',
                                wordWrap: 'break-word',
                                marginLeft: message.role === 'user' ? 1 : 0,
                                marginRight: message.role === 'user' ? 0 : 1,
                            }}
                        >
                            {message.message}
                        </Box>
                    </ListItem>
            ))}
            <div ref={messagesEndRef} />
        </List>
    );
}

export default CCMessageList;