import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
// import ErrorBoundary from '../Components/ErrorBoundary';
// import { robots } from './robots';
import './App.css'


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())     
    .then(users => this.setState({robots: users}));
}

onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
}

// ({this.setState({ searchField: event.target.value})

    render() {
        const { robots, searchfield } = this.state;
        const filteredBots = robots.filter(robots =>{
            return robots.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        if (robots.length === 0) {
            return <h1 className='tc white f1'>Please Wait While Loading...</h1>
        } else {
            return (
                <div className ='tc'>
                    <h1 className ='mb1 f1 lightest-blue'>RoboFrenz</h1>
                    <div className ='mh7'>
                    <a
                        className='light-green'
                        href="https://github.com/lurdslurv"
                        target ="_blank"
                        rel='noreferrer'>
                        <h3>Made with and by Lurv😘😘😘</h3> </a>
                    </div>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                    {/* <ErrorBoundary> */}
                        <CardList robots={filteredBots}/>
                    {/* </ErrorBoundary> */}
                    </Scroll>
                </div>
            );
        }
    }

}


export default App;
