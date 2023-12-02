import * as React from 'react';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import Layout from './layout';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import ProfileListShort from './components/profileListShort';
import ProfileList from './components/profileList';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const defaultTheme = createTheme({
  palette: {
      mode:"dark"
  },
  // Define other theme customizations
});


export default function Main() {
  const navigate = useNavigate();

  useEffect(() => {
        navigate('/');
  }, [navigate]);
  
  let recent_profiles = [
    {name:'jess',displayName:'Jess C', avatar:'/samples/sample.png',description:'Snowy mountain peak under a starry night sky.'},
    {name:'catty',displayName:'Catty', avatar:'/samples/sample2.png',description:'Desert oasis with camels and a vibrant sunset.'},
    {name:'yuki',displayName:'Yuki', avatar:'/samples/sample3.png',description:'Lighthouse on a rocky coast during a storm.'},
    {name:'elle',displayName:'Elle', avatar:'/samples/sample4.jpg',description:'Cherry blossoms by a serene lake in spring.'},
    {name:'jessica',displayName:'Jessica', avatar:'/samples/sample5.jpg',description:'Ancient castle ruins under a full moon.'},
  ];

  return (
    <ThemeProvider theme={defaultTheme}>
    <Layout>
      <Typography paragraph>
              Rencently Chat
      </Typography>
      <ProfileListShort profiles={recent_profiles}/>
      <Divider/>
      <Typography paragraph>
              Discover
      </Typography>
      <ProfileList profiles={recent_profiles}/>
      </Layout>
    </ThemeProvider>
  );
}
