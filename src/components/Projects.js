// Import Assets
import Whitelist from '../assets/Whitelist.png';
import CoinMarketCap from '../assets/Coin MarketCap Clone.png';
import Invoicing from '../assets/Invoicing.png';
import defiTippingDapp from '../assets/defiTippingDapp.png';
import CheckContractAddressOrRegularAddress from '../assets/CheckContractAddressOrRegularAddress.png'
const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3><b>Make the Addresses Whitelist</b></h3>
                    <img src={Whitelist} alt="Whitelist Landing page" />
                    <p>
                    <li>We want to give early supporters an access to a whitelist for an NFT collection; where Whitelist access should be given to the first 10 users for free.</li>
                    <li>This site uses Solidity as backend and Nextjs as Frontend with Ethersjs as Middleware</li>
                    </p>

                    <a href="https://whitelist-dapp-one-azure.vercel.app/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/coderRaj07/WhiteList_DApp" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3><b>Ethereum Address Validator</b></h3>
                    <img src={CheckContractAddressOrRegularAddress} alt="CheckContractAddressOrRegularAddress Page" />
                    <p><li>To Check the provided address is of Contract Address or Regular Address or Invalid Address</li>
                       <li>This site uses ethersjs to connect frontend with backend of solidity which uses a predefined algorithm to verify the provided address </li>
                    </p>

                    <a href="https://address-validator-theta.vercel.app/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/coderRaj07/Check-Address-is-Contract-Address-or-Regular-Address" target="_blank" className="button">Code</a>
                </div>


                <div className="projects__card">
                    <h3><b>Buy me a coffee Defi Tipping Dapp</b></h3>
                    <img src={defiTippingDapp} alt="defiTippingDapp Page" />
                    <p><li>It is a Dapp for Tipping people with ethers for Coffee</li>
                       <li>We can tip ethers using this dapp to the service provider, whose service we enjoyed</li>
                       <li>As well as we can see who tipped and what message they want to send to the service provider</li>
                    </p>

                    <a href="https://defi-tipping-dapp-9dn2advuw-coderraj07.vercel.app/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/coderRaj07/Defi_tipping-Dapp" target="_blank" className="button">Code</a>
                </div>

                
            </div>
        </section>
    );
}

export default Projects;
