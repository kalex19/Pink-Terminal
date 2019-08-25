import React, { Component } from 'react';
import './Loading.css';
import Nav from '../Nav/Nav';
import Header from '../Header/Header';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Resume from '../Resume/Resume';
import Media from '../Media/Media';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

export default class Loading extends Component {
  constructor(){
    super()
    this.state = {
      loading: true
    }
  }

  enterPage = (e) => {
    e.preventDefault()
    this.setState({
      loading: false
    })
  }

  render() {
  let loadingPage;
  let content; 
  let loading = this.state.loading;

    if(loading){
      loadingPage = "active"
      content = "hidden"
    } else {
      loadingPage = "hidden"
      content = "active"
    }

    return (
      <main>
          <section id="loading" className={loadingPage}>
          <form onSubmit={this.enterPage}>
          <h2>I Promise to Empower Others As I Succeed</h2>
          <input type="submit" value="ENTER HERE"/>
          </form>
          <div class="out">
          <div class="fade-in">
            <div class="container">
              <div class="one common"></div>
              <div class="two common"></div>
              <div class="three common"></div>
              <div class="four common"></div>
              <div class="five common"></div>
              <div class="six common"></div>
              <div class="seven common"></div>
              <div class="eight common"></div>
            </div>
          </div>
        </div>
          <div class="codepen">
          <span class="c1">W</span>
          <span class="c2">E</span>
          <span class="c3">L</span>
          <span class="c4">C</span>
          <span class="c5">O</span>
          <span class="c6">M</span>
          <span class="c7">E</span>
          <span class="c8"></span>
          <div class="bg"></div>
        </div>
        </section>
        <section id="mainContent" className={content}>
          <Nav/>
          <Header/>
          <About/>
          <Portfolio/>
          <Resume/>
          <Media/>
          <Contact/>
          <Footer/>
        </section>
     </main>
    )
  }
}
