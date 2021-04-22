import React from 'react';
import imagePhoto from './../img/toppage_image.jpeg';

const Home = () => (
  <div>
    <img src={imagePhoto} className="top_image" width="100%" z-index="-1" alt="top page photo" />
    <h1>牛とともに生きる。</h1>
    <h1>食べることは、</h1>
    <h1>生きること。</h1>
  </div>
);

export default Home
