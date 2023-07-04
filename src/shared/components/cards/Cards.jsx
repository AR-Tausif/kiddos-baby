
import { FaSignInAlt } from 'react-icons/fa';
import Card from './card/Card';

const Cards = () => {
    return (
        <div className="container mx-auto">
            <div className="relative lg:absolute -mt-60">
                <div className="container mx-auto">
                    <div className="p-10 py-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                        <Card cover_image={"https://images.unsplash.com/flagged/photo-1570319736696-894f69f52bd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"} />
                        <Card cover_image={"https://plus.unsplash.com/premium_photo-1661596240288-5ca2dd01d0ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"} />
                        <Card cover_image={"https://media.istockphoto.com/id/1402700277/photo/african-american-girl-playing-with-building-blocks-at-the-school.webp?b=1&s=170667a&w=0&k=20&c=3TkUHf5ydj9es18xWbbgfPFF1-QUNr99MxzErAw4H6o="} />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Cards;