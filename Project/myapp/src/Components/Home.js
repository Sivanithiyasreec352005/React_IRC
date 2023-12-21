
import React from 'react'
import Footer from './Footer';
function Home() {
  return(
    <>
    <div class="circle-top"></div>
<div class="circle-bottom"></div>
<header>
  <div class="header-content">
    <span> <h1>Event management company</h1></span>
    <h3>PLAN ARE NOTHING PLANNING IS EVERYTHING..</h3>
  </div>
</header>
<section>
  <div class="card-top">
    <div class="card">
      <img src="https://e1.pxfuel.com/desktop-wallpaper/577/410/desktop-wallpaper-ajf-wedding-event-management-nalan-sg-event-management.jpg" alt="Alexandra Smith"/>
      <h2>Marriage Event</h2>
    </div>
    {/* <div class="card">
      <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="John Smith"/>
      <h2>John Smith</h2>
      <p>Founder and Chief Executive Officer</p>
    </div> */}
  </div>
  <div class="card">
    <img src="https://www.bambooevents.co.in/images/new/birthday10.webp" alt="Erik Longman"/>
    <h2>Birthday Event</h2>
  </div>
  <div class="card">
    <img src="https://inspiredoccasionskc.com/wp-content/uploads/2020/09/1S-Starry-Dinner.jpg" alt="Matthew Foster"/>
    <h2>Social Event</h2>
    {/* <p>Chief Sales Officer</p> */}
  </div>
  <div class="card">
    <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZXZlbnQlMjBwbGFubmluZ3xlbnwwfHwwfHx8MA%3D%3D" alt="Artur Dichter"/>
    <h2>Cultural Event</h2>
  </div>
  <div class="card">
    <img src="https://www.pingpongmoments.in/blog/wp-content/uploads/2022/07/Sports-Event-Management.png" alt="Oliver Rohlsson"/>
    <h2>Sports Event</h2>
    </div>
    </section>
    <Footer/>
    </>
    )
    }
    export default Home;
    {/* <script>
        $(".slider").owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 2000, //2000ms = 2s;
            autoplayHoverPause: true,
        });
    </script> */}
     {/* </body> */}

{/* // </html>
// import * as React from 'react';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
// export default function StandardImageList() { */}
{/* //   return (
//     <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
//       {itemData.map((item) => ( */}
{/* //         <ImageListItem key={item.img}> */}
{/* //           <img */}
             {/* srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
           src={`${item.img}?w=164&h=164&fit=crop&auto=format`}             alt={item.title}
           loading="lazy"
        />
        </ImageListItem>
      ))}
     </ImageList> */}
{/* //   ); */}
{/* // } */}
{/* // //</div>const itemData = [ */}
{/* //   { */}
{/* //     img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
//     title: 'Breakfast',
//   }, */}
//  
{/* //     img: 'https://t4.ftcdn.net/jpg/01/13/49/71/240_F_113497184_RzC3xifumQvIWkOtXOMBu0hwxEEgOybf.jpg',
//     title: 'Burger', */}
{/* //   }, */}
{/* // // 
//   // },
//   // {
//   //   img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
//   //   title: 'Hats',
//   // },
//   {
//     img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
//     title: 'Honey',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
//     title: 'Basketball',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
//     title: 'Fern',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
//     title: 'Mushrooms',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
//     title: 'Tomato basil',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
//     title: 'Sea star',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
//     title: 'Bike',
//   },
// ];
// import React from 'react'
// import { Link } from 'react-router-dom'

// function Home() {
//   return (
//     <>
//     <div>Home</div>
//     <Link to='/Login'>Login</Link>
//     </>
//   )
// }

// export default Home


// import React from 'react'

// function Home() {
//   return(
//    <>
// <div class="container">
//       <div class="navbar-header">
//         <a href="index.html" class="pull-left visible-md visible-lg">
//           <div id="logo-img" alt="Logo image"></div>
//         </a>
//         <div class="navbar-brand">
//           <a href="index.html">
//           </a>
//           <p>
//             <img src="https://usmile581.github.io/Bistro_Restaurant/images/star-k-logo.png" alt="Kosher certification"/>
//             {/* <span>Sns</span> */}
//           </p>
//         </div>
//         <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#collapsable-nav" aria-expanded="false">
//           <span class="sr-only">Toggle navigation</span>
//           <span class="icon-bar"></span>
//           <span class="icon-bar"></span>
//           <span class="icon-bar"></span>
//         </button>
//       </div>
//       <div id="collapsable-nav" class="collapse navbar-collapse">
//       </div>
//     </div>
// <div id="main-content" class="container">
//   <div class="jumbotron">
//     <img src="https://usmile581.github.io/Bistro_Restaurant/images/jumbotron_768.jpg" alt="Picture of restaurant" class="img-responsive visible-xs"/>
//   </div>
//   <div id="home-tiles" class="row">
//     <div class="col-md-4 col-sm-6 col-xs-12">
//       <a href="menu-categories.html">
//         <div id="menu-tile"><span>menu</span></div>
//       </a>
//     </div>
//     <div class="col-md-4 col-sm-6 col-xs-12">
//       <a href="single-category.html">
//         <div id="specials-tile"><span>specials</span></div>
//       </a>
//     </div>
//     <div class="col-md-4 col-sm-12 col-xs-12">
//       <a href="https://www.google.com/maps/place/La+Petite+Academy+of+Ballwin,+MO/@38.5754084,-90.5596239,17z/data=!3m1!4b1!4m5!3m4!1s0x87d8d42ef66f2903:0x535e4fff21ebf232!8m2!3d38.5754084!4d-90.5574406" target="_blank">
//         <div id="map-tile">
//           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3119.1927732981785!2d-90.55962392028465!3d38.57540837972139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d8d42ef66f2903%3A0x535e4fff21ebf232!2sLa+Petite+Academy+of+Ballwin%2C+MO!5e0!3m2!1sen!2sus!4v1485468189512" width="100%" height="250" frameborder="0" ></iframe>
//           <span>map</span>
//         </div>
//       </a>
//     </div>  
//   </div>
// </div>
// </>
//   )
// }
// export default Home