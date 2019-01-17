import React, { Component } from 'react';
import SimpleCard from './SimpleCard';

class Page extends Component {

  componentDidMount() {

    var projectDiv = document.querySelector('#projects');
    var projectContainer = document.querySelector('#card-container');
    var aboutContainer = document.querySelector('#about-container');
    var aboutDiv = document.querySelector('#about');
    var skillsDiv = document.querySelector('#skills');
    var aboutText = document.querySelector('#about-text');
    var color = ``;

    var onResize = () => {
      var width = projectContainer.clientWidth;
      var numCards = 7;
      var cardWidth = 325;
      var columns = Math.floor(width/cardWidth);
      var rows = Math.ceil(numCards/columns);

      //console.log('projectDiv\'s position: '+projectDiv.offsetTop);

      if(rows * (230 + 20) > window.innerHeight) {
        projectDiv.style.height = (rows * (230 + 20)).toString()+'px';
      } else {
        projectDiv.style.height = '100vh';
      }

      if(aboutText.offsetHeight > window.innerHeight) {
        aboutDiv.style.height = (aboutText.offsetHeight + 400).toString()+'px';
      }

      if(window.innerWidth > 770) {
        aboutContainer.style.width = '770px';
        if(window.innerWidth > 1280) {
          projectContainer.style.width = '1150px';
        }
      } else {
        projectContainer.style.width = (window.innerWidth).toString()+'px';
        aboutContainer.style.width = (window.innerWidth).toString()+'px';
      }
    }

    var onScroll = () => {

      //console.log('scroll position: '+window.pageYOffset);

      var currentScrollPos = window.pageYOffset;

      if(currentScrollPos < projectDiv.offsetTop - 125) {
        color = `rgb(201, 76, 76)`;
      }else if(currentScrollPos >= projectDiv.offsetTop - 125 &&
               currentScrollPos < projectDiv.offsetTop) {
                 //transition
        color = `rgb(${76 + projectDiv.offsetTop - currentScrollPos},
          ${201 - (projectDiv.offsetTop - currentScrollPos)}, 76)`;
      }else if(currentScrollPos >= projectDiv.offsetTop &&
               currentScrollPos < skillsDiv.offsetTop - 125) {
        color = `rgb(76, 201, 76)`;
      }else if(currentScrollPos >= skillsDiv.offsetTop - 125 &&
               currentScrollPos < skillsDiv.offsetTop) {
                 //transition
        color = `rgb(76, ${76 + skillsDiv.offsetTop - currentScrollPos},
          ${201 - (skillsDiv.offsetTop - currentScrollPos)})`;
      }else if(currentScrollPos >= skillsDiv.offsetTop) {
        color = `rgb(76, 76, 201)`;
      }

      aboutDiv.style.background = color;
      projectDiv.style.background = color;
      skillsDiv.style.background = color;
    }

    onResize();
    window.addEventListener('resize', onResize);
    window.addEventListener('scroll', onScroll);
  }

  render() {
    return (
      <div className="page">
        <div id="about">
          <div id="about-container">
            <h1 className="gold">
              I'm Chris, welcome to my page!
            </h1>
            <p id="about-text" className="gold">
            Tenolim tace obefac! Dok has atol iha yatine ewata lide asetiyet. Cilieg umaseti ritane cev. Vadu pi de siloh penek do! Ceyesieg neye mudabo momin. Lef ra tev mesegel tas socobie nin: Rene sunene magocef tenen lilawat nafefol loris detep. Abanasa eranociew me wiherol enirasep pinir fi ritie elo.

Rulonien nepom miwumad udirotor. Ciecapel sorog adehani dedarad tagi. Laleceb nis lon edete de alen, ca eneg wepi cizi. Pe anarimi soq pap mafiere nika. Jero dacane ro dod oyadub hise nurad hana pes! Oratelie lebexal miela. Yef ru yuxotie aleguser wiy ievesifad yiro ici. Irace her cacela nesaga sulanie etiero fietihan merimie eca ateg! Tir dido niratat net anilepas ner to. Mopad rasekos pipokug lorem sapimem ra bayono yu! Rec timimes hosel norule te abopucet punehe! Tic hevod napita ibil! Dep motic velesi, ocidel reho mibi cah benagec fi loge digari rol tetetob. Tof duca ikap.

Ierin suney gevu suceyar tudacel nacunot apap enasa osinuci: Nu yec rirarak usutu radel iveyo. Teperaf nura relil tietecu lobes nonicid apetu patayo memisir? Menati uye enie yis luten se ci. Rar cegen ciredi epi velal riehece higaret yon gesava. Tivu fidahem ranup, senutur gavid lagir dihi orucu ya. La nasite pirop. Curere pusu pori nav corir te fod cah! Aranite atiriset luy yihelom zofacec ma relut vekom mesel tel. Opiso lucecon nilemic eseniemir: Roru sosuzel datode cesela setol ceneret neheh! Ru car inobal! Rirulih ded livenat deciti ayacilex ba nelin bu? Waniyoc fitulo gar ribe. Mas tonah esuhie riene: Ro milierat pec ze inus lite. Yisetid de ininod esecici! Cal pudeled lula bacasic elunew ke cituxug tivie ecewivu sapeba. Ile enek vacu gesuro sarocac.
            </p>
          </div>
        </div>
        <div id="projects">
          <div id="card-container">
          <h1 className="gold">
            Projects
          </h1>
            <SimpleCard title='Friendr' description='Tinder-like app for platonic relationships.' url='https://github.com/zhime/Friendr'></SimpleCard>
            <SimpleCard title='Friendr' description='Tinder-like app for platonic relationships.' url='https://github.com/zhime/Friendr'></SimpleCard>
            <SimpleCard title='Friendr' description='Tinder-like app for platonic relationships.' url='https://github.com/zhime/Friendr'></SimpleCard>
            <SimpleCard title='Friendr' description='Tinder-like app for platonic relationships.' url='https://github.com/zhime/Friendr'></SimpleCard>
            <SimpleCard title='Friendr' description='Tinder-like app for platonic relationships.' url='https://github.com/zhime/Friendr'></SimpleCard>
            <SimpleCard title='Friendr' description='Tinder-like app for platonic relationships.' url='https://github.com/zhime/Friendr'></SimpleCard>
            <SimpleCard title='Friendr' description='Tinder-like app for platonic relationships.' url='https://github.com/zhime/Friendr'></SimpleCard>
          </div>
        </div>
        <div id="skills">
          <h1 className="gold">
            Skills
          </h1>
        </div>
        <div id="contact">
          <h1 className="gold">
            Contact Me
          </h1>
        </div>
      </div>

    )
  }
}

export default Page;
