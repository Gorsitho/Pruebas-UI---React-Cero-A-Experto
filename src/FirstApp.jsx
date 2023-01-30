
import PropTypes from 'prop-types';


export const FirstApp = ( {title = "Hola, mensaje por defecto ", subTitle } ) => {

    return (
        <> {/*  Allows you to group multiple items together as previously done with Fragments */}
        
        <h1>{ title }</h1>
        <h2>{subTitle}</h2>
        </>
    );

}

FirstApp.propTypes = {

    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number
}
 
FirstApp.defaultProps = {
    title: 'No hay título',
    subTitle: 25,
}