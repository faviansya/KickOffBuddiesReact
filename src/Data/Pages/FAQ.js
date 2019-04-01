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
                        Ya. Pendaftarannya gratis. Langkah-langkah yang perlu dilakukan untuk mendaftar sebagai berikut: 
                        <ul>
                            <li>Sign up</li>
                            <li>Isi data diri</li>
                            <li>Kemudian kamu bisa melakukan pencarian teman untuk olahraga lewat my booking.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h5 className="panel-title">
                        <br />
                        <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFour">Apa itu player room?</a>
                    </h5>
                </div>
                <div id="collapseFour" className="panel-collapse collapse">
                    <div className="panel-body">
                        Player room merupakan ruang untuk kamu bertemu dan bergabung dengan pemain lain untuk berolahraga bersama di waktu dan tempat yang diinginkan 
                        dengan langkah-langkah sebagai berikut:
                        <ul>
                            <li>Tinggal click di empty slot.</li>
                            <li>Profile kamu akan muncul dan tergabung di ruang pemain tersebut.</li>
                            <li>Tunggu sampai jumlah pemain yang diinginkan sudah terpenuhi. Data di ruang player kamu akan muncul di user profile sebelah kanan bawah
                                di bagian current booking.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <br />
            <br />
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