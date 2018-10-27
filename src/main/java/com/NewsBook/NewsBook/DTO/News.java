package com.NewsBook.NewsBook.DTO;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class News {
	private String Status;
	private int totalResults;
	private Article[] articles;
	public String getStatus() {
		return Status;
	}
	public void setStatus(String status) {
		Status = status;
	}
	public int getTotalResults() {
		return totalResults;
	}
	public void setTotalResults(int totalResults) {
		this.totalResults = totalResults;
	}
	public Article[] getArticles() {
		return articles;
	}
	public void setArticles(Article[] articles) {
		this.articles = articles;
	}

}
