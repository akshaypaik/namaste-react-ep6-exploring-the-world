import './RestaurantCard.css';
import { CDN_URL } from '../../../../utils/constants';

export default function RestaurantCard({ resObj }) {

    const {name, cuisines, avgRating, sla, cloudinaryImageId } = resObj?.info;
    const restaurantImage = `${CDN_URL}${cloudinaryImageId}`;

    return (
        <div className="res-card">
            <img className='res-logo' src={restaurantImage} />
            <div className='res-desc'>
                <h3>
                    {name}
                </h3>
                <strong>
                    {cuisines.join(", ")}
                </strong>
                <div className='rating-time'>
                    <h5>
                        ⭐{avgRating}
                    </h5>
                    <h5>
                        ⌚{sla.deliveryTime} Minutes
                    </h5>
                </div>
            </div>
        </div>
    )
}