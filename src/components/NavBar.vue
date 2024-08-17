<template>
    <nav class="navbar navbar-expand-lg sticky-top">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
          <img
            src="https://anushqakandan.github.io/All-images/Images/AK logo.jpg"
            alt="logo"
            class="img-thumbnail"
            loading="lazy"/>
        </router-link>
  
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="#home">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="#about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="#resume">Resume</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="#skills">Skills</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="#projects">Projects</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="#testimonials">Testimonials</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="#contact">Contact Info</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
 