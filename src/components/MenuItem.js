import React from 'react';

const MenuItem = ({ id, title, description, imageName, price, quantity, updateQuantity }) => {
    return (
        <div className="menu">
            <img src={`${process.env.PUBLIC_URL}/images/${imageName}`} alt={title} />
            <div className="menu-description">
                <h2>{title}</h2>
                <p>{description}</p>
                <div className="price">
                    <p>$ {price}</p>
                    <div className="add-remove-item">
                        <button className="btn-primary" onClick={() => updateQuantity(id, -1)}>➖</button>
                        <p>{quantity}</p>
                        <button className="btn-primary" onClick={() => updateQuantity(id, 1)}>➕</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
