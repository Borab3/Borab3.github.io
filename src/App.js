import React from 'react';
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';
import './App.css';


const App = () => {
  let reactSwipeEl;

  return (
    <div>
    <div style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', position: 'absolute', padding: 10}}>
    <div style={{paddingLeft: 240}}>
    <button style={{flex: 1, marginRight: 15, justifyContent: 'center', alignItems: 'center',}} class="button button-outline" onClick={() => reactSwipeEl.prev()}>&#60;</button>
    <button style={{flex: 1, marginLeft: 15, marginRight: 15, justifyContent: 'center', alignItems: 'center',}} class="button button-outline" onClick={() => reactSwipeEl.next()}>&#62;</button>
    </div>
    </div>
  <div style={{paddingTop: 30}}>
      <ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: false }}
        ref={el => (reactSwipeEl = el)}
      >
    <div  style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
    <div style={{marginLeft: 200, marginRight: 200, justifyContent: 'center', alignItems: 'center' }}>
    <div>
      <p class="c46"><span class="c20 c32 c37 c39"></span></p><a id="t.f82e6414dd2671f5a220d05dddaee164dff59966"></a><a id="t.0"></a>
    <table class="c40">
      <tbody>
        <tr class="c38">
          <td class="c36" colspan="1" rowspan="1">
            <p class="c19"><span class="c10 c17"></span><span class="c17 c10">Nadiv Gold Edelstein</span></p>
          </td>
          <td class="c23" colspan="1" rowspan="1">
            <p class="c29"><span class="c1">PO Box 270249</span></p>
            <p class="c29"><span class="c1">Louisville, CO 80027</span></p>
            <p class="c29"><span class="c27 c3 c44">(720) </span><span class="c1">235-7772</span></p>
            <p class="c29"><span class="c1">nadivge@gmail.com</span></p>
            <p class="c29"><span class="c1">nadivfolio.space</span></p>
          </td>
        </tr>
        <tr class="c25">
          <td class="c36" colspan="1" rowspan="1">
            <p class="c6"><span class="c14">WORK </span><span class="c14">EXPERIENCE</span></p>
            <h2 class="c16" id="h.rjcv6xw8j4ir"><span>Data Structures Course Assistant</span><span class="c20 c32 c34 c10">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span></h2>
            <p class="c6"><span class="c10">University of Colorado </span><span class="c10">Boulder </span><span class="c10">- </span><span class="c10 c31">Course Assistant &nbsp; &nbsp;</span><span class="c11 c3">January 2020</span><span class="c11 c3">&nbsp;- Present</span></p>
            <p class="c6"><span class="c18 c3">Assist students in CSCI 2270 Data Structures.</span></p>
            <h2 class="c16" id="h.zedwo0x7y3ot"><span>Code Ninjas</span><span class="c20 c32 c34 c10">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span></h2>
            <p class="c6"><span class="c10">Louisville - </span><span class="c10 c31">Sensei &nbsp; &nbsp;</span><span class="c11 c3">April - August 2019</span></p>
            <p class="c6"><span class="c3 c18">Taught campers coding and computer science principles. Led and created summer camp sessions on Arduino for robotics.</span></p>
            <h2 class="c16" id="h.rfr1gz5h0rrr"><span>CU Boulder School of Ecology and Evolutionary Biology</span></h2>
            <p class="c6"><span class="c32 c10">Boulder &mdash; </span><span class="c2">Biologist Intern</span><span class="c10 c31">&nbsp; &nbsp; </span><span class="c11">Summers 2017 and 2018</span></p>
            <p class="c6"><span class="c3">2017 - </span><span class="c3">Studied the effects of climate control on plants and plant reproductive feedback loops</span><span class="c18 c3">.</span></p>
            <p class="c6"><span class="c18 c3">2018- Studied change in glucocorticoid levels in mountain pika as an indicator of climate change.</span></p>
            <h2 class="c16" id="h.k8f7kzkzezw5"><span class="c20 c10 c27 c34">The Tech Talk Show &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span></h2>
            <p class="c6"><span class="c10 c32">Tel Aviv</span><span class="c32 c10">&nbsp;&mdash; </span><span class="c10 c31">B-Roll Editor Intern</span><span class="c11">&nbsp; &nbsp; January - May 2018</span></p>
            <p class="c6"><span class="c18 c3">Edited footage for a show that reports on Tech Startups in Israel and around the world. They were subsequently picked up by Amazon Prime.</span></p>
            <h2 class="c16" id="h.47ku998zjkj6"><span>Variaball Exercise Equipment</span><span class="c20 c32 c34 c10">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span></h2>
            <p class="c6"><span class="c10">Louisville - </span><span class="c10 c31">Prototype Fabrication</span><span class="c7">&nbsp; &nbsp; </span><span class="c11">March 2015 - August 2017</span></p>
            <p class="c6"><span class="c18 c3">Aided in the R&amp;D for a startup making smart variable weight medicine balls and kettlebells. Developed specific tools to build prototypes as well as creating the means to manufacture the product at scale.</span></p>
            <p class="c6"><span class="c14">EDUCATION</span></p>
            <p class="c6"><span class="c9">University of Colorado Boulder - Computer Science Major, TAM (Technology, Arts, and Media) Minor &amp; Hebrew Minor</span><br></br><span class="c11 c3">August 2018 - &nbsp;Present</span></p>
            <h2 class="c16" id="h.x6r28z8j9541"><span class="c33">Semester Abroad in Israel; American Jewish University </span><span class="c33 c37"></span><br></br><span class="c11 c3">January 2018 - May 2018</span></h2>
            <h2 class="c16" id="h.bthptklwivv"><span class="c33">Centaurus High School (Diploma); GED (2017)</span><span class="c12"></span><br></br><span class="c11 c3">2014 - 2018</span></h2>
          </td>
          <td class="c23" colspan="1" rowspan="1">
            <p class="c199"><span class="c22 c14">COMPUTING QUALIFICATIONS</span></p>
            <p class="c4"><span class="c0"></span></p>
            <p class="c199"><span class="c15 c3">Java, Python, C++, JS, and select libraries (OpenCV, Pytesseract, React/Native)</span></p>
            <p class="c199"><span class="c15 c3">Working knowledge of Linux Systems (Arch Linux, Debian)</span></p>
            <p class="c199"><span class="c15 c3">Two years of IB/AP accredited level Computer Science Courses</span></p>
            <p class="c199"><span class="c3 c15">Data Structures, Computer Systems, Software Development at &nbsp;CU Boulder</span></p>
            <p class="c199"><span class="c15 c3">3D Printing</span></p>
            <h1 class="c26" id="h.eem4hmaveqpn"><span class="c14 c22">PROJECTS</span></h1>
            <p class="c4"><span class="c0"></span></p>
            <ul class="c42 lst-kix_d52h1clnbs3c-0 start">
              <li class="c19 c24"><span class="c27 c35">MOIR&Eacute; PATTERN REMOVER</span></li>
              <li class="c19 c24"><span class="c15 c3">Final project for IB Computer Science, used fourier transforms in an attempt to remove obstructions.</span></li>
              <li class="c19 c24"><span class="c27 c35">OCR TEXTBOOK</span></li>
              <li class="c19 c24"><span class="c15 c3">To save money on textbooks, the script takes images of textbook pages, applies an ocr filter, and then builds the images and text into a PDF.</span></li>
              <li class="c19 c24"><span class="c27 c35">LEAF AREA CALCULATOR</span></li>
              <li class="c19 c24"><span class="c15 c3">An ImageJ script that automates finding areas of leaves in scanned images. Developed for CU Boulder Ecology researchers.</span></li>
            </ul>
            <h1 class="c26" id="h.tuxh7mwdaxox"><span class="c13">AWARDS</span></h1>
            <p class="c4"><span class="c5"></span></p>
            <p class="c30"><span class="c27">HackCU VI 2020 - </span><span class="c3">3rd Place Overall for </span><span class="c3">Vido</span><span class="c3">: a Video Summarization Platform</span></p>
            <p class="c4"><span class="c22 c28 c27 c37"></span></p>
            <p class="c30"><span class="c27">Hack CU V 2019 - </span><span class="c5">Recipient of the Rapid API Prize for an embedded systems package solution</span></p>
            <p class="c4"><span class="c5"></span></p>
            <p class="c30"><span class="c27">2019 Lucid Programming Competition - 3rd Place</span></p>
            <p class="c4"><span class="c22 c28 c27 c37"></span></p>
            <p class="c30"><span class="c27">University of Colorado - &nbsp;Boulder &nbsp;GOCO-NATURE KIDS</span><span>&nbsp;2017, 2018 Awarded the GOCO grant for environmental sciences and academic interest </span></p>
            <p class="c4"><span class="c5"></span></p>
          </td>
        </tr>
      </tbody>
    </table>
    <p class="c8"><span class="c5"></span></p>
    </div>
    </div>
    </div>

    <div  style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: 30}}>
      <div style={{marginLeft: 200, marginRight: 200}}>
        <p>Pane 2</p>
      </div>
    </div>




    <div  style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: 30}}>
      <div style={{marginLeft: 200, marginRight: 200}}>
        <p>Pane 3</p>
      </div>
    </div>



    <div  style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: 30}}>
      <div style={{marginLeft: 200, marginRight: 200}}>
        <p>Pane 4</p>
      </div>
    </div>




    <div  style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: 30}}>
      <div style={{marginLeft: 200, marginRight: 200}}>
        <p>Pane 5</p>
      </div>
    </div>



      </ReactSwipe>
    </div>
  </div>
  );
};


export default App;
