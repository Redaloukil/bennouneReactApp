import React from 'react';
import '../../App.css';



const Home = () => {
    return(
        <header>
        <div id="Home" className="text-center">
        <div className="container">
            <div id="description">
                <h1>Bennoune is expensive this days</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda suscipit consectetur explicabo blanditiis ut laboriosam, est provident, enim quos optio laudantium ducimus error tenetur veniam perferendis pariatur facere, quidem doloremque!</p>
            
            </div>
            <br/>
            
            <div id="search-bennoune">
                <form class="form-inline col-sm-12">
                <button class="btn btn-outline-success button-search col-sm-2" type="submit">Search</button>
                <input class="form-control input-search col-sm-10" type="search" placeholder="new poeple are in the stock.." aria-label="Search"/>
                </form>    
            </div>
            <br/><br/><br/><br/><br/><br/>
            <div class="row">
                <div class="col-sm-3">
                    <div class="promo">
                    <i class="fa fa-bolt" aria-hidden="true"></i>
                    <p>hello</p>
                    </div>
                    
                </div>
                <div class="col-sm-3">
                    <div class="promo">
                    <i class="fa fa-camera-retro" aria-hidden="true"></i>
                    <p>hello</p>
                    </div>
                    
                </div>
                <div class="col-sm-3">
                    <div class="promo">
                    <i class="fa fa-female" aria-hidden="true"></i>
                    <p>hello</p>
                    </div>
                    
                </div>
                <div class="col-sm-3">
                    <div class="promo">
                    <i class="fa fa-leaf" aria-hidden="true"></i>
                    <p>hello</p>
                    </div>
                    
                </div>
            </div>

        </div>
    </div>
        </header>
        
    )
}

export default Home;