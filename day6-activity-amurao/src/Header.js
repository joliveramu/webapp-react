import logo from './logo.png';
function Header()
{
    return(
        <div>
            <nav class="navbar navbar-info bg-dark">
            <a class="navbar-brand" href="#"><img src={logo} height="75px" width="100px"/>&nbsp;<b className="text-warning">Beyond reality!</b></a>
            </nav>
        </div>
    );
}

export default Header;