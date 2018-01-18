import React, { Component } from 'react';
import Muscle from '../../components/muscle/muscle';
import { List } from 'material-ui/List';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class MuscleList extends Component {

  componentDidMount() {
    this.props.onInitMuscleGroups();
  }

  render () {
    let transformedMuscles;
    if (this.props.muscles) {
      transformedMuscles = this.props.muscles
      .map((muscleObject, i) => {
            return <Muscle name={muscleObject.name} key={muscleObject.id}/>
      });
    } else {
      transformedMuscles = <Muscle name={"Loading"} key={"Loading"}/>
    }
    return (
      <List>
        {transformedMuscles}
      </List>
    );
  }
};
const mapStateToProps = state => {
  return {
    muscles: state.muscles
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onInitMuscleGroups: () => dispatch(actions.initMusleGroupList())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MuscleList);