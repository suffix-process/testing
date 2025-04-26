import { motion } from 'framer-motion';
import GlassCard from './GlassCard';
import team1 from '../assets/team1.jpg';
import team2 from '../assets/team2.jpg';
import team3 from '../assets/team3.jpg';
import team4 from '../assets/team4.jpg';

const teamMembers = [

  {
    name: "Sejal Mehta",
    role: "Director",
    description: "Sejal Mehta, a seasoned professional with over 12 years of experience in Insurance and Portfolio Management Services, excels in people management, policy structuring, and business development.",
    image: team2
  },
  {
    name: "Bhaumik Mehta",
    role:" CEO & Co-Founder",
    description: "Bhaumik Mehta, with 20 years of experience in fraud prevention, including 15 years at HDFC Bank, specializes in risk analysis, compliance, and fraud detection. His expertise ensures Suffix Process Solutions delivers secure and efficient services.",
    image: team1
  },
  {
    name: "Member 3",
    role: "Role",
    description: "Description",
    image: team3
  },
  {
    name: "Member 4",
    role: "Role",
    description: "Description",
    image: team4
  }

];

const Team = () => {
  return (
    <section className="py-20 bg-[#E4EFE7]">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Team</h2>
          <p className="text-gray-600 text-lg">
            A blend of seasoned professionals from the BFSI industry and technology experts with a shared goal—to bring excellence to every project.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard className="h-full hover:border-cyan-300">
                <div className="p-8 h-full flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg mb-6">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-cyan-500 mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;