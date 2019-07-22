import React, { Component } from 'react';

import './index.scss';

class SliderComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            sliderItems: [
                {
                    id: 1,
                    label: 'Maximum Speed',
                    value: '120 Km/h',
                    imgUrl: 'https://pictures.topspeed.com/IMG/crop/201706/2017-ktm-duke-3_1600x0w.jpg'
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
        this.changeActiveItem = this.changeActiveItem.bind(this);
        this.changeSliderItem = this.changeSliderItem.bind(this);
    }

    componentDidMount() {
        this.changeSliderItem();
    }

    changeActiveItem(index) {
        this.setState({
            ...this.state,
            activeIndex: index
        })
    }

    changeSliderItem() {
        const that = this;
        setInterval(() => {
            let { activeIndex } = that.state;
            if (activeIndex === that.state.sliderItems.length - 1) {
                activeIndex = 0;
            } else {
                activeIndex++;
            }
            that.setState({
                ...that.state,
                activeIndex
            })
        }, 5000)
    }

    render() {

        const sliderItems = this.state.sliderItems && this.state.sliderItems.map((item, index) => {
            return (
                <li key={index} className={'slider-item ' + (this.state.activeIndex === index ? 'active' : '') } style ={ { backgroundImage: "url("+ item.imgUrl +")" } }>
                    <span className='item-text'>
                        <span className='label'>{item.label}</span>
                        <span className='value'>{item.value}</span>
                    </span>
                </li>
            )
        })

        return (
            <section className='slider-container'>
                <ul className='slider-wrapper'>
                    {sliderItems}
                </ul>
                <ul className='indicator-wrapper'>
                    {
                        [...Array(this.state.sliderItems.length)].map((item, index) => {
                            return (
                                <li key={index} onClick={ev => this.changeActiveItem(index)} className={'indicator ' + (this.state.activeIndex === index ? 'active' : '')}></li>
                            )
                        })
                    }
                </ul>
            </section>
        )
    }
}
export default SliderComponent;