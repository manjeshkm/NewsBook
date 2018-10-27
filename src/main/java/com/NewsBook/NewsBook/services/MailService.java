package com.NewsBook.NewsBook.services;

import java.io.UnsupportedEncodingException;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.mail.MailProperties;
import org.springframework.mail.MailSender;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

import com.NewsBook.NewsBook.controller.NewsBookController;

@Service
public class MailService {
	private static final Logger log = LoggerFactory.getLogger(MailService.class);

	@Autowired
	private MailSender mailSender;
	@Autowired
	private JavaMailSender javaMailSender;
	@Autowired
	private TemplateEngine templateEngine;
	@Autowired
	MailProperties mailProperties;

	@Async
	public void sendHtmlMail(String to, String subject, String templateName, Context context)
			throws MessagingException {
		MimeMessage mail = javaMailSender.createMimeMessage();
		String body = templateEngine.process(templateName, context);
		MimeMessageHelper helper = new MimeMessageHelper(mail, true);
		helper.setFrom("manjeshkm01@gmail.com");
		helper.setTo(to);
		helper.setSubject(subject);
		helper.setText(body, true);
		javaMailSender.send(mail);
	}
	
	public String generateLink(String email) {
	return  email.substring(0,email.indexOf('@'));
	}

}
