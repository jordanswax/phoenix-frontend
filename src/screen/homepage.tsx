import React from 'react';
import {Footer,Topbar} from '../components';
import './timeline.css';
import './style.css';
import {BaseWithChain,BlueEletric,Ice} from '../imgs/nfts/nfts';
import { useNavigate } from 'react-router-dom';
import {Dropdown,DropdownItem} from '../RainUI/dropdown/dropdown';
export default function Homepage() {
  let navigate = useNavigate();
  return (
    <>
    <Topbar/>
       
        <section className="page" id="homepage">
        
        <div className="container is-center">
            <div className="flex-content" id="homepage-content">
                
                <h3>Volcania Presents</h3>
                <h4>Perky Phoenixs!</h4>
                <h5>Invest in the Best Buisness Coming to the blockchain</h5>
                <h5>Mint Here!</h5>
                <a className="btn text-align-center" onClick={()=>{navigate('mint')}} id="to-mint">Click Here</a>

            </div>
        </div>
    </section>
    <section className="page" id="about">    
        <div className="container is-center p-5">
          <div className="pd-5">
            <h1 className="section-title text-center">About</h1>
            </div>
            <div className="flex-content w-50 is-center">
                <div className="question-wrapper">
                    <h3>Why Become A Phoenix?</h3>
                    <p>Well first, you are going to be apart of an amazing friendly community, 
                        
                    </p>
                </div>
                <div className="question-wrapper">
                    <h3>When is the casino coming out?</h3>
                    <p>Answer</p>
                </div>
                <div className="question-wrapper">
                    <h3>How much is the phoenix?</h3>
                    <p>Answer</p>
                </div>

            </div>
        </div>
    </section>
    <section className="page" id="roadmap">
        <div className="p-5">
        <h1 className="section-title text-center">RoadMap</h1>
        </div>
            <div className="timeline">
                <div className="timeline-container left">
                  <div className="content">
                    <h2>Finish Discord</h2>
                    <p>Setting up the discord, giving roles, setting up perms start advertising. Introduce some giveaways!</p>
                  </div>
                </div>
                <div className="timeline-container right">
                  <div className="content">
                    <h2>Mint Day! TBD..</h2>
                    <p>Release the nft and start the announcements about things to come and current events that will be taking place.</p>
                  </div>
                </div>
                <div className="timeline-container left">
                    <div className="content">
                    <h2>Get More Partners</h2>
                      <p>We plan to reach out to some different nft communitys ask them to take part on our journey to become to the biggest casino/buisness on the blockchain to reach out to us go to contact us</p>
                    </div>
                  </div>
                  <div className="timeline-container right">
                    <div className="content">
                    <h2>Staking Release! TBD..</h2>
                      <p>Introducing our coin $VOLC a coin collecting by staking the phoenixs!</p>
                     
                    </div>
                  </div>
                  <div className="timeline-container left">
                    <div className="content">
                    <h2>Casino Release!</h2>
                      <p>Releasing the most exciting part, the casino filled with enourmous start bonuses for holders as well as a percentage of profits back to holders, 15%.</p>
                    
                    </div>
                  </div>
                  <div className="timeline-container right">
                    <div className="content">
                    <h2>Casino Tournaments!</h2>
                      <p>With the exciting release of the casino we plan to introduce tornaments for such games on the casino, to add to the fun! with Huge Prize Pool up to 100k!</p>
                    </div>
                  </div>
                  <div className="timeline-container left">
                    <div className="content">
                      <h2>To Real Life?!?!? (Secret)</h2>
                      <p>Just Wait!</p>
                    </div>
                  </div>
                  <div className="timeline-container right">
                    <div className="content">
                      <h2>More to Come!</h2>
                      <p>Dont see it as the end, as we plan to bring Volcanias Phoenixs as the best investment possible.</p>
                    </div>
                  </div>
              </div>
        </section>
        <section className="page" id="partners">
        
        <h1 className="section-title text-center p-5">Partners</h1>
        <div className="partners-container">
        <div className="container is-center">
            
            <div className="flex-column gap-5" id="partner-column">
                <h1>Casino PartnerShips</h1>
                <p>HackSaw Gaming + 50 More</p>
            </div>
        </div>
        <div className="container is-center" >
            <div className="flex-column gap-5" id="partner-column">
            <h1>NFT PartnerShips</h1>
            <p>Soon to come!</p>
            <label>Want to partnership with us?</label>
            <a className="btn text-align-center " onClick={()=>navigate('contactus')}>Click here</a>
            </div>
        </div>
    </div>
    </section>
    <section className="page" id="Team">
        <div className="container">
            <h1 className="section-title text-center p-5">Team</h1>
            <div className="team-grid is-center p-5">
                <div className="flex-column team-member">
                    <img className="member-icon" src={BaseWithChain}/>
                    <h3>name: GucciRain</h3>
                    <h3>Role: Owner, Developer </h3>
                    <Dropdown className="btn justify-content-center" name="Socials">
                    <DropdownItem className="btn text-align-center" name="Instagram" onClick={""} />
                    <DropdownItem className="btn text-align-center" name="Twitter" onClick={""} />
                    </Dropdown> 
          
                </div>
                <div className="flex-column team-member">
                    <img className="member-icon" src={BlueEletric}/>
                    <h3>name: Spinzton</h3>
                    <h3>Role: Administratior</h3>
                    <Dropdown className="btn justify-content-center" name="Socials">
                    <DropdownItem className="btn text-align-center" name="Instagram" onClick={""} />
                    <DropdownItem className="btn text-align-center" name="Twitter" onClick={""} />
                    </Dropdown> 
                </div>
                <div className="flex-column team-member">
                    <img className="member-icon" src={Ice}/>
                    <h3>name: WetCupid</h3>
                    <h3>Role: Social Media</h3>
                    <Dropdown className="btn justify-content-center" name="Socials">
                    <DropdownItem className="btn text-align-center" name="Instagram" onClick={""} />
                    <DropdownItem className="btn text-align-center" name="Twitter" onClick={""} />
                    </Dropdown> 
                </div>
            </div>
        </div>
    </section>

        <Footer/>
    </>
  )
}
