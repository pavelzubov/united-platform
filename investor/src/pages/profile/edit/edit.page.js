import NavigationBackButton from "modules/navigation-back-button/navigation-back-button";
import ProfileContainer from "modules/profile/profile-container";
import ProfileForm from "modules/profile/profile-form";
import ProfileLayout from "pages/profile/profile-layout";
import React from "react";

const ProfileEditPage = () => {
  return (
    <ProfileLayout route="details">
      <NavigationBackButton />
      <ProfileContainer>
        <ProfileForm />
      </ProfileContainer>
    </ProfileLayout>
  );
};

export default ProfileEditPage;
