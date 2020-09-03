import React, { useState, useEffect, useRef } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Types } from "../../store/ducks/user";

import firebase from "../../firebase";

import { toast } from "react-toastify";

import LoadingUserImg from "../../assets/loadingUser.svg";

import HeaderMenu from "../headerMenu";
import Viewport from "../viewport";

import LoadingUser from "../loadingUser";

import LoadingPhoto from "../../assets/loadingUser.svg";
import Loading from "../../assets/loading.svg";
import { AddAPhoto as Edit } from "styled-icons/material/AddAPhoto";

import { uploadPhoto } from "../../utils/upload";
import { updateProfile } from "../../utils/update";
import { logOut } from "../../utils/auth";

import * as S from "./styled";

const Profile = (props) => {
  const inputFile = useRef(null);
  const [updatingProfile, setUpdatingProfile] = useState(null);

  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const userData = user.data;
  const userIsLoading = user.loading;

  useEffect(() => {
    function getUserData() {
      if (userData) return;

      const currentUser = firebase.auth().currentUser;
      if (currentUser) {
        dispatch({
          type: Types.SUCCESS_USER,
          payload: {
            data: {
              uid: currentUser.uid,
              name: currentUser.displayName,
              email: currentUser.email,
              photoURL: currentUser.photoURL,
            },
          },
        });
        return;
      }
      dispatch({
        type: Types.FAILED_USER,
        payload: {
          error: "User not logged",
        },
      });
    }
    getUserData();
    // eslint-disable-next-line
  }, []);

  function handleChooseFile() {
    setUpdatingProfile(true);
    uploadPhoto(
      inputFile.current.files[0],
      (url) => {
        dispatch({
          type: Types.SUCCESS_USER,
          payload: {
            data: {
              ...userData,
              photoURL: url,
            },
          },
        });
        setUpdatingProfile(null);
      },
      (error) => toast.error(error.message)
    );
  }

  function handleUpdateProfile({ name, email }) {
    setUpdatingProfile(true);
    updateProfile(
      { name, email },
      { name: userData.name, email: userData.name },
      (result) => {
        if (result.message) {
          toast.success(result.message);
          setUpdatingProfile(false);
          return;
        }
        dispatch({
          type: Types.SUCCESS_USER,
          payload: {
            data: {
              ...userData,
              name,
              email,
            },
          },
        });
        toast.success("Profile updated successful :)");
        setUpdatingProfile(false);
      },
      (err) => {
        toast.error(err.message);
        setUpdatingProfile(false);
      }
    );
  }

  if (userIsLoading || !userData) return <LoadingUser img={LoadingUserImg} />;
  return (
    <Viewport>
      <HeaderMenu renderBackButton userData={userData} />
      <S.FileForm>
        <S.FileContainer
          onClick={() => inputFile.current.click()}
          type="button"
        >
          <S.File
            src={userData.photoURL}
            alt={`${userData.name} - profile image`}
          />
          <S.FileIconBox>
            <Edit />
          </S.FileIconBox>

          {updatingProfile && (
            <S.FileLoadingContainer>
              <S.FileLoadingImg src={LoadingPhoto} alt="Loading Profile Img" />
            </S.FileLoadingContainer>
          )}
        </S.FileContainer>
        <S.FileInputUnform
          name="attach"
          id="attach"
          type="file"
          accept="image/*"
          ref={inputFile}
          onChange={handleChooseFile}
        />
      </S.FileForm>
      <S.FormUnform
        initialData={{
          name: userData.name,
          email: userData.email,
        }}
        onSubmit={handleUpdateProfile}
      >
        <S.EmailInputContainer>
          <S.Label htmlFor="name">Name</S.Label>
          <S.InputUnform id="name" placeholder="Name" name="name" type="text" />
          <S.Label htmlFor="email">E-mail</S.Label>
          <S.InputUnform
            id="email"
            placeholder="E-mail"
            name="email"
            type="email"
            readOnly
          />
          <S.SubmitContainer>
            <S.ButtonForm disabled={updatingProfile} type="submit">
              {updatingProfile ? (
                <img height="30" src={Loading} alt="Loading Icon" />
              ) : (
                "Save"
              )}
            </S.ButtonForm>
          </S.SubmitContainer>
          <S.SubmitContainer>
            <S.ButtonForm
              disabled={updatingProfile}
              type="button"
              onClick={logOut}
              background="#19181F"
              color="#D34242"
            >
              {updatingProfile ? (
                <img height="30" src={Loading} alt="Loading Icon" />
              ) : (
                "Logout"
              )}
            </S.ButtonForm>
          </S.SubmitContainer>
          <S.IndexLink to="/">About project...</S.IndexLink>
        </S.EmailInputContainer>
      </S.FormUnform>
    </Viewport>
  );
};

export default Profile;
