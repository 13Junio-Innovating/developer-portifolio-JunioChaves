import { RiArrowRightLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import schema from "@/validators/sendEmail";
import Swal from "sweetalert2";

import { fadeIn } from "@/components/Animations/FadeIn";
import { SendEmailInterface } from "@/interfaces/SendEmailInterface";

const Contact = () => {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SendEmailInterface>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<SendEmailInterface> = (data) => {
    const templateParams = {
      name: data.name,
      subject: data.subject,
      message: data.message,
      email: data.email,
      url: window.location.href,
    };

    reset();
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Sua mensagem foi enviada com sucesso! Obrigado",
      showConfirmButton: false,
      width: 600,
      padding: "3em",
      color: "#fff",
      background: "#0b0d0e",
      backdrop: "rgba(0,0,0,0.4)",
      timer: 1500
    });
    router.push('/');
  };

  return (
    <div className="h-full">
      <div className="container flex items-center justify-center bg-primary/30 h-[inherit] max-w-full xl: w-[-webkit-fill-available] max-h-dvh">
        <div className="mx-auto xl:pt-[6%] xl:py-32 pt-16 xl:pb-0 mb-0 xl:mt-0 text-center xl:text-left flex items-start justify-center w-[700px] h-[inherit]">
          <div className="flex flex-col w-full">
            <h2
              className="h2 text-center xl:mb-12 mb-6"
            >
              Vamos <span className="text-accent">conversar.</span>
            </h2>
            <motion.form
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              onSubmit={handleSubmit(onSubmit)}
              className="flex-1 flex flex-col gap-6 w-full mx-auto"
            >
              <div className="flex gap-x-6 w-full">
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <input
                      type="text"
                      placeholder="Nome"
                      className={errors.name ? "input border-red/20" : "input"}
                      {...field}
                    />
                  )}
                />
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <input
                      type="text"
                      placeholder="Email"
                      className={errors.email ? "input border-red/20" : "input"}
                      {...field}
                    />
                  )}
                />
              </div>
              <Controller
                name="subject"
                control={control}
                render={({ field }) => (
                  <input
                    type="text"
                    placeholder="Assunto"
                    className={errors.subject ? "input border-red/20" : "input"}
                    {...field}
                  />
                )}
              />
              <Controller
                name="message"
                control={control}
                render={({ field }) => (
                  <textarea
                    className={errors.message ? "textarea border-red/20" : "textarea"}
                    placeholder="Mensagem"
                    cols={30}
                    rows={10}
                    {...field}
                  ></textarea>
                )}
              />
              <a
                href="mailto:juniochavestj@gmail.com"
                className="bg-white/10 backdrop-blur-sm btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
              >
                <span className="transition-all duration-300">
                  Enviar
                </span>
              </a>
            </motion.form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
