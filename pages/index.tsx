// Imports
import Layout from "@components/Layout"; // Layout wrapper
import { defaultBags } from "@utils/constants"; // Bags to render
import styles from "@styles/pages/Home.module.scss"; // Styles

// Types
import type { ReactElement } from "react";

export default function Home(): ReactElement {
  // Quicklinks to render
  const quicklinks: Record<string, string>[] = [
    { name: "OpenSea", url: "https://opensea.io/collection/lootproject" },
    {
      name: "Contract",
      url: "https://etherscan.io/address/0xff9c1b15b16263c61d017ee9f65c50e4ae0113d7",
    },
  ];

  return (
    <Layout>
      <div>
        <div className={styles.home__cta}>
          {/* CTA title */}
          <h1>Ether Weeds</h1>

          {/* Quicklinks */}
          <ul>
            {quicklinks.map(({ name, url }, i) => {
              return (
                <li key={i}>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {name}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* CTA Description */}
          <p>
            minty freshness.
          </p>
        </div>

        {/* Rendering sample loot bags */}
        <div className={styles.home__feature}>
          <span>Example Weeds:</span>
          <img src="/ethw220.jpg" alt="220" width="420" height="420" />
          <img src="/ethw273.jpg" alt="273" width="420" height="420" />
          <img src="/ethw322.jpg" alt="322" width="420" height="420" />
        </div>
      </div>
    </Layout>
  );
}
