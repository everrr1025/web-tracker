import { connect } from "react-redux";
import { SHOW_APP_DESCRIPTION, showDescription } from "../actions";
import AppSection from "../components/AppSection";

const mapStateToProps = state => {

  return {
    showApp:state.appSection.showApp
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIconClick: name => {
      dispatch(showDescription(name));
    }
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(AppSection);
