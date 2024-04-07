import "./RatingComponent.css";
import Icon from "@mdi/react";
import classNames from "classnames";
import { mdiStar } from "@mdi/js";


function RatingComponent({rating,max_rating,size}){
    // const max_rating = 5;
    // const size = 1;
    const arr = new Array(max_rating).fill(0);
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
              />
            );
        })}
        </div>
    );
}
export default RatingComponent;