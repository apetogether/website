// Imports
import Link from "next/link"; // Routing
import Layout from "@components/Layout"; // Layout wrapper
import styles from "@styles/pages/FAQ.module.scss"; // Page styles

// Types
import type { ReactElement } from "react";

// FAQ page
export default function FAQ(): ReactElement {
  return (
    <Layout>
      <div className={styles.faq}>
        <h2>Frequently Asked Questions</h2>

        {/* What is loot ? */}
        <div className={styles.faq__item}>
          <h3>What is EtherWeeds?</h3>
          <p>
            EtherWeeds is a collection of 1,000 minty fresh bags of weed,
            originally released by Eddie Bluntz and Pat DeDabberz. At release, 
            anyone can claim weed bags for 0.0420 ETH. Each bag contains 1 item:
            a flower for your satisfaction.
          </p>
          <p>
            Loot is an unaudited project. Bags #1 to #998 are claimable by
            anyone and #999 to #1000 are currently reserved for the contract
            deployers.
          </p>
        </div>

        {/* Why is loot special? */}
        <div className={styles.faq__item}>
          <h3>Why is EtherWeeds special?</h3>
          <p>
            EtherWeeds is unique—the first project of its kind. It is the only NFT
            collection designed to spread good vibez for all hodlers.
          </p>
        </div>
        {/* How do I mint these? */}
        <div className={styles.faq__item}>
          <h3>How do I mint some weeds?</h3>
          <p>
            EtherWeeds can be minted directly from the {" "}
            <a
              href="<contract link>"
              target="_blank"
              rel="noopener noreferrer"
            >
              contract
            </a>
            . Connect your wallet by selecting "Connect to Web3" and call the "Mint" function
            with minting mechanism.
          </p>
        </div>

      </div>
    </Layout>
  );
}
