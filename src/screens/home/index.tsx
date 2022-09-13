import React from "react";
import { connect } from "react-redux";

interface HomeScreenProps {
  authenticated?: any;
}

export const HomeScreen = (props: HomeScreenProps) => {
  return <div>HomeScreen</div>;
};

interface RootState {}

const mapStateToProps = (state: RootState) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
