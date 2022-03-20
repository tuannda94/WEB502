import React from 'react';
import {useParams} from 'react-router-dom';


function ProductDetail() {
    const {id} = useParams();
    console.log('Product detail param id', id);
    return (
        <div>
            Product Detail
        </div>
    );
}

export default ProductDetail;
