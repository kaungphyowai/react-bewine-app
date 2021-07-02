import React from "react";
import ProfileDisplayGrid from "../Components/ProfileDisplayGrid/ProfileDisplayGrid";
const Profile = () => {
  return (
    <ProfileDisplayGrid
      mainTitle1="TURPIS VELIT"
      mainTitle2FirstLine="CURABITUR ET LIGULA"
      cardTitleFirstLine1="KEVIN"
      cardTitleSecondLine1="PERRY"
      cardsubtitle1="SED"
      cardimage1="/assets/profile1.jpg"
      carddescription1="Congue ligula. Maecenas imperdiet ante eget hendrerit posuere urna."
      cardTitleFirstLine2="JENNIFER"
      cardTitleSecondLine2="LEE"
      cardsubtitle2="GRAVIDA VITAE"
      cardimage2="/assets/profile2.jpg"
      carddescription2="Congue ligula. Maecenas imperdiet ante eget hendrerit posuere urna."
      cardTitleFirstLine3="ANTHONY"
      cardTitleSecondLine3="ZACK"
      cardsubtitle3="DAPIBUS"
      cardimage3="/assets/profile3.jpg"
      carddescription3="Congue ligula. Maecenas imperdiet ante eget hendrerit posuere urna."
      buttonDisplay={false}
      checkedDisplay={false}
    />
  );
};

export default Profile;
