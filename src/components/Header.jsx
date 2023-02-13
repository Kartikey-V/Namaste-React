const Title = () => (
    <a href="/">
        <img
            className="logo"
            src="https://dynamic.brandcrowd.com/asset/logo/e94a6dd4-56ea-4145-a63c-19d59312e922/logo-search-grid-1x?logoTemplateVersion=1&v=637829909691300000"
            alt="logo"
        />
    </a>
);


const Header = () => {
    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;