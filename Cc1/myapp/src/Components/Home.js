import React from 'react';
const Home = () => {
    return (
        <>
        <div class="nav-bar"></div>

<section class="blokken">
</section>
        <h1>Event Management System</h1>
<section>
  <button popovertarget="some-popup" popovertargetaction="show">Wedding Parties</button>

  <button popovertarget="some-popup-lightdismiss">Birthday Parties</button>
  <button popovertarget="some-popup-lightdismiss">Social Parties</button>
  <button popovertarget="some-popup-lightdismiss">Corporate Parties</button>
</section>
<nav class="nav">
<ul>
  <li><a href="#" class="logo">
    <img src="https://t3.ftcdn.net/jpg/03/04/90/30/360_F_304903020_Norp4P6o19mbV9p7oOeNPThiNnce3ZHH.jpg"/>
    <span class="nav-item">Admin</span>
  </a></li>
  <li><a href="#">
    <i class="fas fa-menorah"></i>
    <span class="nav-item">Dashboard</span>
  </a></li>
  <li><a href="#">
    <i class="fas fa-comment"></i>
    <span class="nav-item">Message</span>
  </a></li>
  <li><a href="#">
    <i class="fas fa-database"></i>
    <span class="nav-item">Report</span>
  </a></li>
  <li><a href="#">
    <i class="fas fa-chart-bar"></i>
    <span class="nav-item">Attendance</span>
  </a></li>
  <li><a href="#">
    <i class="fas fa-cog"></i>
    <span class="nav-item">Setting</span>
  </a></li>
  <li><a href="#" class="logout">
    <i class="fas fa-sign-out-alt"></i>
    <span class="nav-item">Log out</span>
  </a></li>
</ul>
</nav>
<div id="some-popup" role="alert" popover="manual">
  <p>Hi, you entered into Wedding planner!</p>
  <button popovertarget="some-popup" popovertargetaction="hide" autofocus>Got it!</button>
</div>

<div id="some-popup-lightdismiss" role="alert" popover="manual">
  <p>Hi, you entered into Birthday Parties !</p>
  <button popovertarget="some-popup-lightdismiss" popovertargetaction="hide" autofocus>Got it!</button>

</div>


     {/* <section id="events">
                <h1 className="section-title">Events</h1>
                <div className="events-container"></div>
            </section>
            <section id="add-event">
                <h1 className="section-title">New Event</h1>
                <form className="form">
                    <input type="text" id="name" placeholder="Name" />
                    <input type="number" id="attendee" placeholder="Attendees" />
                    <textarea id="description" cols="30" rows="10" placeholder="Description..."></textarea>
                    <select id="status">
                        <option value="0">Free</option>
                        <option value="1">Paid</option>
                    </select>
                    <button className="btn btn-primary">Save</button>
                </form>
            </section> */}
        </>
    );
};

export default Home;