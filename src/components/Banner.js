import React from 'react';
import {FaFacebook, FaTelegram} from 'react-icons/fa';
import {GrInstagram} from 'react-icons/gr';
import {AiFillGithub} from 'react-icons/ai';
import {FaFileDownload} from 'react-icons/fa';
const Banner = () => {
  return (
    <>
    <section className="banner">
      <div className="intro">
        <img src="./images/banner2.jpg" alt="banner" className="shadow" />
        <h1>Baxtiyor Chorshanbiyev</h1>
        <p>I'm FrontEnd Devoloper from Uzbekistan, Qarshi</p>
        <p> Welcome to my personal website</p>
        <div className="social-media">
          <a className="social-link" href="https://facebook.com/BaxtiyorOdilovich"><FaFacebook /></a>
          <a className="social-link" href="https://t.me/baxtiyor9703"><FaTelegram /></a>
          <a className="social-link" href="https://instagram.com/Baxtiyor9703"><GrInstagram /></a>
          <a className="social-link" href="https://github.com/baxtiyorpoyosh"><AiFillGithub /></a>
        </div>
        <div className="download">
          <a className="linkCV" href="#"><span><FaFileDownload /></span>Download CV</a>
        </div>
      </div>
    </section>
    </>
  );
};

export default Banner;