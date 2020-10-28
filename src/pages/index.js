import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Navbar from "../components/Navbar";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    
    {/* <!-- Nav --> */}
    <Navbar />

        {/* <!-- Main --> */}
          <div id="main">

            <section id="intro" class="main special">
                <header class="major">
                    <h2>&iquest;Qu&eacute; es e-language lab?</h2>
                    <p>
                        Es un laboratorio de idiomas online. Un espacio para experimentar con el idioma y descubrir su estructura, con la finalidad de internalizarlo para lograr total dominio del mismo. Desarrollarás las cuatro habilidades 'skills' básicas necesarias para aprender un idioma: Reading, Listening, Speaking, Writing.
                    </p>
                    <p>
                        Las clases, generalmente, son individuales y personalizadas, es decir,  estarán diseñadas de acuerdo a tus necesidades. Solo necesitas tener buena conexión de internet y ganas de aprender.
                    </p>
                </header>
            </section>

            <section id="english-lessons" class="main special">
                <header class="major">
                    <h2>English Lessons</h2>
                </header>
                <div className="row">
                    <div className="col-6">
                        { /* <span class="icon solid major style1 fa-code"></span> */ }
                        <h3>Private lessons</h3>

                        <p>
                            Beginners - Clases de 1 hora 1 mes....... (8 clases) ........ €10 <br />
                            Intermediate - Clases de 1 hora 1 mes........ (8 clases) ........ €200 <br />
                            Advanced - Clases de 1 hora1 mes........ (8 clases) ........ €240 euros
                        </p>
                    </div>
                    <div className="col-6">
                        { /* <span class="icon major style3 fa-copy"></span> */ }
                        <h3>In-company lessons</h3>
                        <p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.</p>
                    </div>
                </div>
            </section>

            <section id="spanish-lessons" class="main special">
                <header class="major">
                    <h2>Spanish Lessons</h2>
                </header>
                <div className="row">
                    <div className="col-6">
                        { /* <span class="icon solid major style1 fa-code"></span> */ }
                        <h3>Private lessons</h3>

                        <p>
                            Beginners - Clases de 1 hora 1 mes....... (8 clases) ........ €10 <br />
                            Intermediate - Clases de 1 hora 1 mes........ (8 clases) ........ €200 <br />
                            Advanced - Clases de 1 hora1 mes........ (8 clases) ........ €240 euros
                        </p>
                    </div>
                    <div className="col-6">
                        { /* <span class="icon major style3 fa-copy"></span> */ }
                        <h3>In-company lessons</h3>
                        <p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.</p>
                    </div>
                </div>
            </section>

            <section id="about" class="main">
                <div class="spotlight">
                    <div class="content">
                        <header class="major">
                            <h2>Sobre mi</h2>
                        </header>
                        <p>
                            ¡Hola! Mi nombre es Silvana, soy profesora de Inglés graduada con más de diez años de experiencia. En Argentina trabajé en colegios bilingües, institutos de idiomas como la AACI, y en el British Council como profesora remota y coordinadora en el departamento e-learning para Uruguay. Vivi tres anos en ESpana donde también trabajé en institutos de idiomas y dando clases online. 
                        </p>
                        <p>
                            Mi fuerte vocación por la docencia y Por este motivo, decidí darle forma a mi proyecto como freelancer, y asi cree e-language lab. El mismo es un laboratorio de idiomas en donde, principalmente, se imparten clases y cursos de Inglés online. 
                        </p>
                        <p>
                            Planifico las clases según los intereses y objetivos de los alumnos. Por esta razón, siempre prefiero tener una entrevista de unos minutos con el estudiante para conocer sus necesidades. Las clases tienen un precio accesible y son individuales. En ciertas ocasiones, surgen clases grupales pero se llevan a cabo con previa aprobación de los estudiantes involucrados.
                        </p>
                        <p>
                            Pueden seguirme en Instagram para enterarse de todas las novedades @e.languagelab o pueden escribirme a e.languagelab@gmail.com.
                        </p>
                        <p>
L                           os espero en e-language lab, un espacio para experimentar con el idioma.
                        </p>
                        <ul class="actions">
                            <li><a href="generic.html" class="button">Learn More</a></li>
                        </ul>
                    </div>
                    <span class="image"><img src="../images/gatsby-astronaut.png" alt="" /></span>
                </div>
            </section>

          </div>

    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
