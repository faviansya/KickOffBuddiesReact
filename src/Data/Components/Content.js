import React, { Component } from "react";

class Content extends Component {
    render(){
    return (
        <section>
            <div className="container-fluid">
                <br /><br />
                <h3 class="w3ls-title center">Welcome !</h3>  
                <div className="row">
                    <div className="col-lg-4 col-md-6 cold-sm-12" style={{textAlign:"center"}}>
                        <h4 style={{textAlign:"center"}}>Badminton</h4>
                            <img src="https://www.teachpe.com/images/badminton/badminton-doubles-620.jpg" 
                            alt="badminton player" class="img-responsive" style={{height:"250px", width:"350px", borderRadius:"25%"}} /> 
                        <p style={{color:"black", textAlign:"justify"}}>
                        Between the running, lunging, diving and ball hitting, playing badminton burns fat at 
                        approximately 450 calories per hour. This kind of cardiovascular workout can help keep you in tip top shape, 
                        especially if you’re looking for a good alternative cross-training exercise.
                        </p>
                    </div>  
                    <div className="col-lg-4 col-md-6 cold-sm-12" style={{textAlign:"center"}}>
                        <h4 style={{textAlign:"center"}}>Futsal</h4>
                            <img src="https://collegesport.org.nz/wp-content/uploads/2019/03/20190313-Futsal-%E2%80%93-CSW-Regional-Futsal-Tournament-163.jpg" 
                            alt="badminton player" class="img-responsive" style={{height:"250px", width:"350px", borderRadius:"25%"}} /> 
                        <p style={{color:"black", textAlign:"justify"}} className="center">
                        Engaging in sports like Futsal can also be great for your social and emotional wellbeing. 
                        Though Futsal focuses mainly on individual skill, it does also require some elements of teamwork and 
                        therefore good communication skills. By joining a Futsal team, you can make friends for life.  
                        </p>
                    </div>  
                    <div className="col-lg-4 col-md-6 cold-sm-12" style={{textAlign:"center"}}>
                        <h4 style={{textAlign:"center"}}>Basketball</h4>
                            <img src="https://ichef.bbci.co.uk/news/624/cpsprodpb/14FB6/production/_103224958_gettyimages-940813152.jpg" 
                            alt="badminton player" class="img-responsive" style={{height:"250px", width:"350px", borderRadius:"25%"}} /> 
                        <p style={{color:"black", textAlign:"justify"}}>
                        Basketball is a fast-moving game where your heart rate is constantly increased, 
                        helping to not only reduce the risk of heart disease or a stroke later in life but also 
                        reduce emotional and mental health issues such as anxiety and depression. 
                        </p>
                    </div>    
                </div>
            </div>
        </section>
    )}
}
export default Content;