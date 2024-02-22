
import React from 'react';

function ItemDetailsModal({ item, onClose }) {
    if (!item) {
        return null; 
    }

    return (
        <div className="modal-overlay">
            <div className="modal">
                <img src={item.food.image} alt='' />
                <div class = "modal-info">
                <h2>{item.food.label}</h2>
                <h2>Category: {item.food.category}</h2>
                <h3>Calories: {item.food.nutrients.ENERC_KCAL} kcal</h3>
                    <h3>Fat: {item.food.nutrients.FAT} g</h3>
                    <button onClick={onClose}>Close</button>
                </div>
                
                
            </div>
        </div>
    );
}

export default ItemDetailsModal;
