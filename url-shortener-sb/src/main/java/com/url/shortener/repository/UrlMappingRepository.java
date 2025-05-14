package com.url.shortener.repository;

import com.url.shortener.models.UrlMapping;
import com.url.shortener.models.User;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UrlMappingRepository extends JpaRepository<UrlMapping, Long> {
    UrlMapping findByShortUrl(String shortUrl);
    List<UrlMapping> findUrlsByUser(User user);
    UrlMapping findByShortUrlAndUser(String shortUrl, User user);

    @Modifying
    @Query(value = "DELETE FROM url_mapping WHERE short_url = :shortUrl AND user_id = :id", nativeQuery = true)
    void deleteByShortUrlAndId(String shortUrl, Long id);
}
