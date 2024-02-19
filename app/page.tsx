import "../app/style.css"
import { nfts } from "./helpers/projectList"
import Discover from './helpers/projectList';
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <body>
        <div className="hero-section">
          <div className="container">
            <div className="hero-section__wrapper">
              <div className="hero-section__content">
                <h1 className="hero-section__content--title">
                  Discover digital art & Collect NFTs
                </h1>
                <div className="hero-section__content--text">
                  NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k
                  NFT artists.
                </div>
                <button className="hero-section__content--button">
                  <img src="/IMG/hero-section/hero-section-rocket-launch.svg" alt="" />
                  Get Started
                </button>
                <div className="hero-section__additional-info">
                  <div className="hero-section__additional-info--value">
                    <div className="additional-info__value--title">
                      240k+
                    </div>
                    <div className="additional-info__value--text">
                      Total Sale
                    </div>
                  </div>
                  <div className="hero-section__additional-info--value">
                    <div className="additional-info__value--title">
                      100k+
                    </div>
                    <div className="additional-info__value--text">
                      Auctions
                    </div>
                  </div>
                  <div className="hero-section__additional-info--value">
                    <div className="additional-info__value--title">
                      240k+
                    </div>
                    <div className="additional-info__value--text">
                      Artists
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-section__highlighted">
                <img src="/IMG/hero-section/hero-section-image-placeholder.png" alt="" />
                <div className="hero-section__highlighted--frame">
                  <div className="highlighted__frame--title">
                    Space Walking
                  </div>
                  <div className="highlighted--frame--studio">
                    <img src="/IMG/hero-section/hero-section-avatar.png" alt="" />
                    Animakid
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {nfts.map((item, index) => (
          <Discover
            key={index}
            name={item.name}
            title={item.title}
            price={item.price}
            image={item.image}
          />
        ))}

        <div className="footer">
          <div className="container">
            <div className="footer__wrapper">
              <div className="footer__header">
                <div className="footer__about">
                  <img src="./IMG/Logo.svg" alt="logo" className="footer__logo" />
                  <div className="footer__text">NFT marketplace UI created with Anima for Figma.</div>

                  <div className="footer__social">
                    <div className="footer__text">Join our community</div>
                    <div className="footer__social--icon">
                      <img src="./IMG/social/DiscordLogo.svg" alt="discord" />
                      <img src="./IMG/social/YoutubeLogo.svg" alt="Youtube" />
                      <img src="./IMG/social/TwitterLogo.svg" alt="Twitter" />
                      <img src="./IMG/social/InstagramLogo.svg" alt="Instagram" />
                    </div>
                  </div>
                </div>
                <div className="footer__explore">
                  <h3 className="footer__title">Explore</h3>
                  <ul className="footer__menu">
                    <li className="footer__text"><a href="#">Marketplace</a></li>
                    <li className="footer__text"><a href="#">Rankings</a></li>
                    <li className="footer__text"><a href="#">Connect a wallet</a></li>
                  </ul>
                </div>
                <div className="footer__join">
                  <h3 className="footer__title">Join our weekly digest</h3>
                  <div className="footer__text">Get exclusive promotions & updates straight to your inbox.</div>
                  <form action="#" className="footer__email">
                    <input type="text" className="footer__input" placeholder="Enter your email here" />
                    <button className="footer__subscribe">Subscribe</button>
                  </form>
                </div>
              </div>
              <div className="footer__bottom">
                Ⓒ NFT Market. Use this template freely.
              </div>
            </div>
          </div>
        </div>
      </body>
    </main>
  );
}
