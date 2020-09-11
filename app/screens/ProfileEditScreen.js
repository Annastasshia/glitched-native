import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import { AppForm, AppFormField, AppFormPicker, SubmitButton } from "../components/forms";

import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(1).label("Name"),
  age: Yup.number().required().min(18).max(120).label("Age"),
  bio: Yup.string().label("Bio"),
  category: Yup.object().required().nullable().label("Category"),
  gender: Yup.object().required().nullable().label("Gender"),
  preference: Yup.object().required().nullable().label("Looking for ..."),
  images: Yup.array().min(1, "Please upload at least one image."),
});

const genders = [
  { label: "woman", value: 1 },
  { label: "man", value: 2 },
  { label: "non-binary", value: 3},
];

const preferences = [
  { label: "woman", value: 1 },
  { label: "man", value: 2 },
  { label: "human", value: 3},
];

const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    label: "Furniture",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "car",
    label: "Cars",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "camera",
    label: "Cameras",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    icon: "cards",
    label: "Games",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    label: "Clothing",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "basketball",
    label: "Sports",
    value: 6,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "headphones",
    label: "Movies & Music",
    value: 7,
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    label: "Books",
    value: 8,
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    label: "Other",
    value: 9,
  },
];

function ProfileEditScreen(){
  return (
    <Screen style={styles.container}>
      {/* <UploadScreen
        onDone={() => setUploadVisible(false)}
        progress={progress}
        visible={uploadVisible}
      /> */}
      <AppForm
        initialValues={{
          name: "",
          age: "",
          bio: "",
          category: null,
          gender: null,
          preference: null,
          images: [],
        }}
        onSubmit={(values)=> console.log(values)}
        validationSchema={validationSchema}
      >
       
        <AppFormField maxLength={255} name="name" placeholder="Name" />
        <AppFormField
          keyboardType="numeric"
          maxLength={3}
          name="age"
          placeholder="age"
          width={120}
        />
        <AppFormPicker
          items={categories}
          name="category"
          placeholder="Category"
        />
        <AppFormPicker
          items={genders}
          name="Gender"
          placeholder="Gender"
        />
         <AppFormPicker
          items={preferences}
          name="preference"
          placeholder="Looking for ..."
        />
        <AppFormField
          maxLength={1000}
          multiline
          name="bio"
          numberOfLines={3}
          placeholder="Bio"
        />
        <SubmitButton title="Save" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ProfileEditScreen;
