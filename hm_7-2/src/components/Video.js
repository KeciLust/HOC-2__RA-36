/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import PropTypes from 'prop-types'

function Video(props) {
    return (
        <div className="item item-video">
            <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <p className="views">Просмотров: {props.views}</p>
        </div>
    )
};

Video.propTypes = {
    props: PropTypes.object.isRequired,
}

export default Video
