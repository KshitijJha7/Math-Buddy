
import React, { useEffect } from 'react';

const MathComponent = ({ mathExpression }) => {
    useEffect(() => {
        if (window.MathJax) {
            window.MathJax.typeset(); 
        }
    }, [mathExpression]);

    return <div id="mathjax-content" dangerouslySetInnerHTML={{ __html: mathExpression }} />;
};

export default MathComponent;