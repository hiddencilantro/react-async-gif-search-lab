import React from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

export default class GifListContainer extends React.Component {
    state = {
        gifs: []
    };

    handleSearch = (keyword) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=s98SzTgvPvRtutV8Xc3ZFXPU7IC3QrOl&rating=g`)
            .then(resp => resp.json())
            .then(json => {
                this.setState({
                    gifs: json.data
                });
            });
    };

    componentDidMount() {
        fetch('https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=s98SzTgvPvRtutV8Xc3ZFXPU7IC3QrOl&rating=g')
            .then(resp => resp.json())
            .then(json => {
                this.setState({
                    gifs: json.data.slice(0,3)
                });
            });
    };

    render() {
        return (
            <div>
                < GifSearch handleSearch={this.handleSearch} />
                < GifList gifs={this.state.gifs} />
            </div>
        );
    };
};
