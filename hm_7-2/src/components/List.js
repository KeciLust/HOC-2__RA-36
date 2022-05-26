/* eslint-disable default-case */
/* eslint-disable array-callback-return */
import React from 'react'
import Video from './Video'
import Article from './Article'
import withCountViews from './withCountViews';

function List(props) {
    const CountViewsVideo = withCountViews(Video)
    const CountViewsArticle = withCountViews(Article)
    return props.list.map(item => {
        
        switch (item.type) {
            case 'video':
                return (

                   <CountViewsVideo {...item} />
                               );

            case 'article':
                return (
                    <CountViewsArticle {...item} />   
                    );
        }
    });
};


export default List
