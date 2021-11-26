import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router";
import Cookies from "universal-cookie";
import Logo from "../img/logo.png";

class Registro extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "coiner2021",
      firstname: "",
      lastname: "",
      username: "",
      status: "Entrar",
      code: "",
      roles: "",
    };
  }

  inicioSesion() {
    const data = {
      ...this.state,
      username: `${this.state.firstname[0]}${this.state.lastname}`,
    };
    axios({
      method: "post",
      url: "https://coiner-2021.herokuapp.com/api/auth/signup",
      headers: {
        "Content-Type": "application/json",
      },
      data,
    })
      .then((response) => {
        const cookies = new Cookies();
        console.log("token", response);
        localStorage.setItem("token", response, JSON.stringify(response.data));
        if (response.data.message === "newToken") {
          //si rebotamos dentro del mismo sitio va este
          console.log("redireccionado");
          window.location.href = "./evento";

          //Si redirigimos va este codigo

          console.log("Session Iniciada");
          var respuesta = response.data;
          console.log(respuesta.message);

          cookies.set("message", respuesta.message, {
            path: "/",
          });
          cookies.set("username", respuesta.username, {
            path: "/",
          });

          cookies.set("roles", respuesta.roles, {
            path: "/",
          });
          cookies.set("rooms", respuesta.rooms, {
            path: "/",
          });

          const userDetails = {
            message: respuesta.message,
            roles: respuesta.roles,
          };

          const userSession = {
            username: respuesta.username,
          };

          const userRoles = {
            roles: respuesta.roles,
          };

          localStorage.setItem("userDetails", JSON.stringify(userDetails));
          localStorage.setItem("userSession", JSON.stringify(userSession));
          localStorage.setItem("userRoles", JSON.stringify(userRoles));
          alert("Gracias por registrarte");
        } else if (response.data.message === "newToken") {
          window.location.href = "./evento";
        }
      })
      .catch(function (error) {
        alert(`Favor de verificar los datos ingresado`);
        console.log("The error is : " + error);
        window.location.href = "./ups";
      });
  }

  // componentDidMount() {
  //   document.getElementById("navScr").style.display = "none";
  // }

  render() {
    return (
      <React.Fragment>
        <br />
        <img src={Logo} alt="" />
        <br />
        <section className=" registro">
          <br />

          <br />
          <div className="contenedor-form ">
            <div className="form ">
              {/* Begin Mailchimp Signup Form */}
              <link
                href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css"
                rel="stylesheet"
                type="text/css"
              />
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html:
                    "\n\t#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }\n\t/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.\n\t   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */\n",
                }}
              />
              <div id="mc_embed_signup">
                <form
                  onSubmit={(e) => this.inicioSesion()}
                  action="https://coiner.us1.list-manage.com/subscribe/post?u=37892f6a3c3f15b6ba401af59&id=744ea1621c"
                  method="post"
                  id="mc-embedded-subscribe-form"
                  name="mc-embedded-subscribe-form"
                  className="validate"
                  target="_blank"
                >
                  <div id="mc_embed_signup_scroll">
                    <div className="contenedor-titulo-form">
                      <h1>Registro</h1>
                      <h1 className="h3">
                        COINER<sup>®</sup> 2021,
                        <br />
                      </h1>
                      <h3 className="h2">Reserva la Fecha</h3>
                      <h2>NOV 25, 26 y 27 de noviembre</h2>
                      <div className="campos-req">
                        <span className="asterisk">*</span> Campos requeridos
                      </div>
                    </div>
                    <div className="mc-field-group">
                      <label htmlFor="mce-FNAME">
                        Nombre <span className="asterisk">*</span>
                      </label>
                      <input
                        type="text"
                        name="FNAME"
                        required
                        className="required"
                        id="mce-FNAME"
                        onChange={(e) =>
                          this.setState({ firstname: e.target.value })
                        }
                      />
                    </div>
                    <div className="mc-field-group">
                      <label htmlFor="mce-LNAME">
                        Apellido <span className="asterisk">*</span>
                      </label>
                      <input
                        type="text"
                        name="LNAME"
                        required
                        className="required"
                        id="mce-LNAME"
                        onChange={(e) =>
                          this.setState({ lastname: e.target.value })
                        }
                      />
                    </div>
                    <div className="mc-field-group">
                      <label htmlFor="mce-EMAIL">
                        Correo electrónico <span className="asterisk">*</span>
                      </label>
                      <input
                        type="email"
                        name="EMAIL"
                        required
                        className="required email"
                        id="mce-EMAIL"
                        onChange={(e) =>
                          this.setState({ email: e.target.value })
                        }
                      />
                    </div>
                    <div className="mc-field-group">
                      <label htmlFor="mce-ESTATE">
                        País <span className="asterisk">*</span>
                      </label>
                      <select
                        name="ESTATE"
                        required
                        className="required"
                        id="mce-ESTATE"
                      >
                        <option value />
                        <option value="United States of America">
                          United States of America
                        </option>
                        <option value="Aaland Islands">Aaland Islands</option>
                        <option value="Afghanistan">Afghanistan</option>
                        <option value="Albania">Albania</option>
                        <option value="Algeria">Algeria</option>
                        <option value="American Samoa">American Samoa</option>
                        <option value="Andorra">Andorra</option>
                        <option value="Angola">Angola</option>
                        <option value="Anguilla">Anguilla</option>
                        <option value="Antarctica">Antarctica</option>
                        <option value="Antigua And Barbuda">
                          Antigua And Barbuda
                        </option>
                        <option value="Argentina">Argentina</option>
                        <option value="Armenia">Armenia</option>
                        <option value="Aruba">Aruba</option>
                        <option value="Australia">Australia</option>
                        <option value="Austria">Austria</option>
                        <option value="Azerbaijan">Azerbaijan</option>
                        <option value="Bahamas">Bahamas</option>
                        <option value="Bahrain">Bahrain</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="Barbados">Barbados</option>
                        <option value="Belarus">Belarus</option>
                        <option value="Belgium">Belgium</option>
                        <option value="Belize">Belize</option>
                        <option value="Benin">Benin</option>
                        <option value="Bermuda">Bermuda</option>
                        <option value="Bhutan">Bhutan</option>
                        <option value="Bolivia">Bolivia</option>
                        <option value="Bonaire, Saint Eustatius and Saba">
                          Bonaire, Saint Eustatius and Saba
                        </option>
                        <option value="Bosnia and Herzegovina">
                          Bosnia and Herzegovina
                        </option>
                        <option value="Botswana">Botswana</option>
                        <option value="Bouvet Island">Bouvet Island</option>
                        <option value="Brazil">Brazil</option>
                        <option value="British Indian Ocean Territory">
                          British Indian Ocean Territory
                        </option>
                        <option value="Brunei Darussalam">
                          Brunei Darussalam
                        </option>
                        <option value="Bulgaria">Bulgaria</option>
                        <option value="Burkina Faso">Burkina Faso</option>
                        <option value="Burundi">Burundi</option>
                        <option value="Cambodia">Cambodia</option>
                        <option value="Cameroon">Cameroon</option>
                        <option value="Canada">Canada</option>
                        <option value="Cape Verde">Cape Verde</option>
                        <option value="Cayman Islands">Cayman Islands</option>
                        <option value="Central African Republic">
                          Central African Republic
                        </option>
                        <option value="Chad">Chad</option>
                        <option value="Chile">Chile</option>
                        <option value="China">China</option>
                        <option value="Christmas Island">
                          Christmas Island
                        </option>
                        <option value="Cocos (Keeling) Islands">
                          Cocos (Keeling) Islands
                        </option>
                        <option value="Colombia">Colombia</option>
                        <option value="Comoros">Comoros</option>
                        <option value="Congo">Congo</option>
                        <option value="Cook Islands">Cook Islands</option>
                        <option value="Costa Rica">Costa Rica</option>
                        <option value="Cote D'Ivoire">Cote D'Ivoire</option>
                        <option value="Croatia">Croatia</option>
                        <option value="Cuba">Cuba</option>
                        <option value="Curacao">Curacao</option>
                        <option value="Cyprus">Cyprus</option>
                        <option value="Czech Republic">Czech Republic</option>
                        <option value="Democratic Republic of the Congo">
                          Democratic Republic of the Congo
                        </option>
                        <option value="Denmark">Denmark</option>
                        <option value="Djibouti">Djibouti</option>
                        <option value="Dominica">Dominica</option>
                        <option value="Dominican Republic">
                          Dominican Republic
                        </option>
                        <option value="Ecuador">Ecuador</option>
                        <option value="Egypt">Egypt</option>
                        <option value="El Salvador">El Salvador</option>
                        <option value="Equatorial Guinea">
                          Equatorial Guinea
                        </option>
                        <option value="Eritrea">Eritrea</option>
                        <option value="Estonia">Estonia</option>
                        <option value="Ethiopia">Ethiopia</option>
                        <option value="Falkland Islands">
                          Falkland Islands
                        </option>
                        <option value="Faroe Islands">Faroe Islands</option>
                        <option value="Fiji">Fiji</option>
                        <option value="Finland">Finland</option>
                        <option value="France">France</option>
                        <option value="French Guiana">French Guiana</option>
                        <option value="French Polynesia">
                          French Polynesia
                        </option>
                        <option value="French Southern Territories">
                          French Southern Territories
                        </option>
                        <option value="Gabon">Gabon</option>
                        <option value="Gambia">Gambia</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Germany">Germany</option>
                        <option value="Ghana">Ghana</option>
                        <option value="Gibraltar">Gibraltar</option>
                        <option value="Greece">Greece</option>
                        <option value="Greenland">Greenland</option>
                        <option value="Grenada">Grenada</option>
                        <option value="Guadeloupe">Guadeloupe</option>
                        <option value="Guam">Guam</option>
                        <option value="Guatemala">Guatemala</option>
                        <option value="Guernsey">Guernsey</option>
                        <option value="Guinea">Guinea</option>
                        <option value="Guinea-Bissau">Guinea-Bissau</option>
                        <option value="Guyana">Guyana</option>
                        <option value="Haiti">Haiti</option>
                        <option value="Heard and Mc Donald Islands">
                          Heard and Mc Donald Islands
                        </option>
                        <option value="Honduras">Honduras</option>
                        <option value="Hong Kong">Hong Kong</option>
                        <option value="Hungary">Hungary</option>
                        <option value="Iceland">Iceland</option>
                        <option value="India">India</option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="Iran">Iran</option>
                        <option value="Iraq">Iraq</option>
                        <option value="Ireland">Ireland</option>
                        <option value="Isle of Man">Isle of Man</option>
                        <option value="Israel">Israel</option>
                        <option value="Italy">Italy</option>
                        <option value="Jamaica">Jamaica</option>
                        <option value="Japan">Japan</option>
                        <option value="Jersey  (Channel Islands)">
                          Jersey (Channel Islands)
                        </option>
                        <option value="Jordan">Jordan</option>
                        <option value="Kazakhstan">Kazakhstan</option>
                        <option value="Kenya">Kenya</option>
                        <option value="Kiribati">Kiribati</option>
                        <option value="Kuwait">Kuwait</option>
                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                        <option value="Lao People's Democratic Republic">
                          Lao People's Democratic Republic
                        </option>
                        <option value="Latvia">Latvia</option>
                        <option value="Lebanon">Lebanon</option>
                        <option value="Lesotho">Lesotho</option>
                        <option value="Liberia">Liberia</option>
                        <option value="Libya">Libya</option>
                        <option value="Liechtenstein">Liechtenstein</option>
                        <option value="Lithuania">Lithuania</option>
                        <option value="Luxembourg">Luxembourg</option>
                        <option value="Macau">Macau</option>
                        <option value="Macedonia">Macedonia</option>
                        <option value="Madagascar">Madagascar</option>
                        <option value="Malawi">Malawi</option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="Maldives">Maldives</option>
                        <option value="Mali">Mali</option>
                        <option value="Malta">Malta</option>
                        <option value="Marshall Islands">
                          Marshall Islands
                        </option>
                        <option value="Martinique">Martinique</option>
                        <option value="Mauritania">Mauritania</option>
                        <option value="Mauritius">Mauritius</option>
                        <option value="Mayotte">Mayotte</option>
                        <option value="Mexico">Mexico</option>
                        <option value="Micronesia, Federated States of">
                          Micronesia, Federated States of
                        </option>
                        <option value="Moldova, Republic of">
                          Moldova, Republic of
                        </option>
                        <option value="Monaco">Monaco</option>
                        <option value="Mongolia">Mongolia</option>
                        <option value="Montenegro">Montenegro</option>
                        <option value="Montserrat">Montserrat</option>
                        <option value="Morocco">Morocco</option>
                        <option value="Mozambique">Mozambique</option>
                        <option value="Myanmar">Myanmar</option>
                        <option value="Namibia">Namibia</option>
                        <option value="Nauru">Nauru</option>
                        <option value="Nepal">Nepal</option>
                        <option value="Netherlands">Netherlands</option>
                        <option value="Netherlands Antilles">
                          Netherlands Antilles
                        </option>
                        <option value="New Caledonia">New Caledonia</option>
                        <option value="New Zealand">New Zealand</option>
                        <option value="Nicaragua">Nicaragua</option>
                        <option value="Niger">Niger</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="Niue">Niue</option>
                        <option value="Norfolk Island">Norfolk Island</option>
                        <option value="North Korea">North Korea</option>
                        <option value="Northern Mariana Islands">
                          Northern Mariana Islands
                        </option>
                        <option value="Norway">Norway</option>
                        <option value="Oman">Oman</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="Palau">Palau</option>
                        <option value="Palestine">Palestine</option>
                        <option value="Panama">Panama</option>
                        <option value="Papua New Guinea">
                          Papua New Guinea
                        </option>
                        <option value="Paraguay">Paraguay</option>
                        <option value="Peru">Peru</option>
                        <option value="Philippines">Philippines</option>
                        <option value="Pitcairn">Pitcairn</option>
                        <option value="Poland">Poland</option>
                        <option value="Portugal">Portugal</option>
                        <option value="Puerto Rico">Puerto Rico</option>
                        <option value="Qatar">Qatar</option>
                        <option value="Republic of Kosovo">
                          Republic of Kosovo
                        </option>
                        <option value="Reunion">Reunion</option>
                        <option value="Romania">Romania</option>
                        <option value="Russia">Russia</option>
                        <option value="Rwanda">Rwanda</option>
                        <option value="Saint Kitts and Nevis">
                          Saint Kitts and Nevis
                        </option>
                        <option value="Saint Lucia">Saint Lucia</option>
                        <option value="Saint Martin">Saint Martin</option>
                        <option value="Saint Vincent and the Grenadines">
                          Saint Vincent and the Grenadines
                        </option>
                        <option value="Samoa (Independent)">
                          Samoa (Independent)
                        </option>
                        <option value="San Marino">San Marino</option>
                        <option value="Sao Tome and Principe">
                          Sao Tome and Principe
                        </option>
                        <option value="Saudi Arabia">Saudi Arabia</option>
                        <option value="Senegal">Senegal</option>
                        <option value="Serbia">Serbia</option>
                        <option value="Seychelles">Seychelles</option>
                        <option value="Sierra Leone">Sierra Leone</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Sint Maarten">Sint Maarten</option>
                        <option value="Slovakia">Slovakia</option>
                        <option value="Slovenia">Slovenia</option>
                        <option value="Solomon Islands">Solomon Islands</option>
                        <option value="Somalia">Somalia</option>
                        <option value="South Africa">South Africa</option>
                        <option value="South Georgia and the South Sandwich Islands">
                          South Georgia and the South Sandwich Islands
                        </option>
                        <option value="South Korea">South Korea</option>
                        <option value="South Sudan">South Sudan</option>
                        <option value="Spain">Spain</option>
                        <option value="Sri Lanka">Sri Lanka</option>
                        <option value="St. Helena">St. Helena</option>
                        <option value="St. Pierre and Miquelon">
                          St. Pierre and Miquelon
                        </option>
                        <option value="Sudan">Sudan</option>
                        <option value="Suriname">Suriname</option>
                        <option value="Svalbard and Jan Mayen Islands">
                          Svalbard and Jan Mayen Islands
                        </option>
                        <option value="Swaziland">Swaziland</option>
                        <option value="Sweden">Sweden</option>
                        <option value="Switzerland">Switzerland</option>
                        <option value="Syria">Syria</option>
                        <option value="Taiwan">Taiwan</option>
                        <option value="Tajikistan">Tajikistan</option>
                        <option value="Tanzania">Tanzania</option>
                        <option value="Thailand">Thailand</option>
                        <option value="Timor-Leste">Timor-Leste</option>
                        <option value="Togo">Togo</option>
                        <option value="Tokelau">Tokelau</option>
                        <option value="Tonga">Tonga</option>
                        <option value="Trinidad and Tobago">
                          Trinidad and Tobago
                        </option>
                        <option value="Tunisia">Tunisia</option>
                        <option value="Turkey">Turkey</option>
                        <option value="Turkmenistan">Turkmenistan</option>
                        <option value="Turks & Caicos Islands">
                          Turks &amp; Caicos Islands
                        </option>
                        <option value="Turks and Caicos Islands">
                          Turks and Caicos Islands
                        </option>
                        <option value="Tuvalu">Tuvalu</option>
                        <option value="Uganda">Uganda</option>
                        <option value="Ukraine">Ukraine</option>
                        <option value="United Arab Emirates">
                          United Arab Emirates
                        </option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Uruguay">Uruguay</option>
                        <option value="USA Minor Outlying Islands">
                          USA Minor Outlying Islands
                        </option>
                        <option value="Uzbekistan">Uzbekistan</option>
                        <option value="Vanuatu">Vanuatu</option>
                        <option value="Vatican City State (Holy See)">
                          Vatican City State (Holy See)
                        </option>
                        <option value="Venezuela">Venezuela</option>
                        <option value="Vietnam">Vietnam</option>
                        <option value="Virgin Islands (British)">
                          Virgin Islands (British)
                        </option>
                        <option value="Virgin Islands (U.S.)">
                          Virgin Islands (U.S.)
                        </option>
                        <option value="Wallis and Futuna Islands">
                          Wallis and Futuna Islands
                        </option>
                        <option value="Western Sahara">Western Sahara</option>
                        <option value="Yemen">Yemen</option>
                        <option value="Zambia">Zambia</option>
                        <option value="Zimbabwe">Zimbabwe</option>
                      </select>
                    </div>
                    <div className="mc-field-group">
                      <label htmlFor="mce-ZONE">
                        Estado <span className="asterisk">*</span>
                      </label>
                      <input
                        type="text"
                        name="ZONE"
                        required
                        className="required"
                        id="mce-ZONE"
                      />
                    </div>
                    <div className="mc-field-group size1of2">
                      <label htmlFor="mce-BIRTHDAY-month">
                        Fecha de nacimiento <span className="asterisk">*</span>
                      </label>
                      <div className="datefield">
                        <span className="subfield dayfield">
                          <input
                            className="birthday required"
                            type="text"
                            pattern="[0-9]*"
                            placeholder="DD"
                            size={2}
                            maxLength={2}
                            name="BIRTHDAY[day]"
                            id="mce-BIRTHDAY-day"
                          />
                        </span>{" "}
                        /
                        <span className="subfield monthfield">
                          <input
                            className="birthday required"
                            type="text"
                            pattern="[0-9]*"
                            placeholder="MM"
                            size={2}
                            maxLength={2}
                            name="BIRTHDAY[month]"
                            id="mce-BIRTHDAY-month"
                          />
                        </span>
                        <span className="small-meta nowrap">( dd / mm )</span>
                      </div>
                    </div>
                    <div className="mc-field-group input-group">
                      <strong>
                        Ocupación <span className="asterisk">*</span>
                      </strong>
                      <ul>
                        <li>
                          <input
                            type="radio"
                            defaultValue="Estudiante"
                            name="JOB"
                            id="mce-JOB-0"
                          />
                          <label htmlFor="mce-JOB-0">Estudiante</label>
                        </li>
                        <li>
                          <input
                            type="radio"
                            defaultValue="QFB"
                            name="JOB"
                            id="mce-JOB-1"
                          />
                          <label htmlFor="mce-JOB-1">QFB</label>
                        </li>
                        <li>
                          <input
                            type="radio"
                            defaultValue="Enfermería"
                            name="JOB"
                            id="mce-JOB-2"
                          />
                          <label htmlFor="mce-JOB-2">Enfermería</label>
                        </li>
                        <li>
                          <input
                            type="radio"
                            defaultValue="Medicina"
                            name="JOB"
                            id="mce-JOB-3"
                          />
                          <label htmlFor="mce-JOB-3">Medicina</label>
                        </li>
                        <li>
                          <input
                            type="radio"
                            defaultValue="Otro"
                            name="JOB"
                            id="mce-JOB-4"
                          />
                          <label htmlFor="mce-JOB-4">Otro</label>
                        </li>
                      </ul>
                    </div>
                    <div className="mc-field-group">
                      <label htmlFor="mce-CED">
                        En caso de escribir otro, indicar cual{" "}
                      </label>
                      <input type="text" name="CED" className id="mce-CED" />
                    </div>
                    <div className="mc-field-group">
                      <label htmlFor="mce-MMERGE10">Cédula profesional </label>
                      <input
                        type="text"
                        name="MMERGE10"
                        className
                        id="mce-MMERGE10"
                      />
                    </div>
                    <div className="mc-field-group">
                      <label htmlFor="mce-ESPEC">
                        Especialidad <span className="asterisk">*</span>
                      </label>
                      <input
                        type="text"
                        name="ESPEC"
                        required
                        className="required"
                        id="mce-ESPEC"
                      />
                    </div>
                    <div className="mc-field-group">
                      <label htmlFor="mce-INST">
                        Institución <span className="asterisk">*</span>
                      </label>
                      <input
                        type="text"
                        name="INST"
                        required
                        className="required"
                        id="mce-INST"
                      />
                    </div>
                    <div className="mc-field-group input-group">
                      <strong>
                        Términos y condiciones y Aviso de Privacidad{" "}
                      </strong>
                      <ul>
                        <li>
                          <input
                            type="checkbox"
                            defaultValue={1}
                            name="group[380866][1]"
                            id="mce-group[380866]-380866-0"
                          />
                          <label htmlFor="mce-group[380866]-380866-0">
                            Acepto
                          </label>
                        </li>
                        <li>
                          <a href="https://coiner.org/aviso_de_privacidad">
                            Leer Aviso de Privacidad
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div id="mce-responses" className="clear">
                      <div
                        className="response"
                        id="mce-error-response"
                        style={{ display: "none" }}
                      />
                      <div
                        className="response"
                        id="mce-success-response"
                        style={{ display: "none" }}
                      />
                    </div>{" "}
                    {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                    <div
                      style={{ position: "absolute", left: "-5000px" }}
                      aria-hidden="true"
                    >
                      <input
                        type="text"
                        name="b_37892f6a3c3f15b6ba401af59_744ea1621c"
                        tabIndex={-1}
                        defaultValue
                      />
                    </div>
                    <div className="clear">
                      <input
                        type="submit"
                        defaultValue="Subscribe"
                        name="subscribe"
                        id="mc-embedded-subscribe"
                        className="button"
                      />
                    </div>
                  </div>
                </form>
              </div>
              {/*End mc_embed_signup*/}
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default withRouter(Registro);
