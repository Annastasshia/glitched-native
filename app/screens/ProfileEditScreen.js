import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
  FormImagePicker,
} from "../components/forms";

import Screen from "../components/Screen";
import CategoryPickerItem from "../components/CategoryPickerItem";
import AppText from "../components/AppText";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(1).label("Name"),
  age: Yup.number().required().min(18).max(120).label("Age"),
  bio: Yup.string().label("Bio"),
  category: Yup.object().required().nullable().label("Interests"),
  gender: Yup.object().required().nullable().label("Gender"),
  preference: Yup.object().required().nullable().label("Looking for ..."),
  images: Yup.array().min(1, "Please upload one image."),
});

const genders = [
  { label: "woman", backgroundColor: "#fc5c65",
  icon: "gender-female", value: 1 },
  { label: "man", backgroundColor: "#2bcbba",
  icon: "gender-male", value: 2 },
  { label: "non-binary", backgroundColor: "#fed330",
  icon: "circle", value: 3 },
];

const preferences = [
  { label: "woman", backgroundColor: "#fc5c65",
  icon: "gender-female", value: 1 },
  { label: "man", backgroundColor: "#2bcbba",
  icon: "gender-male", value: 2 },
  { label: "human", backgroundColor: "#fed330",
  icon: "circle", value: 3 },
];

const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "controller-classic-outline",
    label: "Video Games",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "death-star-variant",
    label: "Star Wars",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "deathly-hallows",
    label: "Harry Potter",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    icon: "cards",
    label: "Tabletop Games",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "bacteria-outline",
    label: "Corona",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "firefox",
    label: "Anime / Manga",
    value: 6,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "minecraft",
    label: "Creeping",
    value: 7,
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    label: "Comics",
    value: 8,
  },
  {
    backgroundColor: "#778ca3",
    icon: "flask-outline",
    label: "Science/Math",
    value: 9,
  },
];

function ProfileEditScreen() {
  return (
    <Screen style={styles.container}>
      {/* <UploadScreen
        onDone={() => setUploadVisible(false)}
        progress={progress}
        visible={uploadVisible}
      /> */}

      <AppText style={styles.title}>Profile Information</AppText>
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
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <AppFormField maxLength={255} name="name" placeholder="Name" />
        <AppFormField
          keyboardType="numeric"
          maxLength={3}
          name="age"
          placeholder="age"
          width="25%"
        />
        <AppFormPicker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Interests"
        />
        <AppFormPicker
          items={genders}
          name="Gender"
          PickerItemComponent={CategoryPickerItem}
          placeholder="Gender"
          width="50%"
        />
        <AppFormPicker
          items={preferences}
          name="preference"
          PickerItemComponent={CategoryPickerItem}
          placeholder="Looking for ..."
          width="50%"
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
  title:{
   paddingLeft: 100
  }
});

export default ProfileEditScreen;
