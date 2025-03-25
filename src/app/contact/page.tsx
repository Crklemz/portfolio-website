export default function Contact() {
  return (
    <div className="max-w-md mx-auto bg-[#2d2b30] text-[#ebdad9] p-6 rounded-md shadow-lg mt-12">
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <form>
        {/* Label and Input Fields */}
        <div className="mb-4">
          <label className="block text-[#ebdad9] text-sm font-bold mb-2">Name</label>
          <input 
            type="text" 
            className="w-full border border-[#255a85] p-2 rounded-md bg-white/10 text-[#ebdad9] focus:outline-none focus:border-[#3574a9] focus:ring-2 focus:ring-[#3574a9]/50 transition-all" 
          />
        </div>

        <div className="mb-4">
          <label className="block text-[#ebdad9] text-sm font-bold mb-2">Email</label>
          <input 
            type="email" 
            className="w-full border border-[#255a85] p-2 rounded-md bg-white/10 text-[#ebdad9] focus:outline-none focus:border-[#3574a9] focus:ring-2 focus:ring-[#3574a9]/50 transition-all" 
          />
        </div>

        <div className="mb-4">
          <label className="block text-[#ebdad9] text-sm font-bold mb-2">Message</label>
          <textarea 
            className="w-full border border-[#255a85] p-2 rounded-md bg-white/10 text-[#ebdad9] focus:outline-none focus:border-[#3574a9] focus:ring-2 focus:ring-[#3574a9]/50 transition-all" 
            rows={4}
          ></textarea>
        </div>

        <button className="btn-primary w-full mt-4">
          Send Message
        </button>
      </form>
    </div>
  );
}
