import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import Loader from "components/Loader/Loader";
import React, { Component } from "react";
import fetchImage from "services/api";
import s from "./ImageGallery.module.css"



class ImageGallery extends Component {
    state = {
        listImage: null,
        error: null,
        status: "idle"
    }

     apiKey = "27740516-006db8c520e637ee9ea683b0c";
     
    componentDidUpdate(prevProps, prevState) {
        let query = this.props.query
        const url = `https://pixabay.com/api/?q=${query }&page=1&key=${this.apiKey}&image_type=photo&orientation=horizontal&per_page=12`;

        if (prevProps.query !== this.props.query) {
            this.setState({ status: "pending" })
            
            fetchImage(url)
            .then(data => 
            this.setState({
                listImage: data.hits,
                status: "resolve"
            }))
            .catch(error => this.setState({error: error, status: "rejected"})) 
            .finally(() => this.setState({loading: false}))
        }
    }

    

    render() { 
        const { listImage, status } = this.state;

        if (status === "idle") { 
            return (
                <ul className={s.ImageGallery}>
                    <div className={s.ImageGalleryIdle}>Wrote image name pls</div>
                </ul>)
        };

        if (status === "pending") { 
            return (
                <ul className={s.ImageGallery}>
                    <Loader />
                </ul>
            )
        };

        if (status === "resolve") { 
            return (
                <ul className={s.ImageGallery}>
                    {listImage.map((item) => (<ImageGalleryItem key={item.id} item={item} />))}
                </ul>
            )
        };

        if (status === "rejected") { 
            return (
                <ul className={s.ImageGallery}>
                    <div>Image name wrong</div>
                </ul>   
            )
        };
    }
}
 
export default ImageGallery;

/* 
{error && <h1>{error.message}</h1>}
{loading && <Loader />}
{listImage && listImage.map((item) => (<ImageGalleryItem key={item.id} item={item} />)) } 
*/