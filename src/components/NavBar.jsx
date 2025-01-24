export default function NavBar( props) {
    const { scrolled } = props;

    function link(name, addy) {
        this.name = name;
        this.addy = addy;
    }

    const links = [new link("Shop", "https://shop.heavendoorsandwindows.com"),
        new link("Gallery", "/products"),
    new link("Services", "/services"),
    new link("About", "/about"),
    new link("Contact", "/contact"),]

    return (
        <div className={`nav-bar ${scrolled ? 'scrolled' : ''}`}>
            {
                links.map(link => (
                    <a className="nav-link" key={link.name} href={link.addy}>{link.name}</a>
                ))
            }

        </div>
    )
}