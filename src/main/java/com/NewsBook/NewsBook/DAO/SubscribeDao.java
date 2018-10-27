package com.NewsBook.NewsBook.DAO;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.NewsBook.NewsBook.DTO.Subscriber;
import com.NewsBook.NewsBook.repositories.SubscriberRepository;

@Component
@Transactional
public class SubscribeDao {

	private static final Logger logger = LoggerFactory.getLogger(SubscribeDao.class);
	@Autowired
	private SubscriberRepository subscriberepo;

	@PersistenceContext
	private EntityManager em;

	public String saveSubscriber(Subscriber subscriber) {
		Subscriber sub = subscriberepo.findByEmail(subscriber.getEmail());
		logger.info("FoundByEmail:" + sub);
		if (sub == null) {
			Subscriber saved = this.subscriberepo.save(subscriber);
			logger.info("saveduser=" + saved);
			return "Saved";
		}
		return "Already Registered for subscribtion";
	}

	public String updateActivationStatus(String id) {
		Subscriber sub = subscriberepo.findByEmailIgnoreCaseContaining(id);
		logger.info("found sub by sub id:" + sub.getActivated());
		if(!sub.getActivated()) {
			Query query = em.createNativeQuery("update SUBSCRIBER set ACTIVATED=:status WHERE ID=:id");
			query.setParameter("status", "true");
			query.setParameter("id", sub.getId());
			query.executeUpdate();
			return "ACTIVATED";
		}else {
			return "LINK ALREADY ACTIVATED";
		}
	}
	
	public String deleteByEmail(String email) {
		Subscriber sub = subscriberepo.findByEmailIgnoreCaseContaining(email);
		logger.info("Deleting subscriber: " + sub);
		if (sub.equals(null)) {
			return "Subscriber Not Found";
		} else {
			subscriberepo.delete(sub);
			return email + " Deleted";	
		}
	}

}
