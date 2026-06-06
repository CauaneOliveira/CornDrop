package com.example.corndrop.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.MailException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    @Value("${spring.mail.username}")
    private String from;

    @Async
    public void sendWelcomeEmail(String toEmail, String userName) {
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

            helper.setFrom(from);
            helper.setTo(toEmail);
            helper.setSubject("Bem-vindo(a) ao CornDrop!");
            helper.setText(buildHtmlEmail(capitalizeName(userName)), true);

            mailSender.send(message);

        } catch (MessagingException | MailException e) {
            System.err.println(
                    "Erro ao enviar email de boas-vindas para "
                            + toEmail
                            + ": "
                            + e.getMessage()
            );
        }
    }

    private String capitalizeName(String name) {
        if (name == null || name.isBlank()) {
            return "Usuário";
        }

        String[] words = name.trim().toLowerCase().split("\\s+");
        StringBuilder result = new StringBuilder();

        for (String word : words) {
            result.append(Character.toUpperCase(word.charAt(0)))
                  .append(word.substring(1))
                  .append(" ");
        }

        return result.toString().trim();
    }

    private String buildHtmlEmail(String userName) {
        return """
            <!DOCTYPE html>
            <html lang="pt-BR">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Bem-vindo ao CornDrop</title>
            </head>

            <body style="margin:0;padding:0;background-color:#f5f5f0;font-family:'Segoe UI',Arial,sans-serif;">

                <table width="100%%" cellpadding="0" cellspacing="0"
                       style="background-color:#f5f5f0;padding:40px 0;">
                    <tr>
                        <td align="center">

                            <table width="560" cellpadding="0" cellspacing="0"
                                   style="background:#ffffff;
                                          border-radius:16px;
                                          overflow:hidden;
                                          box-shadow:0 4px 24px rgba(0,0,0,0.08);">

                                <!-- HEADER -->
                                <tr>
                                    <td style="background-color:#1A3D26;
                                               padding:40px;
                                               text-align:center;">

                                        <h1 style="margin:0;
                                                   font-size:32px;
                                                   font-weight:700;
                                                   color:#ffffff;
                                                   letter-spacing:0.5px;">
                                            CornDrop
                                        </h1>

                                        <p style="margin:8px 0 0 0;
                                                  font-size:13px;
                                                  color:#A8D5A2;
                                                  letter-spacing:1px;
                                                  text-transform:uppercase;">
                                            Agricultura de Precisão
                                        </p>

                                    </td>
                                </tr>

                                <!-- CORPO -->
                                <tr>
                                    <td style="padding:40px;">

                                        <h2 style="margin:0 0 20px;
                                                   font-size:24px;
                                                   font-weight:700;
                                                   color:#1a1a1a;">
                                            Olá, %s! 🖐️
                                        </h2>

                                        <p style="margin:0 0 20px;
                                                  font-size:15px;
                                                  color:#555555;
                                                  line-height:1.8;
                                                  text-align:justify;">
                                            Sua conta no <strong>CornDrop</strong> foi criada com sucesso.
                                            Estamos felizes em ter você na nossa plataforma de gestão
                                            inteligente para agricultura de precisão.
                                        </p>

                                        <p style="margin:0 0 30px;
                                                  font-size:15px;
                                                  color:#555555;
                                                  line-height:1.8;
                                                  text-align:justify;">
                                            Agora você pode monitorar dispositivos, gerenciar estoque,
                                            programar alimentações e acompanhar tudo em tempo real.
                                            Nosso objetivo é fornecer uma experiência simples, eficiente
                                            e confiável para auxiliar na gestão das suas operações.
                                        </p>

                                        <!-- BOTÃO -->
                                        <table cellpadding="0" cellspacing="0">
                                            <tr>
                                                <td style="background-color:#1A3D26;
                                                           border-radius:8px;">
                                                    <a href="http://localhost:3000/"
                                                       style="display:inline-block;
                                                              padding:14px 32px;
                                                              color:#ffffff;
                                                              text-decoration:none;
                                                              font-size:15px;
                                                              font-weight:600;">
                                                        Acessar minha conta
                                                    </a>
                                                </td>
                                            </tr>
                                        </table>

                                    </td>
                                </tr>

                                <!-- DIVISÓRIA -->
                                <tr>
                                    <td style="padding:0 40px;">
                                        <hr style="border:none;
                                                   border-top:1px solid #eeeeee;
                                                   margin:0;">
                                    </td>
                                </tr>

                                <!-- FOOTER -->
                                <tr>
                                    <td style="padding:24px 40px;
                                               text-align:center;">

                                        <p style="margin:0;
                                                  font-size:12px;
                                                  color:#999999;
                                                  line-height:1.6;">
                                            Você está recebendo este e-mail porque criou uma conta no CornDrop.
                                            <br>
                                            Se não foi você, ignore esta mensagem.
                                        </p>

                                    </td>
                                </tr>

                            </table>

                        </td>
                    </tr>
                </table>

            </body>
            </html>
            """.formatted(userName);
    }
}
