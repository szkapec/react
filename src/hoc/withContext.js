import React from 'react'
import PageContext from '../context/index';

const withContext = (Component) => {
    return function contextComponent(props) {
        return (
            <PageContext.Consumer>
                {context => (
                    <Component {...props} pageContext={context} ></Component>
                )}
            </PageContext.Consumer>
        )
    }
}
export default withContext;