import "./globals.css";

const machines = [
  {
    model: "730",
    type: "ARTICULATED TRUCK",
    payload: "28 t",
    engine: "Cat C13A",
    detail: "Built for changing ground conditions, tighter jobsites and long hauling cycles.",
    image: "https://s7d2.scene7.com/is/image/Caterpillar/CM20180430-18634-52501",
    href: "https://www.cat.com/en_ID/products/new/equipment/articulated-trucks/three-axle-articulated-trucks/129440.html",
  },
  {
    model: "770",
    type: "OFF-HIGHWAY TRUCK",
    payload: "38.6 t",
    engine: "Cat C15 ACERT",
    detail: "A rigid-frame hauler for quarry, aggregate and demanding construction applications.",
    image: "https://s7d2.scene7.com/is/image/Caterpillar/C207417",
    href: "https://www.cat.com/en_ID/products/new/equipment/off-highway-trucks/off-highway-trucks/122081.html",
  },
  {
    model: "772",
    type: "OFF-HIGHWAY TRUCK",
    payload: "46.8 t",
    engine: "Cat C18 ACERT",
    detail: "Designed to move more material per cycle with practical service access.",
    image: "https://s7d2.scene7.com/is/image/Caterpillar/C207415",
    href: "https://www.cat.com/en_ID/products/new/equipment/off-highway-trucks/off-highway-trucks/121380.html",
  },
  {
    model: "793",
    type: "MINING TRUCK",
    payload: "240 t",
    engine: "Cat C175-16",
    detail: "A high-capacity mining platform engineered for large-scale material movement.",
    image: "https://media.sandhills.com/img.axd?c=True&checksum=zIFKL3FI%2F%2FJf2eYA4oFA291mX6w7DW%2B6&ext=&h=0&id=8002681817&lp=8&p=&rt=0&rwl=False&sz=Max&t=&w=0&wid=&wt=False",
    href: "https://www.cat.com/en_ID/products/new/equipment/off-highway-trucks/mining-trucks/116620.html",
  },
  {
    model: "797F",
    type: "ULTRA-CLASS MINING TRUCK",
    payload: "363 t",
    engine: "Cat C175-20",
    detail: "A flagship haul truck built for high-volume mining operations and demanding haul roads.",
    image: "https://s7d2.scene7.com/is/image/Caterpillar/CM20260629-be582-bcc7d",
    href: "https://www.cat.com/en_ID/products/new/equipment/off-highway-trucks/mining-trucks/18093014.html",
  },
];

const applications = [
  ["01", "Construction", "Move earth, rock and aggregate across large sites, from early excavation to final grading."],
  ["02", "Mining", "Support continuous hauling cycles between loading areas, haul roads and dump locations."],
  ["03", "Quarry & aggregates", "Transport blasted rock and processed material in demanding, repetitive cycles."],
  ["04", "Infrastructure", "Help build the roads, rail corridors, dams and public works that connect communities."],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="CAT home">
          <span className="brand-mark">CAT<span className="brand-triangle">▲</span></span>
          <span className="brand-caption">CATERPILLAR<br />TRUCKS</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#lineup">Truck lineup</a>
          <a href="#engineering">Engineering</a>
          <a href="#technology">Technology</a>
          <a href="#applications">Applications</a>
        </nav>
        <a className="header-link" href="https://www.cat.com/en_ID.html" target="_blank" rel="noreferrer">CAT.COM <span>↗</span></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-image" role="img" aria-label="Large yellow Caterpillar mining haul truck at a mine site" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow light">CATERPILLAR / HAULING SYSTEMS / 2026</p>
          <h1>BUILT TO<br /><em>MOVE</em><br />THE EARTH.</h1>
          <div className="hero-bottom">
            <p>From demanding construction sites to the world’s largest mines, Cat trucks move material that moves progress.</p>
            <a className="circle-link" href="#lineup" aria-label="Explore the truck lineup">↓</a>
          </div>
        </div>
        <div className="hero-index">01 <span>/</span> 09</div>
        <div className="hero-side-label">POWER IN EVERY CYCLE</div>
      </section>

      <section className="intro section-pad">
        <div className="section-kicker"><span>01 / THE BIG PICTURE</span><span>ENGINEERED FOR THE LONG HAUL</span></div>
        <div className="intro-grid">
          <h2>THE WORK IS<br />BIGGER THAN<br /><em>THE MACHINE.</em></h2>
          <div className="intro-copy">
            <p className="lead">Every load has a destination. Every cycle has a cost. Every machine has a job to do.</p>
            <p>Caterpillar designs hauling equipment for the people and operations behind construction, mining and infrastructure. The truck is one part of a wider system: loading tools, haul roads, operators, maintenance teams and digital insights working together.</p>
            <a className="text-link" href="https://www.cat.com/en_ID/products/new/equipment/off-highway-trucks.html" target="_blank" rel="noreferrer">EXPLORE CAT TRUCKS <span>↗</span></a>
          </div>
        </div>
        <div className="stat-strip">
          <div><strong>300+</strong><span>PRODUCT TYPES ACROSS CAT’S EQUIPMENT PORTFOLIO</span></div>
          <div><strong>363 t</strong><span>797F NOMINAL RATED PAYLOAD</span></div>
          <div><strong>4,000 hp</strong><span>797F GROSS ENGINE POWER</span></div>
          <p>Figures shown are model-specific published specifications. Machine configuration and regional availability vary.</p>
        </div>
      </section>

      <section className="category-section">
        <div className="category-photo" />
        <div className="category-copy">
          <p className="eyebrow">02 / FIND THE RIGHT HAULER</p>
          <h2>DIFFERENT<br />TERRAINS.<br /><em>DIFFERENT TOOLS.</em></h2>
          <p>Not every jobsite asks for the same kind of truck. Cat’s hauling range includes articulated trucks for variable terrain, rigid off-highway trucks for construction and quarry work, and high-capacity mining trucks for large production sites.</p>
          <div className="category-list">
            <div><b>01</b><span>ARTICULATED TRUCKS</span><small>Flexible movement across uneven ground</small></div>
            <div><b>02</b><span>OFF-HIGHWAY TRUCKS</span><small>Rigid-frame hauling for construction and quarry</small></div>
            <div><b>03</b><span>MINING TRUCKS</span><small>High-volume production hauling</small></div>
          </div>
        </div>
      </section>

      <section className="lineup section-pad" id="lineup">
        <div className="section-kicker"><span>03 / THE LINEUP</span><span>SELECTED CAT HAUL TRUCKS</span></div>
        <div className="lineup-heading">
          <h2>THE RIGHT SIZE<br />FOR THE <em>JOB.</em></h2>
          <p>Explore a selection of Cat haul trucks, from articulated machines for active jobsites to ultra-class mining trucks built for high-volume operations.</p>
        </div>
        <div className="machine-grid">
          {machines.map((machine, index) => (
            <article className={`machine-card ${index === 4 ? "feature-card" : ""}`} key={machine.model}>
              <a href={machine.href} target="_blank" rel="noreferrer" className="machine-image">
                <img src={machine.image} alt={`Caterpillar ${machine.model} haul truck`} loading="lazy" />
                <span className="image-number">0{index + 1}</span>
                <span className="image-arrow">↗</span>
              </a>
              <div className="machine-meta"><span>{machine.type}</span><span>CAT®</span></div>
              <div className="machine-title"><h3>{machine.model}</h3><span>{machine.payload}</span></div>
              <p>{machine.detail}</p>
              <div className="machine-spec"><span>ENGINE</span><b>{machine.engine}</b><span>RATED PAYLOAD</span><b>{machine.payload}</b></div>
              <a className="text-link" href={machine.href} target="_blank" rel="noreferrer">VIEW MODEL <span>↗</span></a>
            </article>
          ))}
        </div>
        <p className="fine-print">Specifications are indicative published values for referenced models. Confirm current specifications, configuration and availability with an authorized Cat dealer.</p>
      </section>

      <section className="engineering" id="engineering">
        <div className="engineering-image" />
        <div className="engineering-content">
          <p className="eyebrow light">04 / ENGINEERING THAT EARNS ITS KEEP</p>
          <h2>BUILT AROUND<br />THE <em>WORK.</em></h2>
          <p className="engineering-lead">A haul truck is more than an engine and a dump body. It is a connected set of systems designed to carry, control and repeat.</p>
          <div className="engineering-points">
            <div><span>01</span><div><h3>POWERTRAIN</h3><p>Engine, transmission and torque delivery are matched to the application to support productive hauling cycles.</p></div></div>
            <div><span>02</span><div><h3>STRUCTURE & BODY</h3><p>Frame and body options are selected around material type, loading conditions and the demands of the haul route.</p></div></div>
            <div><span>03</span><div><h3>BRAKING & CONTROL</h3><p>Retarding and braking systems help operators manage speed and machine control on working grades.</p></div></div>
            <div><span>04</span><div><h3>SERVICE ACCESS</h3><p>Grouped service points and monitoring information can help maintenance teams plan inspections and reduce avoidable downtime.</p></div></div>
          </div>
        </div>
      </section>

      <section className="technology section-pad" id="technology">
        <div className="section-kicker"><span>05 / CONNECTED OPERATIONS</span><span>DATA WITH A PURPOSE</span></div>
        <div className="tech-grid">
          <div>
            <p className="eyebrow">MACHINE + PEOPLE + INFORMATION</p>
            <h2>SEE THE<br />WHOLE <em>OPERATION.</em></h2>
            <p className="lead">Digital tools turn machine data into a clearer picture of what is happening across a fleet.</p>
          </div>
          <div className="tech-copy">
            <p>Cat technology solutions can help teams understand machine location, utilization, health and production. Depending on equipment and subscriptions, platforms such as VisionLink and Cat MineStar solutions support fleet visibility and operational decisions.</p>
            <div className="tech-feature"><span>01</span><div><h3>PAYLOAD INFORMATION</h3><p>Payload systems can help operators and loading teams monitor load status and production trends.</p></div></div>
            <div className="tech-feature"><span>02</span><div><h3>FLEET VISIBILITY</h3><p>Connected fleet information helps managers review location, utilization and machine health.</p></div></div>
            <div className="tech-feature"><span>03</span><div><h3>SAFETY SUPPORT</h3><p>Camera, radar and operator-assist technologies can improve awareness around large machines.</p></div></div>
            <a className="text-link" href="https://www.cat.com/en_ID/products/new/technology.html" target="_blank" rel="noreferrer">EXPLORE CAT TECHNOLOGY <span>↗</span></a>
          </div>
        </div>
      </section>

      <section className="applications section-pad" id="applications">
        <div className="section-kicker"><span>06 / WHERE THE WORK HAPPENS</span><span>ONE FLEET. MANY CHALLENGES.</span></div>
        <div className="applications-heading"><h2>MADE FOR<br />THE <em>GROUND GAME.</em></h2><p>Hauling requirements change with the material, terrain, distance and scale of each operation.</p></div>
        <div className="application-grid">
          {applications.map(([number, title, description], i) => (
            <article className={`application-card app-${i + 1}`} key={title}>
              <span>{number}</span><div><h3>{title}</h3><p>{description}</p></div><b>↗</b>
            </article>
          ))}
        </div>
      </section>

      <section className="people">
        <div className="people-image" />
        <div className="people-copy">
          <p className="eyebrow light">07 / PEOPLE AT THE CENTRE</p>
          <h2>BIG MACHINES.<br /><em>HUMAN DECISIONS.</em></h2>
          <p>Behind every hauling cycle are operators reading the ground, technicians maintaining equipment, planners coordinating production and safety teams protecting the site.</p>
          <p>Technology matters most when it supports people: giving teams better information, helping them anticipate issues and making complex operations easier to understand.</p>
          <a className="text-link light-link" href="https://www.cat.com/en_ID.html" target="_blank" rel="noreferrer">DISCOVER THE CAT APPROACH <span>↗</span></a>
        </div>
      </section>

      <section className="closing section-pad">
        <p className="eyebrow">08 / THE NEXT LOAD STARTS HERE</p>
        <h2>READY FOR<br />WHAT'S <em>NEXT?</em></h2>
        <p>Explore the Cat truck range, compare machine specifications and connect with an authorized dealer for application-specific guidance.</p>
        <div className="closing-actions">
          <a className="button-primary" href="https://www.cat.com/en_ID/products/new/equipment/off-highway-trucks.html" target="_blank" rel="noreferrer">EXPLORE TRUCKS <span>↗</span></a>
          <a className="button-secondary" href="https://www.cat.com/en_ID/support/dealer-locator.html" target="_blank" rel="noreferrer">FIND A CAT DEALER <span>↗</span></a>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-top">
          <a className="brand footer-brand" href="#top"><span className="brand-mark">CAT<span className="brand-triangle">▲</span></span><span className="brand-caption">CATERPILLAR<br />TRUCKS</span></a>
          <p>BUILT FOR THE WORK<br />THAT MOVES THE WORLD.</p>
          <a className="back-top" href="#top">BACK TO TOP ↑</a>
        </div>
        <div className="footer-bottom"><span>EDITORIAL CONCEPT WEBSITE · 2026</span><span>CAT AND CATERPILLAR ARE TRADEMARKS OF CATERPILLAR INC.</span><span><a href="https://www.cat.com/" target="_blank" rel="noreferrer">OFFICIAL CAT WEBSITE ↗</a></span></div>
        <p className="disclaimer">Independent concept presentation for informational and design purposes. Not an official Caterpillar website. Product names, trademarks and specifications belong to their respective owners. Images are externally hosted and subject to their owners' terms.</p>
      </footer>
    </main>
  );
}
