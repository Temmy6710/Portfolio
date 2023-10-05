import Logo from './Images/Logo3.jpg';

const Navbar = () => {
    return(
        <nav className="navbar">
            <div className="nav">
                <img src={Logo} className='navbarimg' alt="logo" />
                <div className="nav-top">
                    <h5>Free Delivery on all orders over #39,000</h5>
                    <h5 className="border-right">Rd. wuye, bleh bleh 1234</h5>
                </div>
                <div className="nav-bottom">
                    <div className="Links">
                        <a href="">Home</a>
                        <a href="">Menu</a>
                        <a href="">Shop</a>
                        <a href="">Pages</a>
                        <a href="">Blog</a>
                        <a href="">Contact Us</a>
                    </div>
                    <div >
                        <button />
                        <button />
                        <button >Book a table</button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;