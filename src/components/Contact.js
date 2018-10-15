import React, {Component} from 'react';

class Contact extends Component {
  render() {


    
    return(
     <section id="contact">

<h1>Contact Me</h1>

<div class="contact-section">
<h2>Let's Keep In Touch!</h2>
<form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <label>
    <br />
    Email:
    <input type="email" name="email" />
  </label>
      <br></br>

    <textarea>  </textarea>
<br />
  <input type="submit" value="Submit" />
</form>
</div>


     </section>
    )
  }
}

export default Contact;
