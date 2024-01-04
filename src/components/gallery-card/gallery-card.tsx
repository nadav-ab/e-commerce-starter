import classNames from 'classnames';
import styles from './gallery-card.module.scss';
import { CardImage } from '../card-image/card-image';
import { StarRating } from '../star-rating/star-rating';

export interface GalleryCardProps {
    className?: string;
    price: number;
    currency: string;
    description: string;
    rating: number;
    raters: number;
}


export const GalleryCard = ({ className, price, currency, description, rating, raters }: GalleryCardProps) => {
    return <div className={classNames(styles.root, className)}>
        <CardImage imageSrc="https://static.wixstatic.com/media/c22c23_77c2b89535374768bec1d6337dcdbddc~mv2.jpg/v1/fill/w_625,h_625,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c22c23_77c2b89535374768bec1d6337dcdbddc~mv2.jpg" />
        <div className={styles['card-content']}>
            <p className={styles['item-description']}>{description}</p>
            <p className={styles['item-price']}>{currency}{price}</p>
            <StarRating rating={rating} raters={raters} path="M0.9502,8.8922 C20.8322,8.5282 20.5222,8.2672 20.1432,8.2112 L15.1362,7.4842 L12.8962,2.9472 C12.5572,2.2592 11.4422,2.2592 11.1032,2.9472 L8.8642,7.4842 L3.8562,8.2112 C3.4772,8.2672 3.1682,8.5282 3.0492,8.8922 C2.9312,9.2562 3.0282,9.6502 3.3022,9.9172 L6.9262,13.4492 L6.0712,18.4362 C6.0062,18.8142 6.1582,19.1882 6.4682,19.4132 C6.7782,19.6412 7.1812,19.6692 7.5212,19.4912 L11.9992,17.1352 L16.4792,19.4912 C16.6262,19.5692 16.7862,19.6072 16.9452,19.6072 C17.1512,19.6072 17.3572,19.5412 17.5322,19.4132 C17.8422,19.1882 17.9942,18.8142 17.9292,18.4362 L17.0742,13.4502 L20.6982,9.9172 C20.9722,9.6502 21.0692,9.2562 20.9502,8.8922" className={styles.rating} />
        </div>
    </div>;
};
