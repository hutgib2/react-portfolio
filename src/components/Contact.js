//TODO: add contact info, add contact form
import React from "react";

const Contact = () => {
  return (
    <section class="jumbotron mb-4 bg-dark">
    
        <h2 class="h1-responsive font-weight-bold text-center my-4">Contact Hugo</h2>
        
        <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact me directly. I will come back to you within
            a matter of hours to help you.</p>
    
        <div class="row">
    
            
            <div class="col-md-9 mb-md-0 mb-5">
                <form id="contact-form" name="contact-form" >
    
                    
                    <div class="row">
    
                        
                        <div class="col-md-6">
                            <div class="md-form mb-0">
                                <input required type="text" id="name" name="name" class="form-control" />
                                <label for="name" class="">Your name</label>
                            </div>
                        </div>
                        
    
                        
                        <div class="col-md-6">
                            <div class="md-form mb-0">
                                <input required type="email" id="email" name="email" class="form-control" />
                                <label for="email" class="">Your email</label>
                            </div>
                        </div>
                        
    
                    </div>
                    
    
                    
                    <div class="row">
                        <div class="col-md-12">
                            <div class="md-form mb-0">
                                <input required type="text" id="subject" name="subject" class="form-control" />
                                <label for="subject" class="">Subject</label>
                            </div>
                        </div>
                    </div>
                    
    
                    
                    <div class="row">
    
                        
                        <div class="col-md-12">
    
                            <div class="md-form">
                                <textarea required type="text" id="message" name="message" rows="8" class="form-control md-textarea"></textarea>
                                <label for="message">Your message</label>
                            </div>
    
                        </div>
                    </div>
                    
    
    
                <div class="text-center text-md-left">
                    <button class="btn btn-primary" type="submit">Send</button>
                </div>
                </form>

                <div class="status"></div>
            </div>
            
    
            
            <div class="col-md-3 text-center">
                <ul class="list-unstyled mb-0">
    
                    <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                        <p>contact@mdbootstrap.com</p>
                    </li>
                </ul>
            </div>
            
    
        </div>
    
    </section>
  );
};

export default Contact;