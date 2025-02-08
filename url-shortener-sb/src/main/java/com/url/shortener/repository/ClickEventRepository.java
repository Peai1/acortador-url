package com.url.shortener.repository;

import com.url.shortener.models.ClickEvent;
import com.url.shortener.models.UrlMapping;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface ClickEventRepository extends JpaRepository<ClickEvent, Long> {
    // This method will return the click events between the start and end date for a given short URL
    List<ClickEvent> findByUrlMappingAndClickDateBetween(UrlMapping mapping, LocalDateTime start, LocalDateTime end);
    // Get all the click events for that user between the start and end date for all the short URLs
    List<ClickEvent> findByUrlMappingInAndClickDateBetween(List<UrlMapping> mapping, LocalDateTime start, LocalDateTime end);

}
