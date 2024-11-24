import Image from 'next/image'
import styles from './page.module.css'

const data = {
  title: 'UPDATE',
  titleDesc: 'It starts with an upgrade',
  iconDescList: [
    {
      imagePath: '/image/icon1.svg',
      title: 'Monitor',
      desc: 'Make your standard systems smart with Siphome. A simple installation or integration and we can start to monitor 24/7 to make sure your home is Siphome.',
    },
    {
      imagePath: '/image/icon2.svg',
      title: 'Monitor',
      desc: 'Make your standard systems smart with Siphome. A simple installation or integration and we can start to monitor 24/7 to make sure your home is Siphome.',
    },
    {
      imagePath: '/image/icon3.svg',
      title: 'Monitor',
      desc: 'Make your standard systems smart with Siphome. A simple installation or integration and we can start to monitor 24/7 to make sure your home is Siphome.',
    },
  ],
}

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <section className={styles.contentTitle}>
          <div className={styles.title}>{data.title}</div>
          <div className={styles.titleDesc}>{data.titleDesc}</div>
        </section>

        <div className={styles.contentImage}>
          <Image
            className={styles.first}
            src="/image/WechatIMG94.jpg"
            alt="update"
            width={170}
            height={120}
          />
          <Image
            className={styles.second}
            src="/image/WechatIMG95.jpg"
            alt="update"
            width={253}
            height={320}
          />
          <Image
            className={styles.third}
            src="/image/WechatIMG96.jpg"
            alt="update"
            width={220}
            height={300}
          />
        </div>
        <Image
          className={styles.dotBottom}
          src="/image/dot_left.svg"
          alt="dot"
          width={120}
          height={100}
        />
      </div>
      <div className={styles.right}>
        <div className={styles.contentDotWrapper}>
          <Image
            className={styles.contentDotImage}
            src="/image/dot_left.svg"
            alt="dot"
            width={120}
            height={100}
          />
        </div>
        <div className={styles.iconBar}>
          <div className={styles.iconBarContent}>
            {data.iconDescList.map((item) => {
              return (
                <div className={styles.descCard}>
                  <div className={styles.icon1Content}>
                    <Image
                      src={item.imagePath}
                      alt="icon"
                      width={30}
                      height={30}
                    />
                  </div>
                  <div className={styles.iconDesc}>
                    <p className={styles.iconDescTitle}>{item.title}</p>
                    <p className={styles.iconDescDescContent}>{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
