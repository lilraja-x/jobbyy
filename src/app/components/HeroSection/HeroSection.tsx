import './HeroSection.css';

interface Props {
    Heading: string;
    Descriptive_Text: string;
}

export default function HeroSection({ Heading, Descriptive_Text }: Props) {
    return (
        <div className="hero-image">
            <div className="hero-text">
                <h1>{Heading}</h1>
                <p>{Descriptive_Text}</p>
            </div>
        </div>
    );
}
