import React from 'react';
import Header from './components/Header.js';
import Nav from './components/Nav.js';
import Body from './components/Body.js';
import Footer from './components/Footer.js';

import List from './components/List.js';
import skills from './skills';

export default function App() {
     return (
          <div>
               <Header />
               <Nav />
               <Body />
               <List skills={skills} />
               <Footer />
          </div>
     );
}
