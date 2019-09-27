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

    if(this.state.loading){
      loadingPage = "active"
      content = "hidden"
    } else {
      loadingPage = "hidden"
      content = "active"
    }

    return (
      <main>
        <section id="loading">
          <article  className={loadingPage}>
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
            <form onSubmit={this.enterPage}>
            <h2 className="header">I Promise to Empower Others As I Succeed</h2>
              <input type="submit" value="ENTER HERE" className="button"/>
            </form>
          </article>
        </section>
        <section id="mainContent">
          <article className={content}>
            <Nav/>
            <Header/>
            <About/>
            <Portfolio/>
            <Resume/>
            <Media/>
            <Contact/>
            <Footer/>
          </article>
        </section>
     </main>
    )
  }
}
