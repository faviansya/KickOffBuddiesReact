import React, { Component } from "react";
import { Link,Redirect,withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../../store";


class FAQ extends Component {
    render() {
    return (
        <section>
        <div class="container">
            {/* <div class="alert alert-warning alert-dismissible" role="alert">
                <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                This section contains a wealth of information, related to <strong>FatimahFashion</strong> and its store. If you cannot find an answer to your question, 
                make sure to contact us. 
            </div> */}
        <div className="row">
        <div className="col-lg-3 col-md-3 col-sm-2"></div>
        <div className="col-lg-7 cold-md-7 col-sm-10">
        
    
        <br />
    
        <div className="panel-group" id="accordion">
            {/* <div className="faqHeader">Pertanyaan Umum</div> */}
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h5 className="panel-title">
                        <br />
                        <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">Apakah Kick Off Buddies?</a>
                    </h5>
                </div>
                <div id="collapseOne" className="panel-collapse collapse in">
                    <div className="panel-body">
                        <strong>Kick Off Buddies</strong> merupakan aplikasi yang membantu penggunanya untuk menemukan kawan/pemain lain untuk berolahraga.
                        Di aplikasi ini juga, pengguna bisa langsung melakukan booking tempat olahraga dan membayar
                         biaya sewa lapangan secara otomatis lewat aplikasi sesuai jumlah pemain. 
                         <br />
                    </div>
                </div>
            </div>
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h5 className="panel-title">
                        <br />
                        <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseEleven">Bagaimana cara menggunakan aplikasi Kick Off Buddies?</a>
                    </h5>
                </div>
                <div id="collapseEleven" className="panel-collapse collapse">
                    <div className="panel-body">
                        Mudah saja, kamu tinggal download aplikasi ini di goole store atau app store, register dan pilih olahraga yang kamu inginkan. 
                        Aplikasi Kick Off Buddies akan mempertemukan kamu dengan pemain lain yang juga punya hobby olahraga yang sama dengan yang kamu miliki.
                        <br />
                    </div>
                </div>
            </div>
    
            {/* <div className="faqHeader">Penyedia Lapangan Olahraga</div> */}
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h5 className="panel-title">
                        <br />
                        <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">Siapa yang bisa mendaftar untuk menjadi penyedia lapangan Olahraga?</a>
                    </h5>
                </div>
                <div id="collapseTwo" className="panel-collapse collapse">
                    <div className="panel-body">
                        Siapa pun yang memiliki lapangan olahraga yang disewakan bisa mendaftarkan diri dan usahanya untuk di publikasikan melalui <strong>Kick Off Buddies</strong>.
                        <br />
                    </div>
                </div>
            </div>
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h5 className="panel-title">
                        <br />
                        <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree">Apakah pendaftarannya gratis?</a>
                    </h5>
                </div>
                <div id="collapseThree" className="panel-collapse collapse">
                    <div className="panel-body">
                        Ya. Pendaftarannya gratis. 
                        <ul>
                            <li>Register an account</li>
                            {/* <li>Activate your account</li> */}
                            <li>Go to the <strong>Add Product</strong> section and upload your product with all product details.</li>
                            <li>The next step is the approval step, which usually takes about 12 hours.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h5 className="panel-title">
                        <br />
                        <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFive">How much do I get from each sale?</a>
                    </h5>
                </div>
                <div id="collapseFive" className="panel-collapse collapse">
                    <div className="panel-body">
                        Here, at <strong>FatimahFashion</strong>, we offer a great, 70% rate for each seller, regardless of any restrictions, such as category, date of entry, etc.
                        <br />
                    </div>
                </div>
            </div>
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h5 className="panel-title">
                        <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseSix">Why sell my items here?</a>
                    </h5>
                </div>
                <div id="collapseSix" className="panel-collapse collapse">
                    <div className="panel-body">
                        There are a number of reasons why you should join us:
                        <ul>
                            <li>A great 70% flat rate for your items.</li>
                            <li>Fast response/approval times. Many sites take weeks to process a seller. And if it gets rejected, there is another iteration. We have aliminated this, and made the process very fast. It only takes up to 72 hours for a template/theme to get reviewed.</li>
                            <li>We are not an exclusive marketplace. This means that you can sell your items on <strong>PrepBootstrap</strong>, as well as on any other marketplate, and thus increase your earning potential.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h5 className="panel-title">
                        <br />
                        <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseEight">What are the payment options?</a>
                    </h5>
                </div>
                <div id="collapseEight" className="panel-collapse collapse">
                    <div className="panel-body">
                        The best way to transfer funds is via Bank Transer. This secure platform ensures timely payments and a secure environment. 
                    </div>
                </div>
            </div>
    
            {/* <div className="faqHeader">Buyers</div> */}
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h5 className="panel-title">
                        <br />
                        <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFour">I want to buy a fashion product - what are the steps?</a>
                    </h5>
                </div>
                <div id="collapseFour" className="panel-collapse collapse">
                    <div className="panel-body">
                        Buying a product on <strong>FatimahFashion</strong> is really simple. Each product has a live preview. 
                        Once you have selected a product or template, which is to your liking, you can quickly and securely pay via Paypal.
                        <br />
                        Once the transaction is complete, you gain full access to the purchased product. 
                    </div>
                </div>
            </div>
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h5 class="panel-title">
                        <br />
                        <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseSeven">Is this the latest version of an item</a>
                    </h5>
                </div>
                <div id="collapseSeven" class="panel-collapse collapse">
                    <div class="panel-body">
                        Each item in <strong>FatimahFashion</strong> is maintained to its latest version. This ensures its smooth operation.
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
        </div>
        </section>
    
    );
  }
}

export default connect(
  "",
  actions
)(withRouter(FAQ));