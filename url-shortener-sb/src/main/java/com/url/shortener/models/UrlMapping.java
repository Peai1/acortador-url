package com.url.shortener.models;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Data
@Table(name = "url_mapping")
public class UrlMapping {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String originalUrl;
    private String shortUrl;
    private int clickCount = 0;
    private LocalDateTime createdDate;

    @ManyToOne // MANY url mappings can be related to ONE user
    @JoinColumn(name = "user_id") // user_id is the foreign key in the url_mapping table
    private User user;

    // ONE url mapping can have MANY click events
    // el mappedBy sirve para indicar que la relación es bidireccional y que el dueño de la relación es el otro lado.
    // Hay que ver cual es el dueño de la relación, en este caso es el otro lado (click event),  ya que no tiene sentido
    // tener un click event sin un url mapping
    @OneToMany(mappedBy = "urlMapping", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ClickEvent> clickEvents;
}

