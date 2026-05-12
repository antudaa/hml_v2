import { WorkFlowData } from "@/data/workflow";
import styles from "./WorkFlow.module.css";

export function EngineeringWorkFlow() {
  return (
    <section className={styles.section}>
      <div className={styles.spacer} />

      <div className={styles.content}>
        <div className={styles.headerWrap}>
          <h2 className={styles.backgroundTitle}>WORK FLOW</h2>
          <h1 className={styles.foregroundTitle}>WORK FLOW</h1>
        </div>

        <div className={styles.cards}>
          <article className={styles.card}>
            <div className={styles.evenlyColumn}>
              <h3 className={styles.serialNo}>{WorkFlowData[0].serialNo}</h3>
              <ul className={styles.list}>
                {WorkFlowData[0].workList.map((item) => (
                  <li className={styles.listItem} key={item}>
                    <span className={styles.listDash} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <p className={`${styles.sideTitle} ${styles.cardOneTitle}`}>
              Feasibility <br />
              <span className={styles.sideTitleHighlight}>Study</span>
            </p>
          </article>

          <article className={styles.card}>
            <div className={styles.betweenColumn}>
              <div>
                <ul className={styles.list}>
                  {WorkFlowData[1].workList.map((item) => (
                    <li className={styles.listItem} key={item}>
                      <span className={styles.listDash} />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className={styles.softwareLabel}>SOFTWARE</p>
                <p className={styles.softwareValue}>{WorkFlowData[1].Softwares}</p>
              </div>
              <h3 className={styles.serialNo}>{WorkFlowData[1].serialNo}</h3>
            </div>
            <p className={`${styles.sideTitle} ${styles.cardTwoTitle}`}>
              Transport <br />
              <span className={styles.sideTitleHighlight}>Enginering</span>
            </p>
          </article>

          <article className={styles.card}>
            <div className={styles.betweenColumn}>
              <h3 className={styles.serialNo}>{WorkFlowData[2].serialNo}</h3>
              <div>
                <ul className={styles.list}>
                  {WorkFlowData[2].workList.map((item) => (
                    <li className={styles.listItem} key={item}>
                      <span className={styles.listDash} />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className={styles.softwareLabel}>SOFTWARE</p>
                <p className={styles.softwareValue}>{WorkFlowData[2].Softwares}</p>
              </div>
            </div>
            <p className={`${styles.sideTitle} ${styles.cardThreeTitle}`}>
              Vessel <br />
              <span className={styles.sideTitleHighlight}>Loading</span>
            </p>
          </article>

          <article className={styles.card}>
            <div className={styles.betweenColumn}>
              <div>
                <ul className={styles.list}>
                  {WorkFlowData[3].workList.map((item) => (
                    <li className={styles.listItemCardFour} key={item}>
                      <span className={styles.listDash} />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className={styles.softwareLabel}>SOFTWARE</p>
                <p className={styles.softwareValue}>{WorkFlowData[3].Softwares}</p>
              </div>
              <h3 className={styles.serialNo}>{WorkFlowData[3].serialNo}</h3>
            </div>
            <p className={`${styles.sideTitle} ${styles.cardFourTitle}`}>
              Voyage <br />
              <span className={styles.sideTitleHighlight}>Monitoring</span>
            </p>
          </article>

          <article className={styles.card}>
            <div className={styles.betweenColumn}>
              <h3 className={styles.serialNo}>{WorkFlowData[4].serialNo}</h3>
              <div>
                <ul className={styles.list}>
                  {WorkFlowData[4].workList.map((item) => (
                    <li className={styles.listItem} key={item}>
                      <span className={styles.listDash} />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className={styles.softwareLabel}>SOFTWARE</p>
                <p className={styles.softwareValue}>{WorkFlowData[4].Softwares}</p>
              </div>
            </div>
            <p className={`${styles.sideTitle} ${styles.cardFiveTitle}`}>
              {WorkFlowData[4].category}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
