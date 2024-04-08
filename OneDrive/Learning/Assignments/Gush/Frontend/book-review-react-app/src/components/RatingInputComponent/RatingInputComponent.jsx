import "./RatingInputComponent.css";
import { useState } from "react";
import Icon from "@mdi/react";
import classNames from "classnames";
import { mdiStar } from "@mdi/js";


function RatingInputComponent({rating, onRatingChange, max_rating, size }) {

    const handleRatingClick = (selectedRating) => {
        onRatingChange(selectedRating);
      };
    return (
        <div className="ratingComponent">
            {new Array(max_rating).fill(0).map((_, index) => {
                const isActive = rating >= index + 1;
                return (
                    <Icon
                        key={index}
                        className={classNames("rating__star", {
                            "rating__star--active": isActive,
                        })}
                        path={mdiStar}
                        size={size}
                        onClick={() => handleRatingClick(index + 1)}
                    />
                );
            })}
        </div>
    );
}
export default RatingInputComponent;