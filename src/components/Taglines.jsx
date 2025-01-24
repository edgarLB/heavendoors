export default function Taglines() {
    return (
        <div className="taglines">
            <Tagline icon="fa-medal" text="Quality Products" />
            <Tagline icon="fa-handshake" text="Trusted" />
            <Tagline icon="fa-thumbs-up" text="Great Service" />
            <Tagline icon="fa-people-group" text="Family Owned" />
        </div>
    );
}

function Tagline({ icon, text }) {
    return (
        <div className="tagline">
            <i className={`fa-solid ${icon}`}></i>
            <p>{text}</p>
        </div>
    );
}
