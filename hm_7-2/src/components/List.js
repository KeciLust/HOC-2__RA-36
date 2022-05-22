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
                   item.views>1000? <Popular ><Video {...item} /></Popular>: item.views<100? <New><Video {...item} /></New>: <Video {...item} />
                );

            case 'article':
                return (
                    item.views>1000? <Popular ><Article {...item} /></Popular>: item.views<100? <New><Article {...item} /></New>: <Article {...item} />
                );
        }
    });
};
List.propTypes = {
    props: PropTypes.object.isRequired,
}

export default List
