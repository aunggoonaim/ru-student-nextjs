import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import { Input } from 'antd';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Snowflakes from 'magic-snowflakes';
import Link from 'next/link';

const HomePage: NextPage = () => {

  const { TextArea } = Input;

  const [loginState, setLoginState] = useState(false)

  useEffect(() => {
    const token = window.localStorage.getItem('access_token');
    if (token) {
      setLoginState(true);
    }
    const snowflakes = new Snowflakes({
      maxSize: 50,
      count: 40
    });
    return () => snowflakes.destroy();
  }, [])

  return (
    <>
      <nav className={styles.navbar}>
        <Image className={styles.imgbanner} src="/assets/banner.png" alt="Banner Logo" width={240} height={55} />
        {
          !loginState &&
          <Link href={''}>
            <a className={styles.loginlink}>เข้าสู่ระบบ</a>
          </Link>
        }
      </nav>

      <Head>
        <title>RU Community</title>
        <meta name="description" content="RU Community, รามคำแหงคอมมิวนิตี้ โซเชียลสำหรับนักศึกษารามคำแหง, แหล่งรวมข้อมูลรามคำแหง" />
        <link rel="icon" href="/icon.png" />
        <meta property="og:url" content="https://www.ru-community.com" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="RU Community - หน้าแรก" />
        <meta property="og:description" content="รามคำแหงคอมมิวนิตี้ โซเชียลสำหรับนักศึกษารามคำแหง, แหล่งรวมข้อมูลรามคำแหง" />
        <meta property="og:image" content="https://www.ru-community.com/assets/page.webp" />
      </Head>

      <div className={styles.container}>
        <main className={styles.main}>
          <TextArea className={styles.textarea} rows={4} placeholder={'คุณกำลังคิดอะไรอยู่ ?'} />

          <div className="mt-6">
            <div className="max-w rounded overflow-hidden shadow-lg">
              <Image className="w-full" src="/assets/mountain.webp" alt="Mountain" width={350} height={200} />
              <div className="px-6 py-2">
                <div className="font-bold text-xl mb-2">วิว & ทิวทัศน์</div>
                <p className="text-gray-700 text-base">
                  ข้อความสำหรับทดสอบระบบพารากราฟ.
                </p>
              </div>
              <div className="px-6 pt-2 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="max-w rounded overflow-hidden shadow-lg">
              <Image className="w-full" src="/assets/mountain_2.webp" alt="Mountain" width={350} height={200} />
              <div className="px-6 py-2">
                <div className="font-bold text-xl mb-2">วิว & ทิวทัศน์</div>
                <p className="text-gray-700 text-base">
                  ข้อความสำหรับทดสอบระบบพารากราฟ.
                </p>
              </div>
              <div className="px-6 pt-2 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="max-w rounded overflow-hidden shadow-lg">
              <Image className="w-full" src="/assets/mountain_3.webp" alt="Mountain" width={350} height={200} />
              <div className="px-6 py-2">
                <div className="font-bold text-xl mb-2">วิว & ทิวทัศน์</div>
                <p className="text-gray-700 text-base">
                  ข้อความสำหรับทดสอบระบบพารากราฟ.
                </p>
              </div>
              <div className="px-6 pt-2 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
              </div>
            </div>
          </div>

          <div className={styles.endline}></div>

        </main>
      </div>
    </>
  )
}

export default HomePage
