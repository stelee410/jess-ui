import ProfileCard from "./profileCard";
import Grid from "@mui/material/Grid";

function ProfileList({profiles}) {
    if(!profiles){
        return null;
    }
    return (
        <Grid container spacing={2}>
              {profiles.map((profile, index) => (
                    <ProfileCard key={index} profile={profile}/>
                ))}
        </Grid>
    );
}

export default ProfileList;