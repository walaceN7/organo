import './Rodape.css'

const Rodape = () => {
    return (
    <footer className='footer'>
        <section>
            <ul>
                <li>
                    <a href="facebook.com" target="blank">
                        <img src='/images/fb.png' alt='Logo Facebook' />
                    </a>
                </li>
                <li>
                    <a href="twitter.com" target="blank">
                        <img src='/images/tw.png' alt='Logo Twitter' />
                    </a>
                </li>
                <li>
                    <a href="instagram.com" target="blank">
                        <img src='/images/ig.png' alt='Logo Instagram' />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <p>Desenvolvido por Walace.</p>
        </section>
    </footer>);       
}

export default Rodape;