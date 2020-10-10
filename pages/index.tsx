import React, {FC} from 'react'  // {FC} をimport対象に追加
import Head from 'next/head'
import styles from '../../styles/Home.module.css' // srcディレクトリに移したことで階層が1つ深くなったので、「../」を追加

// Homeコンポーネントの型としてFC（FunctionalComponent）を定義
const Home: FC = () => {
  return (
    <div>
      fuga
    </div>
  )
};
export default Home;
