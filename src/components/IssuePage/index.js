import React, {Component} from 'react';
import { View, Text, Image, Pressable } from "react-native";
import styles from "./styles";
import { SearchBar } from "react-native-elements";
import { Feather as Icon } from "@expo/vector-icons";
import ModalDropdown from "react-native-modal-dropdown";
import Issue from "../Issue";

const IssuePage= (props)=> {
  state = {
    search: "",
  };

  updateSearch = (search) => {
    this.setState({ search });
  };
    const { search } = this.state;

    const {  dispatch, navigation } = this.props;

    const handleClick = () => {
      e.preventDefault();
      navigation.navigate("IssueDescription");
    };

    return (
      <View style={styles.page}>
        <View style={styles.header}>
          <View style={styles.datecontainer}>
            <Text style={styles.present}>Today</Text>
            <Text styles={styles.date}>Tuesday, 21st Nov</Text>
          </View>
          <Image
            source={require("../../../assets/settings.png")}
            style={styles.settings}
          />
        </View>
        <View style={styles.searchcontainer}>
          <SearchBar
            containerStyle={styles.containerstyle}
            inputContainerStyle={styles.inputcontainerstyle}
            placeholder="Type Here..."
            onChangeText={this.updateSearch}
            value={search}
            round="default"
            lightTheme="default"
          />
        </View>
        <View style={styles.topbar}>
          <View style={styles.drop1}>
            <ModalDropdown
              animated={true}
              defaultValue="Date"
              options={["option 1", "option 2"]}
              style={styles.dropdown}
              dropdownStyle={styles.dropdownstyle}
            />
            <Icon name="chevron-down" style={styles.dropdownarrow} />
          </View>
          <View style={styles.drop2}>
            <ModalDropdown
              defaultValue="Filter by"
              options={["option 1", "option 2"]}
              style={styles.dropdown}
              dropdownStyle={styles.dropdownstyle2}
            />
            <Icon name="chevron-down" style={styles.dropdownarrow} />
          </View>
        </View>
        <View style={styles.space}></View>
        <View style={styles.issuePagebox}>
          <Pressable onPress={() => handleClick}>
            <Issue />
          </Pressable>
          <Issue />
        </View>
      </View>
    );
}

export default IssuePage;