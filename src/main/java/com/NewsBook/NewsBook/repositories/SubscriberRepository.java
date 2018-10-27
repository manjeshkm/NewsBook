package com.NewsBook.NewsBook.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.NewsBook.NewsBook.DTO.Subscriber;

@Repository
public interface SubscriberRepository extends CrudRepository<Subscriber, Long> {
	
	Subscriber findByEmail(String email);
	
	Subscriber findByEmailIgnoreCaseContaining(String id);

}
