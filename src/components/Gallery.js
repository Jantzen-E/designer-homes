import React from 'react';
import Footer from './Footer';

class Gallery extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h4>We will display images of work from Designer Homes here</h4>
                <Footer />
            </div>
        )
    }
}

export default Gallery;