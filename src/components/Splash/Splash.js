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
                        <p>AMG’s take on the new A-Class hatchback and CLA sedan arrived at the Goodwood Festival of Speed yesterday, and they do not disappoint. Meet what is being hailed as the most powerful four-cylinder engine currently in production: a 2.0-liter turbocharged unit putting out 416 horsepower and 369 lb-ft of torque in S guise. This hatchback will handily trump the likes of the Honda Civic Type R and Volkswagen Golf R, and probably make the good noises doing it. If the S is too much for you, the standard AMG A45 makes 382 HP and 354 lb-ft of torque from the same unit. The AMG A45 S is supposed to also do zero to 60 mph in 3.9 seconds; the standard one does it in four flat. I for one welcome the era of the 400 horsepower four-cylinder engine. Too much is never enough.</p>
                        <button className="btnSplash" type="submit" formaction="https://jalopnik.com/the-2020-mercedes-amg-a45-s-is-the-hottest-hatch-with-a-1836127469">Read More</button>
                        <div className="ifame-container">
                            <iframe width="492.795" height="277.240" src="https://www.youtube.com/embed/RjnaC361API" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </article>
                <article className="col-third">
                    <img src="images/GTR.jpg" alt="GT R" />
                    <div>
                    <h3>GT R</h3>
                        <p>Mercedes-Benz Passion Blog reports that German tuner Domanig has teamed up with AMG tuning specialists Individual Mobility, Style & Art (IMSA)—no, not the racing series—to create a custom version of the GT R.  They managed to squeeze 769-hp and 708 pound-feet of torque out of the Merc's 4.0-liter V-8, dropping the GT R's zero to 60 mph time to 2.9 seconds (down from 3.5), and rocketing it to a top speed of 205 mph.To achieve these numbers, the shops have installed larger turbochargers and re-tuned the car's engine and transmission software. These are supported by performance downpipes with a sports catalyst, a better air filter, dual-flow exhaust manifolds, and a new radiator to make sure the engine can handle the significant power increase.</p>
                        {/* <button href="https://www.thedrive.com/news/19176/this-modified-mercedes-amg-gt-r-makes-769-hp-does-205-mph">Read More</button> */}
                        <button className="btnSplash" type="submit" formaction="https://www.thedrive.com/news/19176/this-modified-mercedes-amg-gt-r-makes-769-hp-does-205-mph">Read More</button>
                        <div className="ifame-container">
                            <iframe width="492.795" height="277.240" src="https://www.youtube.com/embed/-oaj20A9gjA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </article>
                <article className="col-third">
                    <img src="images/GT_4Door.jpg" alt="GT 4 Door"/>
                    <div>
                    <h3>GT 4 Door Coupe </h3>
                    
                    <p>Driving dynamics at motorsport level, explosive sprints, maximum comfort. The Mercedes-AMG GT 63 S 4MATIC+ 4-Door Coupé marks the top spot of the four-door model range. Its dynamic AMG engine mounts guarantee the best-possible connection of the 470 kW (639 hp) strong engine to the body in any handling situation. Especially with a sporty driving style the electronically controlled AMG locking differential enables improved acceleration from corners. The four-door coupé not only shoots from 0 to 100 km/h in 3.2 seconds: thanks to the additional RACE drive program including Drift Mode it also enables sporty driving manoeuvres. And the striking front in jet wing design with trim element makes it clear the first time you set your eyes on it: this is a Mercedes-AMG GT 4-Door Coupé.</p>
                    {/* <button href="https://www.mercedes-amg.com/en/vehicles/gt/4-door-coupe/gt63s.html">Read More</button> */}
                    <button className="btnSplash" type="submit" formaction="https://www.mercedes-amg.com/en/vehicles/gt/4-door-coupe/gt63s.html">Read More</button>
                    {/* <button onclick="window.location.href = 'https://www.mercedes-amg.com/en/vehicles/gt/4-door-coupe/gt63s.html';">Read More</button> */}
                    <div className="ifame-container">
                        <iframe width="492.795" height="277.240" src="https://www.youtube.com/embed/ZmmLw5N3Xjk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    </div>
                </article>
            </div>
        </section>
        <section id="about" className="callout about">
            <article className="wrap">
                <h2>The History of Mercedes-Benz AMG</h2>
                <h3>Slogan: The best or nothing <a href="https://www.mbofmassapequa.com/history-mercedes-benz-amg/">More</a></h3> 
                <p>Founded in 1967, AMG® was the brainchild of two former Mercedes engineers, Erhard Melcher and Hans Werner Aufrecht. AMG® was originally meant to design, test, and produce racing engines, but they soon found that there was a demand for upgrades and customization well beyond just the engines. Up until 1990, AMG® produced packages as well as fully customized vehicles. 1990 brought a major change, as Mercedes decided to recognize AMG®’s efforts and there was a co-operation agreement signed between the two. This allowed AMG® options and fully-customized cars into Mercedes showrooms, opening up the options to a greater variety of buyer. By the end of the millennium, Mercedes went all-in with AMG®, buying a controlling share of AMG® and making AMG® cars part of the official Mercedes-Benz line-up.</p>
                {/* <p>One feature that you are guaranteed to find on any AMG® model is a high-powered engine. In the past, this included a five-cylinder diesel and a variety of V-8 and V-12 engines, but in current times they have added an inline-four cylinder and are developing an electric drive. Current engines also make heavier use of turbocharging, to develop greater horsepower from smaller, more fuel-efficient engines. While over-powered engines can certainly help performance numbers, drivers need to be able to control that power. This means pairing the engine with an efficient transmission, often a version of the standard Mercedes-Benz transmissions, but tuned to deal with the extra power. In some cases, that hasn’t been enough – at one point, the “65” series of AMG® models had to switch to older 5-speed automatic transmissions, as the power was too much for the early generation of 7-speed automatic transmissions. Handling upgrades are also necessary, as straight-line speed is impressive but not the end-all. Every AMG® model goes on a bit of a diet, cutting weight through removing unnecessary weight where possible, while keeping the luxury level of the car up to par. This can include swapping in lighter yet more rigid racing seats, using lighter components, and using alternate materials. Heavy-duty brakes and tuned suspensions also increase performance characteristics of AMG® models.</p> */}
            </article>
        </section>
        <section id="gallery">
            <div className="wrap">
                <h2>Sneak Peak</h2>
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