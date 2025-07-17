import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="w-full px-4 py-12 flex flex-col items-center justify-center bg-[#1f2937] text-white">
      <h2 className="text-2xl font-bold text-center mb-6">My Projects</h2>

      <div className="w-full max-w-sm">
        <ProjectCard
          title="Facial Expression Recognition"
          description="KDEF veri setiyle eğitilen CNN modeli, yüz ifadelerini sınıflandırır. Colab'da geliştirildi, Gradio arayüzü Hugging Face'te yayınlandı."
          tags={["TensorFlow", "Keras", "OpenCV", "Colab", "Gradio", "Hugging Face"]}
          link="/projects/emotion-recognition"
        />
      </div>
    </section>
  );
}
