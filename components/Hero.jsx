import SearchBox from "./SearchBox";

export default function Hero() {

   const handleSearch = () => {

   }

   return (
      <section className="hero">

         <div className="hero-tag">
            ⚡ Professional Electricians On-Demand
         </div>

         <h1>
            Expert <span>Electrical</span> Services At Your Door
         </h1>

         <p>
            Book trusted, certified electricians for any electrical need. Fast, affordable, and guaranteed quality.
         </p>


         {/* <!-- SEARCH BOX --> */}
         {/* <div className="search-wrapper">
                <span className="search-icon">🔍</span>
                <input type="text" id="searchInput" className="search-input"
                    placeholder="Search services... e.g. fan, AC, wiring, CCTV" onInput={() => handleSearch(this.value)}
                    onkeydown="if(event.key==='Escape') clearSearch()" />
                <button className="search-clear" id="searchClear" onclick="clearSearch()">✕</button>
            </div> */}

         {/* <!-- SEARCH RESULTS DROPDOWN --> */}
         {/* <div className="search-results" id="searchResults"></div> */}


         <SearchBox />

         <div className="stats-bar">
            <div className="stat">
               <div className="stat-num">2500+</div>
               <div className="stat-label">Jobs Completed</div>
            </div>
            <div className="stat">
               <div className="stat-num">4.9★</div>
               <div className="stat-label">Average Rating</div>
            </div>
            <div className="stat">
               <div className="stat-num">60min</div>
               <div className="stat-label">Avg Response</div>
            </div>
            <div className="stat">
               <div className="stat-num">100%</div>
               <div className="stat-label">Certified Pros</div>
            </div>
         </div>


      </section>
   );
}