import { motion } from 'motion/react';
import { Award, Users, Video, Zap } from 'lucide-react';

const stats = [
  { icon: Video, number: '500+', label: 'Projects Completed' },
  { icon: Users, number: '200+', label: 'Happy Clients' },
  { icon: Award, number: '50+', label: 'Awards Won' },
  { icon: Zap, number: '10+', label: 'Years Experience' },
];

const team = [
  {
    name: 'Alex Rivera',
    role: 'Creative Director',
    bio: 'Award-winning filmmaker with over 15 years of experience in cinematic storytelling.',
  },
  {
    name: 'Sarah Chen',
    role: 'Lead Producer',
    bio: 'Expert in managing large-scale productions and bringing creative visions to life.',
  },
  {
    name: 'Marcus Johnson',
    role: 'Director of Photography',
    bio: 'Master of visual storytelling with a keen eye for capturing compelling narratives.',
  },
];

export function About() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-red-600">Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are passionate storytellers dedicated to transforming ideas into compelling visual narratives
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Crafting Stories That Resonate
            </h3>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                Since our founding, we've been at the forefront of visual storytelling, 
                combining cutting-edge technology with timeless narrative techniques to 
                create content that moves, inspires, and captivates audiences.
              </p>
              <p>
                Our team of creative professionals brings together diverse expertise in 
                cinematography, editing, sound design, and post-production to deliver 
                exceptional results that exceed expectations.
              </p>
              <p>
                From intimate documentaries to large-scale commercial productions, 
                we approach every project with the same level of passion, creativity, 
                and attention to detail that has made us industry leaders.
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1758691736843-90f58dce465e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHRlYW0lMjB3b3JraW5nJTIwb2ZmaWNlfGVufDF8fHx8MTc1OTcyNTQxNHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Creative team working"
                className="w-full h-96 object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-2xl p-8 md:p-16 mb-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our <span className="text-red-600">Team</span>
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The creative minds behind our award-winning productions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-red-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                {member.name}
              </h4>
              <p className="text-red-600 font-medium mb-4">
                {member.role}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}