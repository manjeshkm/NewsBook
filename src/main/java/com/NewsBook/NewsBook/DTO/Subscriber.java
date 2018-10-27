package com.NewsBook.NewsBook.DTO;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "subscriber")
public class Subscriber {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long Id;
	private String email;
	private Boolean activated;
	@Temporal(TemporalType.DATE)
	private Date subscription_Date;

	public Long getId() {
		return Id;
	}

	public void setId(Long id) {
		Id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Boolean getActivated() {
		return activated;
	}

	public void setActivated(Boolean activated) {
		this.activated = activated;
	}

	public Date getSubscription_Date() {
		return subscription_Date;
	}

	public void setSubscription_Date(Date subscription_Date) {
		this.subscription_Date = subscription_Date;
	}
	
	@Override
	public String toString() {
		return "Subscriber [Id=" + Id + ", email=" + email + ", activated=" + activated + ", subscription_Date="
				+ subscription_Date + "]";
	}
}
