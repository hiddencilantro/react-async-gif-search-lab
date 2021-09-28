import React from 'react';

export default class GifList extends React.Component {
    render() {
        const gif = this.props.gifs.map(gif => {
            return <div><img key={gif.id} src={gif.images.original.url} alt="" /></div>
        });

        return (
            <div>
                {gif}
            </div>
        );
    };
};
