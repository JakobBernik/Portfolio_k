
//icons
import { BsArrowRight } from "react-icons/bs";

// framer
import { motion } from "framer-motion";

//variants 
import { fadeIn } from "../../variants";
import Script from "next/script";

function sendEmail(e){
  e.preventDefault();
  var messageBody ="Name "+e.target.name.value+"<br/> Email "+e.target.email.value+"<br/> Message "+e.target.message.value
  console.log(messageBody);
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "portfoliok.email@gmail.com",
    Password : "0DA3FCB84FAA227054D42169DAA9AC441B31",
    To : 'portfoliok.email@gmail.com',
    From : "portfoliok.email@gmail.com",
    Subject : e.target.subject.value,
    Body : messageBody
  }).then(
    message => alert(message)
  );
  e.target.reset();
}

const Contact = () => {
  return (
    <div className="h-full bg-primary/30">
      <Script src="https://smtpjs.com/v3/smtp.js"/>
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2 
            variants={fadeIn('up',0.2)} 
            initial='hidden'
            animate='show'
            exit='hidden' 
            className="h2 text-center mb-12">Lets <span className="text-[#ff0000]">connect.</span></motion.h2>
          <motion.form
            onSubmit={sendEmail}
            variants={fadeIn('up',0.2)} 
            initial='hidden'
            animate='show'
            exit='hidden'
            className="flex-l flex flex-col gap-6 w-full mx-auto">
            <div className="flex gap-x-6 w-full">
              <input type="text" name="name" placeholder="name" className="input"></input>
              <input type="text" name="email"placeholder="email" className="input"></input>
            </div>
            <input type="text" name="subject" placeholder="subject" className="input"></input>
            <textarea name="message" placeholder="message" className="textarea"></textarea>
            <button type="submit" className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-[#ff0000] group">
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">Lets talk</span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"/>
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
