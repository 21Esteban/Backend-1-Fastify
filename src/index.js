
import cors from "@fastify/cors";




//-------------------------------------------------------
import Fastify from 'fastify'
import useRouter from "./routers/userRouter.js";
const fastify = Fastify({
  logger: true
})


const start = async () => {
    try {
      await fastify.listen({ port: 4000, host: "0.0.0.0" });
      console.log("escuchando por el puerto 4000")
    } catch (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  }
  start()


//ruta de usuarios

fastify.register(useRouter, {prefix:"/usuarios"} );






fastify.register(cors,{origin: "*"});
