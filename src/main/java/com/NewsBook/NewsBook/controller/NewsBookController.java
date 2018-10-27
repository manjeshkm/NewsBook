package com.NewsBook.NewsBook.controller;

import java.util.Date;
import java.util.List;

import javax.mail.MessagingException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.thymeleaf.context.Context;

import com.NewsBook.NewsBook.DAO.SubscribeDao;
import com.NewsBook.NewsBook.DTO.News;
import com.NewsBook.NewsBook.DTO.Subscriber;
import com.NewsBook.NewsBook.services.MailService;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "*")
public class NewsBookController {

	@Autowired
	RestTemplate restTemplate;
	@Autowired
	MailService mailService;
	@Autowired
	SubscribeDao subscribeDao;

	@Value("${URL}")
	String serviceURL;
	@Value("${apikey}")
	String apikey;
	private static final Logger log = LoggerFactory.getLogger(NewsBookController.class);

	@GetMapping("/headlines/{country}")
	News getHeadlines(@PathVariable String country) {
		log.info("hit -getHeadlinesMethod");
		String url = serviceURL + "country=" + country + "&language=en&apiKey=" + apikey;
		News news = null;
		try {
			news = restTemplate.getForObject(url, News.class);
		} catch (Exception e) {
			log.error(e.getMessage());
		} finally {
			return news;
		}
	}

	@GetMapping("/newsByCategory")
	News getNewsByCategory(@RequestParam(value = "country", required = true) String country,
			@RequestParam(value = "category", required = true) String category) {
		log.info("hit -getNewsByCategory");
		String url = serviceURL + "country=" + country + "&category=" + category + "&language=en&apiKey=" + apikey;
		News news = null;
		try {
			news = restTemplate.getForObject(url, News.class);
		} catch (Exception e) {
			log.error(e.getMessage());
		} finally {
			return news;
		}
	}

	@GetMapping("/queryNews")
	News getNewsByQuery(@RequestParam(value = "country", required = true) String country,
			@RequestParam(value = "query", required = true) String query) {
		log.info("hit -getNewsByQuery");
		String url = serviceURL + "country=" + country + "&q=" + query + "&language=en&apiKey=" + apikey;
		News news = null;
		try {
			news = restTemplate.getForObject(url, News.class);
		} catch (Exception e) {
			log.error(e.getMessage());
		} finally {
			return news;
		}
	}

	@PostMapping("/subscribe")
	String subscribe(@RequestBody String email, @RequestParam(value = "sub") Boolean subscribe) {
		if (subscribe.equals(false)) {
			String msg = subscribeDao.deleteByEmail(email);
			return msg;
		} else {
			Subscriber subscriber = new Subscriber();
			subscriber.setEmail(email);
			subscriber.setActivated(false);
			subscriber.setSubscription_Date(new Date());
			String msg = subscribeDao.saveSubscriber(subscriber);
			if (msg.equals("Saved")) {
				Context context = new Context();
				context.setVariable("link", mailService.generateLink(email));
				try {
					mailService.sendHtmlMail(email, "Registeration", "Registeration", context);
				} catch (MessagingException e) {
					log.error("error in  sendForgotPasswordEmail" + e);
				}
			}
			return msg;
		}
	}
	
	@PostMapping("/verify")
	ResponseEntity<String> verifySubscribtion(@RequestBody String id) {
		String status = subscribeDao.updateActivationStatus(id);
		return new ResponseEntity<>(status, HttpStatus.OK);
	}
}
