export default function NavBar( props) {
    const { scrolled } = props;

    function link(name, addy) {
        this.name = name;
        this.add = addy;
    }

    const links = [new link("Products", ""),
    new link("Services", ""),
    new link("About Us", ""),
    new link("Portfolio", ""),
    new link("Contact", ""),]

    return (
        <div className={`nav-bar ${scrolled ? 'scrolled' : ''}`}>
            {
                links.map(link => (
                    <a className="nav-link" key={link.name}>{link.name}</a>
                ))
            }

        </div>
    )
}