import { motion } from "framer-motion";

import { fadeIn } from "@/components/Animations/FadeIn";
import ParticlesContainer from "@/components/Other/ParticlesContainer/ParticlesContainer";
import ProjectsBtn from "@/components/Other/ProjectsBtn/ProjectsBtn";
import Avatar from "@/components/Other/Avatar/Avatar";

const Home = () => {

  return (
    <div className="bg-gradient bg-[length:86.125rem_86.125rem] bg-repeat bg-bottom">
      <div className="w-full bg-primary/30 bg-cube h-screen  from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-start xl:pt-[6%] pt-16 mb-14 xl:mb-0 xl:mt-0 xl:text-left h-full container mx-auto relative z-10">
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 xl:mt-8 mt-0 mx-auto xl:mx-0 mb-8 w-fit">
            Transformando códigos <br /> em{" "}
            <span className="text-accent">Realidade Digital</span>
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-8">
            Entusiasta de tecnologia com vasta experiência em desenvolvimento web. Especializado em JavaScript e TypeScript, com ênfase na construção de interfaces modernas usando React.js e Next.js. Dedico-me apaixonadamente a criar soluções elegantes e eficazes que aprimoram a experiência do usuário.
          </motion.p>
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <div>
            <motion.div
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="hidden xl:flex"
            >
              <ProjectsBtn />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="w-[100vw] h-full absolute right-0 bottom-0">
        <div className="xl:opacity-100 opacity-30 bg-paints bg-cover bg-center bg-no-repeat hue-rotate-[-20deg] w-full h-full absolute mix-blend-color-dodge translate-z-0">
        </div>
        <ParticlesContainer />
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="w-full xl:h-full max-w-[320px] xl:max-w-[460px] xl:max-h-[678px] absolute -bottom-0 xl:-bottom-20 xl:right-[180px] ">
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
