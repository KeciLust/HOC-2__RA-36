/* eslint-disable default-case */
/* eslint-disable array-callback-return */
import React from 'react'
import PropTypes from 'prop-types'
import Video from './Video'
import Article from './Article'
import Popular from './Popular';
import New from './New';

function List(props) {
    return props.list.map(item => {
        
        switch (item.type) {
            case 'video':
                return (
                   item.views>100? <Popular ><Video {...item} /></Popular>: <New><Video {...item} /></New>
                );

            case 'article':
                return (
                    item.views>100? <Popular ><Article {...item} /></Popular>: <New><Article {...item} /></New>
                );
        }
    });
};
List.propTypes = {
    props: PropTypes.object.isRequired,
}

export default List
