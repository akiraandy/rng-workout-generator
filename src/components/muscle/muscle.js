import React from 'react';
import {ListItem} from 'material-ui/List';
const muscle = (props) => {
    return (
        <ListItem primaryText={props.name} />
    );
};

export default muscle;