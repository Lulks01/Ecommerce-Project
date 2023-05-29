import './footer.css';
import './icons/visa.svg'
import { Visa, Paypal, Mastercard } from './icons/icons'

export function Footer() {
    return (
        <div className='Footer'>
            <div className='containerFooter'>
                <div className='payments'>
                    <h2>Formas de pagamento</h2>
                    <div className='paymentMethods'> 
                        <Visa/>
                        <Paypal/>
                        <Mastercard/>
                    </div>
                </div>

                <div id='politics'>
                    <a
                        href="https://www.youtube.com/watch?v=HEXWRTEbj1I&pp=ygUMd2hhdCBpcyBsb3Zl"
                        id='politicsbuttons'>
                        Politicas de reembolso
                    </a>
                    <a
                        href="https://www.youtube.com/watch?v=HEXWRTEbj1I&pp=ygUMd2hhdCBpcyBsb3Zl"
                        id='politicsbuttons'>
                        Politicas de privacidade
                    </a>
                    <a
                        href="https://www.youtube.com/watch?v=HEXWRTEbj1I&pp=ygUMd2hhdCBpcyBsb3Zl"
                        id='politicsbuttons'>
                        Termos de serviço
                    </a>
                    <a
                        href="https://www.youtube.com/watch?v=HEXWRTEbj1I&pp=ygUMd2hhdCBpcyBsb3Zl"
                        id='politicsbuttons'>
                        Politica de frete
                    </a>
                </div>
            <p className='devs'>
                Projeto de aprendizado por <a href="" id='tags'>Tokashiki</a> & <a href="" id='tags'>Lulks</a>
            </p>
            </div>
        </div>
    );
};

