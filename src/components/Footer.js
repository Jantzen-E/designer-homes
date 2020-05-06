import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="footer">
                <h5 className="footerTitle">Designer Homes Inc. 2020</h5>
                <h5 className="footerTitle">Office: 801-278-6672</h5>
                <h5 className="footerTitle">Cell: 801-913-7900</h5>
            </div>
        );   
    }
}

export default Footer;