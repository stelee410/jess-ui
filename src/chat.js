import * as React from 'react';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import Layout from './layout';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import ProfileChatList from './components/profileChatList';
import ChatBox from './components/chatBox';


const defaultTheme = createTheme({
  palette: {
      mode:"dark"
  },
  // Define other theme customizations
});


export default function Chat() {
    const { profilename } = useParams();


    let recent_chats = [
        {name:'jess',displayName:'Jess C', avatar:'/samples/sample.png',lastchat:'豚豚，你知道其实我想你', lastchatTimestamp:'2021-10-01T12:00:00.000Z'},
        {name:'catty',displayName:'Catty', avatar:'/samples/sample2.png',lastchat:'这里真好玩～',lastchatTimestamp:'2021-10-01T12:00:00.000Z'},
        {name:'yuki',displayName:'Yuki', avatar:'/samples/sample3.png',lastchat:'亲爱的，你在干嘛呢？',lastchatTimestamp:'2021-10-01T12:00:00.000Z'},
        {name:'elle',displayName:'Elle', avatar:'/samples/sample4.jpg',lastchat:'人生有的时候就是很难，但是我会一直陪着你的',lastchatTimestamp:'2021-10-01T12:00:00.000Z'},
        {name:'jessica',displayName:'Jessica', avatar:'/samples/sample5.jpg',lastchat:'今天天气真好，我们一起去爬山吧',lastchatTimestamp:'2021-10-01T12:00:00.000Z'},
    ];

    let currentProfile = recent_chats.find(chat => chat.name === profilename);

  return (
    <ThemeProvider theme={defaultTheme}>
    <Layout>
        <Grid container component="main" sx={{ height: '86vh' }}>
            <Grid item xs={false} sm={2} md={3} >
                <ProfileChatList chats={recent_chats} currentProfile={profilename}/>
            </Grid>
            <Grid item xs={12} sm={10} md={9} component={Paper} elevation={6} square>
                <ChatBox profile={currentProfile}/>
            </Grid>
        </Grid>
    </Layout>
    </ThemeProvider>
  );
}
