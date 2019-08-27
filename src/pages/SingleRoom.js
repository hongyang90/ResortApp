import React, { Component } from 'react';
import defaultBcg from '../images/room-1.jpeg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import {RoomContext} from '../Context';
import StyledHero from '../components/StyledHero';

export default class SingleRoom extends Component {
    constructor(props){
        super(props);
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        };
        // console.log(this.props)
    }

    static contextType = RoomContext;

    render() {

        const {getRoom} = this.context;
        const room = getRoom(this.state.slug);
        if (!room) {
            return (
            <div className="error">
                <h3>no room found</h3>
                <Link to='/rooms' className='btn-primary' >Back to room</Link>
            </div>
            )
        }

        const {name, description, capacity, size, price, extras, breakfast, pets, images} = room;

        return (
            <StyledHero img={images[0]} hero='roomsHero'>
                <Banner title={`${name} room`}>
                    <Link to='/rooms' className='btn-primary' >
                        Back to rooms
                    </Link>
                </Banner> 
            </StyledHero>
        )
    }
}
