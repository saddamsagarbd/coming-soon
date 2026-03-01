import { ArrowRight, PhoneCall, MapPin,  } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Coming Soon — Something Awesome is on the Way',
  description: 'We\'re working hard to bring you something special. Stay tuned!',
};

export default function ComingSoonPage() {
  return (
    <>
      <main 
        className="min-h-screen text-white flex items-center justify-center p-6"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dymsxr6a9/image/upload/v1772335637/Rectangle_8_xyhi8p.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="max-w-3xl w-full text-center space-y-10 md:space-y-14">
          
          {/* Logo / Brand */}
          {/* <div className="flex justify-center mb-4">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-70 blur-xl"></div>
              <div className="relative bg-black rounded-full p-5">
                <Clock size={48} className="text-indigo-400" />
              </div>
            </div>
          </div> */}

          {/* Main headline */}
          <h1 className="text-5xl sm:text-5xl md:text-5xl font-light tracking-[20px] bg-clip-text text-white uppercase">
            Arriving Soon <br />
            <small className='text-sm tracking-[2px] py-3'>The Key to Your Dream Address</small>
          </h1>

          {/* <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            We're crafting something <span className="text-white font-medium">really special</span>.<br />
            A few more weeks and it'll be ready for you ✨
          </p> */}

          {/* Countdown + email form */}
          {/* <div className="space-y-8 pt-4"> */}
            {/* <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
              {[
                { value: "12", label: "Days" },
                { value: "08", label: "Hours" },
                { value: "47", label: "Minutes" },
                { value: "19", label: "Seconds" },
              ].map((item) => (
                <div key={item.label} className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-4 min-w-[110px]">
                  <div className="text-4xl md:text-5xl font-mono font-bold text-indigo-300">
                    {item.value}
                  </div>
                  <div className="text-sm md:text-base text-gray-400 mt-1">{item.label}</div>
                </div>
              ))}
            </div> */}

            {/* Email subscription */}
            <div className="max-w-xl mx-auto pt-6">
              {/* <p className="text-lg text-gray-300 mb-4">
                Be the first to know when we launch
              </p> */}

              <form 
                className="
                  flex flex-col sm:flex-row 
                  items-center justify-center
                  gap-4 sm:gap-3 p-1
                  w-full max-w-lg mx-auto rounded-4xl
                  border border-[#00CFFF] focus:border-[#00CFFF]
                "
              >
                <input
                  type="email"
                  placeholder="Email Address"
                  className="
                    w-full sm:flex-1
                    px-5 py-4
                    bg-transparent 
                    text-white placeholder:text-white
                    focus:outline-none
                    transition-all duration-300
                  "
                  required
                />

                <button
                  type="submit"
                  className="
                    group relative
                    px-10 sm:px-12 py-4
                    bg-[#00CFFF]
                    rounded-4xl 
                    font-medium text-white 
                    overflow-hidden
                    transition-all duration-300
                    flex items-center justify-center gap-2
                    hover:bg-[#00B7E6]
                    active:scale-[0.98]
                    shadow-md shadow-[#00CFFF]/20
                    hover:shadow-lg hover:shadow-[#00CFFF]/30
                    w-full sm:w-auto
                    min-w-[160px] sm:min-w-[180px]
                  "
                >
                  <span>Notify Me</span>
                  <ArrowRight 
                    size={18} 
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                  
                  {/* hover shine effect - kept as original */}
                  <div 
                    className="
                      absolute inset-0 
                      bg-gradient-to-r from-white/10 to-transparent 
                      opacity-0 group-hover:opacity-30 
                      transition-opacity duration-300
                    " 
                  />
                </button>
              </form>

              {/* <p className="text-sm text-gray-500 mt-4">
                We respect your inbox. No spam, ever.
              </p> */}
            </div>
          {/* </div> */}

          {/* Contact info + Social links */}
          <div className="pt-10">
            <p className="text-lg text-[#00CFFF] mb-6">
              For Enquiry
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-gray-300">
              <a 
                href="tel:+8801676690930"
                className="group flex items-center gap-3 hover:text-white transition-colors"
              >
                <PhoneCall size={20} className="text-white group-hover:scale-110 transition-transform" />
                <span className="text-xl font-light text-white text-left">+880 1329-711013</span>
              </a>

              <a 
                href="mailto:hello@yourdomain.com"
                className="group flex items-center gap-3 hover:text-white transition-colors"
              >
                <MapPin size={20} className="text-white group-hover:scale-110 transition-transform" />
                <span className="text-xl font-light text-white text-left">2nd Floor P # 214/D,<br/>Tejgaon I/A, Dhaka.</span>
              </a>
            </div>

            {/* <div className="flex justify-center gap-8 mt-8 text-gray-400">
              <Link href="https://twitter.com/yourhandle" className="hover:text-white transition-colors">
                𝕏 Twitter
              </Link>
              <Link href="/instagram" className="hover:text-white transition-colors">
                Instagram
              </Link>
            </div> */}
          </div>

        </div>
      </main>
    
    </>
  );
}