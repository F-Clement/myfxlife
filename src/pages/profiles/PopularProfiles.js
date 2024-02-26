import React from "react";
import { Container } from "react-bootstrap";
import appStyles from "../../App.module.css";
import Asset from "../../components/Asset";
import { useProfileData } from "../../contexts/ProfileDataContext";
import Profile from "./Profile";

const PopularProfiles = () => {
  const { popularProfiles } = useProfileData();
  

  return (
    <Container className={appStyles.Content}>
      {popularProfiles.results.length ? (
        <>
          {popularProfiles.results.slice(0, 3).map((profile) => (
            <Profile key={profile.id} profile={profile} />
          ))}
        </>
      ) : (
        <Asset spinner />
      )}
    </Container>
  );
};

export default PopularProfiles;