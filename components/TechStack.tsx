import {
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiDotnet,
  SiTensorflow,
  SiMongodb,
  SiMysql,

} from "react-icons/si";
import { FaCode } from "react-icons/fa"; // C# alternatifi

const TechStack = () => {
  const technologies = [
    { name: "React", icon: <SiReact size={32} color="#61DAFB" /> },
    { name: "Node.js", icon: <SiNodedotjs size={32} color="#3C873A" /> },
    { name: "JavaScript", icon: <SiJavascript size={32} color="#F7DF1E" /> },
    { name: "TypeScript", icon: <SiTypescript size={32} color="#3178C6" /> },
    { name: "Python", icon: <SiPython size={32} color="#3776AB" /> },
    { name: "C#", icon: <FaCode size={32} color="#9B4F96" /> },
    { name: ".NET", icon: <SiDotnet size={32} color="#512BD4" /> },
    { name: "TensorFlow", icon: <SiTensorflow size={32} color="#FF6F00" /> },
    { name: "MongoDB", icon: <SiMongodb size={32} color="#47A248" /> },
    { name: "MySQL", icon: <SiMysql size={32} color="#4479A1" /> },
  ];

  return (
    <div className="bg-gray-800 text-white py-10">
      <h2 className="text-center text-2xl font-bold mb-6">Kullandığım Teknolojiler</h2>
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="rounded-lg px-4 py-4 flex items-center justify-center w-20 h-20 hover:bg-gray-600 transition relative group"
          >
            <div className="group-hover:scale-110 transition-transform duration-200">
              {tech.icon}
            </div>
            <span className="absolute bottom-[-28px] left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition bg-gray-900 px-2 py-1 rounded shadow">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;