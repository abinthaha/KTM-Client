import React, { Component } from 'react';

class TilesComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tileItems: [
                {
                    id: 1,
                    label: 'Maximum Speed',
                    value: '120 Km/h',
                    imgUrl: 'https://www.wallpaperup.com/uploads/wallpapers/2013/02/05/35746/845f03be69a90b8cd3d320881e0ac302-700.jpg'
                }, {
                    id: 2,
                    label: 'Higher torque',
                    value: '7000',
                    imgUrl: 'https://i.pinimg.com/originals/ef/8e/e6/ef8ee6c512daa743c6ff436f57b32bf9.jpg'
                }, {
                    id: 3,
                    label: 'Something new',
                    value: '120 Kmph',
                    imgUrl: 'https://wallpaperplay.com/walls/full/2/8/2/108568.jpg'
                }, {
                    id: 4,
                    label: 'Something and',
                    value: '120 Kmph',
                    imgUrl: 'https://www.wallpaperup.com/uploads/wallpapers/2012/04/11/2140/15343d8c8efffc0c6435f16dc8b0cf64-700.jpg'
                }, {
                    id: 5,
                    label: 'Good And Bad',
                    value: '120 Kmph',
                    imgUrl: 'https://stat.overdrive.in/wp-content/uploads/2017/11/2018ktm790duke-eicma2017.jpg'
                }, {
                    id: 6,
                    label: 'Good, Bad and Ugly',
                    value: '120 Kmph',
                    imgUrl: 'https://i2.wp.com/wallpapersite.com/images/wallpapers/ktm-1290-super-duke-r-2784x1856-2017-hd-3684.jpg'
                }
                
            ]
        }
    }

    render () {
        return (
            <div>Hi</div>
        )
    }
}

export default TilesComponent;