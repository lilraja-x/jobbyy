import './HeroSection.css';

interface Props {
    Heading: string;
    Descriptive_Text: string;
}

export default function HeroSection({ Heading, Descriptive_Text }: Props) {
    return (
        <div className="hero-image">
            <div className="hero-text">
                <h1 className="hero-heading">{Heading}</h1>
                <p className="hero-paragraph">{Descriptive_Text}</p>
            </div>
        </div>
    );
}
