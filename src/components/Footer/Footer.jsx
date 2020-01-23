import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer class="page-footer blue darken-1">
        <div class="container">
          <div class="row">
            <div class="col l6 s12">
              <h5 class="amber-text">Buzz App</h5>
              <p class="grey-text text-lighten-4">by Alexander Perkowski</p>
            </div>
            <div class="col l4 offset-l2 s12">
              <h5 class="amber-text">Check me Out</h5>
              <ul>
                <li>
                  <a
                    class="amber-text text-darken-1 valign-wrapper"
                    href="https://github.com/perkowskialex/"
                  >
                    <img
                      class="footer-images"
                      alt="Git Hub logo"
                      src="https://i.imgur.com/81P9peo.png"
                    />{" "}
                    &nbsp;GitHub
                  </a>
                </li>
                <li>
                  <a
                    class="amber-text text-darken-1 valign-wrapper"
                    href="https://www.linkedin.com/in/alexander-perkowski/"
                  >
                    <img
                      class="footer-images"
                      alt="LinkedIn logo"
                      src="https://i.imgur.com/dyLARSr.png"
                    />{" "}
                    &nbsp;LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container">© 2020 Alexander Perkowski</div>
        </div>
      </footer>
    );
  }
}
