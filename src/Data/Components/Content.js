import React, { Component } from "react";

class Content extends Component {
    render(){
    return (
        <section>
            <div className="container">
                <br /><br />
                <h3 class="w3ls-title center">Welcome !</h3>  
                <div className="row">
                    <div className="col-lg-4 col-md-6 cold-sm-12" style={{textAlign:"center"}}>
                        <h4 style={{textAlign:"center"}}>Badminton</h4>
                            <img src="http://images.toronto2015.org/system/asset_images/6221/m/09057957.jpg" 
                            alt="badminton player" class="img-responsive" style={{height:"250px", width:"250px", borderRadius:"50%"}} /> 
                        <p style={{color:"black", textAlign:"justify"}}>
                            Berlari, menerjang, dan memukul bola yang dilakukan saat bermain badminton dapat 
                            membakar sekitar 450 kalori per jam. 
                        </p>
                    </div>  
                    <div className="col-lg-4 col-md-6 cold-sm-12" style={{textAlign:"center"}}>
                        <h4 style={{textAlign:"center"}}>Futsal</h4>
                            <img src="https://collegesport.org.nz/wp-content/uploads/2019/03/20190313-Futsal-%E2%80%93-CSW-Regional-Futsal-Tournament-163.jpg" 
                            alt="badminton player" class="img-responsive" style={{height:"250px", width:"250px", borderRadius:"50%"}} /> 
                        <p style={{color:"black", textAlign:"justify"}} className="center">
                        Bermain futsal dengan intensitas yang tinggi dapat memacu jantung agar 
                        lebih kuat sehingga dapat mencegah gangguan jantung dan serangan jantung. 
                        </p>
                    </div>  
                    <div className="col-lg-4 col-md-6 cold-sm-12" style={{textAlign:"center"}}>
                        <h4 style={{textAlign:"center"}}>Basketball</h4>
                            <img src="https://ichef.bbci.co.uk/news/624/cpsprodpb/14FB6/production/_103224958_gettyimages-940813152.jpg" 
                            alt="badminton player" class="img-responsive" style={{height:"250px", width:"250px", borderRadius:"50%"}} /> 
                        <p style={{color:"black", textAlign:"justify"}}>
                        Basket adalah permainan cepat yang melibatkan banyak lari, melompat, dan melempar. 
                        Olahraga ini merupakan latihan kardiovaskular yang efektif.
                        </p>
                    </div>    
                </div>
            </div>
        </section>
    )}
}
export default Content;