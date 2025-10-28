import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-24 relative">
      <div className="max-w-5xl mx-auto relative z-10 w-full">
        <div className="backdrop-blur-sm bg-white/10 rounded-3xl p-12 border border-white/20 shadow-2xl">
          <h2 className="text-5xl text-center mb-4 text-white">
            Let's Connect
          </h2>
          <p className="text-center text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            I'm always open to discussing new projects, opportunities, or just having a chat about tech!
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="space-y-5">
                <div className="flex items-center gap-4 text-white/90">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">Email</p>
                    <p>sloanewright109@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-white/90">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">Location</p>
                    <p>Nashville, TN</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <form className="space-y-4">
                <div>
                  <Input 
                    placeholder="Your Name"
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60 backdrop-blur-sm"
                  />
                </div>
                <div>
                  <Input 
                    type="email"
                    placeholder="Your Email"
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60 backdrop-blur-sm"
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Your Message"
                    rows={4}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60 backdrop-blur-sm resize-none"
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-white text-purple-600 hover:bg-white/90 shadow-lg"
                  size="lg"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
