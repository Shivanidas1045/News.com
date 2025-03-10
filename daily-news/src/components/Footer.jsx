import React from 'react'

const Footer = () => {
  return (
    <div>

<footer className="bg-dark text-light py-4 mt-5">
    <div className="container text-center">
        <p className="mb-1">📢 <strong><span class='text-info'>News Channel with updated breaking news!</span></strong>
        <span class='text-info'>
        - Stay Updated with the Latest News</span></p>
        
        {/* 🔗 Social Media Links */}
        <div className="mb-3">
            <a href="https://facebook.com" className="text-light me-3 ">
                <i className="bi bi-facebook"></i> Facebook
            </a>
            <a href="https://twitter.com" className="text-light me-3">
                <i className="bi bi-twitter"></i> Twitter
            </a>
            <a href="https://instagram.com" className="text-light">
                <i className="bi bi-instagram"></i> Instagram
            </a>   
        </div>
        <a class="navbar-brand" href="/"><span class='badge bg-white border border-info text-info fw-7 fs-6'>Daily</span >  <span class='badge bg-black border border-info text-info fw-7 fs-6'>News</span></a><br /><br />


        <p className="mb-0">&copy; {new Date().getFullYear()} News Channel. All Rights Reserved.</p>
    </div>
</footer>










    </div>
  )
}

export default Footer;