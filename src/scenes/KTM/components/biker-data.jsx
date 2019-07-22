import React, { Component } from 'react';
import { connect } from 'react-redux';

import SliderComponent from '../../../common/Slider';

class BikerComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sliderItems: []
        }
    }

    componentWillReceiveProps(nextProps) {
        
    }

    render() {
        return (
            <section>
                <h2 className='page-title'>Biker Details</h2>
                <SliderComponent />
            </section>
        )
    }
}

const mapStateToProps = state => ({
    ktmData: state.ktmDataReducer.ktmData
})

export default connect(mapStateToProps, null)(BikerComponent);