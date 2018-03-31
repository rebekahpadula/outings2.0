import React, { Component } from 'react';
import * as firebase from 'firebase';
import config from './config';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Suggestions from './Suggestions';
import SuggestionForm from './SuggestionForm';
import RegistrationForm from './RegistrationForm';
import styled from 'styled-components';

const Loading = styled.section`
  text-align: center;
`;

const LoadingHeading = styled.h1``;

const LoadingAnimation = styled.p`
  animation: load 3s infinite linear;
  border: 3px solid #333;
  border-bottom-color: #eee;
  border-radius: 50%;
  border-right-color: #eee;
  height: 50px;
  margin: auto;
  width: 50px;

  @keyframes load {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Outings = styled.div`
  min-height: 100vh;
  padding: 40px;
  border-top: 4px solid #ff4447;

  @media screen and (min-width: 900px) {
    padding: 40px 80px;
  }
`;

const Content = styled.div`
  color: #111;
`;

const ContentMessage = styled.p``;

firebase.initializeApp(config);

export default class App extends Component {
  constructor(props) {
    super(props);
    let database = firebase.database();
    // create suggestions ref here in the constructor then refer to the suggestions database in firebase as this.ref everywhere else!
    this.ref = database.ref().child('suggestions');
    this.state = {
      suggestions: [],
      authenticated: false,
      loading: false,
      modalActive: false,
      suggestionsModalActive: false,
      currentUser: null
    }
    this.addSuggestion = this.addSuggestion.bind(this);
    this.updateVotes = this.updateVotes.bind(this);
    this.authWithFacebook = this.authWithFacebook.bind(this);
    this.authWithEmailPassword = this.authWithEmailPassword.bind(this);
    this.logOut = this.logOut.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openSuggestionsModal = this.openSuggestionsModal.bind(this);
    this.closeSuggestionsModal = this.closeSuggestionsModal.bind(this);
  }

  addSuggestion(suggestion) {
    this.setState((prevState, props) => {
      this.ref.push(suggestion);
      return Object.assign({}, {suggestions: [...prevState.suggestions, suggestion], suggestionsModalActive: false});
    });
    console.log(suggestion.time);
    document.getElementById('time').value = '';
    document.getElementById('date').value = '';
    document.getElementById('location').value = '';
    document.getElementById('more-info').value = '';
  }

  updateVotes(id, type) {
    // setState always sends the previous state to the first param in the function you provide
    let thumbsUp = document.getElementById('thumbs-up');
    let thumbsDown = document.getElementById('thumbs-down');
    let thumbsUpButton = thumbsUp.parentElement;
    let thumbsDownButton = thumbsDown.parentElement;

    this.setState((prevState) => {
      const newSuggestions = prevState.suggestions;
      let index = -1;
      for(let i = 0, len = newSuggestions.length; i < len; i++) {
        if(newSuggestions[i].id === id) {
          index = i;
        }
      }
      if(type === 'up') {
        newSuggestions[index].upVotes++;
      } else if(type === 'down') {
        newSuggestions[index].downVotes++;
      }

      return {
        suggestions: newSuggestions
      };
    });

  }

  // lets users log in with facebook
  authWithFacebook() {
    // creates an instance of the Facebook provider object
    let provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('public_profile');
    // popup as opposed to redirecting
    firebase.auth().signInWithRedirect(provider).then(result => {
      // updates state
      this.setState(prevState => Object.assign({}, prevState, {redirect: true, authenticated: true, modalActive: false}));
      // gives you a Facebook access token to access their API
      let token = result.credential.accessToken;
      // the signed-in user info
      let user = result.user;
      let userName = user.displayName;
      // handles errors
    }).catch(error => {
      let errorCode = error.code;
      let errorMessage = error.message;
      let email = error.email;
      let credential = error.credential;
    });
    this.closeModal();
  }

  // lets users log in with email and password
  authWithEmailPassword() {
    firebase.auth().createUserWithEmailAndPassword().catch(function(error) {
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
  }

  // lets users sign out
  logOut() {
    firebase.auth().signOut().then(() => {
      this.setState(prevState => Object.assign({}, prevState, {authenticated: false}))
    }).catch(error => {
      alert(error);
    });
  }

  // opens login modal
  openModal() {
    this.setState(prevState => Object.assign({}, prevState, {modalActive: true}));
  }

  // closes login modal
  closeModal() {
    this.setState(prevState => Object.assign({}, prevState, {modalActive: false}));
  }

  // opens suggestions form modal
  openSuggestionsModal() {
    this.setState(prevState => Object.assign({}, prevState, {suggestionsModalActive: true}));
  }

  // closes suggestions form modal
  closeSuggestionsModal() {
    this.setState(prevState => Object.assign({}, prevState, {suggestionsModalActive: false}));
  }

  componentDidMount() {
    this.ref.on('value', (snapshot) => {
      let suggestions = snapshot.val();
      let newState = [];
      for (let suggestion in suggestions) {
        newState.push({
          title: suggestions[suggestion].title,
          time: suggestions[suggestion].time,
          date: suggestions[suggestion].date,
          location: suggestions[suggestion].location,
          moreInfo: suggestions[suggestion].moreInfo,
          upVotes: suggestions[suggestion].upVotes,
          downVotes: suggestions[suggestion].upVotes
        })
      }
      this.setState({
        suggestions: newState
      });
    });

    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        // does this actually check to see if the user is authenticated? 
        this.setState({ authenticated: true, currentUser: user.displayName });
      } else {
        this.setState({ authenticated: false, currentUser: null });
      }
    });
  }

  componentWillMount() {
    // creates reference to authenticated state, when you figure out the condition for updating it, you can write your "on" function.
    let authenticatedRef = firebase.database().ref('authenticated');
  }

  compenentWillUnmount() {
    // removesauthlistener, removes binding?
  }

  render() {
    if(this.state.loading === true) {
      return (
        <Loading>
          <LoadingHeading>Loading...</LoadingHeading>
          <LoadingAnimation></LoadingAnimation>
        </Loading>
      );
    } else if(this.state.authenticated === false) {
      return (
        <Outings>
          <Header authenticated={this.state.authenticated} logOut={this.logOut} modalActive={this.state.modalActive} openModal={this.openModal}/>
          <Content>
            <ContentMessage>You can't create an outings or vote on others until you log in!</ContentMessage>
          </Content>
          <RegistrationForm authWithFacebook={this.authWithFacebook} modalActive={this.state.modalActive} closeModal={this.closeModal} authWithEmailPassword={this.authWithEmailPassword}/>
          <Footer></Footer>
        </Outings>
      );
    } else {
      return (
        <Outings>
          <Header authenticated={this.state.authenticated} logOut={this.logOut} currentUser={this.state.currentUser}/>
          <Content>
            <ContentMessage>Outings lets you create an event with all the important details so your team can see the plan and thumbs up the events they're interested in, and thumbs down the ones they're not.</ContentMessage>
          </Content>
          <Suggestions suggestions={this.state.suggestions} voteFunction={this.updateVotes} openSuggestionsModal={this.openSuggestionsModal}/>
          <SuggestionForm addSuggestion={this.addSuggestion} suggestionsModalActive={this.state.suggestionsModalActive} openSuggestionsModal={this.openSuggestionsModal} closeSuggestionsModal={this.closeSuggestionsModal} key={this.state.key}/>
          <Footer></Footer>
        </Outings>
      );
    }
  }
};