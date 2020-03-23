import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Search from './components/Search';
import SummonerItem from './components/SummonerItem';
import Division from './components/Division';
import Champions from './components/Champions';
import Spinner from './components/Spinner';
import Alert from './components/Alert';
import './bootswatch-lux.css';
import championData from './champion.json';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    summoner: [],
    loading: false,
    division: {},
    champions: [],
    allChampions: championData.data,
    champion_points1: '',
    champion_points2: '',
    champion_points3: '',
    name1: '',
    name2: '',
    name3: '',
    data: {},
    alert: false
  };

  getSummoner = async (text, server) => {
    try {
      const summonerRes = await axios.get(
        `https://${server}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${text}?api_key=${process.env.REACT_APP_RIOT_ID}`
      );

      this.setState({ alert: false });

      return summonerRes;
    } catch (err) {
      this.setAlert();
    }
  };

  searchSummoner = async (text, server) => {
    this.setState({ loading: true });

    await this.getSummoner(text, server).then(sdata => {
      this.setState({ data: sdata });
    });

    const divisionRes = await axios.get(
      `https://${server}.api.riotgames.com//lol/league/v4/entries/by-summoner/${this.state.data.data.id}?api_key=${process.env.REACT_APP_RIOT_ID}`
    );

    const championsRes = await axios.get(
      `https://${server}.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${this.state.data.data.id}?api_key=${process.env.REACT_APP_RIOT_ID}`
    );

    this.setState({
      summoner: this.state.data.data,
      division: divisionRes.data[0],
      loading: false,
      champions: Object.values(championsRes.data)
    });

    const { allChampions, champions } = this.state;

    const allChampionsArray = Object.values(allChampions);

    if (champions[0]) {
      let id1 = champions[0].championId;
      let id2 = champions[1].championId;
      let id3 = champions[2].championId;

      this.setState({ champion_points1: champions[0].championPoints });
      this.setState({ champion_points2: champions[1].championPoints });
      this.setState({ champion_points3: champions[2].championPoints });

      allChampionsArray.forEach(champion => {
        if (id1.toString() === champion.key) {
          this.setState({ name1: champion.id });
        }
        if (id2.toString() === champion.key) {
          this.setState({ name2: champion.id });
        }
        if (id3.toString() === champion.key) {
          this.setState({ name3: champion.id });
        }
      });
    }
  };

  setAlert = () => {
    this.setState({ alert: true });
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className='container'>
          <Search searchSummoner={this.searchSummoner} />
          {this.state.alert === true ? (
            <Alert alert={this.state.alert} />
          ) : (
            <div className='card card-body my-3'>
              <div className='row'>
                <div className='col-md-3' id='profile'>
                  {this.state.loading ? (
                    <Spinner />
                  ) : (
                    <SummonerItem summoner={this.state.summoner} />
                  )}
                </div>
                <div className='col-md-5' id='division'>
                  {this.state.loading ? (
                    <Spinner />
                  ) : (
                    <Division division={this.state.division} />
                  )}
                </div>
                <div className='col-md-4' id='champions'>
                  {this.state.loading ? (
                    <Spinner />
                  ) : (
                    <Champions
                      title={'BEST CHAMPIONS'}
                      name1={this.state.name1}
                      name2={this.state.name2}
                      name3={this.state.name3}
                      champion_points1={this.state.champion_points1}
                      champion_points2={this.state.champion_points2}
                      champion_points3={this.state.champion_points3}
                    />
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
