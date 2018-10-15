import React from 'react';

const InlineError = (props) => {
    return(
        <div>
            <small id="emailHelp" class="form-text text-muted">{props.text}</small>
        </div>
    )
}

export default InlineError;