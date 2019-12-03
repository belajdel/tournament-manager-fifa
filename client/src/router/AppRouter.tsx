import React from 'react';
import {
	Switch,
	Route
} from 'react-router-dom';


/**
 * Components
 */
import About from '../components/HomeModule/About/About';
import Home from '../components/HomeModule/Home/Home';
import Settings from '../components/AccountModule/Settings/Settings';
import Signup from '../components/AuthenticationModule/Signup/Signup';
import ResetPassword from '../components/AuthenticationModule/ResetPassword/ResetPassword';
import MyLocalPlayers from '../components/AccountModule/MyLocalPlayers/MyLocalPlayers';
import CreateLocalPlayer from '../components/AccountModule/CreateLocalPlayer/CreateLocalPlayer';
import Hub from '../components/HubModule/Hub/Hub';
import MyFriends from '../components/AccountModule/MyFriends/MyFriends';
import MyLeaderboards from '../components/LeaderboardsModule/MyLeaderboards/MyLeaderboards';
import MyTournaments from '../components/TournamentModule/MyTournaments/MyTournaments';
import MyChannels from '../components/ChannelModule/MyChannels/MyChannels';

function AppRouter() {
	return (
    <Switch>

      <Route path="/channels">
        <MyChannels />
      </Route>

      <Route path="/tournaments">
        <MyTournaments />
      </Route>

      <Route path="/leaderboards">
        <MyLeaderboards />
      </Route>

      <Route path="/friends">
        <MyFriends />
      </Route>

      <Route path="/hub">
        <Hub />
      </Route>
      
      {/* Create Local Player */}
      <Route path="/create">
        <CreateLocalPlayer />
      </Route>
      

      <Route path="/local-players">
        <MyLocalPlayers />
      </Route>

      <Route path="/account">
        <Settings />
      </Route>

      <Route path="/reset-password">
        <ResetPassword />
      </Route>

      <Route path="/about">
        <About />
      </Route>
      
      <Route path="/signup">
        <Signup />
      </Route>

      <Route path="/">
        <Home />
      </Route>
      
    </Switch>
	);
}

export default AppRouter;