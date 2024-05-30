// make a button
function Footer(params) {
    return (
        <footer>
            <button><a href="./About.jsx">About</a></button>
            <p>
                &copy; {new Date().getFullYear()} My website
            </p>
        </footer>
    )
    
}

export default Footer;