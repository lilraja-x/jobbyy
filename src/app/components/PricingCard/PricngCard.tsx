import './PricingCard.css';

interface PricingCardProps {
    price: string;
    lists: string[];
    action: string;
}

export default function PricingCard({ price, lists, action }: PricingCardProps) {
    return (
        <div className="card">
            <p className="price">{price}</p>
            <ul className="lists">
                {lists.map((item, index) => (
                    <li className="list" key={index}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                            <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path fill="#ffffff" d="M21.5821 5.54289C21.9726 5.93342 21.9726 6.56658 21.5821 6.95711L10.2526 18.2867C9.86452 18.6747 9.23627 18.6775 8.84475 18.293L2.29929 11.8644C1.90527 11.4774 1.89956 10.8443 2.28655 10.4503C2.67354 10.0562 3.30668 10.0505 3.70071 10.4375L9.53911 16.1717L20.1679 5.54289C20.5584 5.15237 21.1916 5.15237 21.5821 5.54289Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                            </g>
                        </svg>
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
            <a href="#" className="action">{action}</a>
        </div>
    );
}
