<template>
  <div class="container">
    <hero-other>
      <h2>Feel Free</h2>
      <h1>Contact Us</h1>
    </hero-other>
    <div class="contact__wrapper">
      <div class="contact__form">
        <form>
          <fieldset>
            <input type="text" name="first" placeholder="First Name">
            <input type="text" name="last" placeholder="Last Name">
            <input type="email" name="email" placeholder="Your email address">
            <textarea name="message" id="" cols="30" rows="10" placeholder="Message"></textarea>
            <button type="submit">Submit</button>

          </fieldset>
        </form>
      </div>
      <div class="contact__info">
        <div class="contact__card">
            <p>Lehmann Cars</p>
            <p>Zebrzydowicka 79</p>
            <p>44-210, Rybnik</p>
            <p>tel: 32 42 22 149</p>

            <div class="icons">
                <i class="fab fa-twitter fa-4x"></i>
                <i class="fab fa-youtube fa-4x"></i>
                <i class="fab fa-facebook-square fa-4x"></i>
            </div>
        <div class="contact__map">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.3951848585843!2d18.514537015718698!3d50.09760967942838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47114f377d75ba65%3A0x9c20af0635c4ff49!2sZebrzydowicka%2079%2C%2044-210%20Rybnik!5e0!3m2!1spl!2spl!4v1614103738849!5m2!1spl!2spl" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'contact',
  }
</script>

<style lang="scss" scoped>

.contact__wrapper {
  display: flex;
    padding: 50px 0;
    align-items: stretch;


        @media screen and(max-width: 1024px){
         flex-direction: column;
        }


}

i {
  color: #555;
}

.icons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  margin: 30px auto;
  }

.contact__form {
  flex-basis: 45%;
  margin-right: 4%;
  margin-left: 1%;



        @media screen and(max-width: 1024px){
          margin: 0 0 30px;
        }

}

// .contact__map {
//   height: 724px;
//   }

.contact__card {
  text-align: center;
  width: 100%;
  height: 100%;
    box-shadow: 0 0 7px 2px rgb(207, 207, 207);
    padding: 10px;
}

.contact__info {
  flex-basis: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-left: 4%;
  margin-right: 1%;
  padding: 0 25px;

       @media screen and(max-width: 1024px){
          margin: 0;
          padding: 0;
        }
}

  fieldset {
    border: none;
    padding: 40px 40px 10px;
    box-shadow: 0 0 7px 2px rgb(207, 207, 207);
    height: 100%;
  }

  legend{
    font-size: 3rem;
  }

  input[type=text], select, input[type="email"], textarea {
  font-family: 'Montserrat', Arial, Helvetica, sans-serif;
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  outline:none;
  font-size: .9rem;
}

  textarea {
    resize: none;
  }

  form {
    display: block;
    height: 100%
  }

    button {
      display: block;
      width: 200px;
      margin: 0 auto;
      padding: 10px 40px;
      border: none;
      font-size: 1.6rem;
      border-radius: 5px;
      background: rgba(85, 85, 85, 0.8);
      color: rgba(255, 255, 255, 0.8);
      cursor: pointer;
      transition: .3s;
      outline: none;

            &:hover {
            background: rgb(85,85,85)
            }
}

</style>
