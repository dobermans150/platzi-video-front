import React from 'react';
import Searcher from '../components/Searcher';
import './styles/Home.css';

import VideoList from '../components/VideoList';
import Layout from '../shared/layout/components/Layout';

export default function Home() {
  return (
    <Layout className="home" isLoggedIn={true}>
      <Searcher />
      <VideoList />
    </Layout>
  );
}
