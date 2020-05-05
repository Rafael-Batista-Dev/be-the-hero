import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerText: {
    fontSize: 15,
    color: "#737380",
  },

  headerTextBold: {
    fontWeight: "bold",
  },

  title: {
    fontSize: 26,
    marginBottom: 10,
    marginTop: 20,
    color: "#13131A",
    fontWeight: "bold",
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#737380",
  },

  incidentsLint: {
    marginTop: 36,
  },

  incidents: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: "#FFF",
    marginBottom: 16,
  },

  incidentsProperty: {
    fontSize: 14,
    color: "#737380",
    fontWeight: "bold",
  },

  incidentsValue: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    color: "#737380",
  },

  detailsButton: {
    flexDirection: "row",
    justifyContent: "center",
  },

  incidentsArrowRight: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "bold",
  },

  detailsButtonText: {
    color: "#5844ed",
    fontSize: 15,
    fontWeight: "bold",
  },
});
