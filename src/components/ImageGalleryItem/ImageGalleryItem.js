import React, { Component } from "react";
import s from "./ImageGalleryItem.module.css"

class ImageGalleryItem extends Component {

    render() { 
        const {item} = this.props
        return (
            <li className={s.ImageGalleryItem}>
                <img src={item.webformatURL} alt="img" className={s.ImageGalleryItemImage} />
            </li>
        );
    }
}
 
export default ImageGalleryItem;