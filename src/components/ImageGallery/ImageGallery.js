import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import Loader from "components/Loader/Loader";
import React, { Component } from "react";
import s from "./ImageGallery.module.css"



class ImageGallery extends Component {
    state = {
        listImage: null,
        loading: false,
        error: null
    }

     apiKey = "27740516-006db8c520e637ee9ea683b0c";
     

    componentDidUpdate(prevProps, prevState) {
        let query = this.props.query
        const url = `https://pixabay.com/api/?q=${query }&page=1&key=${this.apiKey}&image_type=photo&orientation=horizontal&per_page=12`;

        if (prevProps.query !== this.props.query) {
            this.setState({ loading: true })
            
            fetch(url)
                .then(res => {
                    if (res.ok) {
                        return res.json()
                    }

                    return Promise.reject(new Error("Sorry"))
                })
                .then(data => 
                this.setState({
                listImage: data.hits
                }))
                .catch(error => this.setState({error: error})) 
                .finally(() => this.setState({loading: false}))
        }
    }

    render() { 
        const {loading, listImage, error} = this.state
        return (
            <ul className={s.ImageGallery}>
                {error && <h1>{error.message}</h1>}
                {loading && <Loader />}
                {listImage ?
                    listImage.map((item) => (<ImageGalleryItem key={item.id} item={item} />)) 
                    :
                    <div>NO Image</div>
                }
                
            </ul>
        );
    }
}
 
export default ImageGallery;