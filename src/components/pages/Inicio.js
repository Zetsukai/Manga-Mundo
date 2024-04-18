import React from "react";

const Inicio = () => {
    return(
        <div>
            <div>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src='https://www.industriaanimacion.com/wp-content/uploads/2022/02/Mangas_Mas_Leidos_2021-copia-960x504.jpg' className="img-fluid" alt="..." style={{ width: '90%', height: '400px' }}/>
                        </div>
                        <div className="carousel-item">
                            <img src='https://ramenparados.com/wp-content/uploads/2015/10/libreriajapo-1000x600.jpg' className="img-fluid" alt="..." style={{ width: '90%', height: '400px' }}/>
                        </div>
                        <div className="carousel-item">
                            <img src='https://www.ladn.eu/wp-content/uploads/2022/09/classement-10-manga-plus-vendus-monde-1200x630.jpg.webp?v=202404' className="img-fluid" alt="..." style={{ width: '90%', height: '400px' }}/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col text-start">
                            <h2>¿Qué es el manga?</h2>
                            <p>El manga es un estilo de historieta o cómic originario de Japón que se caracteriza por su formato de lectura de derecha a izquierda y por la utilización de dibujos detallados, expresivos y a menudo estilizados para contar historias. El término "manga" en japonés se refiere genéricamente a cualquier tipo de historieta, pero en el contexto internacional se utiliza específicamente para referirse a los cómics japoneses.</p>
                            <p>Los mangas abarcan una amplia variedad de géneros, desde acción, aventura, romance, ciencia ficción y fantasía hasta dramas históricos, comedias y obras dirigidas a públicos específicos como el shōnen (para chicos jóvenes) y el shōjo (para chicas jóvenes). Su popularidad ha trascendido fronteras y se ha convertido en un fenómeno global, influyendo en la cultura popular y el entretenimiento en todo el mundo.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-start">
                            <h2>Historia del manga</h2>
                            <p>El manga tiene sus raíces en la antigua tradición japonesa de contar historias a través de imágenes, que se remonta a siglos atrás con los rollos de pinturas y grabados en madera que narraban leyendas y eventos históricos. Sin embargo, el manga moderno tal como lo conocemos comenzó a tomar forma a finales del siglo XIX y principios del siglo XX con la influencia de artistas como Hokusai y la introducción de técnicas de impresión occidentales.</p>
                            <p>Durante el siglo XX, el manga experimentó un gran crecimiento y diversificación, especialmente después de la Segunda Guerra Mundial, cuando se establecieron revistas especializadas y se popularizaron géneros como el gekiga (manga dramático) y el gekimen (manga cinematográfico). En las décadas siguientes, el manga se consolidó como un medio de expresión artística y cultural único, con obras icónicas y autores influyentes que marcaron su evolución.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-start">
                            <h2>El manga en la actualidad</h2>
                            <p>En la actualidad, el manga sigue siendo una forma de entretenimiento y expresión artística muy relevante en Japón y en todo el mundo. La industria del manga ha crecido significativamente, con una amplia variedad de títulos publicados cada año y una base de fans global cada vez más grande y diversa.</p>
                            <p>El manga no se limita solo a las páginas impresas, ya que ha experimentado una adaptación exitosa a otros medios como el anime (adaptaciones animadas de mangas), los videojuegos, las películas y las series de televisión. Además, el acceso digital ha facilitado que los lectores de todo el mundo puedan disfrutar de mangas de diferentes géneros y estilos de forma rápida y conveniente, contribuyendo a su popularidad y alcance global.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inicio