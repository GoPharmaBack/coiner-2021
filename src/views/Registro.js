import React from "react";

function registro() {
  return (
    <section className="registro">
      <div className="contenedor contenedor-form">
        <div classname="form">
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
              action="https://coiner.us1.list-manage.com/subscribe/post?u=37892f6a3c3f15b6ba401af59&id=744ea1621c"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
              target="_blank"
              noValidate
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
                    className="required"
                    id="mce-FNAME"
                  />
                </div>
                <div className="mc-field-group">
                  <label htmlFor="mce-LNAME">
                    Apellido <span className="asterisk">*</span>
                  </label>
                  <input
                    type="text"
                    name="LNAME"
                    className="required"
                    id="mce-LNAME"
                  />
                </div>
                <div className="mc-field-group">
                  <label htmlFor="mce-EMAIL">
                    Correo electrónico <span className="asterisk">*</span>
                  </label>
                  <input
                    type="email"
                    name="EMAIL"
                    className="required email"
                    id="mce-EMAIL"
                  />
                </div>
                <div className="mc-field-group">
                  <label htmlFor="mce-ESTATE">
                    Estado <span className="asterisk">*</span>
                  </label>
                  <select name="ESTATE" className="required" id="mce-ESTATE">
                    <option value />
                    <option value="Aguascalientes">Aguascalientes</option>
                    <option value="Baja California">Baja California</option>
                    <option value="Baja California Sur">
                      Baja California Sur
                    </option>
                    <option value="Campeche">Campeche</option>
                    <option value="Coahuila">Coahuila</option>
                    <option value="Colima">Colima</option>
                    <option value="Chiapas">Chiapas</option>
                    <option value="Chihuahua">Chihuahua</option>
                    <option value="Durango">Durango</option>
                    <option value="Distrito Federal">Distrito Federal</option>
                    <option value="Guanajuato">Guanajuato</option>
                    <option value="Guerrero">Guerrero</option>
                    <option value="Hidalgo">Hidalgo</option>
                    <option value="Jalisco">Jalisco</option>
                    <option value="México">México</option>
                    <option value="Michoacán">Michoacán</option>
                    <option value="Morelos">Morelos</option>
                    <option value="Nayarit">Nayarit</option>
                    <option value="Nuevo León">Nuevo León</option>
                    <option value="Oaxaca">Oaxaca</option>
                    <option value="Puebla">Puebla</option>
                    <option value="Querétaro">Querétaro</option>
                    <option value="Quintana Roo">Quintana Roo</option>
                    <option value="San Luis Potosí">San Luis Potosí</option>
                    <option value="Sinaloa">Sinaloa</option>
                    <option value="Sonora">Sonora</option>
                    <option value="Tabasco">Tabasco</option>
                    <option value="Tamaulipas">Tamaulipas</option>
                    <option value="Tlaxcala">Tlaxcala</option>
                    <option value="Veracruz">Veracruz</option>
                    <option value="Yucatán">Yucatán</option>
                    <option value="Zacatecas">Zacatecas</option>
                  </select>
                </div>
                <div className="mc-field-group">
                  <label htmlFor="mce-ZONE">
                    Municipio <span className="asterisk">*</span>
                  </label>
                  <input
                    type="text"
                    name="ZONE"
                    className="required"
                    id="mce-ZONE"
                  />
                </div>
                <div className="mc-field-group size1of2">
                  <label htmlFor="mce-BIRTHDAY-month">
                    Fecha de nacimiento <span className="asterisk">*</span>
                  </label>
                  <div className="datefield">
                    <div className="grupo">
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
                    </div>
                    <span className="small-meta nowrap">( Día/ Mes )</span>
                  </div>
                </div>
                <div className="mc-field-group input-group ocupacion">
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
                  </ul>
                </div>
                <div className="mc-field-group">
                  <label htmlFor="mce-CED">Cédula profesional</label>

                  <input
                    type="text"
                    name="CED"
                    className="required"
                    id="mce-CED"
                  />
                </div>
                <div className="mc-field-group">
                  <label htmlFor="mce-ESPEC">
                    Especialidad <span className="asterisk">*</span>
                  </label>
                  <input
                    type="text"
                    name="ESPEC"
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
                    className="required"
                    id="mce-INST"
                  />
                </div>
                <div className="mc-field-group input-group">
                  <strong>Términos y condiciones y Aviso de Privacidad </strong>
                  <ul>
                    <li>
                      <input
                        type="checkbox"
                        defaultValue={1}
                        name="group[380866][1]"
                        id="mce-group[380866]-380866-0"
                      />
                      <label htmlFor="mce-group[380866]-380866-0">Acepto</label>
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
        </div>
      </div>

      <div class="field-help">
        <i> En caso de ser estudiante dejar este espacio en blanco</i>
      </div>
    </section>
  );
}

export default registro;
