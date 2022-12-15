//Layouts
import Home from '~/pages/Home';
import WhoWeAre from '~/pages/WhoWeAre';

import Portfolio from '~/pages/Portfolio';
import stSoftWare from '~/pages/stSoftWare/StSoftWare';
import JoinUs from '~/pages/JoinUs/JoinUs';
import StDigitalPage from '~/pages/StDigital/StDigital';
import PageIncubation from '~/pages/WhatWeDo/StIncubation';
import Pageletstalks from '~/pages/LetTalk/Pageletstalks';
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/st-software', component: stSoftWare },
    { path: '/st-digital', component: StDigitalPage },
    { path: '/st-incubation', component: PageIncubation },
    { path: '/who-we-are', component: WhoWeAre },
    { path: '/portfolio', component: Portfolio },
    { path: '/join-us', component: JoinUs },
    { path: '/lets-talk', component: WhoWeAre },
    { path: '/lets-talk', component: Pageletstalks },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
