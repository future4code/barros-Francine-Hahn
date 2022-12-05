import { app } from "./app"
import { getAddressByCep } from "./endpoints/getAddressByCep"
import { registerAddress } from "./endpoints/registerAddress"
import { transporter } from "./services/mailTransporter"

//Exercício 1
app.post('/address', getAddressByCep)

//Exercício 2
//Está no arquivo migrations.ts

//Exercício 3
app.post('/register', registerAddress)

//Exercício 4
const sendEmail = async () => {
    const send = await transporter.sendMail({
        from: process.env.NODEMAILER_USER,
        to: "projetos_jbl-aaaaiax6fosqmlb2s7ipkez3d4@labenualunos.slack.com",
        subject: "TURMA BARROS - Francine Hahn",
        text: `Este e-mail foi enviado através do nodemailer e o objeto usado para enviá-lo foi passado dentro do método sendMailer.`,
        html: `<p>Este e-mail foi enviado através do nodemailer e o objeto usado para enviá-lo foi passado dentro do método sendMailer.</p>`
    })
    console.log(send)
    return send
}
//sendEmail()
