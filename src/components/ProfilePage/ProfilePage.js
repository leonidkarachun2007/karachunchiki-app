import './ProfilePage.css';

export function ProfilePage () {
  return <div className="ProfilePage">
    <div id='container_profile'>
    <div className='profile'>
    <img src='./image.png' alt='image' />
    <div className='text1'>
    <div className='text2'>
    <p className='level'>Level</p>
    <p className='eighteen'>18</p>
    </div>
    <h1 className='nickname'>Nickname_320</h1>
    </div>
    </div>
    <div className='results'>
    <div className='result'>
      <p className='result_text1'>Games</p>
      <p className='result_text2'>48</p>
    </div>
        <div className='result'>
      <p className='result_text1'>Achievements</p>
      <p className='result_text2'>304</p>
    </div>
    </div>
    <div className='icons'>
    <img src='./weui_add-friends-filled.png' alt='add'/>
    <img src='./material-symbols_block.png' alt='block'/>
    </div>
    </div>

    <div id='container_profile2'>
      <h1 className='achievements'>Achievements</h1>
      <div className='achievements_cards'>
        <div className='achievements_card'>
          <img src='./card1.png' alt='Hard achievement'/>
          <p className='achievements_text1'>Hard achievement</p>
          <p className='achievements_text2'>Completed by 0.5%</p>
        </div>

        <div className='achievements_card'>
          <img src='./card2.png' alt='Hard achievement'/>
          <p className='achievements_text1'>First steps</p>
          <p className='achievements_text2'>Completed by 90%</p>
        </div>

        <div className='achievements_card'>
          <img src='./card3.png' alt='Hard achievement'/>
          <p className='achievements_text1'>Going forward</p>
          <p className='achievements_text2'>Completed by 70%</p>
        </div>

        <div className='achievements_card'>
          <img src='./card4.png' alt='Hard achievement'/>
          <p className='achievements_text1'>Collect all the “Bags o...</p>
          <p className='achievements_text2'>Completed by 7%</p>
        </div>

        <div className='achievements_card'>
          <img src='./card5.png' alt='Hard achievement'/>
          <p className='achievements_text1'>Complete your first ba...</p>
          <p className='achievements_text2'>Completed by 60%</p>
        </div>

        <div className='achievements_card'>
          <img src='./card6.png' alt='Hard achievement'/>
          <p className='achievements_text1'>Final boss</p>
          <p className='achievements_text2'>Completed by 10%</p>
        </div>
      </div>

      <div className='show_more'>
      <p>Show more</p>
      <img src='./tabler-icon-arrow-narrow-right.png' alt='arrow'/>
    </div>
    </div>
    <div id='container_profile3'>
      <h1 className='game_collection'>Game collection</h1>
    
    <div className='game_collection_cards1'>
    <div className='game_collection_cards2'>
      <div className='game_collection_card'>
        <img src='./tinyrogues.png' alt='Tiny Rogues'/>
        <div className='game_collection_into_card'>
          <div className='game_collection_result1'>
        <h2>Tiny Rogues</h2>
        <div className='game_collection_icons'>
          <img src='./icon-of-tinyrogues1.png' alt='icon of Tiny Rogues1'/>
          <img src='./icon-of-tinyrogues2.png' alt='icon of Tiny Rogues2'/>
          <img src='./icon-of-tinyrogues3.png' alt='icon of Tiny Rogues3'/>
        </div>
        <div>
          <p>Completed: 70%</p>
          <div className='slider'>
            <div className='slider_active'></div>
          </div>
        </div>
        </div>
        <div className='game_collection_result2'>
          <p>53 hours played on record</p>
          <p style={{marginLeft: '17px'}}>Last played: 3 days ago</p>
        </div>
        </div>
      </div>

            <div className='game_collection_card'>
        <img src='./hades.png' alt='Hades'/>
        <div className='game_collection_into_card'>
          <div className='game_collection_result1'>
        <h2>Hades</h2>
        <div className='game_collection_icons'>
          <img src='./icon-of-hades1.png' alt='icon of Tiny Rogues1'/>
          <img src='./icon-of-hades2.png' alt='icon of Tiny Rogues2'/>
          <img src='./icon-of-hades3.png' alt='icon of Tiny Rogues3'/>
        </div>
        <div>
          <p>Completed: 20%</p>
          <div className='slider'>
            <div className='slider_active' style={{width: '40px'}}></div>
          </div>
        </div>
        </div>
        <div className='game_collection_result2'>
          <p>20 hours played on record</p>
          <p style={{marginLeft: '17px'}}>Last played: 6 days ago</p>
        </div>
        </div>
      </div>


    </div>

        <div className='game_collection_cards2'>
      <div className='game_collection_card'>
        <img src='./mordhau.png' alt='Mordhau'/>
        <div className='game_collection_into_card'>
          <div className='game_collection_result1'>
        <h2>Mordhau</h2>
        <div className='game_collection_icons'>
          <img src='./icon-of-mordhau1.png' alt='icon of Tiny Rogues1'/>
          <img src='./icon-of-mordhau2.png' alt='icon of Tiny Rogues2'/>
          <img src='./icon-of-mordhau3.png' alt='icon of Tiny Rogues3'/>
        </div>
        <div>
          <p>Completed: 45%</p>
          <div className='slider'>
            <div className='slider_active' style={{width: '93px'}}></div>
          </div>
        </div>
        </div>
        <div className='game_collection_result2'>
          <p>73 hours played on record</p>
          <p style={{marginLeft: '17px'}}>Last played: 7 days ago</p>
        </div>
        </div>
      </div>

            <div className='game_collection_card'>
        <img src='./teamfotress2.png' alt='Team Fotress 2'/>
        <div className='game_collection_into_card' style={{gap: '150px'}}>
          <div className='game_collection_result1'>
        <h2>Team Fotress 2</h2>
        <div className='game_collection_icons'>
          <img src='./icon-of-teamfotress2-1.png' alt='icon of Tiny Rogues1'/>
          <img src='./icon-of-teamfotress2-2.png' alt='icon of Tiny Rogues2'/>
          <img src='./icon-of-teamfotress2-3.png' alt='icon of Tiny Rogues3'/>
        </div>
        <div>
          <p>Completed: 20%</p>
          <div className='slider'>
            <div className='slider_active' style={{width: '40px'}}></div>
          </div>
        </div>
        </div>
        <div className='game_collection_result2'>
          <p>450 hours played on record</p>
          <p style={{marginLeft: '26px'}}>Last played: 9 days ago</p>
        </div>
        </div>
      </div>


    </div>

    

            <div className='game_collection_cards2'>
      <div className='game_collection_card'>
        <img src='./tboir.png' alt='Mordhau'/>
        <div className='game_collection_into_card' style={{gap: '42px'}}>
          <div className='game_collection_result1'>
        <h2 style={{width: '318px'}}>The Binding Of Isaac Rebirth</h2>
        <div className='game_collection_icons'>
          <img src='./icon-of-tboir1.png' alt='icon of Tiny Rogues1'/>
          <img src='./icon-of-tboir2.png' alt='icon of Tiny Rogues2'/>
          <img src='./icon-of-tboir3.png' alt='icon of Tiny Rogues3'/>
        </div>
        <div>
          <p>Completed: 23%</p>
          <div className='slider'>
            <div className='slider_active' style={{width: '45px'}}></div>
          </div>
        </div>
        </div>
        <div className='game_collection_result2'>
          <p>90 hours played on record</p>
          <p style={{marginLeft: '11px'}}>Last played: 15 days ago</p>
        </div>
        </div>
      </div>

            <div className='game_collection_card'>
        <img src='./marvelrivals.png' alt='Marvel Rivals'/>
        <div className='game_collection_into_card' style={{gap: '150px'}}>
          <div className='game_collection_result1'>
        <h2>Marvel Rivals</h2>
        <div className='game_collection_icons'>
          <img src='./icon-of-marvelrivals1.png' alt='icon of Tiny Rogues1'/>
          <img src='./icon-of-marvelrivals2.png' alt='icon of Tiny Rogues2'/>
          <img src='./icon-of-marvelrivals3.png' alt='icon of Tiny Rogues3'/>
        </div>
        <div>
          <p>Completed: 100%</p>
          <div className='slider'>
            <div className='slider_active' style={{width: '197px', borderRadius: '100px', backgroundColor: '#7BC74D'}}></div>
          </div>
        </div>
        </div>
        <div className='game_collection_result2'>
          <p>500 hours played on record</p>
          <p style={{marginLeft: '18px'}}>Last played: 20 days ago</p>
        </div>
        </div>
      </div>


    </div>

    </div>
    
    </div>

    <div id='container_profile4'>
      <div className='previous'>
        <img src='./tabler-icon-chevron-left.png' alt='arrow'/>
        <p>Previous</p>
      </div>

      <div className='numbers'>
        <p style={{color: '#7BC74D'}}>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
        <p>...</p>
        <p>20</p>
      </div>

      <div className='next'>
        <p>Next</p>
        <img src='./tabler-icon-chevron-right.png' alt='arrow'/>
      </div>
    </div>

  </div>

}

export default ProfilePage;
