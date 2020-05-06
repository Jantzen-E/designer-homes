import React from 'react';

class LandingPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="mainContent">
                <h1>Designer Homes Inc, by Norm Egan</h1>
                <h2>Custom Home Builder in Salt Lake City</h2>
                <img src="https://lh3.googleusercontent.com/e8EO_YfjBtb-UwDhgEGTiJl6SV1av3ksJYZFxuwD8Lc_79Z5mOkJ7PKZV9OnGtEWaPKljHO4=w1080-h608-p-no-v0" alt="beautiful house" className="mainPhoto"/>
                <button className="getQuoteButton">Get Quote</button>
                <img src="https://lh3.googleusercontent.com/k2GRfO1ElYnPVDZ4kxgHGaFMJN1XhDZByUiIwW4UhaZYE4BwykQ04uXwGvg4_rhEYII4cE-L=s1280-p-no-v1" alt="freshly poured concrete" className="freshConcreteImg"/>
                <h3 className="addressHeading">Address</h3>
                <p className="address">2425 East 3750 South</p>
                <p className="address">SLC, UT 84109</p>
                <p className="usAddress">United States</p>
                <button className="getDirButton"><a href="https://www.google.com/maps/dir/40.6952224,-112.0357136/Designer+Homes+Inc,+by+Norm+Egan,+2425+E+3750+S,+Salt+Lake+City,+UT+84109/@40.678266,-112.0574315,11z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x875261bd55a59f77:0x9fc07cc6564cfe1c!2m2!1d-111.821307!2d40.689651" className="googleMaps">Get Directions</a></button>
                <h3 className="businessHoursHeading">Business Hours</h3>
                <p className="hours">Mon 8:00 AM - 5:00 PM</p>
                <p className="hours">Tue 8:00 AM - 5:00 PM</p>
                <p className="hours">Wed 8:00 AM - 5:00 PM</p>
                <p className="hours">Thu 8:00 AM - 5:00 PM</p>
                <p className="hours">Fri 8:00 AM - 5:00 PM</p>
                <p className="hours">Sat Closed</p>
                <p className="sunHours">Sun Closed</p>
            </div>
        );
    }
}

export default LandingPage;