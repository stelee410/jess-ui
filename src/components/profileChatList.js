import { Avatar, List, ListItem, ListItemText, Divider, ListItemAvatar } from "@mui/material";
import React from "react";
import Typography from '@mui/material/Typography';

function formatTimestamp(timestamp){
    const ts = new Date(timestamp);
    return new Intl.DateTimeFormat('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(ts);
}

function ProfileChatList({chats,currentProfile}) {
    if(!chats){
        return null;
    }
    if(!currentProfile){
        currentProfile = chats[0].name;
    }
    const thisChat = chats.find(chat => chat.name === currentProfile);
    const otherChats = chats.filter(chat => chat.name !== currentProfile);
    return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={thisChat.name} src={thisChat.avatar} />
        </ListItemAvatar>
        <ListItemText
          primary={thisChat.displayName}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {formatTimestamp(thisChat.lastchatTimestamp)}
              </Typography>
               &nbsp; — &nbsp; {thisChat.lastchat}
            </React.Fragment>
          }
        />
      </ListItem>
      {
        otherChats.map((chat, index) => (
            <div>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                <Avatar alt={chat.name} src={chat.avatar} />
                </ListItemAvatar>
                <ListItemText
                primary={chat.displayName}
                secondary={
                    <React.Fragment>
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        {formatTimestamp(chat.lastchatTimestamp)}
                    </Typography>
                    &nbsp; — &nbsp; {chat.lastchat}
                    </React.Fragment>
                }
                />
            </ListItem>
            </div>
        )
        )
      }
    </List>
        // <div style={{display:'flex'}}>
        //       {profiles.map((profile, index) => (
        //             <Link to={`chat/${profile.name}`}>
        //                 <Avatar key={index} alt={profile.name} src={profile.avatar} sx={{ width: 56, height: 56, margin: 1 }}/>
        //             </Link>
        //         ))}
        // </div>
    );
}

export default ProfileChatList;