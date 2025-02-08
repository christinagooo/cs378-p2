import React from 'react';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ title, description, imageName, price }) => {
    return (
        <div>
            <div className="menu">
                <img src={`${process.env.PUBLIC_URL}/images/${imageName}`} alt={title} />
                <div className="menu-description">
                    <h2 className="menu-name">{title}</h2>
                    <p className="menu-explain">{description}</p>
                    <div className="price">
                        <p>$ {price}</p>
                        <button className="btn-primary" >Add</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
