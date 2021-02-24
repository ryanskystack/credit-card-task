import React from 'react';


const Card = ({ name, email, id }) => {
    return (
      <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
        <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
        <div>
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
    );
  }
  
  export default Card;


  .dark-gray { color: #333333 }
.bg-washed-green { background-color: #E8FDF5 }


boarder:.br3
box-shadow:.shadow-5

hover:
<a href="#" style="background-image: url(http://mrmrs.github.io/images/0010.jpg);
      class="link mw5 dt hide-child br2 cover bg-center" ">
  <span class="white dtc v-mid w-100 h-100 child bg-black-40 pa5">
    Card title
  </span>
</a>