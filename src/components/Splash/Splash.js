import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import './Splash.css';

const Splash =() => {

    return(
        <>
            <header className="vertical-center">

                
                    <img className="header-background-image" src="https://www.forcegt.com/wp-content/uploads/2012/08/mercedes-cls63-amg-wheelsandmore-2012-photo4.jpg" alt="car"></img>
                    <div className="header-intro">
                        <h1><a href="/">ArcSales</a></h1>
                        <h2>It Is Time For Another Ride!</h2>
                    </div>
                
            </header>
            <main>
            
                        
            





            <section className="from-archive">
            <h2>Expert Reviews</h2>

            <div className="grid-wrapper articles">
                <article className="col-third">
                    <img src="images/A45_1.jpg" alt="A45" />
                    <div>
                        <h3>A45</h3>
                        <p>AMG’s take on the new A-Class hatchback and CLA sedan arrived at the Goodwood Festival of Speed yesterday, and they do not disappoint. Meet what is being hailed as the most powerful four-cylinder engine currently in production: a 2.0-liter turbocharged unit putting out 416 horsepower and 369 lb-ft of torque in S guise. This hatchback will handily trump the likes of the Honda Civic Type R and Volkswagen Golf R, and probably make the good noises doing it.</p>
                        <button>Read More</button>
                    </div>
                </article>
                <article className="col-third">
                    <img src="images/GTR.jpg" alt="GT R" />
                    <div>
                    <h3>GT R</h3>
                        <p>Mercedes-Benz Passion Blog reports that German tuner Domanig has teamed up with AMG tuning specialists Individual Mobility, Style & Art (IMSA)—no, not the racing series—to create a custom version of the GT R.  They managed to squeeze 769-hp and 708 pound-feet of torque out of the Merc's 4.0-liter V-8, dropping the GT R's zero to 60 mph time to 2.9 seconds (down from 3.5), and rocketing it to a top speed of 205 mph.To achieve these numbers, the shops have installed larger turbochargers and re-tuned the car's engine and transmission software. These are supported by performance downpipes with a sports catalyst, a better air filter, dual-flow exhaust manifolds, and a new radiator to make sure the engine can handle the significant power increase.</p>
                        <button href="https://www.thedrive.com/news/19176/this-modified-mercedes-amg-gt-r-makes-769-hp-does-205-mph">Read More</button>
                    </div>
                </article>
                <article className="col-third">
                    <img src="images/GT_4Door.jpg" alt="GT 4 Door"/>
                    <div>
                    <h3>GT 4 Door Coupe </h3>
                    
                    <p>Driving dynamics at motorsport level, explosive sprints, maximum comfort. The Mercedes-AMG GT 63 S 4MATIC+ 4-Door Coupé marks the top spot of the four-door model range. Its dynamic AMG engine mounts guarantee the best-possible connection of the 470 kW (639 hp) strong engine to the body in any handling situation. Especially with a sporty driving style the electronically controlled AMG locking differential enables improved acceleration from corners. The four-door coupé not only shoots from 0 to 100 km/h in 3.2 seconds: thanks to the additional RACE drive program including Drift Mode it also enables sporty driving manoeuvres. And the striking front in jet wing design with trim element makes it clear the first time you set your eyes on it: this is a Mercedes-AMG GT 4-Door Coupé.</p>
                    {/* <button href="https://www.mercedes-amg.com/en/vehicles/gt/4-door-coupe/gt63s.html">Read More</button> */}
                    <button onclick="window.location.href = 'https://www.mercedes-amg.com/en/vehicles/gt/4-door-coupe/gt63s.html';">Read More</button>
                    <br></br>
                    <iframe width="441.59" height="248.44" src="https://www.youtube.com/embed/ZmmLw5N3Xjk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </article>
            </div>
        </section>
        <section id="about" className="callout about">
            <article className="wrap">
                <h2>About The Magazine</h2>
                <h3>A Lifestyle Magazine Crafted with Love</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut itaque facere quibusdam rerum, maiores consequuntur, aliquam esse blanditiis eum a libero fuga consectetur non neque amet rem impedit quos, fugit. Culpa ratione iure facilis est ea, ducimus neque voluptas fugiat velit unde ipsam suscipit laudantium cupiditate, officiis eaque id? Eaque ad, nisi assumenda facere qui accusantium alias, fugit adipisci natus.</p>
                <p>Dignissimos quasi nisi maiores dolor sunt. Fuga unde, rem quo sint dolore est pariatur cupiditate nostrum et suscipit, aperiam aliquam officia libero vel error modi ratione, dolorem consectetur doloribus mollitia! Temporibus aliquid laboriosam expedita quia, id consectetur culpa? Enim iusto ab facere aliquid cumque aut amet tenetur dolores, iure tempora perspiciatis incidunt eveniet nostrum, ea esse doloribus labore unde nobis?</p>
            </article>
        </section>
        <section id="gallery">
            <div className="wrap">
                <h2>Issue Twenty</h2>
                <h3>A visual guide to the Southwest</h3>
                <div className="masonry">
                    <img src="images/AMGgroup1.jpg" alt="AMGGroup" />
                    <img src="images/CLS63_2.jpg" alt="CLS63" />
                    <img src="images/GT_1.jpg" alt="GT" />
                    <img src="images/A45_1.jpg" alt="A45" />
                    
                </div>
            </div>
        </section>
        <section className="from-archive" id="contact">
            <div className="wrap">
            <h2>Reach Out</h2>
                <form className="contact">
                    {/* <input type="text" placeholder="Full Name" className="col-third"/>
                    <input type="email" placeholder="Email" className="col-third" />
                    <input type="text" placeholder="Subject" className="col-third" /> */}
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text>First and last name</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl />
                        <FormControl />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-default">Email</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-default">Subject</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        />
                    </InputGroup>
                    <InputGroup>
                        <InputGroup.Prepend>
                        <InputGroup.Text>Message</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl as="textarea" aria-label="With textarea" />
                    </InputGroup>
                    <ButtonToolbar>
                        <div>
                        <Button variant="secondary" size="lg" block>
                            Submit
                        </Button>
                        </div>
                    </ButtonToolbar>
                    {/* <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea> */}
                    {/* <button type="submit">Submit</button> */}
                </form>
            </div>
        </section>

        </main>
            <footer className="text-muted text-center footer">
            <div className="wrap">
			<div className="social-links">
				<a href="https://www.facebook.com/"><i className="fa fa-facebook-square" aria-hidden="true"></i></a>
				<a href="https://twitter.com/"><i className="fa fa-twitter-square" aria-hidden="true"></i></a>
				<a href="https://www.instagram.com/"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                    </div>
                    <input type="text" placeholder="Email Address" />
                    <button type="submit">Subscribe</button>
                </div>

                <p className="copyright">&copy;2019 ArcSales</p>
            </footer>
            
        </>
    )
}

export default Splash;