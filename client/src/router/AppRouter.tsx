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
import MyProfile from '../components/AccountModule/MyProfile/MyProfile';
import Channel from '../components/ChannelModule/Channel/Channel';
import CreateChannel from '../components/ChannelModule/CreateChannel/CreateChannel';
import CreateTournament from '../components/TournamentModule/CreateTournament/CreateTournament';
import Tournament from '../components/TournamentModule/Tournament/Tournament';
import SetNewPassword from '../components/AuthenticationModule/SetNewPassword/SetNewPassword';
import ConfirmEmail from '../components/AuthenticationModule/ConfirmEmail/ConfirmEmail';
import UserProfile from '../components/AccountModule/UserProfile/UserProfile';
import AddFriend from '../components/AccountModule/AddFriend/AddFriend';

function AppRouter() {
	return (
    <Switch>

      {/* Left Navigation (Main) */}
      <Route path="/hub">
        <Hub />
      </Route>

      <Route path="/channels">
        <MyChannels />
      </Route>

      <Route path="/tournaments">
        <MyTournaments />
      </Route>

      {/* Right Navigation (Main) */}
      <Route path="/friends">
        <MyFriends />
      </Route>

      <Route path="/players">
        <MyLocalPlayers />
      </Route>
      
      <Route path="/leaderboards">
        <MyLeaderboards />
      </Route>

      <Route path="/profile">
        <MyProfile />
      </Route>
      
      <Route path="/settings">
        <Settings />
      </Route>

      {/* Other Components */}

      {/* Channel */}
      <Route path={`/channel&c=:id`}>
        <Channel />
      </Route>

      {/* Tournament */}
      <Route path={`/tournament`}>
        <Tournament />
      </Route>

      {/* User Profile */}
      <Route path={`/user&u=:id`}>
        <UserProfile />
      </Route>

      {/* Create Routes */}
      {/* <Route path="/create/local">
        <CreateLocalPlayer />
      </Route> */}

      {/* <Route path="/create">
        <CreateChannel />
      </Route> */}

      <Route path="/create">
        <CreateTournament />
      </Route>

      <Route path="/add">
        <AddFriend />
      </Route>
      {/* End of Create Routes */}

      {/* Authentication Routes */}
      <Route path="/reset-password">
        <ResetPassword />
      </Route>

      <Route path="/set-password">
        <SetNewPassword />
      </Route>

      <Route path="/confirm-email">
        <ConfirmEmail />
      </Route>

      <Route path="/signup">
        <Signup />
      </Route>
      {/* End of Authentication Routes */}
      
      {/* Home Routes */}
      <Route path="/">
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>
      {/* End of Home Routes */}
      
    </Switch>
	);
}

export default AppRouter;